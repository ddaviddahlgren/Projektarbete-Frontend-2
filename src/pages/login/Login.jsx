import { useContext } from "react";
import { UserContext } from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";

const Login =()=>{

    const navigate = useNavigate();

    const{
        users, setUsers,
        loggedInUser, setLoggedInUser,
        username, setUsername,
        password, setPassword
    } = useContext(UserContext);

    const registerUser = () => {
        
        const newUser = {
            username: username,
            password: password
        };

        setUsers([...users, newUser]);
    }

    const loginUser = () => {

        console.log(users);

        if(users.find(user => user.username === username && user.password === password) == undefined){
            alert("User not found, please register");
            return;
        }else{
            setLoggedInUser({username: username, password: password});
            console.log("User Logged In " + loggedInUser?.username);
            navigate("/home");
          
        }
        
    }


    return(
        <div>
            <h2>Login Page</h2>
            <form>
            <input type="text" placeholder="Username" autoComplete="username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <br/>
            <input type="password" placeholder="Password" autoComplete="current-password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            </form>
            <button onClick={registerUser}>Register</button>
            <button onClick ={loginUser}>Login</button>
        </div>
    )
}

export default Login;