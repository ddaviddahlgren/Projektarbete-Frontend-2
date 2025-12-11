import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext.jsx";
import style from "./TodoInput.module.css";

const TodoInput = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    time,
    setTime,
    category,
    setCategory,
    deadline,
    setDeadline,
    handleAddTodo,
    categories,
  } = useContext(TodoContext);

  return (
    <div className={style.container}>
      <h3>Todo Page</h3>
      <div className={style.inputContiner}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.inputField}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.inputField}
        />

        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>select category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={handleAddTodo} className={style.primaryButton}>
          Save new todo
        </button>
      </div>
    </div>
  );
};
export default TodoInput;
