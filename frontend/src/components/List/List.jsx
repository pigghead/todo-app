import axios from "axios";
import './list.scss';
import { useEffect, useState } from "react";
import { AddTask } from "../addTask/AddTask"
import { Task } from "../task/Task";
import { URL } from "../../App";

export const List = () => {

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [taskId, setTaskId] = useState("");
    const [taskData, setTaskData] = useState({
        completed: false,
        title:"",
        desc:""
    });

    const { title, desc } = taskData;

    const createTask = async (ev) => {
        ev.preventDefault();
        if (title === "") {
            return alert("Task Title cannot be empty");
        }

        try {
            const newTask = {completed:false, title, desc};
            await axios.post(`${URL}/tasks`, taskData);
            setTasks(prevTasks => [...prevTasks, newTask]);
            // Reset form data to blank
            setTaskData({title: "", desc: ""});
            getTasks();
        } catch (err) {
            alert(err.message);
        }
    }

    const handleFormChange = (ev) => {
        const { name, value } = ev.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    }

    const getTasks = async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(`${URL}/tasks`);
            setTasks(data);
            console.log(tasks.length);
            setIsLoading(false);
        } catch (err) {
            alert(err.message);
            setIsLoading(false);
        }
    }

    const getSingleTask = async (task) => {
        setTaskData({title: task.title, desc: task.desc});
        setTaskId(task._id);
        setIsEditing(true);
    }

    const updateTask = async (ev) => {
        ev.preventDefault();
        if (title === "") {
            return alert("Task Title cannot be empty");
        }
        try {
            await axios.put(`${URL}/tasks/${taskId}`, taskData);
            // Reset form to blank after submitting an update
            setTaskData({completed:false, title:"", desc:""});
            setIsEditing(false);
            getTasks();
        } catch (err) {
            alert(err.message);
        }
    }

    const deleteTask = async (task) => {
        try {
            await axios.delete(`${URL}/tasks/${task._id}`);
            getTasks();
        } catch (err) {
            alert(err.message);
        }
    }

    const setToComplete = async (task) => {
        const newTaskData = {
            completed:!task.completed,
            title:task.title,
            desc:task.desc,
        }
        try{
            await axios.put(`${URL}/tasks/${task._id}`, newTaskData);
            getTasks();
        } catch (err) {
            alert(err.message);
        }
    }

    // loads all tasks on initial render
    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div>
            <AddTask 
                createTask={createTask} 
                taskData={taskData} 
                handleFormChange={handleFormChange} 
                isEditing={isEditing} 
                updateTask={updateTask} />
            {
                !isLoading && tasks.length === 0 ? (
                    <p>Add a task to get started</p>
                ) : (
                    <>
                    {tasks && tasks.length > 0 && tasks.map((task, index) => {
                        return (
                            <Task 
                                key={task._id}
                                index={index}
                                task={task}
                                deleteTask={() => deleteTask(task)} 
                                getSingleTask={getSingleTask} 
                                setToComplete={setToComplete} />
                        )
                    })}
                    </>
                )
            }
        </div>
    )
}