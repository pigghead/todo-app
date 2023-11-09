import './task.scss';

export const Task = ({task, index, deleteTask, getSingleTask, setToComplete}) => {

    return (
    <div className="task">
        <div className="status"></div>
            <div className="title-row">
                <h2><strong>{index + 1}. </strong>{task.title}</h2>
                <div className="edits">
                    <button className="editButton" onClick={() => getSingleTask(task)}>EDIT</button>
                    <button className="deleteButton" onClick={deleteTask}>DELETE</button>
                    <button className={task.completed ? "complete" : "incomplete"} onClick={()=>setToComplete(task)}></button>
                </div>
            </div>
            <div className="desc">
                <p>{task.desc}</p>
            </div>
        </div>
    );
}