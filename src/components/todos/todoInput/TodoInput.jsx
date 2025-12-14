import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext.jsx";
import style from "./TodoInput.module.css";

const TodoInput = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    hours,
    setHours,
    minutes,
    setMinutes,
    category,
    setCategory,
    deadline,
    setDeadline,
    handleAddTodo,
    categories,
  } = useContext(TodoContext);

  return (
    <div className={style.container}>
      <h3>Create your todo</h3>
      <div className={style.inputContiner}>
        <label for="title">
          Title:{" "}
          <input
            placeholder="Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={style.inputField}
          />
        </label>

        <label for="description">
          Desciption:{" "}
          <textarea
            placeholder="Add note"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={style.inputField}
          />
        </label>

        <div className={style.selectedContainer}>
          <div className={category}>
          <label for="category">
            Category:{" "}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select category</option>
              {categories.map((category) => (
                <option key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          </div>

          <div className={style.time}>
          <label for="time">
            Time:{" "}
            <input
              type="number"
              placeholder="Hours"
              value={hours}
              min="0"
              onChange={(e) => setHours(e.target.value)}
            />
            <span> hr </span>
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              min="0"
              max="59"
              onChange={(e) => setMinutes(e.target.value)}
            />
            <span> min</span>
          </label>
          </div>
        </div>

        <label for="deadling">
          Deadline:
          <input
            type="date"
            placeholder="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <button onClick={handleAddTodo} className={style.saveButton}>
          Save new todo
        </button>
      </div>
    </div>
  );
};
export default TodoInput;
