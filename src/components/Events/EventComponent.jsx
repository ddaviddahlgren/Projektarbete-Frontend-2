import { useContext, useState } from "react";
import EventInputs from "./EventInputs";
import { EventContext } from "../../context/EventContext";
import FilterEvent from "./FilterEvents";
import { useNavigate } from "react-router-dom";


const EventComponent = () => {
    
    const navigate = useNavigate();

    const{
        eventName, setEventName,
        description, setDescription,
        eventDate, setEventDate,
        eventEndDate, setEventEndDate,
        events, setEvents,
    } = useContext(EventContext);

    const addEvent = () => {
        console.log("Event Added");

        const today = new Date();
        today.setHours(0, 0, 0, 0); //need this to be able to set events for today

        if(eventName === "" || description === "" || eventDate === "" || eventEndDate === ""){ // checking if you filled all fields and selected valid dates
            alert("Please fill in all fields");
            return;
        }else if(new Date(eventDate) < today || new Date(eventEndDate) < today || new Date(eventEndDate) < new Date(eventDate)){ //checking if dates are valid
            alert("Please select another date");
            return;
        }else{
            const newEvents = {
                userName: "testUser",
                name: eventName,
                description: description,
                date: eventDate,
                endDate: eventEndDate
            };
            
            setEvents([...events, newEvents]);

            //clear input fields after adding event
            setEventName("");
            setDescription("");
            setEventDate("");
            setEventEndDate("");
        }
    }

    const goBack = () => {
     navigate("/");
    }
   
    return(
        <>
            <button onClick={goBack}>Home</button>
            <br/>
            <p>Events Page</p>
            <EventInputs addEvent={addEvent}/> {/* component with all the event inputs*/}
            <div>
                <h3>Event List</h3>
                <FilterEvent />  {/* //filtering and sorting events by date*/}
            </div>
        </>
    );

}

export default EventComponent;