import {useState} from 'react';
import './App.css';

function App() {
  const [todolist,setTodolist] = useState([])
  const [newtask,setNewtask] = useState("")

  const handleChange = (e) => {
    setNewtask(e.target.value)
  }

  const addTask = ()=> {
    const task = {
      id: todolist.length ===0 ? 1: todolist[todolist.length-1].id+1,
      taskName : newtask,
    };
    setTodolist([...todolist,task])
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
            {task.taskName}
            <button onClick={() =>deleteTask (task)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
