import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import style from "./chooseTodo.module.css";

const ChooseTodo = () => {
  const {
    categories,
    handleFilterCategory,
    selectedCategories,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
  } = useContext(TodoContext);
  return (
    <div>
      <div className={style.chooseCat}>
        <h3>Choose by category</h3>
        <div className={style.catBtnContainer}>
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => handleFilterCategory(category)}
              className={`${style.catButton} ${
                selectedCategories.includes(category) ? style.activeCat : " "
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className={style.chooseStatus}>
        <h3>Choose by status</h3>
        <div className={style.sortBySelect}>
          <div>
            <label>Sort by status</label>
            <select
              onChange={(e) => setFilterStatus(e.target.value)}
              value={filterStatus}
            >
              <option value="All Todos">All status</option>
              <option value="Checked">Checked</option>
              <option value="In progress">In progress</option>
            </select>
          </div>

          <div>
            <label>Sort by deadline & Time</label>
            <select
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy || ""}
            >
              <option value="deadline-asc">Deadline: (Earliest First)</option>
              <option value="deadline-desc">Deadline: (Latest First)</option>
              <option value="time-asc">Time: (Shortest First)</option>
              <option value="time-desc">Time: (Longest First)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseTodo;
