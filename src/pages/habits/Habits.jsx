import { Link } from "react-router-dom";
import HabitsComponent from "../../components/Habits/HabitsComponent";

export default function HabitsPage(){

    return (
        <>
            <h1>Habits Page</h1>
            <HabitsComponent />
            <br />
            <Link to="/"> Back to Home Page</Link>
        </>
    )

}