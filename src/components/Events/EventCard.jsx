import { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import { UserContext } from "../../context/users/UserContext";
import style from "../../pages/habits/Habits.module.css";
const EventCard = ({ event, index }) => {
  const { users, setUsers, loggedInUser } = useContext(UserContext);
  const { setEditingIndex, setEditing } = useContext(EventContext);

  const editEvent = (index) => {
    setEditingIndex(index);
    const currentUser = users.find(
      (user) => user.username === loggedInUser.username
    );
    setEditing(currentUser.events[index]); //sets the editing state to the event being edited
  };

  const deleteEvent = (index) => {
    const updatedUsers = users.map((user) =>
      user.id === loggedInUser.id
        ? { ...user, events: user.events.filter((e, i) => i !== index) }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div
      id="eventCard"
      style={{
        padding: "10px",
        width: 210,
      }}
    >
      {" "}
      {/* checking if event has expired and setting a new color */}
      <strong className={style.eventTitle}>
        {event.name}
      </strong>
      <p>
        <strong className={style.eventTitle}>
     
          {event.description}
        </strong>
      </p>
      <p>
        <strong className={style.eventTitle}>
          Date
          <br />
          {event.date}
        </strong>
      </p>
      <p>
        <strong className={style.eventTitle}>
          EndDate
          <br />
          {event.endDate}
        </strong>
      </p>
      <button className={style.editBtn} onClick={() => editEvent(index)}>Edit Event</button>
      <button className={style.removeBtn}onClick={() => deleteEvent(index)}>Delete Event</button>
    </div>
  );
};

export default EventCard;
