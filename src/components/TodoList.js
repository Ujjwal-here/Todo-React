import todos from "../todos";
import React from "react";
import "./TodoList.css";
import {FaTrash} from "react-icons/fa"

const TodoList = () => {
  return (
    <div class="row">
      {todos.map((todo) => (
        <div className="todo">
          <div className="align">
            <h3>{todo.title}</h3>
            <FaTrash color="red"/>
          </div>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
