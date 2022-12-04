import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { timeShowResult_test } from "../../../../Data/BrickGuest/SettingGame";
import { Logo } from "../../../../layout/Logo";
import { arrayAnswer, countQuestion } from "../Data/Question";
import "./PlayBIF.css";
export const PlayBIF = ({ question, index, countAnswer, nextQuestion }) => {
   const [answer, setAnswer] = useState("");
   const [showResult, setShowResult] = useState(false);
   const [correct, setCorrect] = useState(true);

   let temp = question.result === countAnswer;

   const timeShowResult = timeShowResult_test;

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
         <div style={{ width: "100%", height: "128px" }}>
            <div style={{ width: "128px", height: "128px", margin: "0 auto" }}>
               <Logo></Logo>
            </div>
         </div>
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
