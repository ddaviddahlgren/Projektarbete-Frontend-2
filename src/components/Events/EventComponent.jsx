import { useContext, useState } from "react";
import EventInputs from "./EventInputs";
import { EventContext } from "../../context/EventContext";
import FilterEvent from "./FilterEvents";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/users/UserContext";

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
  } = useContext(EventContext);

  const addEvent = () => {
    console.log("Event Added");

    const today = new Date();
    today.setHours(0, 0, 0, 0); //need this to be able to set events for today

    if (eventName === "" || description === "" || eventDate === "" || eventEndDate === "") {
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
        name: eventName,
        description: description,
        date: eventDate,
        endDate: eventEndDate,
      };

      const updatedUsers = users.map((user) =>
        user.id === loggedInUser.id ? { ...user, events: [...user.events, newEvents] } : user
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
      <Link to="/home">
        <button>Home</button>
      </Link>
      <br />
      <p>Events Page</p>
      <EventInputs addEvent={addEvent} /> {/* component with all the event inputs*/}
      <div>
        <h3>Event List</h3>
        <FilterEvent /> {/* //filtering and sorting events by date*/}
      </div>
    </>
  );
};

export default EventComponent;
