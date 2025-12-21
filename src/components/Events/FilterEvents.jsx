import { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import EventCard from "./EventCard";
import EventEditCards from "./EventEditCards";
import { UserContext } from "../../context/users/UserContext";
import style from "../../pages/habits/Habits.module.css";

const FilterEvent = () => {
  const { loggedInUser, users } = useContext(UserContext);

  const { editingIndex, editing, deleteEvent, editEvent, saveEdit, cancelEdit, filterType, setFilterType } =
    useContext(EventContext);

  // filtering events based on if the event has expired or if its still active
  const getFilteredEvents = () => {
    const currentUser = users.find((user) => user.username === loggedInUser.username);
    let filtered = currentUser?.events || [];

    if (filterType === "Expired") {
      filtered = filtered.filter((event) => new Date(event.endDate) < new Date());
    } else if (filterType === "Active") {
      filtered = filtered.filter((event) => new Date(event.date) >= new Date());
    }
    return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  return (
    <>
      {getFilteredEvents().map((event, index) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const expired = new Date(event.endDate) < today;

        return (
          <div
            className={style.eventContainer}
            key={index}
            style={{
              border: "2px solid dimgrey",
              margin: "10px",
              padding: "10px",
              boxShadow: expired ? "-6px 6px red" : "-6px 6px lightgreen",
              outline: "2px solid rgb(241, 237, 229)",
            }}
          >
            {editingIndex === index ? (
              <EventEditCards index={index} editing={editing} saveEdit={saveEdit} cancelEdit={cancelEdit} />
            ) : (
              <EventCard event={event} index={index} editEvent={editEvent} deleteEvent={deleteEvent} />
            )}
          </div>
        );
      })}{" "}
    </>
  );
};

export default FilterEvent;
