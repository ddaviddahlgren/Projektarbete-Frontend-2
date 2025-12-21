import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/users/UserContext";
import style from "../homeComponent/HomeComponent.module.css";

export default function EventContainer() {
  const { loggedInUser } = useContext(UserContext);

  const events = loggedInUser?.events || [];
  const topEvents = [...events].slice(0, 3);

  return (
    <>
      <div className={style.componentContainer}>
        <h3 className={style.componentTitle}>EVENTS</h3>
        <h4 className={style.subTitle}>
          Displayed here are your three nearest upcoming events
        </h4>
        <Link to="/events">
          <div className={style.homeContainer}>
            <ul>
              {topEvents.length === 0 && (
                <p className={style.homeLists}>No events yet<br/>
                <span id={style.statusText}>CLICK THE BOX TO START</span></p>
              )}
              {topEvents.map((event) => (
                <li key={event.id} className={style.homeLists}>
                  {event.name} <br />
                  <span id={style.statusText}>Date: {event.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
}
