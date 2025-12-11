import { useEffect, useState } from "react";
import style from "./Todos.module.css";

const Todos = () => {
  // State som lagrar todo listor i localStorage
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  // State för att spara input värdet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  // State för att redigera ärende
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  // State för filtering
  const [selectedCategories, setSelectedCategory] = useState([]); // default värde ska bli [] för att includes() ska fungera 
  const [filterStatus, setFilterStatus] = useState('All Todos');
  // State för sortering
  const [sortBy, setSortBy] = useState(null); // State för deadline och tidsestamat
  // State för den färdigfiltrerade/sorterade listan som renderas
  const [filteredTodo, setFilteredTodo] = useState([]);

  // Spara todo listor i localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Kör varje gång todos ändras 
  }, [todos]);

  // Uppdatera den filtrerade listan 
  useEffect(() => {
    applyFilters();
  }, [todos, selectedCategories, filterStatus, sortBy]);

  // Funktion för att hantera ny todo
  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(), // Lägg till unik ID till varje nya todo
      title,
      description,
      time: Number(time),
      category,
      deadline,
      status: false,
    };  
  
    // Spara ny todo i todos-hook
    setTodos([...todos, newTodo]);
    // Töm input fältet efter skapar ny todo
    setTitle("");
    setDescription("");
    setTime("");
    setCategory("");
    setDeadline("");
  };

  // Funktion för att ta bort todo list
  const handleDeleteTodo = (id) => {
    // När ID matchar, filterar bort den ärenden
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    // Updatera todo lista efter ta bort valda todo med delete knappen
    setTodos(updatedTodo);
  };

  // Funktion för att växla status  
  const handleToggleStatus = (id) => {
    setTodos(
      // Mappar och returnerar ett nytt objekt för den matchande todon
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
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
    setTodos(updatedTodo);
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
      let uppdateCategories = selectedCategories.filter((category) => category !== categoryToToggle); 
      setSelectedCategory(uppdateCategories);
    } else {
      // Lägger till ny kategori
      setSelectedCategory([...selectedCategories, categoryToToggle]);
    }
  };

  // Huvud filter och sortering funktionen
  const applyFilters = () => {
    let result = todos; // Börjar alltid med hela den aktuella listan

    // 1. Filtrera efter kategori 
    if (selectedCategories.length > 0) {
      result = result.filter(todo => selectedCategories.includes(todo.category));
    }

    // 2. Filtrera efter status
    if (filterStatus !== 'All Todos') {
      result = result.filter(todo => {
        const isCompleted = todo.status === true;
        return (
          (filterStatus === 'Checked' && isCompleted) || (filterStatus === 'In progress' && !isCompleted)
        )
      })
    }

    // 3. Sortera listan (Körs efter filtreringen är klar) 
    if (sortBy) {
      const [key, direction] = sortBy.split('-'); // Delar 'deadline-asc' i ['deadline', 'asc']
      // Skapa ny kopia av arrayen innan sortera
      result = [...result].sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];
        // Jämförelse logik (Gällande båda datumsrängar och nummer)
        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
      })
    }
    setFilteredTodo(result); // Spara den färdiga listan för rendering
  };

  return (
    <div className={style.container}>
      
      {/* 1 ---------- Inputfältet delen ----------  
            ------------- Flytta snart ------------ */}

      <h3>Todo Page</h3>
      <div className={style.inputContiner}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.inputField}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.inputField}
        />

        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>select category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={handleAddTodo} className={style.primaryButton}>
          Save new todo
        </button>
        

        {/* 2 ------------ Filter delen ------------ 
              ------------- Flytta snart ----------- */}
        <div>
          <h5>Choose by category: </h5>
          {categories.map((category, i) => (
            <button key={i} onClick={() => handleFilterCategory(category)}>{category}</button>
          ))}
        </div>
        <div>
          <h5>Choose by status: </h5>
          <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
            <option value="All Todos">All status</option>
            <option value="Checked">Checked</option>
            <option value="In progress">In progress</option>
          </select>
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">Sort By</option>
            <option value="deadline-asc">Deadline (Tidigast först)</option>
            <option value="deadline-desc">Deadline (Senast först)</option>
            <option value="time-asc">Tid (Kortast först)</option>
            <option value="time-desc">Tid (Längst först)</option>
          </select>
        </div>

        {/* 2 ------------ Filter delen ------------ 
              ------------- Flytta snart ----------- */}
        
      </div>

      {/* 1 ---------- Inputfältet delen ----------  
            ------------- Flytta snart ------------ */}


      {/* 3 --------- Todo-listor checked --------  
            ------------- Flytta snart ----------- */}

        {/* Loopen använder filteredTodo för att visa den sorterade/filtrerade listan */}
        <h5>Todo-lists</h5>
        {filteredTodo.map((todo) => (
        <div
          key={todo.id} className={`${style.todoItem} ${todo.status ? style.todoItemCompleted : ""}`} >
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleStatus(todo.id)}
          />

      {/* 3 --------- Todo-listor checked --------  
            ------------- Flytta snart ----------- */}

      {/* 4 -------- Todo-listor renderas ---------
            -------- Todo-filter renderas ---------  
            ------------- Flytta snart ------------ */}

          {editTodoId === todo.id ? (
            <div>
              <input
                placeholder="Title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <textarea
                placeholder="Description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />

              <button onClick={() => saveEdit(todo.id)}>Save edit ✅</button>
              <button onClick={() => setEditTodoId(null)}>Cancel ❌</button>
            </div>
          ) : (
            <div>
              <h6>Title: {todo.title}</h6>
              <p>Description: {todo.description}</p>
              <button onClick={() => editingTodo(todo)} className={style.editButton}>Edit ✍🏼</button>
            </div>
          )}
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className={style.deleteButton}
          >
            Delete 🗑️
          </button>
        </div>
      ))}

      {/* 4 -------- Todo-listor renderas ---------
            -------- Todo-filter renderas ---------  
            ------------- Flytta snart ------------ */}

    </div>
  );
};
export default Todos;