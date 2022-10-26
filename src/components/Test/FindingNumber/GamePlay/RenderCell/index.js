import React from "react";
import "./RenderCell.css";
export const RenderCell = ({ cell }) => {
   return (
      <div className="cell__container">
         <div className="cell__bg">
            {cell.map((ele, index) => (
               <div className="cell" key={index}>
                  <p className="cell-number__big">{ele[0]}</p>
                  <p className="cell-number__small">{ele[1]}</p>
               </div>
            ))}
         </div>
      </div>
   );
};
