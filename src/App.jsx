
import './App.css';
import './bootstrap.css';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () =>{
    return(
        <div className="App">
          <Header />
          <TaskList />
        </div>
    )
}

export default App;