import { useState } from 'react';
import './App.css';

const App = () =>{
   const [tasks, setTasks] = useState([{id:5011 , name:"Learn Reactjs", completed : false},
   {id:5012 , name:" Florida Banner", completed : false},
   {id:5012 , name:"RBK webiste project timeline", completed : false}]);

   const[show, setShow] = useState(true);

   function handleDetele(id){
    setTasks(tasks.filter(task => task.id !== id));
   }
    
    return(
        <div className="App">
  <h1>Task List</h1>
  <ul className='tasks'>
    <button onClick={()=> setShow(true)}>Show</button>
    <button onClick={() =>setShow(false)}>Hide</button>

     {show && tasks.map((task) => (
      <li key={task.id} className='task'>
        {task.name}

        <button onClick={()=>(handleDetele(task.id))}>Delete</button>
      </li>
    ))    
   }
  </ul>
</div>
    )
}

export default App;