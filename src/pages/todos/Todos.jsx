import { useState } from "react";
import style from "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  // useState för att spara input värdet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

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
  }

  return (
    <div>
      {/* ---------- Inputfältet delen ----------  
          ------------- Flytta snart ------------ */}
      <h3>Todos Page</h3>
      <div className={style.inputContiner}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={handleAddTodo}>Save new todo</button>
      </div>
      {/* ---------- Inputfältet delen ---------- 
          ------------- Flytta snart ------------ */}

      {/* -------- Todo-listor renderas ---------  
          ------------- Flytta snart ------------ */}
      <h5>Todo-lists</h5>
      {todos.map((todo) => (
        <div key={todo.id} className={style.todoList}>
          <h6>Title: {todo.title}</h6>
          <p>Description: {todo.description}</p>
          {todo.status ? "Checked" : "In progress"}
        </div>
      ))}
      <button onClick={() => handleDeleteTodo(todos.id)}>Delete todo</button>
      {/* -------- Todo-listor renderas ---------  
          ------------- Flytta snart ------------ */}
    </div>
  );
};
export default Todos;
