import { useContext, useState } from "react";
import { UserContext } from "../../../context/users/UserContext";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";
import style from "./HomeContext.module.css";
import WelcomeHome from "../welcomeHome/WelcomeHome";

const HomeContext =()=>{

    const { loggedInUser } = useContext(UserContext);
    
    //check if just logged in to show quote
    const [showWelcome, setShowWelcome] = useState(() => {
        return sessionStorage.getItem('justLoggedIn') === 'true';
    });

    const habits = loggedInUser?.habits || []
    const topHabits = [...habits]
    .sort((a, b) => b.reps - a.reps)
    .slice(0, 3);
    
    const todos = loggedInUser?.todos || []
    const topTodos = [...todos]
    .filter(todo => todo.status === false)
    .slice(0, 3)

    const events = loggedInUser?.events || []
    const topEvents = [...events]
    .slice(0, 3)

    const handleWelcomeComplete = () => {
        setShowWelcome(false);
        sessionStorage.removeItem('justLoggedIn'); // Clear the flag
        sessionStorage.removeItem('quoteFetched'); // Clear for next login

    };
  
    return(
        <div>
            {showWelcome && <WelcomeHome onComplete={handleWelcomeComplete} />}

            <BackButton />
            <h2 > Welcome {loggedInUser?.username}!</h2>
            <nav>
                <Link to="/habits">
                <div className={style.homeContainer}>
                    <h3>TOP 3 HABITS</h3>
                    {topHabits.length === 0 && <p>No habits yet</p>}

                    <ul>
                    {topHabits.map((habit) => (
                        <li key={habit.id}>
                        {habit.title} – {habit.reps} reps
                        </li>
                    ))}
                    </ul>
                </div>
                </Link>
                <br />
                <Link to="/todos">
                <div className={style.homeContainer}>
                    <h3>TOP 3 TODOS</h3>
                    {topTodos.length === 0 && <p>No todos yet</p>}
                    <ul>
                    {topTodos.map((todo) => (
                        <li key={todo.id}>
                        {todo.title} - Status: {todo.status}
                        </li>
                    ))}
                    </ul>
                </div>
                </Link>
                <br />
                <Link to="/events">
                <div className={style.homeContainer}>
                    <h3>TOP 3 EVENTS</h3>
                    {topEvents.length === 0 && <p>No events yet</p>}
                    <ul>
                    {topEvents.map((event) => (
                        <li key={event.id}>
                        {event.name} - Date: {event.date}
                        </li>
                    ))}
                    </ul>
                    </div>
                </Link>
            </nav>
        </div>
    );

}

export default HomeContext;