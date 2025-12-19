import { Link } from "react-router-dom";
import HabitsComponent from "../../components/Habits/HabitsComponent";
import style from "./Habits.module.css";
export default function HabitsPage() {
  return (
    <>
      <div className={style.componentHeader}>
        <h1 className={style.componentTitle}>HABITS</h1>
        <Link to="/home">
          <button className={style.logoutBtn}>Back to Home Page</button>
        </Link>
      </div>
      <HabitsComponent />
    </>
  );
}
