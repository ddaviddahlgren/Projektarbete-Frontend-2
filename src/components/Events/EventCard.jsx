const EventCard = ({event,index,editEvent,deleteEvent}) => {

  return (
    <div className="eventCard">
      <h4>Event Name: <br /> {event.name}</h4>
      <p><strong>Description: </strong><br />{event.description}</p>
      <p><strong>Date: </strong><br />{event.date}</p>
      <p><strong>EndDate: </strong><br />{event.endDate}</p>
      <button onClick={() => editEvent(index)}>Edit Event</button>
      <button onClick={() => deleteEvent(index)}>Delete Event</button>
    </div>
  );
};

export default EventCard;
