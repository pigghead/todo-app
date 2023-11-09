import './task.scss';

export const Task = ({task, index, deleteTask, getSingleTask}) => {

    return (
    <div className="task">
            <div className="title-row">
                <h2><strong>{index + 1}. </strong>{task.title}</h2>
                <div className="edits">
                    <button className="editButton" onClick={() => getSingleTask(task)}>EDIT</button>
                    <button className="deleteButton" onClick={deleteTask}>DELETE</button>
                </div>
            </div>
            <div className="desc">
                <p>{task.desc}</p>
            </div>
        </div>
    );
}