import style from "../homeComponent/HomeComponent.module.css";
import { UserContext } from "../../../context/users/UserContext";
import { useContext } from "react";

export default function Header() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <h2 className={style.welcomeText}> Welcome {loggedInUser?.username}!</h2>
      <header className={style.header}>
        <h1 className={style.homeTitle}>
          PRODUCTIVITY <span id={style.titleSpan}>ASSISTANT</span>
        </h1>
        <p id={style.creditsText}>By Manau, Oscar & David</p>
      </header>
    </>
  );
}
