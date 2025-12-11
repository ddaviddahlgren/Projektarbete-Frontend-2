import React, { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";

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
      <div>
        <h5>Choose by category: </h5>
        {categories.map((category, i) => (
          <button key={i} onClick={() => handleFilterCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div>
        <h5>Choose by status: </h5>
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
