import "./App.css";
import { useState } from "react";

export function TodoItems({ index, task, complete_task, remove_todo }) {
  return (
    <>
      <ul>
        {task.map((tk, index) => {
          return (
            <div key={index} className="todo__item">
              <li
                style={{ textDecoration: tk.isCompleted ? "line-through" : "" }}
              >
                {tk.task}
              </li>
              <div className="btns">
                <button className="add" onClick={() => complete_task(index)}>
                  Complete {index}
                </button>
                <button className="delete" onClick={() => remove_todo(index)}>
                  Delete
                </button>
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

  const [tasks, setTask] = useState(initialV);

  const add_item = (task) => {
    const newItem = [{ task }, ...tasks];
    console.log("item", task, "new", newItem);
    setTask(newItem);
  };

  const complete_task = (index) => {
    const newItem = [...tasks];

    !newItem[index].isCompleted
      ? (newItem[index].isCompleted = true)
      : (newItem[index].isCompleted = false);

    setTask(newItem);
  };

  const remove_todo = (index) => {
    const newItems = [...tasks];
    newItems.splice(index, 1);
    setTask(newItems);
  };

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
    add_item(value);
    setValue("");
  };

  const handleOnChange = (e) => {
    console.log("value", e.target.value, "value", value);
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>🧪J E S T 🧪</h1>
      <form className="todo__form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter new task"
          type="text"
          className="entry__task"
          onChange={handleOnChange}
          value={value}
        ></input>
        <button className="add__task">Add</button>
        <TodoItems
          task={tasks}
          setTask={setTask}
          complete_task={complete_task}
          remove_todo={remove_todo}
        ></TodoItems>
      </form>
    </div>
  );
}

export default App;
