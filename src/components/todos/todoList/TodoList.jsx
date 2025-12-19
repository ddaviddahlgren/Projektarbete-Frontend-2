import { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import TodoItem from "../todoItem/TodoItem.jsx";
import style from "../../../pages/habits/Habits.module.css";

const TodoList = () => {
  
  const { filteredTodo } = useContext(TodoContext);

  return (
    <>
      <div className={style.todoContainer}>
        {/* Mappar genom filteredTodo, de ärende som är redan filtrerat och sorterat */}
        {filteredTodo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};
export default TodoList;
