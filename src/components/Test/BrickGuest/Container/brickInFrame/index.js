import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { PlayBIF } from "../../PlayBIF";
import RenderImg from "../../RenderImg";
import { addNewRanking } from "../../Data/Answer";
import { countQuestion, questionAndAnswer, random } from "../../Data/Question";
import Clock from "../../Layout/Clock";
import "./BrickInFrame.css";
import { useDispatch } from "react-redux";
import { handleAddResult, handleNextGame } from "../../../Redux/Slice";
// import { Clock } from "../../../FigureOutGame/Layout/Clock";
export const BrickInFrame = () => {
   const dispatch = useDispatch();

   const [indexQuestion, setIndexQuestion] = useState(0);
   const [question, setQuestion] = useState(questionAndAnswer[0]);
   const [countCorrect, setCountCorrect] = useState(0);
   const [countAnswer, setCountAnswer] = useState(random());
   const [stopGame, setStopGame] = useState(false);
   const navigate = useNavigate();
   const nextQuestion = (result) => {
      const temp = question.result === countAnswer;
      if (temp === result) {
         setCountCorrect(countCorrect + 1);
      }
      setIndexQuestion(indexQuestion + 1);
   };

   // const finishGame = (minutes, seconds) => {
   //    const temp = {
   //       daySubmitted: new Date(),
   //       countCorrect: countCorrect,
   //       countQuestion: countQuestion,
   //       finishTime: {
   //          minutes: minutes,
   //          seconds: seconds,
   //       },
   //    };

   //    addNewRanking(temp);
   //    navigate("/brickguest/result");
   // };

   const finishGame = (minutes, second) => {
      const tempObj = {
         timeFinish: { minutes, second },
         countCorrect: countCorrect,
         countQuestion: countQuestion,
      };
      dispatch(handleAddResult(tempObj));
      dispatch(handleNextGame());
      // navigate("/");
   };

   useEffect(() => {
      if (indexQuestion < countQuestion) {
         setQuestion(questionAndAnswer[indexQuestion]);
      } else {
         setStopGame(true);
      }
   }, [indexQuestion]);
   return (
      <>
         <div className="brick-in-frame__container bg-image">
            <div className="brick-in-frame__bg">
               <div className="brick-in-frame__left">
                  {!stopGame ? (
                     <RenderImg image={question.image}></RenderImg>
                  ) : (
                     ""
                  )}
               </div>
               <div className="brick-in-frame__right">
                  {!stopGame ? (
                     <PlayBIF
                        question={question}
                        index={indexQuestion}
                        key={indexQuestion}
                        countAnswer={countAnswer}
                        nextQuestion={nextQuestion}
                     ></PlayBIF>
                  ) : (
                     ""
                  )}

                  <div className="brick-in-frame__right-clock">
                     <Clock stopGame={stopGame} finishGame={finishGame}></Clock>
                     {/* <Clock
                        isStopTime={stopGame}
                        onFinishGame={finishGame}
                     ></Clock> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
