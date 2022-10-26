import React, { useEffect, useState } from "react";
import { limitedTime } from "../Data/question";
import "./clock.css";
export const Clock = ({ countQuestion, showSentence, finishGame }) => {
   // const [currentCount, setCount] = useState(0);
   // const timer = () => setCount(currentCount + 1);

   const [second, setSecond] = useState(-1);
   const [minutes, setMinutes] = useState(-1);
   const secondTimer = () => setSecond(second - 1);
   const minutesTimer = () => setMinutes(minutes - 1);

   // useEffect(() => {
   //     if (showSentence + 1 === countQuestion) {
   //         finishGame(currentCount);
   //         return;
   //     }
   //     const id = setInterval(timer, 1000);
   //     return () => clearInterval(id);
   // }, [currentCount]);

   useEffect(() => {
      if (showSentence === countQuestion || (second === 0 && minutes === 0)) {
         let tempSecondTime = minutes * 60 + second;
         let timeFinishSecond = limitedTime - tempSecondTime;

         let tempMinute = Math.floor(timeFinishSecond / 60);
         let tempSecond = timeFinishSecond - tempMinute * 60;

         finishGame(tempMinute, tempSecond);
      }
   }, [showSentence, minutes, second]);

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
      <div className="quiz-game-clock__container">
         <div className="quiz-game-clock__bg-handgame">
            {/* {currentCount / 60 > 9
               ? Math.floor(currentCount / 60)
               : "0" + Math.floor(currentCount / 60)}
            :
            {(currentCount % 59) + 1 > 9
               ? (currentCount % 59) + 1
               : "0" + ((currentCount % 59) + 1)} */}
            {("0" + minutes).slice(-2)}:{("0" + second).slice(-2)}{" "}
         </div>
      </div>
   );
};
