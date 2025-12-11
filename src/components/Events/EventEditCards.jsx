import { useContext } from "react";
import { EventContext } from "../../context/EventContext";

const EventEditCards =({index})=>{

    const{
        events, setEvents,
        editingIndex, setEditingIndex,
        editing, setEditing,
    } = useContext(EventContext);

    const saveEdit = (index) => {

        //checking if you filled all fields and selected valid dates
        // if(editing.name === "" || editing.description === "" || editing.date === "" || editing.endDate === ""){
        //     alert("Please fill in all fields");
        //     return;
        // }else if(new Date(editing.date) < new Date() || new Date(editing.endDate) < new Date() || new Date(editing.endDate) < new Date(editing.date)){
        //     alert("Please select another date");
        //     return;
        // }

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
        <div className="editCard">
            <h4>Event Name:</h4>
            <input 
                type="text" 
                value={editing.name}
                onChange={(e) => setEditing({...editing,name: e.target.value})}
            />
            
            <h4>Description: </h4>
            <input 
                type="text" 
                value={editing.description}
                onChange={(e) => setEditing({...editing,description: e.target.value})}
            />

            <h4>Date: </h4>
            <input 
                type="date" 
                value={editing.date}
                onChange={(e) => setEditing({...editing,date: e.target.value})}
            />
            
            <h4>End Date: </h4>
            <input 
                type="date"
                value={editing.endDate}
                onChange={(e) => setEditing({...editing,endDate: e.target.value})}
            />
            <br/>
            <br/>
            
            <button onClick={()=>saveEdit(index)}>Save</button>
            <button onClick={()=>cancelEdit()}>Cancel</button>
        
        </div>
    );
}

export default EventEditCards;