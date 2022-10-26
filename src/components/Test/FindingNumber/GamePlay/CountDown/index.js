import React, { useEffect, useState } from "react";
// import { saveResult } from "../../Data";
import "./CountDown.css";
export const CountDown = ({ setCount, setStart }) => {
    const [currentCount, setCurrentCount] = useState(3);
    const timer = () => setCurrentCount(currentCount - 1);

    useEffect(() => {
        if (currentCount === 0) {
            setCount();
            setStart();
            return;
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, [currentCount]);

    return (
        <div className="count-down">
            <div className="count-down__time">
                <div className="count-down__time-bg">
                    <img src='../assets/img/DatLaptoplogo.png'></img>
                </div>
            </div>
        </div>
    );
};
