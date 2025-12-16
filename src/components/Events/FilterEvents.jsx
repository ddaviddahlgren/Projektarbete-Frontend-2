import { useContext, } from "react";
import { EventContext } from "../../context/EventContext";
import EventCard from "./EventCard";
import EventEditCards from "./EventEditCards";
import { UserContext } from "../../context/users/UserContext";

const FilterEvent=()=>{


    const{
        loggedInUser,
    } = useContext(UserContext);
    
    const{
        events, setEvents,
        editingIndex, setEditingIndex,
        editing, setEditing,
        deleteEvent, editEvent,
        saveEdit, cancelEdit,
        filterType, setFilterType
    } = useContext(EventContext);

    // filtering events based on if the event has expired or if its still active
    const getFilteredEvents = () => {
        
        let filtered = events.filter(event => event.userName === loggedInUser.username);
        

        if(filterType === "Expired"){
            filtered = filtered.filter(event => new Date(event.date) < new Date());
            // return events.filter(event => new Date(event.date) < new Date());
        } else if(filterType === "Active"){
            filtered = filtered.filter(event => new Date(event.date) >= new Date());
            // return events.filter(event => new Date(event.date) >= new Date());
        }
            return filtered.sort((a, b) => new Date(a.date) - new Date(b.date)); 
            // return events; 
    }

    return(
    <>
        <select value={filterType} onChange ={(e) => setFilterType(e.target.value)}>
            <option value="Default">All Events</option>
            <option value="Expired">Expired Events</option>
            <option value="Active">Active Events</option>
        </select>

        {getFilteredEvents()
            // .sort((a,b) => new Date(a.date) - new Date(b.date))
            .map((event, index) => (
                    <div className="events" key={index} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                        {/* the editingIndex works like a bool if its empty show the evvent or if it got an index show the edit event */}
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
            ))
        }

    </>
    );
}

export default FilterEvent;