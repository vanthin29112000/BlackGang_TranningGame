import React, { useEffect, useState } from "react";
import { limitedTime } from "../../Data/data";
import "./Clock.css";
export const Clock = ({ isStopTime, onFinishGame }) => {
   // count, countFail
   const [second, setSecond] = useState(-1);
   const [minutes, setMinutes] = useState(-1);
   const secondTimer = () => setSecond(second - 1);
   const minutesTimer = () => setMinutes(minutes - 1);
   useEffect(() => {
      if (isStopTime || (second === 0 && minutes === 0)) {
         let tempSecondTime = minutes * 60 + second;
         let timeFinishSecond = limitedTime - tempSecondTime;

         let tempMinute = Math.floor(timeFinishSecond / 60);
         let tempSecond = timeFinishSecond - tempMinute * 60;
         // console.log(tempMinute, tempSecond);
         onFinishGame(tempMinute, tempSecond);
      }
   }, [isStopTime, minutes, second]);

   useEffect(() => {
      if (second === -1 && minutes === -1) {
         let temp = Math.floor(limitedTime / 60);
         setMinutes(temp);
         setSecond(limitedTime - temp * 60);
      }
   }, []);

   useEffect(() => {
      if (second === 0) {
         minutesTimer();
         setSecond(59);
      } else {
         const id = setInterval(secondTimer, 1000);
         return () => clearInterval(id);
      }
   }, [second, minutes]);
   return (
      <div className="clock__container">
         <div className="clock__ring"></div>
         <div className="clock__bg">
            {("0" + minutes).slice(-2)}:{("0" + second).slice(-2)}{" "}
         </div>
      </div>
   );
};
