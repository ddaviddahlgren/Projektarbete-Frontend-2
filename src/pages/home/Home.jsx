import { Link } from "react-router-dom";

const Home =()=>{

    return(
        <> 
        <h1>Home Page</h1>
        <nav>
            <Link to="/habits">Habits</Link><br/>
            <Link to="/todos">Todos</Link><br/>
            <Link to="/events">Event Planner</Link>
        </nav>
        </>
    );
}

export default Home;