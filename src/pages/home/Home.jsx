import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { useContext } from "react";
import { UserContext } from "../../context//users/UserContext";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);

  const habits = loggedInUser?.habits || [];
  const topHabits = [...habits].sort((a, b) => b.reps - a.reps).slice(0, 3);

  const todos = loggedInUser?.todos || [];
  const topTodos = [...todos]
    .filter((todo) => todo.status === false)
    .slice(0, 3);

  const events = loggedInUser?.events || [];
  const topEvents = [...events].slice(0, 3);

  return (
    <>
      <header className={style.header}>
        <h1 className={style.homeTitle}>
          PRODUCTIVITY <span id={style.titleSpan}>ASSISTANT</span>
        </h1>
        <p id={style.cretisText}>By; Manau, Oscar & David</p>
      </header>
      <main className={style.main}>
        <div className={style.componentContainer}>
        <h3 className={style.componentTitle}>TOP 3 HABITS</h3>
        <Link to="/habits">
          <div className={style.homeContainer}>
            {topHabits.length === 0 && <p>No habits yet</p>}

            <ul>
              {topHabits.map((habit) => (
                <li key={habit.id}>
                  {habit.title} – {habit.reps} reps
                </li>
              ))}
            </ul>
          </div>
        </Link>
        </div>
        <br />
        <div className={style.componentContainer}>
        <h3 className={style.componentTitle}>TOP 3 TODOS</h3>
        <Link to="/todos">
          <div className={style.homeContainer}>
            {topTodos.length === 0 && <p>No todos yet</p>}
            <ul>
              {topTodos.map((todo) => (
                <li key={todo.id}>
                  {todo.title} - Status: {todo.status}
                </li>
              ))}
            </ul>
          </div>
        </Link>
        </div>
        <br />
        <div className={style.componentContainer}>
        <h3 className={style.componentTitle}>TOP 3 EVENTS</h3>
        <Link to="/events">
          <div className={style.homeContainer}>
            {topEvents.length === 0 && <p>No events yet</p>}
            <ul>
              {topEvents.map((event) => (
                <li key={event.id}>
                  {event.name} - Date: {event.date}
                </li>
              ))}
            </ul>
          </div>
        </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
