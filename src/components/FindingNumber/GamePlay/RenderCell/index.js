import React from "react";
import { cell, getCell } from "../../Data";
import "./RenderCell.css";
export const RenderCell = ({ start }) => {
    return (
        <div className="cell__container">
            {start ? (
                <div className="cell__bg">
                    {getCell().map((ele, index) => (
                        <div className="cell" key={index}>
                            <p className="cell-number__big">{ele[0]}</p>
                            <p className="cell-number__small">{ele[1]}</p>
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
