import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsContext";

const Home = () => {
  const { habits } = useContext(HabitsContext);

  const topHabits = [...habits]
  .sort((a, b) => b.reps - a.reps)
  .slice(0, 3);

  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <Link to="/habits">
          <div className={style.homeContainer}>
            <h3>TOP 3 HABITS</h3>
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
        <br />
        <Link to="/todos">
          <div className={style.homeContainer}>TODOS</div>
        </Link>
        <br />
        <Link to="/events">
          <div className={style.homeContainer}>EVENT PLANNER</div>
        </Link>
      </nav>
    </>
  );
};

export default Home;
