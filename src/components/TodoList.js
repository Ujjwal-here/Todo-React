import todos from "../todos";
import React from "react";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div class="row">
      {todos.map((todo) => (
        <div className="todo">
          <div className="align">
            <h3>{todo.title}</h3>
            <h3>{todo.title}</h3>
          </div>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
