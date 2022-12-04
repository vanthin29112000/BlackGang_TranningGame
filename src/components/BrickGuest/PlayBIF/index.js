import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { timeShowResult_training } from "../../../Data/BrickGuest/SettingGame";
import { arrayAnswer, countQuestion } from "../Data/Question";
import "./PlayBIF.css";
export const PlayBIF = ({ question, index, countAnswer, nextQuestion }) => {
   const [answer, setAnswer] = useState("");
   const [showResult, setShowResult] = useState(false);
   const [correct, setCorrect] = useState(true);

   const timeShowResult = timeShowResult_training;
   let temp = question.result === countAnswer;
   useEffect(() => {
      if (answer !== "") {
         setShowResult(true);
         // console.log("result", temp, answer);
         if (temp !== answer) {
            setCorrect(false);
         }
         setTimeout(() => {
            nextQuestion(answer);
         }, timeShowResult);
      }
   }, [answer]);

   return (
      <div className="play-bif">
         <NavLink to="/">
            <img
               // className="logo-image"
               src="assets/img/DatLaptoplogo.png"
               alt=".png"
               style={{
                  position: "relative",
                  width: "116px",
                  margin: "0 auto",
                  padding: " 8px 0px",
               }}
            ></img>
         </NavLink>
         <div className="play-bif__logo">BRICK IN FRAME</div>
         <div className="play-bif__body">
            <p className="play-bif__body-title">
               Question {index + 1} / {countQuestion}
            </p>
            <p className="play-bif__body-question">
               The square have to go{" "}
               <p className="play-bif__body-question-hightlight">
                  {question.question[countAnswer]}
               </p>{" "}
               to get to the destination :
            </p>

            <div className="play-bif__body-btn">
               {showResult ? (
                  correct ? (
                     <>
                        {Object.keys(arrayAnswer).map((ele) => {
                           if (arrayAnswer[ele] === answer)
                              return <p className="bg-correct">{ele}</p>;
                           else return <p className="bg-normal">{ele}</p>;
                        })}
                     </>
                  ) : (
                     <>
                        {Object.keys(arrayAnswer).map((ele) => {
                           if (arrayAnswer[ele] === temp)
                              return <p className="bg-correct">{ele}</p>;
                           else return <p className="bg-notcorrect">{ele}</p>;
                        })}
                     </>
                  )
               ) : (
                  <>
                     {Object.keys(arrayAnswer).map((ele, index) => (
                        <button
                           key={index}
                           onClick={() => {
                              setAnswer(arrayAnswer[ele]);
                           }}
                        >
                           {ele}
                        </button>
                     ))}
                  </>
               )}
            </div>
         </div>
      </div>
   );
};
