import { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import style from "../../pages/habits/Habits.module.css";

const EventInputs = ({ addEvent }) => {
  const {
    eventName,
    setEventName,
    description,
    setDescription,
    eventDate,
    setEventDate,
    eventEndDate,
    setEventEndDate,
  } = useContext(EventContext);

  return (
    <>
      <div className={style.addEvent}>
        <p className={style.eventText}>Add a new event</p>
        <input
          className={style.eventInput}
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <br />
        <input
          className={style.eventInput}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <p className={style.eventText}>Date</p>
        <input
        className={style.eventInput}
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <br />
        <p className={style.eventText}>End date</p>
        <input
        className={style.eventInput}
          type="date"
          value={eventEndDate}
          onChange={(e) => setEventEndDate(e.target.value)}
        />
        <br />
        <br />
        <button className={style.addBtn} onClick={() => addEvent()}>Add Event</button>{" "}
        {/* calling the addEvent function in EventComponent */}
      </div>
    </>
  );
};

export default EventInputs;
