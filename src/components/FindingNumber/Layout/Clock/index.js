import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countMax, saveResult } from "../../Data";
import "./Clock.css";
export const Clock = ({ count, countFail }) => {
   const [second, setSecond] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const secondTimer = () => setSecond(second + 1);
   const minutesTimer = () => setMinutes(minutes + 1);
   const navigate = useNavigate();
   useEffect(() => {
      if (count > countMax) {
         saveResult(countFail, minutes, second);
         navigate("/findnumber/result");
      }
   }, [count]);

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
      <div className="finding-number__clock__container">
         <div className="finding-number__clock__ring"></div>
         <div className="finding-number__clock__bg">
            {("0" + minutes).slice(-2)}:{("0" + second).slice(-2)}{" "}
         </div>
      </div>
   );
};
