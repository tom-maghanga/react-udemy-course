import { useState } from 'react'
import './AddTask.css'

export const AddTask = ({tasks, setTasks}) =>{

    const [taskValue, setTaskValue] = useState();

    const handleChange = (event) =>{
        setTaskValue(event.target.value);
    }

    const clearTask = (event) =>{
       setTaskValue('');
       document.getElementById('task').value = '';
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        const task= {
            name : taskValue,
            id : Math.floor(Math.random() * 10000),
            completed : false
        };
        setTasks([...tasks, task]);
        clearTask();
    }

    return(
      
        <form onSubmit={handleSubmit} className="">
            <div className="container input-form form-control">
                <div className="row">
                <div className="col-md-2 mb-2">
                    <div className="form-group">
                    <label htmlFor="task" className="">Task name:</label>
                    </div>
                </div>
               
                <div className="col-md-6 mb-2">
                    <div className="form-group">
                    <input onChange={handleChange} type="text" className="form-control" placeholder={taskValue} id="task" name="task" />
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="form-group">
                    <button className="btn btn-success" type='submit'>Add Task</button>
                    <button onClick={clearTask} className="btn btn-danger " id='reset'>Reset</button>
                    </div>
                </div>
                </div>

               <div className="text-center"> {taskValue}</div>
            </div>
        </form>

    )
}