import React from "react";

export const FigureOutComfirm = ({ isShowConfirm, onAccept }) => {
   return (
      <div className="figure-out__confirm-bg">
         <div className="figure-out__confirm-container">
            <i
               className="fa-solid fa-circle-xmark figure-out__confirm-btn-close"
               onClick={() => {
                  isShowConfirm(false);
               }}
            ></i>
            <p className="figure-out__confirm-title">
               Bạn thực sự muốn kết thúc bài thi không ?
            </p>

            <div className="figure-out__confirm-btn">
               <button
                  className="figure-out__confirm-btn-back"
                  onClick={() => {
                     isShowConfirm(false);
                  }}
               >
                  Quay lại
               </button>
               <button
                  className="figure-out__confirm-btn-accept"
                  onClick={onAccept}
               >
                  Xác nhận
               </button>
            </div>
         </div>
      </div>
   );
};
