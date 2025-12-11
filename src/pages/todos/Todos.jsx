import React from "react";
import ChooseTodo from "../../components/todos/chooseTodo/ChooseTodo.jsx";
import TodoInput from "../../components/todos/todoInput/TodoInput.jsx";
import TodoList from "../../components/todos/todoList/TodoList.jsx";
import style from "./Todos.module.css";

const Todos = () => {
  return (
    <>
      <div className={style.todoPage}>
        <h2>Todo Page</h2>
        <TodoInput />
        <ChooseTodo />
        <TodoList />
      </div>
    </>
  );
};
export default Todos;
