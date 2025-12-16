import { useContext } from "react";
import { UserContext } from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    users,
    setUsers,
    setLoggedInUser,
    username,
    setUsername,
    password,
    setPassword,
  } = useContext(UserContext);

  const registerUser = () => {
    const newUser = {
      username: username,
      password: password,
      id: users.length + 1,
      habits: [],
      todos: [],
      events: [],
    };

    setUsers([...users, newUser]);
  };

  const loginUser = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("User not found, please register");
      return;
    }

    setLoggedInUser(user)
    navigate("/home");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          autoComplete="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
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
