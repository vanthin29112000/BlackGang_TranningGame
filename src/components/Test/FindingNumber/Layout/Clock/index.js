import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countMax, limitedTime, saveResult } from "../../Data";
import "./Clock.css";
export const Clock = ({ isStopTime, onFinishGame, shuffleCell }) => {
   const [second, setSecond] = useState(-1);
   const [minutes, setMinutes] = useState(-1);
   const secondTimer = () => setSecond(second - 1);
   const minutesTimer = () => setMinutes(minutes - 1);
   // const navigate = useNavigate();
   // useEffect(() => {
   //    if (count > countMax) {
   //       saveResult(countFail, minutes, second);
   //       navigate("/findnumber/result");
   //    }
   // }, [count]);

   // useEffect(() => {
   //    if (second === 60) {
   //       minutesTimer();
   //       setSecond(0);
   //    } else {
   //       const id = setInterval(secondTimer, 1000);
   //       return () => clearInterval(id);
   //    }
   // }, [second, minutes]);

   useEffect(() => {
      if (isStopTime || (second === 0 && minutes === 0)) {
         let tempSecondTime = minutes * 60 + second;
         let timeFinishSecond = limitedTime - tempSecondTime;

         let tempMinute = Math.floor(timeFinishSecond / 60);
         let tempSecond = timeFinishSecond - tempMinute * 60;

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
         shuffleCell();
      } else {
         const id = setInterval(secondTimer, 1000);
         return () => clearInterval(id);
      }
   }, [second, minutes]);

   return (
      <div className="finding-number__clock__container">
         <div className="finding-number__clock__ring"></div>
         <div className="finding-number__clock__bg">
            {("0" + minutes).slice(-2)}:{("0" + second).slice(-2)}{" "}
         </div>
      </div>
   );
};
