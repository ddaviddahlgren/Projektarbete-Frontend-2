import { Link } from "react-router-dom";
import EventComponent from "../../components/Events/EventComponent";
import style from "../habits/Habits.module.css"

const Events = () => {
  return (
    <>
      <div className={style.componentHeader}>
        <h1 className={style.componentTitle}>EVENTS</h1>
        <Link to="/home">
          <button className={style.logoutBtn}>Back to Home Page</button>
        </Link>
      </div>
      <EventComponent />
    </>
  );
};
export default Events;
