import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { amountQuestion, dataImport, setRanking } from "../Data/data";
import { Clock } from "../Layout/Clock";
import "./FigureOut.css";
import { FigureOutComfirm } from "./FigureOutComfirm/FigureOutComfirm";
import { FigureOutQuestion } from "./FigureOutQuestion/FigureOutQuestion";
import { useDispatch } from "react-redux";
import "./grid.css";
import { handleAddResult, handleNextGame } from "../../Redux/Slice";
export const FigureOut = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [amountFinish, setIsAmountFinish] = useState(0);
   const [amountTrue, setAmountTrue] = useState(0);
   const [confirm, setConfirm] = useState({
      isShowConfirm: false,
      isAccept: false,
   });
   const [isStopTime, setIsStopTime] = useState(false);
   const [data, setData] = useState(dataImport || []);

   const onCheckFinish = (isTrue) => {
      if (isTrue) {
         setAmountTrue(amountTrue + 1);
      }
      setIsAmountFinish(amountFinish + 1);
   };

   // const onFinishGame = (minutes, second) => {
   //    const tempObj = {
   //       daySubmitted: new Date(),
   //       timeFinish: { minutes, second },
   //       countCorrect: amountTrue,
   //       countQuestion: amountQuestion,
   //    };

   //    setRanking(tempObj);

   //    navigate("/figureoutgame/result");
   // };

   const onFinishGame = (minutes, second) => {
      const tempObj = {
         timeFinish: { minutes, second },
         countCorrect: amountTrue,
         countQuestion: amountQuestion,
      };
      dispatch(handleAddResult(tempObj));
      dispatch(handleNextGame());
      // navigate("/");
   };

   const isShowConfirm = (isShow) => {
      setConfirm({
         isShowConfirm: isShow,
         isAccept: false,
      });
   };

   const onAccept = () => {
      setConfirm({
         isShowConfirm: false,
         isAccept: true,
      });

      setIsStopTime(true);
   };

   const onSaveResult = (id, isTrue, answer) => {
      const index = data.findIndex((ele) => ele.id === id);
      let tempData = [...data];
      tempData[index] = {
         ...data[index],
         isTrue: isTrue,
         answer: answer,
      };
      setData(tempData);
   };

   return (
      <div className="figure-out__container" style={{ padding: "0px" }}>
         <div className="figure-out__top-content"></div>
         <div className="figure-out__bottom-content"></div>
         <div className="figure-out__body grid">
            {confirm.isShowConfirm && (
               <FigureOutComfirm
                  isShowConfirm={isShowConfirm}
                  onAccept={onAccept}
               ></FigureOutComfirm>
            )}
            <div className="figure-out__body-bg row no-gutters">
               <div className="c-10 m-6 l-11 figure-out__body-content">
                  <div className="figure-out__body-content-timer-countPage">
                     <div className="figure-out__body-content-countPage">
                        <b>HOÀN THÀNH : </b>
                        <p>
                           {amountFinish} / {amountQuestion}
                        </p>
                     </div>
                     <div className="figure-out__body-content-title">
                        <p>FIGURE OUT</p>
                     </div>

                     <div className="figure-out__body-content-timer">
                        <Clock
                           isStopTime={isStopTime}
                           onFinishGame={onFinishGame}
                        ></Clock>
                     </div>
                  </div>

                  <FigureOutQuestion
                     data={data}
                     onSaveResult={onSaveResult}
                     onCheckFinish={onCheckFinish}
                     isShowConfirm={isShowConfirm}
                  ></FigureOutQuestion>
               </div>
            </div>
         </div>
      </div>
   );
};
