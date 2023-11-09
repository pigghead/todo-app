// Form for saving & updating tasks
import './addTask.scss';

export const AddTask = ({createTask, taskData, handleFormChange, isEditing, updateTask}) => {

    const { title, desc } = taskData;

    return (
        <div className="addTask">
            <form action="submit" onSubmit={isEditing ? updateTask : createTask}>
                <input name="title" type="text" placeholder='Task Title...' value={title} onChange={handleFormChange} />
                <textarea 
                    name="desc" 
                    id="Desc" 
                    cols="30" 
                    rows="10" 
                    value={desc} 
                    onChange={handleFormChange} 
                    placeholder="Task Desc...">
                </textarea>
                <button type="submit">{isEditing ? "UPDATE" : "SAVE"}</button>
            </form>
        </div>
    )
}