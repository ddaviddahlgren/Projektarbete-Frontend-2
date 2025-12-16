import { useContext, useState, useEffect } from "react";

import { HabitsContext } from "../../context/HabitsContext";
import style from "../../pages/habits/Habits.module.css";

export default function Habit({ habit }) {
  if (!habit) return null;

  const {
    addReps,
    subReps,
    clearReps,
    updatePrio,
    handleDeleteHabit,
    updateTitle,
  } = useContext(HabitsContext);

  const [editing, setEditing] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    setPlaceholder(habit.title);
  }, [habit]);

  const saveTitle = () => {
    if (!placeholder.trim()) return;
    updateTitle(habit.id, placeholder.trim());
    setEditing(false);
  };

  return (
    <>
      {editing ? (
        <input
          autoFocus
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          onBlur={saveTitle}
          onKeyDown={(e) => e.key === "Enter" && saveTitle()}
        />
      ) : (
        <strong
          onClick={() => setEditing(true)}
          style={{ cursor: "pointer" }}
          title="Click to edit title"
        >
          {habit.title}
        </strong>
      )}

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
        <select
          value={habit.prio}
          onChange={(e) => updatePrio(habit.id, e.target.value)}
        >
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
      <button onClick={() => handleDeleteHabit(habit.id)}>Remove Habit</button>
    </>
  );
}
