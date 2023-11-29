export const TaskCard = ({task, handleDetele}) => {
    
    return(   
            <li key={task.id} className={` ${task.completed ? " shadow shadow-info shadow-intensity-lg" : "shadow shadow-danger shadow-intensity-lg"}` }
            >
               <div class="shadow-sm p-3 mb-5 bg-white rounded navbar">
                {task.name}   
                <button className='btn btn-danger ' onClick={()=>(handleDetele(task.id))}>Delete</button>
                </div>

              
            </li>
    )
}