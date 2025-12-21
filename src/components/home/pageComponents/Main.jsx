import style from "../homeComponent/HomeComponent.module.css";
import HabitContainer from "./HabitContainer";
import TodoContainer from "./TodoContainer";
import EventContainer from "./EventContainer";

export default function Main() {
  

  return (
    <>
      <main className={style.main}>
        <HabitContainer />
        <br />
        <TodoContainer />
        <br />
        <EventContainer />
      </main>
    </>
  );
}
