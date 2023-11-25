import './App.css';

const App = () =>{
    let count = 0;
    return(
        <div className="App">
            <div className="box">
                <p>{count}</p>
                <button className='add'>Add</button>
                <button className='subtract'>Subtract</button>
            </div>
        </div>
    )
}

export default App;