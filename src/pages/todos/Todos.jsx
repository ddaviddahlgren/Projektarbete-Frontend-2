import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  // useState för att spara värde input värdet
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <div>
      <h3>Todos Page</h3>

    </div>
  );
};
export default Todos;
