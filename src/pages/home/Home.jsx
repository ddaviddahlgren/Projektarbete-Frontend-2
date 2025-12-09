import { Link } from "react-router-dom";
import style from './Home.module.css'

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <Link to="/habits">
          <div className={style.homeContainer}>HABITS</div>
        </Link>
        <br />
        <Link to="/todos">
          <div className={style.homeContainer}>TODOS</div>
        </Link>
        <br />
        <Link to="/events">
          <div className={style.homeContainer}>EVENT PLANNER</div>
        </Link>
      </nav>
    </>
  );
};

export default Home;
