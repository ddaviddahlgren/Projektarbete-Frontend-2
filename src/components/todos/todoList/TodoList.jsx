import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import TodoItem from "../todoItem/TodoItem.jsx";

const TodoList = () => {
  const { filteredTodo } = useContext(TodoContext);

  return (
    <>
      {/* Loopen använder filteredTodo för att visa den sorterade/filtrerade listan */}
      <h5>Todo-lists</h5>
      {filteredTodo.map((todo) => (
        <TodoItem 
        key={todo}/>
      ))}
    </>
  );
};
export default TodoList;
