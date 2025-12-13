import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import style from "./chooseTodo.module.css"

const ChooseTodo = () => {
  const {
    categories,
    handleFilterCategory,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
  } = useContext(TodoContext);
  return (
    <div>
      <div className={style.chooseCat}>
        <h3>Choose by category</h3>
        {categories.map((category, i) => (
          <button key={i} onClick={() => handleFilterCategory(category)} className={style.catButton}>
            {category}
          </button>
        ))}
      </div>
      <div className={style.chooseStatus}>
        <h3>Choose by status</h3>
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="All Todos">All status</option>
          <option value="Checked">Checked</option>
          <option value="In progress">In progress</option>
        </select>
        
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">Sort By</option>
          <option value="deadline-asc">Deadline (Tidigast först)</option>
          <option value="deadline-desc">Deadline (Senast först)</option>
          <option value="time-asc">Tid (Kortast först)</option>
          <option value="time-desc">Tid (Längst först)</option>
        </select>
      </div>
    </div>
  );
};
export default ChooseTodo;
