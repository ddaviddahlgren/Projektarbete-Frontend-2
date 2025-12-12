import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";
import Habit from "./Habit";
import style from "../../pages/habits/Habits.module.css";
import FilterSection from "./FilterSection";
import SortSection from "./SortSection";

export default function HabitsComponent() {
  const {
    habits,
    habitTitle,
    setHabitTitle,
    handleNewHabit,
    prioFilter,
    sortBy,
    sortOrder,
  } = useContext(HabitsContext);

  let displayedHabits =
    prioFilter === "all"
      ? [...habits]
      : habits.filter((h) => h.prio === prioFilter);

      // Förstå koden här med
  if (sortBy === "reps") {
    displayedHabits.sort((a, b) =>
      sortOrder === "asc" ? a.reps - b.reps : b.reps - a.reps
    );
  } else if (sortBy === "prio") {
    const prioMap = { low: 1, medium: 2, high: 3 };
    displayedHabits.sort((a, b) =>
      sortOrder === "asc"
        ? prioMap[a.prio] - prioMap[b.prio]
        : prioMap[b.prio] - prioMap[a.prio]
    );
  }

  return (
    <>
      <h2>These are your current habits:</h2>
      <FilterSection />
      <SortSection />
      <ul className={style.habitsList}>
        {displayedHabits.map((habit) => (
          <li className={style.habit} key={habit.id}>
            <Habit habit={habit} />
          </li>
        ))}
      </ul>
      <label>Add new habit: </label>
      <input
        type="text"
        value={habitTitle}
        onChange={(e) => setHabitTitle(e.target.value)}
      />
      <button onClick={handleNewHabit}>Click to add</button>
    </>
  );
}
