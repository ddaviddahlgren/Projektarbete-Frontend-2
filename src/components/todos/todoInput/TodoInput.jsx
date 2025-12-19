import { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext.jsx";
import style from "../../../pages/habits/Habits.module.css";

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
    <>
      <div className={style.addTodo}>
        <h3 className={style.eventText}>Create your todo</h3>

        <input
          placeholder="Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.todoInput}
        />

        <textarea
          placeholder="Add note"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.todoInput}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Select category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <div className={style.timeBox}>
          <label className={style.todoText}>Time</label>
          <input
            type="number"
            placeholder="00"
            value={hours}
            min="0"
            onChange={(e) => setHours(e.target.value)}
            className={style.timeField}
          />
          <span className={style.todoText}> hr </span>
          <input
            type="number"
            placeholder="00"
            value={minutes}
            min="0"
            max="59"
            onChange={(e) => setMinutes(e.target.value)}
            className={style.timeField}
          />
          <span className={style.todoText}> min</span>
        </div>

        <label className={style.todoText}>Deadline</label>
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          // säkerställa att user ska inte kunna välja tidigare nuvarande datum
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDeadline(e.target.value)}
          className={style.todoInput}
        />
        <button onClick={handleAddTodo} className={style.addBtn}>
          add todo
        </button>
      </div>
    </>
  );
};
export default TodoInput;
