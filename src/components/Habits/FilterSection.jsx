import { useContext } from "react";
import style from "../../pages/habits/Habits.module.css";
import { HabitsContext } from "../../context/HabitsContext";

export default function FilterSection() {
  const { prioFilter, setPrioFilter } = useContext(HabitsContext);

  return (
    <>
      <h4>Sort by priority</h4>
      <button
        id={style.prioBtn}
        className={prioFilter === "all" ? style.active : ""}
        onClick={() => setPrioFilter("all")}
      >
        All
      </button>
      <button
        id={style.prioBtn}
        className={prioFilter === "high" ? style.active : ""}
        onClick={() => setPrioFilter("high")}
      >
        High
      </button>
      <button
        id={style.prioBtn}
        className={prioFilter === "medium" ? style.active : ""}
        onClick={() => setPrioFilter("medium")}
      >
        Medium
      </button>
      <button
        id={style.prioBtn}
        className={prioFilter === "low" ? style.active : ""}
        onClick={() => setPrioFilter("low")}
      >
        Low
      </button>
    </>
  );
}
