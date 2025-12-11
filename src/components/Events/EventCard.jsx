import { useContext } from "react";
import { EventContext } from "../../context/EventContext";

const EventCard = ({event,index}) => {

  const{
    events, setEvents,
    editingIndex, setEditingIndex,
    editing, setEditing,  
  } = useContext(EventContext);

  const editEvent = (index) => { 
    setEditingIndex(index); //sets the index of the event being edited
    setEditing(events[index]);
  }

  const deleteEvent = (index) => {
      const newEventList = events.filter((e, i) => i !== index);
      setEvents(newEventList);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); //need this to be able to set events for today
  const expired = new Date(event.date) < today;

  return (
    
    <div className="eventCard">
      <div style={{backgroundColor:expired? "red":"lightgreen", padding: "10px"}}> {/* checking if event has expired and setting a new color */}
      <h4>Event Name: <br /> {event.name}</h4>
      <p><strong>Description: </strong><br />{event.description}</p>
      <p><strong>Date: </strong><br />{event.date}</p>
      <p><strong>EndDate: </strong><br />{event.endDate}</p>
      <button onClick={() => editEvent(index)}>Edit Event</button>
      <button onClick={() => deleteEvent(index)}>Delete Event</button>
      </div>
    </div>
  );
};

export default EventCard;
