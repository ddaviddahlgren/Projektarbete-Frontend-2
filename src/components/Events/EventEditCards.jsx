import { useContext } from "react";
import { EventContext } from "../../context/EventContext";



const EventEditCards =({index,saveEdit,cancelEdit})=>{
    const {editing, setEditing} = useContext(EventContext);
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