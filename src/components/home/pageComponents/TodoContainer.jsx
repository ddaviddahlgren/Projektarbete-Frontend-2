import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/users/UserContext";
import style from "../homeComponent/HomeComponent.module.css";

export default function TodoContainer() {
  const { loggedInUser } = useContext(UserContext);

  const todos = loggedInUser?.todos || [];
  const topTodos = [...todos]
    .filter((todo) => todo.status === false)
    .slice(0, 3);
  return (
    <>
      <div className={style.componentContainer}>
        <h3 className={style.componentTitle}>TODOS</h3>
        <h4 className={style.subTitle}>
          Displayed here are your three most recent todos
        </h4>
        <Link to="/todos">
          <div className={style.homeContainer}>
            <ul>
              {topTodos.length === 0 && (
                <p className={style.homeLists}>No todos yet</p>
              )}
              {topTodos.map((todo) => (
                <li key={todo.id} className={style.homeLists}>
                  {todo.title} <br />
                  <span id={style.statusText}>Status:</span> {todo.status}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
}
