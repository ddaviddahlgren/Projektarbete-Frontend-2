import { useContext } from "react";
import { TodoContext } from "../../../context/todos/TodoContext";
import TodoItem from "../todoItem/TodoItem.jsx";
import style from "./todoList.module.css";

const TodoList = () => {
  
  const { filteredTodo } = useContext(TodoContext);

  return (
    <div>
      <h3 className={style.todoListHeader}>Todo-lists</h3>
      <div className={style.todoContainer}>
        {/* Mappar genom filteredTodo, de ärende som är redan filtrerat och sorterat */}
        {filteredTodo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
