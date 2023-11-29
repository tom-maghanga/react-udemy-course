import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './TaskList.css';


export default function TaskList({tasks, setTasks}){
    
   const[show, setShow] = useState(true);

   function handleDetele(id){
    setTasks(tasks.filter(task => task.id !== id));
   }
    return(
        <>
           <div className='container box task-section'>
           
                <ul className='tasks'>
                <div className="navbar">
                <h1 className='text-center'>Task List</h1>
                    <div className=''>
                            <button className='btn btn-light' onClick={()=> setShow(true)}>Show</button>
                            <button className='btn btn-light' onClick={() =>setShow(false)}>Hide</button>

                    </div>
                </div>

                    {show && tasks.map((task) => (
                        <TaskCard task={task} key = {task.id} handleDetele={handleDetele}/>
                    ))    
                }
                </ul>
           </div>
        </>
    )
    
}