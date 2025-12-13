import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import style from "./todoItem.module.css";

const TodoItem = ({ todo }) => {
  const {
    editTodoId,
    setEditTodoId,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription,
    handleToggleStatus,
    handleDeleteTodo,
    editingTodo,
    saveEdit,
  } = useContext(TodoContext);

  return (
    <div>
      <div
        key={todo.id}
        className={`${style.todoItem} ${
          todo.status ? style.todoItemCompleted : ""
        }`}
      >
        {editTodoId === todo.id ? (
          <div className={style.editTodo}>
            <h6 className={style.editHeader}>Edit your todo</h6>
            <label for="editTitle">
              Edit todo:
            <input
              placeholder="Todo"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className={style.editTitle}
            />
            </label>

            <label for="editDescription">
              Edit note:
            <textarea
              placeholder="Edit note"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className={style.editDescription}
            />
            </label>

            <button
              onClick={() => saveEdit(todo.id)}
              className={style.saveEditButton}
            >
              Save edit
            </button>
            <button
              onClick={() => setEditTodoId(null)}
              className={style.cancelEditButton}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <div className={style.checkedTodo}>
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => handleToggleStatus(todo.id)}
              />
              <p>Status: {!todo.status ? 'In progress': 'Checked'}</p>
            </div>
            <h6>Todo: {todo.title}</h6>
            <p>Note: {todo.description}</p>
            <p>🗓️ {todo.deadline}</p>
            <p>
              ⏰ {todo.hours} hr. {todo.minutes} min.
            </p>
            <div className={style.buttonContainer}>
              <button
                onClick={() => editingTodo(todo)}
                className={style.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className={style.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
