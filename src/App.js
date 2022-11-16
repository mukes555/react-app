import TodoList from "./TodoList";

function App() {
  return (
      <>
         <TodoList />
         <input type="text" />
         <button>Add Task</button>
         <button>Clear</button>
         <div>Number of tasks 0</div>
      </>
    )
}

export default App;
