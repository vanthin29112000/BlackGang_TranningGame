import React, { useState } from "react";
import { amountQuestion, dataImport } from "../../Data/data";
import { FigureOutAnswer } from "./FigureOutAnswer";

export const FigureOutQuestion = ({
   data,
   onSaveResult,
   onCheckFinish,
   isShowConfirm,
}) => {
   const [pageNum, setPageNum] = useState(1);
   let pageEnd = Math.ceil(amountQuestion / 9);

   const onNextPage = () => {
      if (pageNum <= pageEnd) {
         setPageNum(pageNum + 1);
      }
   };
   const onBackPage = () => {
      if (pageNum > 1) {
         setPageNum(pageNum - 1);
      }
   };

   return (
      <div className="figure-out__body-list-question grid-cs">
         <div className="figure-out__body-list-question-bg row no-gutters">
            {data.length > 0 &&
               data.map((ele, index) =>
                  index >= (pageNum - 1) * 9 && index < pageNum * 9 ? (
                     <div
                        className="c-12 l-4 figure-out__body-question-item"
                        key={index}
                     >
                        <div className="figure-out__body-question-item-content">
                           <p>
                              <b>Câu {index + 1} : </b>
                              {ele.question}
                           </p>
                           <div className="figure-out__body-question-item-question-bg">
                              <FigureOutAnswer
                                 question={ele}
                                 onCheckFinish={onCheckFinish}
                                 onSaveResult={onSaveResult}
                              ></FigureOutAnswer>
                           </div>
                        </div>
                     </div>
                  ) : (
                     ""
                  )
               )}
         </div>

         <div className="figure-out__body-list-button">
            <div className="figure-out__body-title-finish">
               <b>CÂU HỎI : </b>
               <p>
                  ({(pageNum - 1) * 9 + 1}{" "}
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                  {pageNum * 9 <= amountQuestion ? pageNum * 9 : amountQuestion}
                  ) / {amountQuestion}
               </p>
            </div>
            <div className="figure-out__body-button">
               {pageNum > 1 && (
                  <button
                     className="figure-out__body-button-back"
                     onClick={onBackPage}
                  >
                     <i className="fa-solid fa-arrow-right"></i> Quay lại
                  </button>
               )}
               {pageNum < pageEnd && (
                  <button
                     className="figure-out__body-button-next"
                     onClick={onNextPage}
                  >
                     Tiếp theo <i className="fa-solid fa-arrow-right"></i>
                  </button>
               )}

               {pageNum === pageEnd && (
                  <button
                     className="figure-out__body-button-end"
                     onClick={() => {
                        isShowConfirm(true);
                     }}
                  >
                     Kết thúc
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};
