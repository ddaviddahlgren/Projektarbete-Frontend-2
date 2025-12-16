import ChooseTodo from "../../components/todos/chooseTodo/ChooseTodo.jsx";
import TodoInput from "../../components/todos/todoInput/TodoInput.jsx";
import TodoList from "../../components/todos/todoList/TodoList.jsx";
import style from "./Todos.module.css";
import { Link } from "react-router-dom";

const Todos = () => {
  return (
    <>
      <div>
        <h2 className={style.todoPageHeader}>Todo Page</h2>
        <div className={style.backHome}>
          <Link to="/home" className={style.backHomeLink}>
            ⬅️ BACK TO HOME
          </Link>
        </div>
        <div className={style.todoPage}>
          <TodoInput />
          <ChooseTodo />
        </div>
        <TodoList />
      </div>
    </>
  );
};
export default Todos;
