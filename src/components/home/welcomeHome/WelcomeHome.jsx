import { useEffect, useState, useRef } from "react";
import style from "./WelcomeHome.module.css";

const WelcomeHome = ({ onComplete }) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    //stops quote from running more than once by adding sessionstorage flag
    if (sessionStorage.getItem("quoteFetched") === "true") {
      return;
    }
    sessionStorage.setItem("quoteFetched", "true");

    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching quote:", error);
        onComplete();
      }
    };
    fetchData();
  }, []);

  return (
    <div className={`${style.quoteScreen}`}>
      <h3 className={style.quoteHeader}>Todays quote:</h3>
      {data ? <p className={style.quoteText}>"{data.quote}" <br/> <span id={style.authorText}>~ {data.author}</span></p> : <p className={style.quoteText}>Loading</p>}


      <button className={style.contBtn}
        onClick={() => {
          console.log("clicked");
          onComplete();
        }}
      >
        continue
      </button>
    </div>
  );
};

export default WelcomeHome;
