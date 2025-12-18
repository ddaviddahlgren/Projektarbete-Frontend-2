import { useContext } from "react";
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
        <h3 className={style.chooseTodoHeader}>FILTER BY CATEGORY</h3>
        <div className={style.catBtnContainer}>
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => handleFilterCategory(category)}
              // Om kategori är valt, då döp klass namn på "activeCat", annars ingenting
              className={`${style.catButton} ${
                // Om den andra kategori är vald, då kommer båda kategorier visas
                selectedCategories.includes(category) ? style.activeCat : " "
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={style.chooseContainer}>
        <h3 className={style.chooseTodoHeader}>SORT BY STATUS</h3>
        <div className={style.sortBySelect}>
          <div className={style.chooseStatus}>
            <label>Sort by status</label>
            <select
              onChange={(e) => setFilterStatus(e.target.value)}
              value={filterStatus}
              className={style.chooseTodoSelect}
            >
              <option value="All Todos" className={style.chooseTodoOption}>All status</option>
              <option value="Checked" className={style.chooseTodoOption}>Checked</option>
              <option value="In progress" className={style.chooseTodoOption}>In progress</option>
            </select>
          </div>

          <div className={style.chooseDeadline}>
            <label>Sort by deadline & Time</label>
            <select
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy || ""}
              className={style.chooseTodoSelect}
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
