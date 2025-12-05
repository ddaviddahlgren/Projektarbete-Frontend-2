import { useState } from "react";


const EventComponent = () => {

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [events, setEvents] = useState([]);

    
    const addEvent = () => {
        console.log("Event Added");

        if(eventName === "" || description === "" || eventDate === ""){
            alert("Please fill in all fields");
            return;
        }else if(new Date(eventDate) < new Date()){
            alert("Please select a future date");
            return;
        }else{
            const newEvents = {
                name: eventName,
                description: description,
                date: eventDate
            };
            
            setEvents([...events, newEvents]);

            //clear input fields after adding event
            setEventName("");
            setDescription("");
            setEventDate("");
        }
        
    }
    return(
    
    <>
     <p>Events Page</p>
            
            <input type="text" placeholder="Event Name" onChange={(e) =>(setEventName(e.target.value) )}/><br/>
            <input type="text" placeholder="Description" onChange={(e) =>(setDescription(e.target.value) )}/><br/>
            <input type="date" onChange={(e)=>setEventDate(e.target.value)}/><br/>
            <button onClick={()=> addEvent()}>Add Event</button>

            <div>
                <h3>Event List</h3>
                {events.map((event, index) => (
                    <div className="events" key={index} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                        <h4>Event Name:<br/> {event.name}</h4>
                        <p><strong>Description: </strong><br/>{event.description}</p>
                        <p><strong>Date: </strong><br/>{event.date}</p>
                    </div>
                ))}
            </div>
    </>);

}

export default EventComponent;