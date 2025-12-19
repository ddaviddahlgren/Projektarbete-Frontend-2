import { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import style from "../../../pages/habits/Habits.module.css";

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
    <footer>
      <h4 className={style.subTitle}>FILTER BY CATEGORY</h4>
      <div className={style.catBtnContainer}>
        {categories.map((category, i) => (
          <button
            id={style.prioBtn}
            key={i}
            onClick={() => handleFilterCategory(category)}
            // Om kategori är valt, då döp klass namn på "activeCat", annars ingenting
          >
            {category}
          </button>
        ))}
      </div>

      <div className={style.chooseContainer}>
        <h4 className={style.subTitle}>SORT BY STATUS</h4>

        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
          className={style.sortSelect}
        >
          <option value="All Todos" className={style.chooseTodoOption}>
            All status
          </option>
          <option value="Checked" className={style.chooseTodoOption}>
            Checked
          </option>
          <option value="In progress" className={style.chooseTodoOption}>
            In progress
          </option>
        </select>

        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy || ""}
          className={style.sortSelect}
        >
          <option value="deadline-asc">Deadline: (Earliest First)</option>
          <option value="deadline-desc">Deadline: (Latest First)</option>
          <option value="time-asc">Time: (Shortest First)</option>
          <option value="time-desc">Time: (Longest First)</option>
        </select>
      </div>
    </footer>
  );
};
export default ChooseTodo;
