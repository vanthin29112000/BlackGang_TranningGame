import React, { useEffect, useState } from "react";
import "./Clock.css";
const Clock = ({ stopGame, finishGame }) => {
   const [second, setSecond] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const secondTimer = () => setSecond(second + 1);
   const minutesTimer = () => setMinutes(minutes + 1);
   useEffect(() => {
      if (stopGame) {
         finishGame(minutes, second);
      }
   }, [stopGame]);

   useEffect(() => {
      if (second === 60) {
         minutesTimer();
         setSecond(0);
      } else {
         const id = setInterval(secondTimer, 1000);
         return () => clearInterval(id);
      }
   }, [second, minutes]);
   return (
      <div className="brick-clock__container">
         <div className="brick-clock__ring"></div>
         <div className="brick-clock__bg">
            {("0" + minutes).slice(-2)} : {("0" + second).slice(-2)}{" "}
         </div>
      </div>
   );
};

export default React.memo(Clock);
