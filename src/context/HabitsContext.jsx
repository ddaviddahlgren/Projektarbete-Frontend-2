import { createContext, useState, useContext } from "react";
import { UserContext } from "./users/UserContext";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {

  const { loggedInUser, setUsers } = useContext(UserContext);

  const habits = loggedInUser?.habits || [];

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
      prev.map((user) =>
        user.id === loggedInUser.id
          ? {
              ...user,
              habits: user.habits.map((h) =>
                h.id === id ? { ...h, title: newTitle } : h
              ),
            }
          : user
      )
    );
  };

  const addReps = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === loggedInUser.id
          ? {
              ...user,
              habits: user.habits.map((h) =>
                h.id === id ? { ...h, reps: h.reps + 1 } : h
              ),
            }
          : user
      )
    );
  };

  const subReps = (id) => {
  setUsers(prev =>
    prev.map(user =>
      user.id === loggedInUser.id
        ? {
            ...user,
            habits: user.habits.map(h =>
              h.id === id ? { ...h, reps: Math.max(0, h.reps - 1) } : h
            )
          }
        : user
    )
  );
};

  const clearReps = (id) => {
  setUsers(prev =>
    prev.map(user =>
      user.id === loggedInUser.id
        ? {
            ...user,
            habits: user.habits.map(h =>
              h.id === id ? { ...h, reps: 0 } : h
            )
          }
        : user
    )
  );
};


  const updatePrio = (id, newPrio) => {
  setUsers(prev =>
    prev.map(user =>
      user.id === loggedInUser.id
        ? {
            ...user,
            habits: user.habits.map(h =>
              h.id === id ? { ...h, prio: newPrio } : h
            )
          }
        : user
    )
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
