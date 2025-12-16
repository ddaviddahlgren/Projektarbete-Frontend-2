import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./users/UserContext";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  const { username, users, setUsers, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const [habitTitle, setHabitTitle] = useState("");

  const handleNewHabit = () => {
    if (!habitTitle) alert("Please type in a title");
    else {
      let newHabit = {
        username: username,
        id: Date.now(),
        title: habitTitle,
        reps: 0,
        prio: "low",
      };
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === loggedInUser.id
            ? { ...user, habits: [newHabit, ...user.habits] }
            : user
        )
      );
      setHabitTitle("");
    }
    console.log(users);
  };

  const handleDeleteHabit = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
    console.log("Habit removed!");
  };

  const updateTitle = (id, newTitle) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, title: newTitle } : h))
    );
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

  const [prioFilter, setPrioFilter] = useState("all");

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        habitTitle,
        setHabitTitle,
        handleNewHabit,
        handleDeleteHabit,
        updateTitle,
        addReps,
        subReps,
        clearReps,
        updatePrio,
        prioFilter,
        setPrioFilter,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
