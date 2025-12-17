import { useEffect, useState, useRef } from "react";
import style from "./WelcomeHome.module.css";

const WelcomeHome =({onComplete})=>{

    const [data, setData] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {

        //stops quote from running more than once by adding sessionstorage flag
         if (sessionStorage.getItem('quoteFetched') === 'true') {
            return;
        }
         sessionStorage.setItem('quoteFetched', 'true');
         
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/quotes/random");
                const data = await response.json();
                setData(data);
                
                //fade quote in and out
                setTimeout(() => setFadeOut(true), 3000);
                setTimeout(() => {
                    onComplete();
                }, 3500);
            } catch (error) {
                console.error('Error fetching quote:', error);
                onComplete();
            }
        }
        fetchData();
    }, []);

   

    return (
        <div className={`${style.quoteScreen} ${fadeOut ? style.fadeOut : ''}`}>
            {data ? (
                <p className={style.quoteText}>"{data.quote}"</p>
            ) : (
                <p className={style.quoteText}>Loading</p>
            )}
        </div>
    )   
}

export default WelcomeHome