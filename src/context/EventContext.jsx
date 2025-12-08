import { createContext, useState} from "react";


export const EventContext = createContext();

export const EventProvider = ({children}) => {

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [events, setEvents] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editing, setEditing] = useState({});

    return(
        <EventContext.Provider value={{
            eventName, setEventName,
            description, setDescription,
            eventDate, setEventDate,
            eventEndDate, setEventEndDate,
            events, setEvents,
            editingIndex, setEditingIndex,
            editing, setEditing
        }}>
         {children}
        </EventContext.Provider>
    )
}

