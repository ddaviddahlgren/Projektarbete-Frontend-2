import React, { useContext, useState } from "react";
import { TodoContext } from "../../../context/todos/TodoContext.jsx";
import { UserContext } from "../../../context/users/UserContext.jsx";
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
    categories,
    handleAddTodo,
  } = useContext(TodoContext);

  return (
    <div className={style.container}>
      <h3 className={style.todoInputHeader}>Create your todo</h3>
      <div className={style.inputContiner}>
        <label>
          Title:{" "}
          <input
            placeholder="Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={style.inputField}
          />
        </label>

        <label>
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
            <label>
              Category:{" "}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={style.todoInputSelect}
              >
                <option>Select category</option>
                {categories.map((category) => (
                  <option key={category} className={style.todoInputOption}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={style.time}>
            <label>
              Time:{" "}
              <input
                type="number"
                placeholder="Hours"
                value={hours}
                min="0"
                onChange={(e) => setHours(e.target.value)}
                className={style.inputField}
              />
              <span> hr </span>
              <input
                type="number"
                placeholder="Minutes"
                value={minutes}
                min="0"
                max="59"
                onChange={(e) => setMinutes(e.target.value)}
                className={style.inputField}
              />
              <span> min</span>
            </label>
          </div>
        </div>

        <label>
          Deadline:
          <input
            type="date"
            placeholder="Deadline"
            value={deadline}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDeadline(e.target.value)}
            className={style.inputField}
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
