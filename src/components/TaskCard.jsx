export const TaskCard = ({task, handleDetele}) => {
    
    return(   
            <li key={task.id}  className = {task.completed ? "completed" : "incomplete"}>
               <div class="shadow-sm p-3 mb-5 bg-white rounded">
                {task.name}   
                <button className='btn btn-danger' onClick={()=>(handleDetele(task.id))}>Delete</button>
                </div>

              
            </li>
    )
}