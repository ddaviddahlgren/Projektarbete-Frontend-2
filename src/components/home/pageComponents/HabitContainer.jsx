import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/users/UserContext";
import style from "../homeComponent/HomeComponent.module.css";

export default function HabitContainer() {
  const { loggedInUser } = useContext(UserContext);

  const habits = loggedInUser?.habits || [];
  const topHabits = [...habits].sort((a, b) => b.reps - a.reps).slice(0, 3);
  return (
    <>
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
    </>
  );
}
