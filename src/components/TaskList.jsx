import { useState } from 'react';
import { TaskCard } from './TaskCard';


export default function TaskList(){
    const [tasks, setTasks] = useState([{id:5011 , name:"Learn Reactjs", completed : false},
   {id:5012 , name:" Florida Banner", completed : false},
   {id:5012 , name:"RBK webiste project timeline", completed : true}]);

   const[show, setShow] = useState(true);

   function handleDetele(id){
    setTasks(tasks.filter(task => task.id !== id));
   }
    return(
        <>
           <div className='container'>
           <h1 className='text-center'>Task List</h1>
        <ul className='tasks'>
           <div cl>
           <button className='btn btn-secondary' onClick={()=> setShow(true)}>Show</button>
            <button className='btn btn-warning' onClick={() =>setShow(false)}>Hide</button>

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