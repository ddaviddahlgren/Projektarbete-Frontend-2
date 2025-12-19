import { useContext, useState } from "react";
import { UserContext } from "../../../context/users/UserContext";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";
import style from "./HomeComponent.module.css";
import WelcomeHome from "../welcomeHome/WelcomeHome";

const HomeContext = () => {
  const { loggedInUser } = useContext(UserContext);

  //check if just logged in to show quote
  const [showWelcome, setShowWelcome] = useState(() => {
    return sessionStorage.getItem("justLoggedIn") === "true";
  });

  const habits = loggedInUser?.habits || [];
  const topHabits = [...habits].sort((a, b) => b.reps - a.reps).slice(0, 3);

  const todos = loggedInUser?.todos || [];
  const topTodos = [...todos]
    .filter((todo) => todo.status === false)
    .slice(0, 3);

  const events = loggedInUser?.events || [];
  const topEvents = [...events].slice(0, 3);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    sessionStorage.removeItem("justLoggedIn"); // Clear the flag
    sessionStorage.removeItem("quoteFetched"); // Clear for next login
  };

  return (
    <div>
      {showWelcome && <WelcomeHome onComplete={handleWelcomeComplete} />}

      <h2 className={style.welcomeText}> Welcome {loggedInUser?.username}!</h2>
      <header className={style.header}>
        <h1 className={style.homeTitle}>
          PRODUCTIVITY <span id={style.titleSpan}>ASSISTANT</span>
        </h1>
        <p id={style.creditsText}>By Manau, Oscar & David</p>
      </header>
      <main className={style.main}>
        <div className={style.componentContainer}>
          <h3 className={style.componentTitle}>HABITS</h3>
          <h4 className={style.subTitle}>
            Displayed here are your three most repeated habits
          </h4>
          <Link to="/habits">
            <div className={style.homeContainer}>
              <ul>
                {topHabits.length === 0 && (
                  <p className={style.homeLists}>No habits yet</p>
                )}
                {topHabits.map((habit) => (
                  <li key={habit.id} className={style.homeLists}>
                    {habit.title} <br />
                    <span id={style.statusText}>Reps:</span> {habit.reps} reps
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <br />
        <div className={style.componentContainer}>
          <h3 className={style.componentTitle}>TODOS</h3>
          <h4 className={style.subTitle}>
            Displayed here are your three most recent todos
          </h4>
          <Link to="/todos">
            <div className={style.homeContainer}>
              <ul>
                {topTodos.length === 0 && (
                  <p className={style.homeLists}>No todos yet</p>
                )}
                {topTodos.map((todo) => (
                  <li key={todo.id} className={style.homeLists}>
                    {todo.title} <br />
                    <span id={style.statusText}>Status:</span> {todo.status}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <br />
        <div className={style.componentContainer}>
          <h3 className={style.componentTitle}>EVENTS</h3>
          <h4 className={style.subTitle}>
            Displayed here are your three nearest upcoming events
          </h4>
          <Link to="/events">
            <div className={style.homeContainer}>
              <ul>
                {topEvents.length === 0 && (
                  <p className={style.homeLists}>No events yet</p>
                )}
                {topEvents.map((event) => (
                  <li key={event.id} className={style.homeLists}>
                    {event.name} <br />
                    <span id={style.statusText}>Date:</span> {event.date}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      </main>
      <footer>
        <BackButton />
      </footer>
    </div>
  );
};

export default HomeContext;
