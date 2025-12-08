import { useContext, useState } from "react";
import EventInputs from "./EventInputs";
import { EventContext } from "../../context/EventContext";
import EventCard from "./EventCard";
import EventEditCards from "./EventEditCards";



const EventComponent = () => {

    
    const{
        eventName, setEventName,
        description, setDescription,
        eventDate, setEventDate,
        eventEndDate, setEventEndDate,
        events, setEvents,
        editingIndex, setEditingIndex,
        editing, setEditing
    } = useContext(EventContext);


    const addEvent = () => {
        console.log("Event Added");

        //checking if you filled all fields and selected valid dates
        if(eventName === "" || description === "" || eventDate === "" || eventEndDate === ""){
            alert("Please fill in all fields");
            return;
        }else if(new Date(eventDate) < new Date() || new Date(eventEndDate) < new Date() || new Date(eventEndDate) < new Date(eventDate)){
            alert("Please select another date");
            return;
        }else{
            const newEvents = {
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
    
    const deleteEvent = (index) => {
        const newEventList = events.filter((e, i) => i !== index);
        setEvents(newEventList);
    }

    const editEvent = (index) => {
        setEditingIndex(index);
        setEditing(events[index]);
       
    }

    const saveEdit = (index) => {

        //checking if you filled all fields and selected valid dates
        if(editing.name === "" || editing.description === "" || editing.date === "" || editing.endDate === ""){
            alert("Please fill in all fields");
            return;
        }else if(new Date(editing.date) < new Date() || new Date(editing.endDate) < new Date() || new Date(editing.endDate) < new Date(editing.date)){
            alert("Please select another date");
            return;
        }

        const updatedEvents = events.map((e, i) => 
            i === index ? editing : e
        );
        setEvents(updatedEvents);
        setEditingIndex(null);
        setEditing({});
    }

    const cancelEdit =()=>{ 
        setEditingIndex(null);
        setEditing({});
    }


    return(
        <>
            <p>Events Page</p>
            <EventInputs addEvent={addEvent}/>
            <div>
                <h3>Event List</h3>
                {events.map((event, index) => (
                    <div className="events" key={index} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                        {editingIndex === index ? 
                            (
                                <>
                                <EventEditCards index={index} editing={editing} saveEdit={saveEdit} cancelEdit={cancelEdit}/>
                                </>
                            ):
                            (
                                <>
                                <EventCard event={event} index={(index)} editEvent={editEvent} deleteEvent={deleteEvent}/>
                                </>  
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    );

}

export default EventComponent;