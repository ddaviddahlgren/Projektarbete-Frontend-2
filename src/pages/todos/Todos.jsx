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
    const newTodo = {
      title,
      description,
      time,
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

  return (
    <div>
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
    </div>
  );
};
export default Todos;
