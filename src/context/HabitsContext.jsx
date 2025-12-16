import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./users/UserContext";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { loggedInUser, setUsers } = useContext(UserContext);

  const habits = loggedInUser?.habits || [];

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const [habitTitle, setHabitTitle] = useState("");

  const handleNewHabit = () => {
    if (!habitTitle) {
      alert("Please type in a title");
      return;
    }

    const newHabit = {
      id: Date.now(),
      title: habitTitle,
      reps: 0,
      prio: "low",
    };

    setUsers((prev) =>
      prev.map((user) =>
        user.id === loggedInUser.id
          ? { ...user, habits: [newHabit, ...user.habits] }
          : user
      )
    );

    setHabitTitle("");
  };

  const handleDeleteHabit = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === loggedInUser.id
          ? { ...user, habits: user.habits.filter((h) => h.id !== id) }
          : user
      )
    );
  };

  const updateTitle = (id, newTitle) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === loggedInUser.id ? { ...user, title: newTitle } : h))
    );
  };

  const addReps = (id) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === loggedInUser.id ? { ...user, reps: user.reps + 1 } : h))
    );
  };
  const subReps = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === loggedInUser.id) {
          const newReps = user.reps > 0 ? user.reps - 1 : 0;
          return { ...user, reps: newReps };
        }
        return h;
      })
    );
  };
  const clearReps = (id) => {
    setUsers((prev) => 
      prev.map((user) => (user.id === loggedInUser.id ? { ...user, reps: 0 } : h)));
  };

  const updatePrio = (id, newPrio) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, prio: newPrio } : h))
    );
  };

  const [prioFilter, setPrioFilter] = useState("all");

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <HabitsContext.Provider
      value={{
        habits,
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
