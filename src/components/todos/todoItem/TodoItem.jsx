import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";

const TodoItem = () => {
  const {
    todo,
    editTodoId,
    setEditTodoId,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription,
    handleDeleteTodo,
    editingTodo,
    saveEdit,
  } = useContext(TodoContext);

  return (
    <>
      {editTodoId === todo.id ? (
        <div>
          <input
            placeholder="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />

          <button onClick={() => saveEdit(todo.id)}>Save edit ✅</button>
          <button onClick={() => setEditTodoId(null)}>Cancel ❌</button>
        </div>
      ) : (
        <div>
          <h6>Title: {todo.title}</h6>
          <p>Description: {todo.description}</p>
          <button
            onClick={() => editingTodo(todo)}
            className={style.editButton}
          >
            Edit ✍🏼
          </button>
        </div>
      )}
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className={style.deleteButton}
      >
        Delete 🗑️
      </button>
    </>
  );
};
export default TodoItem;
