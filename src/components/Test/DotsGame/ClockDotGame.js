import React, { useEffect, useState } from "react";
import "../BrickGuest/Layout/Clock/Clock.css";
export const Clock = ({ time, isStop, round, onNextRound }) => {
   // count, countFail
   const [second, setSecond] = useState(-1);
   const [minutes, setMinutes] = useState(-1);
   const secondTimer = () => setSecond(second - 1);
   const minutesTimer = () => setMinutes(minutes - 1);
   useEffect(() => {
      if (isStop || (second === 0 && minutes === 0)) {
         let tempSecondTime = minutes * 60 + second;
         let timeFinishSecond = time - tempSecondTime;

         let tempMinute = Math.floor(timeFinishSecond / 60);
         let tempSecond = timeFinishSecond - tempMinute * 60;

         onNextRound(tempMinute, tempSecond);
      }
   }, [minutes, second, isStop]);

   useEffect(() => {
      if (round <= 5) {
         setMinutes(-1);
         setSecond(-1);
         let temp = Math.floor(time / 60);
         setMinutes(temp);
         setSecond(time - temp * 60);
      }
   }, [round]);

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
