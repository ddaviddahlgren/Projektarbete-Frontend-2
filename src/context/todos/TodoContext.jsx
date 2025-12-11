import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

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
      const [selectedCategories, setSelectedCategories] = useState([]); // default värde ska bli [] för att includes() ska fungera 
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
          setSelectedCategories(uppdateCategories);
        } else {
          // Lägger till ny kategori
          setSelectedCategories([...selectedCategories, categoryToToggle]);
        }
      };

    return (
        <TodoContext.Provider value={{ 
            todos,
            setTodos,
            title,
            setTitle,
            description,
            setDescription,
            time,
            setTime,
            category,
            setCategory,
            deadline,
            setDeadline,
            editTodoId,
            setEditTodoId,
            editDescription,
            setEditDescription,
            selectedCategories,
            setSelectedCategories,
            filterStatus,
            setFilterStatus,
            sortBy,
            setSortBy,
            filteredTodo,
            handleAddTodo,
            handleDeleteTodo,
            handleToggleStatus,
            editingTodo,
            saveEdit,
            categories,
            handleFilterCategory
        }}>{children}</TodoContext.Provider>
    )
}