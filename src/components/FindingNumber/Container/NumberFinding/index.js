import React, { useState } from "react";
import { CountDown } from "../../GamePlay/CountDown";
import { PlayGame } from "../../GamePlay/PlayGame";
import { RenderCell } from "../../GamePlay/RenderCell";
import { getCell, shuffleCell } from "../../Data";
import "./numFinding.css";
export const NumberFinding = () => {
    const [start, setStart] = useState(false);
    const [countDown, setCountDown] = useState(false);
    const [count, setCount] = useState(1);
    const [countFail, setCountFail] = useState(0);

    const setCountTimer = () => {
        setCountDown(!countDown);
    };

    const changeStateStart = () => {
        setStart(!start);
    };

    const onCheckedResult = (result) => {
        const temp = getCell();

        const resultArr = temp.filter((ele) => ele[0] === count);
        if (resultArr[0][1] === Number(result)) {
            shuffleCell();
            setCount(count + 1);
        } else {
            setCountFail(countFail + 1);
        }
    };

    return (
        <>
            {countDown === true ? (
                <CountDown
                    count={count}
                    countFail={countFail}
                    setCount={setCountTimer}
                    setStart={changeStateStart}
                ></CountDown>
            ) : (
                ""
            )}
            <div className="number-finding">
                <div className="number-finding__left">
                    <RenderCell start={start} key={count}></RenderCell>
                </div>
                <div className="number-finding__right">
                    <PlayGame
                        start={start}
                        index={count}
                        countFail={countFail}
                        setCount={setCountTimer}
                        onCheckedResult={onCheckedResult}
                    ></PlayGame>
                </div>
            </div>
        </>
    );
};
