import { useNavigate } from "react-router-dom"

const BackButton=()=>{

  const handleLogout=()=>{
    sessionStorage.clear();
    navigate("/");
  }

  const navigate = useNavigate();

    return(
      <>
       <button onClick={handleLogout}>Logout</button>
      </>
    );
       
}

export default BackButton