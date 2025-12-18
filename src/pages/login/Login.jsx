import { useContext } from "react";
import { UserContext } from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const { users, setUsers, setLoggedInUser, username, setUsername, password, setPassword } = useContext(UserContext);

  const registerUser = () => {
    if (users.find((u) => u.username === username)) {
      alert("User already exists");
      setPassword("");
      setUsername("");
      return;
    } else {
      alert("User registered, please login");
      const newUser = {
        username: username,
        password: password,
        id: users.length + 1,
        habits: [],
        todos: [],
        events: [],
      };

      setUsers([...users, newUser]);
    }
  };

  const loginUser = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user == undefined) {
      alert("User not found, please register");
      return;
    } else {
      setLoggedInUser(user);
      sessionStorage.setItem("justLoggedIn", "true"); //sessionstorage to only show quote on login
      sessionStorage.removeItem("welcomeShown"); // Clear previous welcome
      navigate("/home");
    }
  };

  return (
    <div>
      <h1 className={style.homeTitle}>
        PRODUCTIVITY <span id={style.titleSpan}>ASSISTANT</span>
      </h1>
      <p id={style.creditsText}>By Manau, Oscar & David</p>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          autoComplete="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
      </form>
      <button onClick={registerUser}>Register</button>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
