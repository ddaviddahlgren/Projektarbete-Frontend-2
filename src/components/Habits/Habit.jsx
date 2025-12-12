import { useContext } from "react";

import { HabitsContext } from "../../context/HabitsContext";
import style from "../../pages/habits/Habits.module.css";

export default function Habit({ habit }) {
  const { addReps, subReps, clearReps, updatePrio } = useContext(HabitsContext);

  return (
    <>
        <p>
          <strong>{habit.title}</strong>
        </p>
        <div className={style.repsBox}>
          <p>Repetitions: {habit.reps}</p>
          <button className={style.repsBtn} onClick={() => subReps(habit.id)}>
            -
          </button>
          <button className={style.repsBtn} onClick={() => addReps(habit.id)}>
            +
          </button>
          <button className={style.repsBtn} onClick={() => clearReps(habit.id)}>
            C
          </button>
        </div>
        <div className={style.prioBox}>
          <p>Priority:</p>
          {/* Kolla koden nedan och lär dig */}
          <select value={habit.prio} onChange={(e) => updatePrio(habit.id, e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <div
            className={
              (habit.prio === "low" && style.lowPrio) ||
              (habit.prio === "medium" && style.medPrio) ||
              (habit.prio === "high" && style.hiPrio)
            }
          ></div>
        </div>
    </>
  );
}
