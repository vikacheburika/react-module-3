import './Task.css'
function Task({task, onDelete, onEdit, onToggle}) {

    return (
        <>
            <li className={task.status?"text-success":"text-danger"}>{task.description} 
                <button onClick={()=>onEdit(task)}>Edit</button>
                <button onClick={()=>{onDelete(task.id)}}>Delete</button></li>
                <button onClick={()=>{onToggle(task.id) } }>{task.status?"Make 'in progress'":"Make done"}</button>
        </>
    )
}

export default Task