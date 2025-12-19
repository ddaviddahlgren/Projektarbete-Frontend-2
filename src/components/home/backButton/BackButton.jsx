import { useNavigate } from "react-router-dom"
import style from "../homeComponent/HomeComponent.module.css"

const BackButton=()=>{

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

export default BackButton