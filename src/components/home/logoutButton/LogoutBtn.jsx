import { useNavigate } from "react-router-dom"
import style from "./LogoutBtn.module.css"

const LogoutButton=()=>{

  const handleLogout=()=>{
    sessionStorage.clear();
    navigate("/");
  }

  const navigate = useNavigate();

    return(
      <>
       <button className={style.logoutBtn} onClick={handleLogout}>Logout</button>
      </>
    );
       
}

export default LogoutButton