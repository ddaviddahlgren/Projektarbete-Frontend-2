import { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import style from "../../../pages/habits/Habits.module.css";

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
    <>
      <div>
        <div
          key={todo.id}
          className={`${style.todoItem} ${
            todo.status ? style.todoItemCompleted : ""
          }`}
        >
          {/* Om ärende ID:et matchar, renderar redigering sektion*/}
          {editTodoId === todo.id ? (
            <>
              <strong className={style.todoStatus}>Edit your todo</strong>
              <label for="editTitle" className={style.todoText}>
                Edit todo:
                <input
                  placeholder="Todo"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className={style.todoInput}
                />
              </label>

              <label for="editDescription" className={style.todoText}>
                Edit note:
                <textarea
                  placeholder="Edit note"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className={style.todoInput}
                />
              </label>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => saveEdit(todo.id)}
                  className={style.editBtn}
                >
                  Save edit
                </button>
                <button
                  // Skickar null-värdet om user inte redigera
                  onClick={() => setEditTodoId(null)}
                  className={style.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <strong className={style.todoStatus}>
                Status: {!todo.status ? "In progress" : "Checked"}
              </strong>

              <strong className={style.todoTitle}>
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => handleToggleStatus(todo.id, !todo.status)}
                />
              </strong>
              <strong className={style.todoText}>
                Note: {todo.description}
              </strong>
              <strong className={style.todoText}>
                Category: {todo.category}
              </strong>
              <strong className={style.todoText}>🗓️ {todo.deadline}</strong>
              <strong className={style.todoText}>
                ⏰ {todo.hours} hr. {todo.minutes} min.
              </strong>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => editingTodo(todo)}
                  className={style.editBtn}
                >
                  Edit todo
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className={style.removeBtn}
                >
                  remove todo
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default TodoItem;
