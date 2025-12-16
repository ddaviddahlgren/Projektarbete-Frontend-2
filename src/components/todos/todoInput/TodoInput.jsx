import React, { useContext, useState } from "react";
import { TodoContext } from "../../../context/todos/TodoContext.jsx";
import { UserContext } from "../../../context/users/UserContext.jsx";
import style from "./TodoInput.module.css";

const TodoInput = () => {
  // State för att spara input värdet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  const { categories } = useContext(TodoContext);

  const {
    users,
    setUsers,
    loggedInUser,
  } = useContext(UserContext);


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
      userName: loggedInUser.username,
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

    // // Spara ny todo i todos-hook
    // setUsers([...users.todo, newTodo]);

    const updatedUsers = users.map(user => 
            user.id === loggedInUser.id 
            ? { ...user, events: [...user.events, newEvents] }
            : user
        );
    // Töm input fältet efter skapar ny todo
    setTitle("");
    setDescription("");
    setHours("");
    setMinutes("");
    setCategory("");
    setDeadline("");
  };

  return (
    <div className={style.container}>
      <h3 className={style.todoInputHeader}>Create your todo</h3>
      <div className={style.inputContiner}>
        <label for="title">
          Title:{" "}
          <input
            placeholder="Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={style.inputField}
          />
        </label>

        <label for="description">
          Desciption:{" "}
          <textarea
            placeholder="Add note"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={style.inputField}
          />
        </label>

        <div className={style.selectedContainer}>
          <div className={category}>
            <label for="category">
              Category:{" "}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={style.todoInputSelect}
              >
                <option>Select category</option>
                {categories.map((category) => (
                  <option key={category} className={style.todoInputOption}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={style.time}>
            <label for="time">
              Time:{" "}
              <input
                type="number"
                placeholder="Hours"
                value={hours}
                min="0"
                onChange={(e) => setHours(e.target.value)}
                className={style.inputField}
              />
              <span> hr </span>
              <input
                type="number"
                placeholder="Minutes"
                value={minutes}
                min="0"
                max="59"
                onChange={(e) => setMinutes(e.target.value)}
                className={style.inputField}
              />
              <span> min</span>
            </label>
          </div>
        </div>

        <label for="deadline">
          Deadline:
          <input
            type="date"
            placeholder="Deadline"
            value={deadline}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDeadline(e.target.value)}
            className={style.inputField}
          />
        </label>
        <button onClick={handleAddTodo} className={style.saveButton}>
          Save new todo
        </button>
      </div>
    </div>
  );
};
export default TodoInput;
