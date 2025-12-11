import { useEffect, useState } from "react";
import style from "./Todos.module.css";

const Todos = () => {
  

  return (
    <div className={style.container}>
      
      {/* 1 ---------- Inputfältet delen ----------  
            ------------- Flytta snart ------------ */}

      <h3>Todo Page</h3>
      <div className={style.inputContiner}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.inputField}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.inputField}
        />

        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>select category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={handleAddTodo} className={style.primaryButton}>
          Save new todo
        </button>
        

        {/* 2 ------------ Filter delen ------------ 
              ------------- Flytta snart ----------- */}
        <div>
          <h5>Choose by category: </h5>
          {categories.map((category, i) => (
            <button key={i} onClick={() => handleFilterCategory(category)}>{category}</button>
          ))}
        </div>
        <div>
          <h5>Choose by status: </h5>
          <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
            <option value="All Todos">All status</option>
            <option value="Checked">Checked</option>
            <option value="In progress">In progress</option>
          </select>
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">Sort By</option>
            <option value="deadline-asc">Deadline (Tidigast först)</option>
            <option value="deadline-desc">Deadline (Senast först)</option>
            <option value="time-asc">Tid (Kortast först)</option>
            <option value="time-desc">Tid (Längst först)</option>
          </select>
        </div>

        {/* 2 ------------ Filter delen ------------ 
              ------------- Flytta snart ----------- */}
        
      </div>

      {/* 1 ---------- Inputfältet delen ----------  
            ------------- Flytta snart ------------ */}


      {/* 3 --------- Todo-listor checked --------  
            ------------- Flytta snart ----------- */}

        {/* Loopen använder filteredTodo för att visa den sorterade/filtrerade listan */}
        <h5>Todo-lists</h5>
        {filteredTodo.map((todo) => (
        <div
          key={todo.id} className={`${style.todoItem} ${todo.status ? style.todoItemCompleted : ""}`} >
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleStatus(todo.id)}
          />

      {/* 3 --------- Todo-listor checked --------  
            ------------- Flytta snart ----------- */}

      {/* 4 -------- Todo-listor renderas ---------
            -------- Todo-filter renderas ---------  
            ------------- Flytta snart ------------ */}

          {editTodoId === todo.id ? (
            <div>
              <input
                placeholder="Title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <textarea
                placeholder="Description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />

              <button onClick={() => saveEdit(todo.id)}>Save edit ✅</button>
              <button onClick={() => setEditTodoId(null)}>Cancel ❌</button>
            </div>
          ) : (
            <div>
              <h6>Title: {todo.title}</h6>
              <p>Description: {todo.description}</p>
              <button onClick={() => editingTodo(todo)} className={style.editButton}>Edit ✍🏼</button>
            </div>
          )}
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className={style.deleteButton}
          >
            Delete 🗑️
          </button>
        </div>
      ))}

      {/* 4 -------- Todo-listor renderas ---------
            -------- Todo-filter renderas ---------  
            ------------- Flytta snart ------------ */}

    </div>
  );
};
export default Todos;