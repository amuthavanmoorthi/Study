import {useState} from 'react';
import './App.css';

function App() {
  const [todolist,setTodolist] = useState([])
  const [newtask,setNewtask] = useState("")

  const handleChange = (e) => {
    setNewtask(e.target.value)
  }

  const addTask = ()=> {
    const newTodolist = [...todolist,newtask]
    setTodolist(newTodolist)
  }

  const deleteTask = (taskName) =>{
    setTodolist(todolist.filter((task) => task !== taskName))
  }
  return (
    <div className="App">
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add</button>
      {todolist.map((task)=>{
        return(
          <div>
            {task}
            <button onClick={() =>deleteTask (task)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
