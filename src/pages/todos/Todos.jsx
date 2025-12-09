import { useEffect, useState } from "react";
import style from "./Todos.module.css";

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  // useState för att spara input värdet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(Number(null));
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  // Funktion för att hantera ny todo
  const handleAddTodo = () => {
    // *förbättringsområde? - om jag behöver validera att title finns annars skickar fel meddelande*
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
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    // Updatera todo lista efter ta bort valda todo med delete knappen
    setTodos(updatedTodo);
  };

  const handleToggleStatus = (id) => {
    setTodos(
      // Om ID matchar
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const categories = ["Category", "Study", "Work", "Health", "Lifestyle"];

  return (
    <div className={style.container}>
      {/* ---------- Inputfältet delen ----------  
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
          {categories.map((category) => (
            <option>{category}</option>
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
      </div>
      {/* ---------- Inputfältet delen ---------- 
          ------------- Flytta snart ------------ */}

      {/* -------- Todo-listor renderas ---------  
          ------------- Flytta snart ------------ */}
      <h5>Todo-lists</h5>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${style.todoItem} ${
            todo.status ? style.todoItemCompleted : ""
          }`}
        >
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleStatus(todo.id)}
          />

          <h6>Title: {todo.title}</h6>
          <p>Description: {todo.description}</p>
          {todo.status ? "Checked" : "In progress"}
          <br />
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className={style.deleteButton}
          >
            Delete todo
          </button>
        </div>
      ))}
      {/* -------- Todo-listor renderas ---------  
          ------------- Flytta snart ------------ */}
    </div>
  );
};
export default Todos;
