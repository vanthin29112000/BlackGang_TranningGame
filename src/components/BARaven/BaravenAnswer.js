import React from "react";

export const BaravenAnswer = ({ onChoseAnswer, dataAnswer, result }) => {
   return (
      <div className="row ba-raven__answers no-gutters">
         <div className="col c-10 l-8 ba-raven__answers-item">
            {/* render Answer */}
            <div className="ba-raven__list-answers grid-cs">
               <div className="ba-raven__list-answers-bg row no-gutters">
                  {dataAnswer.length > 0 &&
                     (result.isShowResult
                        ? dataAnswer.map((ele, index) =>
                             !result.isResult &&
                             index === result.chooseAnswer ? (
                                <div
                                   className={`ba-raven__answer-item  ${
                                      dataAnswer.length === 6
                                         ? "c-6 l-4"
                                         : "c-4 l-3"
                                   }`}
                                >
                                   <div className="ba-raven__answer-item-content ba-raven__answer-false ba-raven__answer-hover">
                                      <img
                                         src={ele.img}
                                         className="ba-raven__answer-img"
                                         alt=".png"
                                      ></img>
                                      <div className="ba-raven__answer-false-icon">
                                         <i className="fa-solid fa-xmark"></i>
                                      </div>
                                   </div>
                                </div>
                             ) : index === result.resultTrue ? (
                                <div
                                   className={`ba-raven__answer-item  ${
                                      dataAnswer.length === 6
                                         ? "c-6 l-4"
                                         : "c-4 l-3"
                                   }`}
                                >
                                   <div className="ba-raven__answer-item-content ba-raven__answer-true ba-raven__answer-hover">
                                      <img
                                         src={ele.img}
                                         className="ba-raven__answer-img"
                                         alt=".png"
                                      ></img>
                                      <div className="ba-raven__answer-true-icon">
                                         <i className="fa-solid fa-check"></i>
                                      </div>
                                   </div>
                                </div>
                             ) : (
                                <div
                                   className={`ba-raven__answer-item ${
                                      dataAnswer.length === 6
                                         ? " c-6 l-4"
                                         : " c-4 l-3"
                                   }`}
                                   key={index}
                                >
                                   <div className="ba-raven__answer-item-content ba-raven__answer-hover">
                                      <img
                                         src={ele.img}
                                         className="ba-raven__answer-img"
                                         alt=".png"
                                      ></img>
                                   </div>
                                </div>
                             )
                          )
                        : dataAnswer.map((ele, index) => (
                             <div
                                className={`ba-raven__answer-item  ${
                                   dataAnswer.length === 6
                                      ? "c-6 l-4"
                                      : "c-4 l-3"
                                }`}
                                key={index}
                                onClick={() => {
                                   onChoseAnswer(index);
                                }}
                             >
                                <div className="ba-raven__answer-item-content ba-raven__answer-hover">
                                   <img
                                      src={ele.img}
                                      className="ba-raven__answer-img"
                                      alt=".png"
                                   ></img>
                                </div>
                             </div>
                          )))}
               </div>
            </div>
         </div>
      </div>
   );
};
