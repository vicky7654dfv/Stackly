import React, { useReducer, useState } from "react";
import Style from "./ToDoList.module.css";

const initialTodos = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function ToDoList() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [task, setTask] = useState("");

   const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD", payload: task });
      setTask("");
    }
  };

  return (
    <div className={Style.listWrap}>
      <h1>Todo List ✔️</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            >
              {todo.done ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
