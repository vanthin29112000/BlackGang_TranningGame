import React, { useState } from "react";
import { Clock } from "../../Layout/Clock";
import { NavLink } from "react-router-dom";

import "./PlayGame.css";
import { Logo } from "../../../../../layout/Logo";
export const PlayGame = ({
   start,
   index,
   countFail,
   setCount,
   onCheckedResult,
   shuffleCell,
   isStop,
   onFinishGame,
}) => {
   const [result, setResult] = useState("");
   const changeResult = (e) => {
      let key = e.target.value;
      if (key.length !== 0) {
         let stringChart = key[key.length - 1];
         let flag = true;
         if (stringChart < 48 || stringChart > 57) {
            flag = false;
         }
         if (!flag) {
            setResult(key);
         }
      } else {
         setResult(key);
      }
   };

   const handlerClick = (e) => {
      if (e.key === "Enter" && result !== "") {
         setResult("");
         onCheckedResult(result);
      }
   };

   return (
      <>
         <div className="play-game__container">
            <div style={{ width: "100%", height: "96px" }}>
               <div
                  style={{
                     width: "96px",
                     height: "96px",
                     margin: "0 auto",
                  }}
               >
                  <Logo></Logo>
               </div>
            </div>
            <p className="play-game__title">NUMBER FINDING</p>
            {start ? (
               <div className="play-game__body">
                  <p className="content">
                     Write small number in the right of
                     <p className="highline"> {index} </p> in the box below and
                     press
                     <p className="highline"> Enter</p> :
                  </p>

                  <input
                     type="text"
                     className="input-result"
                     placeholder="Type answer here"
                     onChange={changeResult}
                     value={result}
                     onKeyPress={handlerClick}
                  ></input>

                  <p className="count-fail">
                     Incorrect :{" "}
                     <p className="count-fail__content">{countFail}</p>
                  </p>

                  <div className="clock-bg">
                     <Clock
                        isStopTime={isStop}
                        onFinishGame={onFinishGame}
                        shuffleCell={shuffleCell}
                     ></Clock>
                  </div>
               </div>
            ) : (
               <div className="play-game__btn">
                  <button className="start-game" onClick={setCount}>
                     START
                  </button>
               </div>
            )}
         </div>
      </>
   );
};
