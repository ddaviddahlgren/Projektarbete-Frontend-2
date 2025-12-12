import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";
import style from "../../pages/habits/Habits.module.css";

export default function SortSection() {
  const { sortBy, setSortBy, sortOrder, setSortOrder } = useContext(HabitsContext);

  const handleSort = (type, order) => {
    setSortBy(type);
    setSortOrder(order);
  };

  return (
    <>
      <h4>Sortera efter antal repetitioner</h4>
      <button id={style.prioBtn}
        className={sortBy === "reps" && sortOrder === "desc" ? style.active : ""}
        onClick={() => handleSort("reps", "desc")}
      >
        Flest
      </button>
      <button id={style.prioBtn}
        className={sortBy === "reps" && sortOrder === "asc" ? style.active : ""}
        onClick={() => handleSort("reps", "asc")}
      >
        Minst
      </button>
    </>
  );
}
