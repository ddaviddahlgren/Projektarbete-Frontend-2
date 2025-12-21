import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";
import style from "../../pages/habits/Habits.module.css";

export default function SortSection() {
  const { sortBy, setSortBy, sortOrder, setSortOrder } =
    useContext(HabitsContext);

  const handleSort = (type, order) => {
    setSortBy(type);
    setSortOrder(order);
  };

  return (
    <>
      <h4 className={style.subTitle}>Sort by repetitions</h4>
      <div className={style.btnBox}>
        <button
          className={`${style.prioBtn} ${!sortBy ? style.active : ""}`}
          onClick={() => {
            setSortBy(null);
            setSortOrder("asc");
          }}
        >
          Standard
        </button>

        <button
          className={`${style.prioBtn} ${
            sortBy === "reps" && sortOrder === "desc" ? style.active : ""
          }`}
          onClick={() => handleSort("reps", "desc")}
        >
          Flest
        </button>
        <button
           className={`${style.prioBtn} ${
            sortBy === "reps" && sortOrder === "asc" ? style.active : ""
          }`}
          onClick={() => handleSort("reps", "asc")}
        >
          Minst
        </button>
      </div>
    </>
  );
}
