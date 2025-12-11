import { useContext, useState } from "react";
import { HabitsContext } from "../../context/HabitsContext";
import Habit from "./Habit";
import style from "../../pages/habits/Habits.module.css";

export default function Habits() {
  const { habits, setHabits, habitTitle, setHabitTitle, handleNewHabit } =
    useContext(HabitsContext);

  

  return (
    <>
      <h2>These are your current habits:</h2>
      <ul className={style.habitsList}>
        {habits.map((habit, i) => (
          <li className={style.habit} key={i}>
            <Habit habit={habit} />
          </li>
        ))}
      </ul>
      <label>Add new habit: </label>
      <input
        type="text"
        value={habitTitle}
        onChange={(e) => {
          setHabitTitle(e.target.value);
        }}
      />
      <button onClick={handleNewHabit}>Click to add</button>
    </>
  );
}
