import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getRanking } from "../data/data";
import "./BaRavenResult.css";
export const BaRavenResult = () => {
   const navigate = useNavigate();
   const onTryAgain = () => {
      navigate("/baraven");
   };
   const returnHome = () => {
      navigate("/dotsgame-intro");
   };

   return (
      <div className="ba-raven-result__container">
         <div className="ba-raven-result__bg grid-cs">
            <div className="ba-raven-result__content row no-gutters">
               <div className="ba-raven-result__content-bg col c-12 m-8 l-6">
                  <h3>Kết quả bài thi</h3>
                  <div className="ba-raven-result__list">
                     <div className="ba-raven-result__list-indexing">
                        <p className="ba-raven-result__list-dateSubmmited">
                           Ngày làm bài
                        </p>
                        <p>Thời gian</p>
                        <p className="ba-raven-result__list-indexing-border">
                           Số câu đúng
                        </p>
                        <p>Chính xác</p>
                     </div>

                     <div className="ba-raven-result__list-content">
                        {getRanking().length !== 0 &&
                           getRanking().map((ele, index) => (
                              <div
                                 className={
                                    index % 2 === 0
                                       ? "ba-raven-result__list-item"
                                       : "ba-raven-result__list-item-1"
                                 }
                                 key={index}
                              >
                                 <p className="ba-raven-result__list-dateSubmmited">
                                    {moment(ele.daySubmitted).format(
                                       "DD/MM/YYYY hh:mm"
                                    )}
                                 </p>
                                 <p>
                                    {("0" + ele.finishTimer.minutes).slice(-2)}{" "}
                                    :{" "}
                                    {("0" + ele.finishTimer.seconds).slice(-2)}
                                 </p>
                                 <p className="ba-raven-result__list-item-border">
                                    {ele.countCorrect}/{ele.countQuestion}
                                 </p>
                                 <p>
                                    {Math.round(
                                       (ele.countCorrect / ele.countQuestion) *
                                          100 *
                                          100
                                    ) / 100}
                                    %
                                 </p>
                              </div>
                           ))}
                     </div>

                     <div className="ba-raven-result__button">
                        <button
                           className="ba-raven-result__button-try-again"
                           onClick={onTryAgain}
                        >
                           {" "}
                           <i className="fa-solid fa-arrow-rotate-left"></i>
                           {/* Thử lại lần nữa */}
                        </button>
                        <button
                           className="ba-raven-result__button-home"
                           onClick={returnHome}
                        >
                           {" "}
                           <i className="fa-solid fa-house"></i>
                           {/* Về trang chủ */}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
