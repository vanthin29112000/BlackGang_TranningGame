import React, { useEffect, useState } from "react";
import "./clock.css";
export const Clock = ({ countQuestion, showSentence, finishGame }) => {
    const [currentCount, setCount] = useState(0);
    const timer = () => setCount(currentCount + 1);

    useEffect(() => {
        if (showSentence + 1 === countQuestion) {
            finishGame(currentCount);
            return;
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, [currentCount]);

    return (
        <div className="quiz-game-clock__container">
            <div className="quiz-game-clock__bg-handgame">
                {currentCount / 60 > 9 ? Math.floor(currentCount / 60) : "0" + Math.floor(currentCount / 60)}:
                {(currentCount % 59) + 1 > 9 ? (currentCount % 59) + 1 : "0" + ((currentCount % 59) + 1)}
            </div>
        </div>
    );
};
