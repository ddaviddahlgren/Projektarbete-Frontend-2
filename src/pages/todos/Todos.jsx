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

    //   {/* 3 --------- Todo-listor checked --------
    //         ------------- Flytta snart ----------- */}

    //     {/* Loopen använder filteredTodo för att visa den sorterade/filtrerade listan */}
    //     <h5>Todo-lists</h5>
    //     {filteredTodo.map((todo) => (
    //     <div
    //       key={todo.id} className={`${style.todoItem} ${todo.status ? style.todoItemCompleted : ""}`} >
    //       <input
    //         type="checkbox"
    //         checked={todo.status}
    //         onChange={() => handleToggleStatus(todo.id)}
    //       />

    //   {/* 3 --------- Todo-listor checked --------
    //         ------------- Flytta snart ----------- */}

    //   {/* 4 -------- Todo-listor renderas ---------
    //         -------- Todo-filter renderas ---------
    //         ------------- Flytta snart ------------ */}

    //       {editTodoId === todo.id ? (
    //         <div>
    //           <input
    //             placeholder="Title"
    //             value={editTitle}
    //             onChange={(e) => setEditTitle(e.target.value)}
    //           />

    //           <textarea
    //             placeholder="Description"
    //             value={editDescription}
    //             onChange={(e) => setEditDescription(e.target.value)}
    //           />

    //           <button onClick={() => saveEdit(todo.id)}>Save edit ✅</button>
    //           <button onClick={() => setEditTodoId(null)}>Cancel ❌</button>
    //         </div>
    //       ) : (
    //         <div>
    //           <h6>Title: {todo.title}</h6>
    //           <p>Description: {todo.description}</p>
    //           <button onClick={() => editingTodo(todo)} className={style.editButton}>Edit ✍🏼</button>
    //         </div>
    //       )}
    //       <button
    //         onClick={() => handleDeleteTodo(todo.id)}
    //         className={style.deleteButton}
    //       >
    //         Delete 🗑️
    //       </button>
    //     </div>
    //   ))}

    //   {/* 4 -------- Todo-listor renderas ---------
    //         -------- Todo-filter renderas ---------
    //         ------------- Flytta snart ------------ */}

    // </div>
  );
};
export default Todos;
