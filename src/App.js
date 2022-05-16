import "./App.css";
import { useState } from "react";

function TodoItems({ task, setTask }) {
  return (
    <>
      <ul>
        {task.map((tk, index) => {
          return (
            <div key={index} className="todo__item">
              <li>{tk.task}</li>
              <div className="btns">
                <button className="add">Complete</button>
                <button className="add">Delete</button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const initialV = [
    { task: "Create the ToDo App", isCompleted: false },
    { task: "Learn Jest", isCompleted: false },
    { task: "Complete the course", isCompleted: false },
  ];

  const [task, setTask] = useState(initialV);

  return (
    <div className="App">
      <h1>🧪J E S T 🧪</h1>
      <form className="todo__form">
        <input placeholder="Enter new task"></input>
        <button className="add__task">Add</button>
        <TodoItems task={task} setTask={setTask}></TodoItems>
      </form>
    </div>
  );
}

export default App;
