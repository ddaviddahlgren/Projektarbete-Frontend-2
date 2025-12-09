import { useState } from "react";

import Habit from "./Habit";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");

  const handleNewHabit = () => {
    let newHabit = {
      id: habitTitle,
      title: habitTitle,
      reps: 0,
      prio: "low",
    };
    setHabits([newHabit, ...habits]);
    setHabitTitle("")
  };

  return (
    <>
      <h2>These are your current habits:</h2>
      <ul className="habit-list">
      {habits.map((habit, i) => (
          <li key={i}>
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
