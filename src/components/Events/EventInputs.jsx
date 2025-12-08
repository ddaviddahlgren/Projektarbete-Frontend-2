import { useContext } from "react";
import { EventContext } from "../../context/EventContext";

const EventInputs = ({addEvent}) => {
 
    const{
        eventName, setEventName,
        description, setDescription,
        eventDate, setEventDate,
        eventEndDate, setEventEndDate,
    } = useContext(EventContext);
    return (
        <>
        <input 
                type="text" 
                placeholder="Event Name" 
                value={eventName} 
                onChange={(e) =>(setEventName(e.target.value) )}
            />
            <br/>
            <input 
                type="text"
                placeholder="Description" 
                value={description} 
                onChange={(e) =>(setDescription(e.target.value) )}
            />
            <br/>

            <p>Date</p>
            <input 
                type="date" 
                value={eventDate} 
                onChange={(e)=>setEventDate(e.target.value)}/>
            <br/>

            <p>End date</p>
            <input 
                type="date" 
                value={eventEndDate} 
                onChange={(e)=>setEventEndDate(e.target.value)}/>
            <br/><br/>

            <button onClick={()=> addEvent()}>Add Event</button>

        </>
    );
};

export default EventInputs;