import { useContext } from "react";
import style from "../../pages/habits/Habits.module.css";
import { HabitsContext } from "../../context/HabitsContext";

export default function FilterSection() {
  const { prioFilter, setPrioFilter } = useContext(HabitsContext);

  return (
    <>
      <h4 className={style.subTitle}>Filter by priority</h4>
      <div className={style.btnBox}>
        <button
          className={`${style.prioBtn} ${
            prioFilter === "all" ? style.active : ""
          }`}
          onClick={() => setPrioFilter("all")}
        >
          All
        </button>
        <button
          className={`${style.prioBtn} ${
            prioFilter === "high" ? style.active : ""
          }`}
          onClick={() => setPrioFilter("high")}
        >
          High
        </button>
        <button
          className={`${style.prioBtn} ${
            prioFilter === "medium" ? style.active : ""
          }`}
          onClick={() => setPrioFilter("medium")}
        >
          Medium
        </button>
        <button
          className={`${style.prioBtn} ${
            prioFilter === "low" ? style.active : ""
          }`}
          onClick={() => setPrioFilter("low")}
        >
          Low
        </button>
      </div>
    </>
  );
}
