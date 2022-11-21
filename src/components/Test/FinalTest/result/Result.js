import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getRanking } from "../data/data";
import "./Result.css";
export const Result = () => {
   const navigate = useNavigate();
   const listResult = useSelector((state) => state.game.result);
   const isShowResult = useSelector((state) => state.game.isShowResult);

   useEffect(() => {
      if (!isShowResult) {
         navigate("/");
      }
   }, []);

   const returnHome = () => {
      navigate("/");
   };

   return (
      <>
         {isShowResult && (
            <div className="ba-raven-result__container">
               <div className="ba-raven-result__bg grid-cs">
                  <div className="ba-raven-result__content row no-gutters">
                     <div className="test-result__content-bg col c-12 m-8 l-6 ba-raven-result__content-bg-white">
                        <b>TEST RESULTS</b>
                        <div className="ba-raven-result__list">
                           <div className="ba-raven-result__list-indexing">
                              <p className="ba-raven-result__list-dateSubmmited">
                                 Game
                              </p>
                              <p>Completion time</p>
                              <p className="ba-raven-result__list-indexing-border">
                                 Number of correct
                              </p>
                              <p>Accuracy</p>
                           </div>

                           <div className="ba-raven-result__list-content">
                              {listResult.length !== 0 &&
                                 listResult.map((ele, index) => (
                                    <div
                                       className={
                                          index % 2 === 0
                                             ? "ba-raven-result__list-item"
                                             : "ba-raven-result__list-item-1"
                                       }
                                       key={index}
                                    >
                                       <p className="ba-raven-result__list-dateSubmmited">
                                          {/* {moment(ele.daySubmitted).format(
                                             "DD/MM/YYYY hh:mm"
                                          )} */}
                                          Game {index + 1}
                                       </p>
                                       <p>
                                          {("0" + ele.timeFinish.minutes).slice(
                                             -2
                                          )}
                                          :
                                          {("0" + ele.timeFinish.second).slice(
                                             -2
                                          )}
                                       </p>
                                       <p className="ba-raven-result__list-item-border">
                                          {ele.countInCorrect >= 0
                                             ? `${ele.countCorrect} / ${ele.countQuestion} ( Incorect : ${ele.countInCorrect} )`
                                             : `${ele.countCorrect} / ${ele.countQuestion}`}
                                       </p>
                                       <p>
                                          {ele.countInCorrect >= 0
                                             ? Math.round(
                                                  ((ele.countCorrect -
                                                     ele.countInCorrect * 0.5) /
                                                     ele.countQuestion) *
                                                     100 *
                                                     100
                                               ) / 100
                                             : Math.round(
                                                  (ele.countCorrect /
                                                     ele.countQuestion) *
                                                     100 *
                                                     100
                                               ) / 100}
                                          %
                                       </p>
                                    </div>
                                 ))}
                           </div>

                           <div className="ba-raven-result__button">
                              {/* <button
                           className="ba-raven-result__button-try-again"
                           onClick={onTryAgain}
                        >
                           {" "}
                           <i className="fa-solid fa-arrow-rotate-left"></i>
                           Thử lại lần nữa
                        </button> */}
                              <button
                                 className="test-result__button-home"
                                 onClick={returnHome}
                              >
                                 <i className="fa-solid fa-house"></i>
                                 {/* Về trang chủ */}
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};
