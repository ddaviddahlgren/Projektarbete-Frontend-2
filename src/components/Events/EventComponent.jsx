import { useContext, useState } from "react";
import EventInputs from "./EventInputs";
import { EventContext } from "../../context/EventContext";
import FilterEvent from "./FilterEvents";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/users/UserContext";
import style from "../../pages/habits/Habits.module.css"

const EventComponent = () => {
  const { users, setUsers, loggedInUser } = useContext(UserContext);

  const {
    eventName,
    setEventName,
    description,
    setDescription,
    eventDate,
    setEventDate,
    eventEndDate,
    setEventEndDate,
    filterType, 
    setFilterType
  } = useContext(EventContext);

  const addEvent = () => {
    console.log("Event Added");

    const today = new Date();
    today.setHours(0, 0, 0, 0); //need this to be able to set events for today

    if (
      eventName === "" ||
      description === "" ||
      eventDate === "" ||
      eventEndDate === ""
    ) {
      // checking if you filled all fields and selected valid dates
      alert("Please fill in all fields");
      return;
    } else if (
      new Date(eventDate) < today ||
      new Date(eventEndDate) < today ||
      new Date(eventEndDate) < new Date(eventDate)
    ) {
      //checking if dates are valid
      alert("Please select another date");
      return;
    } else {
      const newEvents = {
        id: Date.now(),
        name: eventName,
        description: description,
        date: eventDate,
        endDate: eventEndDate,
      };

      const updatedUsers = users.map((user) =>
        user.id === loggedInUser.id
          ? { ...user, events: [...user.events, newEvents] }
          : user
      );
      setUsers(updatedUsers);

      //clear input fields after adding event
      setEventName("");
      setDescription("");
      setEventDate("");
      setEventEndDate("");
    }
  };

  return (
    <>
      <h2 className={style.subTitle}>These are your current events</h2>
      <main className={style.eventMain}>
        <FilterEvent /> {/* //filtering and sorting events by date*/}
      <EventInputs addEvent={addEvent} />{" "}
      {/* component with all the event inputs*/}
      </main>
      <footer>
        <h2 className={style.subTitle}>Filter events</h2>
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="Default">All Events</option>
        <option value="Expired">Expired Events</option>
        <option value="Active">Active Events</option>
      </select>
      </footer>
    </>
  );
};

export default EventComponent;
