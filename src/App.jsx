import { useState } from 'react';
import './App.css';
import './bootstrap.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { AddTask } from './components/AddTask';
import {Footer} from './components/Footer'

const App = () =>{

  const [tasks, setTasks] = useState([{id:5011 , name:"Learn Reactjs", completed : false},
  
   {id:5012 , name:"RBK webiste project timeline", completed : true}]);

    return(
        <div className="App">
          <Header />
          <AddTask tasks={tasks} setTasks={setTasks}/>
          <TaskList tasks={tasks} setTasks={setTasks} />
          <Footer />
          
        </div>
    )
}

export default App;