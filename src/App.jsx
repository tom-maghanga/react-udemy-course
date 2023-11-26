import { useState } from 'react';
import './App.css';

const App = () =>{
   const [tasks, setTasks] = useState([{id:5011 , name:"Learn Reactjs", completed : false},
   {id:5012 , name:" Florida Banner", completed : false},
   {id:5012 , name:"RBK webiste project timeline", completed : false}]);
    
    return(
        <div className="App">
  <h1>Task List</h1>
  <ul className='tasks'>
    {tasks.map((task) => (
      <li key={task.id} className='task'>
        {task.name}
      </li>
    ))}
  </ul>
</div>
    )
}

export default App;