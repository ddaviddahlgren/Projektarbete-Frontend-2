import ChooseTodo from "../../components/todos/chooseTodo/ChooseTodo.jsx";
import TodoInput from "../../components/todos/todoInput/TodoInput.jsx";
import TodoList from "../../components/todos/todoList/TodoList.jsx";
import style from "../habits/Habits.module.css";

import { Link } from "react-router-dom";

const Todos = () => {
  return (
    <>
      <header className={style.componentHeader}>
        <h1 className={style.componentTitle}>TODOS</h1>
        <Link to="/home">
          <button className={style.backBtn}>Back to Home Page</button>
        </Link>
      </header>
      <h2 className={style.subTitle}>These are your current todo's</h2>
      <main className={style.todoMain}>
        <TodoList />
        <TodoInput />
      </main>
      <ChooseTodo />
    </>
  );
};
export default Todos;
