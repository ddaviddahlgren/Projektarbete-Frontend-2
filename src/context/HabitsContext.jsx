import { createContext, useState, useEffect } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
  localStorage.setItem("habits", JSON.stringify(habits));
}, [habits]);

  const [habitTitle, setHabitTitle] = useState("");

  const handleNewHabit = () => {
    if (!habitTitle) alert("Please type in a title");
    else {
      let newHabit = {
        id: Date.now(),
        title: habitTitle,
        reps: 0,
        prio: "low",
      };
      setHabits((prev) => [newHabit, ...prev]);
      setHabitTitle("");
    }
  };

  const addReps = (id) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, reps: h.reps + 1 } : h))
    );
  };
  const subReps = (id) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const newReps = h.reps > 0 ? h.reps - 1 : 0;
          return { ...h, reps: newReps };
        }
        return h;
      })
    );
  };
  const clearReps = (id) => {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, reps: 0 } : h)));
  };

  const updatePrio = (id, newPrio) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, prio: newPrio } : h))
    );
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        habitTitle,
        setHabitTitle,
        handleNewHabit,
        addReps,
        subReps,
        clearReps,
        updatePrio,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
