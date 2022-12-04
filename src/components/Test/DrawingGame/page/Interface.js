import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Sample } from "../Sample";
import { answer } from "../database/Answer";
import { scoreQuiz, showAnswer } from "../function/testing";
import { Clock } from "../layout/Clock";
import { useDispatch } from "react-redux";
import {
   handleAddResult,
   handleIsShowResult,
   handleNextGame,
} from "../../Redux/Slice";
import {
   countQuestion_test,
   timeShowResult_test,
} from "../../../../Data/DrawingGame/SettingGame";
import { Logo } from "../../../../layout/Logo";

export function Interface() {
   const NUMBER_OF_QUESTION = countQuestion_test;
   const navigate = useNavigate();
   const resultRef = useRef();
   const dispatch = useDispatch();

   const [choose, setChoose] = useState([]);
   const [point, setPoint] = useState({
      list: [
         { id: "a1", origin: false, color: " bg-white" },
         { id: "b1", origin: false, color: " bg-white" },
         { id: "c1", origin: false, color: " bg-white" },
         { id: "d1", origin: false, color: " bg-white" },
         { id: "e1", origin: false, color: " bg-white" },
         { id: "f1", origin: false, color: " bg-white" },
         { id: "g1", origin: false, color: " bg-white" },
         { id: "h1", origin: false, color: " bg-white" },
         { id: "i1", origin: false, color: " bg-white" },
         { id: "j1", origin: false, color: " bg-white" },
         { id: "a2", origin: false, color: " bg-white" },
         { id: "b2", origin: false, color: " bg-white" },
         { id: "c2", origin: false, color: " bg-white" },
         { id: "d2", origin: false, color: " bg-white" },
         { id: "e2", origin: false, color: " bg-white" },
         { id: "f2", origin: false, color: " bg-white" },
         { id: "g2", origin: false, color: " bg-white" },
         { id: "h2", origin: false, color: " bg-white" },
         { id: "i2", origin: false, color: " bg-white" },
         { id: "j2", origin: false, color: " bg-white" },
         { id: "a3", origin: false, color: " bg-white" },
         { id: "b3", origin: false, color: " bg-white" },
         { id: "c3", origin: false, color: " bg-white" },
         { id: "d3", origin: false, color: " bg-white" },
         { id: "e3", origin: false, color: " bg-white" },
         { id: "f3", origin: false, color: " bg-white" },
         { id: "g3", origin: false, color: " bg-white" },
         { id: "h3", origin: false, color: " bg-white" },
         { id: "i3", origin: false, color: " bg-white" },
         { id: "j3", origin: false, color: " bg-white" },
         { id: "a4", origin: false, color: " bg-white" },
         { id: "b4", origin: false, color: " bg-white" },
         { id: "c4", origin: false, color: " bg-white" },
         { id: "d4", origin: false, color: " bg-white" },
         { id: "e4", origin: false, color: " bg-white" },
         { id: "f4", origin: false, color: " bg-white" },
         { id: "g4", origin: false, color: " bg-white" },
         { id: "h4", origin: false, color: " bg-white" },
         { id: "i4", origin: false, color: " bg-white" },
         { id: "j4", origin: false, color: " bg-white" },
         { id: "a5", origin: false, color: " bg-white" },
         { id: "b5", origin: false, color: " bg-white" },
         { id: "c5", origin: false, color: " bg-white" },
         { id: "d5", origin: false, color: " bg-white" },
         { id: "e5", origin: false, color: " bg-white" },
         { id: "f5", origin: false, color: " bg-white" },
         { id: "g5", origin: false, color: " bg-white" },
         { id: "h5", origin: false, color: " bg-white" },
         { id: "i5", origin: false, color: " bg-white" },
         { id: "j5", origin: false, color: " bg-white" },
         { id: "a6", origin: false, color: " bg-white" },
         { id: "b6", origin: false, color: " bg-white" },
         { id: "c6", origin: false, color: " bg-white" },
         { id: "d6", origin: false, color: " bg-white" },
         { id: "e6", origin: false, color: " bg-white" },
         { id: "f6", origin: false, color: " bg-white" },
         { id: "g6", origin: false, color: " bg-white" },
         { id: "h6", origin: false, color: " bg-white" },
         { id: "i6", origin: false, color: " bg-white" },
         { id: "j6", origin: false, color: " bg-white" },
         { id: "a7", origin: false, color: " bg-white" },
         { id: "b7", origin: false, color: " bg-white" },
         { id: "c7", origin: false, color: " bg-white" },
         { id: "d7", origin: false, color: " bg-white" },
         { id: "e7", origin: false, color: " bg-white" },
         { id: "f7", origin: false, color: " bg-white" },
         { id: "g7", origin: false, color: " bg-white" },
         { id: "h7", origin: false, color: " bg-white" },
         { id: "i7", origin: false, color: " bg-white" },
         { id: "j7", origin: false, color: " bg-white" },
         { id: "a8", origin: false, color: " bg-white" },
         { id: "b8", origin: false, color: " bg-white" },
         { id: "c8", origin: false, color: " bg-white" },
         { id: "d8", origin: false, color: " bg-white" },
         { id: "e8", origin: false, color: " bg-white" },
         { id: "f8", origin: false, color: " bg-white" },
         { id: "g8", origin: false, color: " bg-white" },
         { id: "h8", origin: false, color: " bg-white" },
         { id: "i8", origin: false, color: " bg-white" },
         { id: "j8", origin: false, color: " bg-white" },
         { id: "a9", origin: false, color: " bg-white" },
         { id: "b9", origin: false, color: " bg-white" },
         { id: "c9", origin: false, color: " bg-white" },
         { id: "d9", origin: false, color: " bg-white" },
         { id: "e9", origin: false, color: " bg-white" },
         { id: "f9", origin: false, color: " bg-white" },
         { id: "g9", origin: false, color: " bg-white" },
         { id: "h9", origin: false, color: " bg-white" },
         { id: "i9", origin: false, color: " bg-white" },
         { id: "j9", origin: false, color: " bg-white" },
         { id: "a10", origin: false, color: " bg-white" },
         { id: "b10", origin: false, color: " bg-white" },
         { id: "c10", origin: false, color: " bg-white" },
         { id: "d10", origin: false, color: " bg-white" },
         { id: "e10", origin: false, color: " bg-white" },
         { id: "f10", origin: false, color: " bg-white" },
         { id: "g10", origin: false, color: " bg-white" },
         { id: "h10", origin: false, color: " bg-white" },
         { id: "i10", origin: false, color: " bg-white" },
         { id: "j10", origin: false, color: " bg-white" },
      ],
      status: true,
   });
   const [result, setResult] = useState({
      wrong: 0,
      time: { hour: 0, minute: 0, second: 0 },
   });

   const [isSubmit, setIsSubmit] = useState(false);
   const [isFinish, setIsFinish] = useState(false);
   const [numberQuiz, setNumberQuiz] = useState({
      current: 1,
      total: NUMBER_OF_QUESTION,
   });
   const [countCorrect, setCountCorrect] = useState(0);
   const [isStop, setIsStop] = useState(false);

   const finishGame = (minutes, second) => {
      const tempObj = {
         timeFinish: { minutes, second },
         countCorrect: countCorrect,
         countQuestion: numberQuiz.total,
         name: "Figure Draw Training",
      };
      dispatch(handleAddResult(tempObj));
      dispatch(handleNextGame());
      dispatch(handleIsShowResult());
      navigate("/test/result");
   };

   const changeColorPoint = (idPoint, colorCode) => {
      if (point.status) {
         let newTemp = point.list.map((item) =>
            item.id === idPoint && !item.origin
               ? { ...item, color: colorCode }
               : item
         );

         setPoint((prev) => ({ ...prev, list: newTemp }));
      }
   };

   const nextQuiz = () => {
      let nextQuiz = numberQuiz.current + 1;
      setIsSubmit(true);

      if (point.status) {
         let newTemp = point.list.map((item) =>
            choose.includes(item.id)
               ? item
               : {
                    ...item,
                    color: " bg-transparent",
                 }
         );

         setPoint((prev) => ({ ...prev, list: newTemp }));
      }

      setTimeout(() => {
         setChoose([]);
         setIsSubmit(false);

         if (point.status) {
            let newTemp = point.list.map((item) => ({
               ...item,
               // color: " bg-slate-200",
               color: " bg-white",
            }));

            setPoint((prev) => ({ ...prev, list: newTemp }));
         }

         setResult((prev) => ({
            ...prev,
            wrong:
               prev.wrong +
               showAnswer(answer[numberQuiz.current - 1].answer, choose).unvalid
                  .length,
         }));

         // increase countCorrect
         const tempCountInCorrect = showAnswer(
            answer[numberQuiz.current - 1].answer,
            choose
         ).unvalid.length;
         if (tempCountInCorrect === 0) {
            setCountCorrect(countCorrect + 1);
         }

         setNumberQuiz({ current: nextQuiz, total: numberQuiz.total });
      }, timeShowResult_test);
   };

   const chooseAnswer = (idPoint) => {
      if (!isSubmit) {
         let newChoose = choose;
         newChoose.push(idPoint);
         setChoose(newChoose);
         changeColorPoint(idPoint, " bg-blue-500");
      }
   };

   const clearAnswer = () => {
      if (point.status) {
         let newTemp = point.list.map((item) => ({
            ...item,
            color:
               item.id === answer[numberQuiz.current - 1].origin
                  ? " bg-black"
                  : " bg-slate-200",
         }));

         setPoint((prev) => ({ ...prev, list: newTemp }));
         setChoose([]);
         setIsSubmit(false);
      }
   };

   useEffect(() => {
      if (result.time.minute === 60)
         setResult((prev) => ({
            ...prev,
            time: {
               hour: prev.time.hour + 1,
               minute: 0,
               second: 0,
            },
         }));
      if (result.time.second === 60)
         setResult((prev) => ({
            ...prev,
            time: {
               hour: prev.time.hour,
               minute: prev.time.minute + 1,
               second: 0,
            },
         }));
      let timerID = setTimeout(
         () =>
            setResult((prev) => ({
               ...prev,
               time: {
                  hour: prev.time.hour,
                  minute: prev.time.minute,
                  second: ++prev.time.second,
               },
            })),
         1000
      );

      return () => {
         clearTimeout(timerID);
      };
   }, [result.time]);

   useEffect(() => {
      if (numberQuiz.current > numberQuiz.total) {
         let newCurrent = numberQuiz.current - 1;
         setNumberQuiz({ current: newCurrent, total: numberQuiz.total });
         setIsFinish(true);

         // Finish Quiz
         let tempTimeScrore = {
            ...result,
            time: { ...result.time, second: result.time.second },
         };
         resultRef.current = tempTimeScrore;
         scoreQuiz(resultRef.current);
         // navigate("/drawinggame/history", { replace: true });
         setIsStop(true);
      } else
         changeColorPoint(
            numberQuiz.current <= numberQuiz.total
               ? answer[numberQuiz.current - 1].origin
               : answer[numberQuiz.total - 1].origin,
            " bg-black"
         );
   }, [numberQuiz]);

   return (
      <div
         className="w-full h-screen flex flex-col items-center justify-center  from-slate-200 to-black"
         style={{ backgroundColor: "#fff" }}
      >
         <div
            style={{
               width: "96px",
               height: "96px",
               position: "absolute",
               left: "16px",
               top: "16px",
            }}
         >
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
         <div className="w-[900px] h-10 flex items-center justify-between">
            <div className="flex items-center justify-center text-blue-600 cursor-default">
               <span className="text-4xl mr-1 flex items-center justify-center text-black">
                  <ion-icon name="stopwatch-outline"></ion-icon>
               </span>

               {/* {result.time.hour.toString().padStart(2, "0")}:
                  {result.time.minute.toString().padStart(2, "0")}:
                  {result.time.second.toString().padStart(2, "0")} */}
               <Clock isStop={isStop} finishGame={finishGame}></Clock>
            </div>
            <div
               className="fix-margin flex items-center justify-center text-xl text-white font-bold bg-slate-500 h-full px-10 border-2 border-white border-solid"
               style={{ marginLeft: "-95px" }}
            >
               DRAWING
            </div>
            <span className="font-medium text-3xl text-gray-500 cursor-default">
               {numberQuiz.current} / {numberQuiz.total}
            </span>
         </div>
         <div className="w-[900px] flex items-center justify-between my-20 ">
            <Sample
               id={
                  numberQuiz.current < numberQuiz.total
                     ? numberQuiz.current
                     : numberQuiz.total
               }
            />
            <div
               className="relative w-[402px] h-[408px] bg-white grid grid-cols-10 gap-8 z-[3]"
               style={{ scale: "0.98", position: "relative" }}
            >
               <div
                  className="relative w-[522px] h-[510px] "
                  style={{
                     scale: "0.98",
                     position: "absolute",
                     top: "-51px",
                     left: "-60px",
                     border: "1px solid black",
                     zIndex: "1",
                  }}
               ></div>
               {isSubmit && (
                  <img
                     className="absolute top-0 right-0 bottom-0 left-0 transition-all -z-[1]"
                     src={
                        numberQuiz.current < numberQuiz.total
                           ? answer[numberQuiz.current - 1].sample
                           : answer[numberQuiz.total - 1].sample
                     }
                     alt="answer"
                  />
               )}
               {point.list.map((item, index) => (
                  <div
                     key={index}
                     className={`w-3 h-3${item.color} rounded-full cursor-pointer`}
                     style={{ zIndex: "4" }}
                     onClick={() => chooseAnswer(item.id)}
                  ></div>
               ))}
            </div>
         </div>
         <div
            className={`flex items-center${
               isFinish ? " justify-center" : " justify-between"
            } w-[900px]`}
         >
            {!isFinish && (
               <button
                  className="flex items-center justify-center w-[140px] h-10 rounded text-xl text-black bg-white border-2 border-solid border-black font-bold cursor-pointer shadow-md"
                  onClick={clearAnswer}
               >
                  RESET
               </button>
            )}
            {!isFinish && (
               <div className="text-xl font-bold text-black">
                  Incorrect point:&ensp;
                  {isSubmit
                     ? showAnswer(answer[numberQuiz.current - 1].answer, choose)
                          .unvalid.length
                     : 0}
               </div>
            )}
            {!isFinish && (
               <button
                  className="flex items-center justify-center w-[140px] h-10 rounded text-xl text-black bg-white border-2 border-solid border-black font-bold cursor-pointer shadow-md"
                  onClick={nextQuiz}
                  disabled={isSubmit}
               >
                  ENTER
               </button>
            )}
         </div>
      </div>
   );
}
