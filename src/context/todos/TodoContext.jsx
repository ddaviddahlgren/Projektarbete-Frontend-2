import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../users/UserContext";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { loggedInUser, setUsers } = useContext(UserContext);

  const todos = loggedInUser.todos || [];

  // State för att spara input värdet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  // State för att redigera ärende
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  // State för filtering version 1.
  const [selectedCategories, setSelectedCategories] = useState([]); // default värde ska bli [] för att includes() ska fungera
  const [filterStatus, setFilterStatus] = useState("All Todos");
  // State för sortering
  const [sortBy, setSortBy] = useState(null); // State för deadline och tidsestamat
  // State för den färdigfiltrerade/sorterade listan som renderas
  const [filteredTodo, setFilteredTodo] = useState([]);

  // Uppdatera den filtrerade listan
  useEffect(() => {
    // Huvud filter och sortering funktionen
    const applyFilters = () => {
      let result = todos; // Börjar alltid med hela den aktuella listan

      // 1. Filtrera efter kategori
      if (selectedCategories.length > 0) {
        result = result.filter((todo) =>
          selectedCategories.includes(todo.category)
        );
      }

      // 2. Filtrera efter status
      if (filterStatus !== "All Todos") {
        result = result.filter((todo) => {
          const isCompleted = todo.status === true;
          return (
            (filterStatus === "Checked" && isCompleted) ||
            (filterStatus === "In progress" && !isCompleted)
          );
        });
      }

      // 3. Sortera listan (Körs efter filtreringen är klar)
      if (sortBy) {
        const actualKey = sortBy.startsWith("time-")
          ? "totalMinutes"
          : sortBy.split("-")[0];
        const direction = sortBy.endsWith("-asc") ? "asc" : "desc";
        // Skapa ny kopia av arrayen innan sortera
        result = [...result].sort((a, b) => {
          const aValue = a[actualKey] ?? 0;
          const bValue = b[actualKey] ?? 0;
          // Jämförelse logik (Gällande båda datumsrängar och nummer)
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
          return 0;
        });
      }
      setFilteredTodo(result); // Spara den färdiga listan för rendering
    };

    applyFilters();
  }, [todos, selectedCategories, filterStatus, sortBy]);

  // Funktion för att hantera ny todo
  const handleAddTodo = () => {
    // kontrollera att användare måste fylla titel och category för att kunna jämföra senare
    if (!title.trim() || !category.trim()) {
      alert("Please fill Title and choose a category");
      return;
    }

    // För att ska kunna jämföra senare, konverterar jag timme till 60 minuter plus minuter
    const totalMinutes = (Number(hours) || 0) * 60 + (Number(minutes) || 0);

    const newTodo = {
      id: Date.now(), // Lägg till unik ID till varje nya todo
      title,
      description,
      hours: Number(hours),
      minutes: Number(minutes),
      totalMinutes,
      category,
      deadline,
      status: false,
    };

    setUsers((prev) =>
      prev.map((user) =>
        user.id === loggedInUser.id
          ? { ...user, todos: [newTodo, ...user.todos] }
          : user
      )
    );

    // Töm input fältet efter skapar ny todo
    setTitle("");
    setDescription("");
    setHours("");
    setMinutes("");
    setCategory("");
    setDeadline("");
  };

  // Funktion för att ta bort todo list
  const handleDeleteTodo = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === loggedInUser.id
          ? { ...user, todos: user.todos.filter((t) => t.id !== id) }
          : user
      )
    );
  };

  // Funktion för att växla status
  const handleToggleStatus = (id, newStatus) => {
    setUsers((prev) =>
      // Mappar och returnerar ett nytt objekt för den matchande todon
      prev.map((user) =>
        user.id === loggedInUser.id
          ? {
              ...user,
              todos: user.todos.map((t) =>
                t.id === id ? { ...to, status: newStatus } : t
              )
            }
          : user
      )
    );
  };

  // Funktion att redigera Todo-title
  const editingTodo = (todo) => {
    setEditTodoId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  // Spara redigering (Uppdatera)
  const saveEdit = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        // Skapa nytt todo-objekt med uppdaterade title och description
        return { ...todo, title: editTitle, description: editDescription };
      }
      return todo;
    });
    // setTodos(updatedTodo);
    setEditTodoId(null);
    setEditTitle("");
    setEditDescription("");
  };

  // Array till todos categories
  const categories = ["Study", "Work", "Health", "Lifestyle"];

  // Filtera todo följande category
  const handleFilterCategory = (categoryToToggle) => {
    if (selectedCategories.includes(categoryToToggle)) {
      // Ta bort vald kategori
      let uppdateCategories = selectedCategories.filter(
        (category) => category !== categoryToToggle
      );
      setSelectedCategories(uppdateCategories);
    } else {
      // Lägger till ny kategori
      setSelectedCategories([...selectedCategories, categoryToToggle]);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        // setTodos,
        title,
        setTitle,
        description,
        setDescription,
        hours,
        setHours,
        minutes,
        setMinutes,
        category,
        setCategory,
        deadline,
        setDeadline,
        editTodoId,
        setEditTodoId,
        editTitle,
        setEditTitle,
        editDescription,
        setEditDescription,
        selectedCategories,
        setSelectedCategories,
        filterStatus,
        setFilterStatus,
        sortBy,
        setSortBy,
        filteredTodo,
        setFilteredTodo,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleStatus,
        editingTodo,
        saveEdit,
        categories,
        handleFilterCategory,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
