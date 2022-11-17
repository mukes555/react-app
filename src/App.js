import { useState,useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
const LOCAL_STORAGE_KEY='todoApp.todos'

function App() {
  const initStage = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : []
  const [todos,setTodo]= useState(initStage)
  const todoNameRef=useRef()
 
  

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name ==='')
    return
    setTodo(prevTodos =>{
      let newTodos = [...prevTodos,{id:uuidv4(),name:name,complete:false}]
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTodos))
      return newTodos
    })
    todoNameRef.current.value =null
  }
  console.log("rendered");
  return (
      <>
         <TodoList todos={todos}/>
         <input ref={todoNameRef} type="text" />
         <button onClick={handleAddTodo}>Add Task</button>
         <button>Clear</button>
         <div>Number of tasks 0</div>
      </>
    )
}

export default App;
