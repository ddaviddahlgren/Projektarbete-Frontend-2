import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import TodoItem from "../todoItem/TodoItem.jsx";

const TodoList = () => {
  const { filteredTodo, handleToggleStatus } = useContext(TodoContext);

  return (
    <>
      {/* Loopen använder filteredTodo för att visa den sorterade/filtrerade listan */}
      <h5>Todo-lists</h5>
      {filteredTodo.map((todo) => (
        <div
          key={todo.id}
          className={`${style.todoItem} ${
            todo.status ? style.todoItemCompleted : ""
          }`}
        >
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleStatus(todo.id)}
          />
        </div>
      ))}
    </>
  );
};
export default TodoList;
