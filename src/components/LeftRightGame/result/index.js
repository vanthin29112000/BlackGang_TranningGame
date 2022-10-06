import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { countCorrect, getRanking } from "../Data/answer";
import "./result.css";
export const HandResult = () => {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem("playerName");

    return (
        <>
            <NavLink to="/">
                <img className="logo-image" src="../assets/img/DatLaptoplogo.png" alt="Logo.ng"></img>
            </NavLink>
            <div className="row align-items-center justify-content-center h-100 hand-quiz-game__container ">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <p className="left-right-game-result__title">HISTORY</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left-right-game-result__bg">
                            <div className="left-right-game-result__container">
                                <div className="list-result">
                                    {getRanking().map((ele, index) =>
                                        index < 10 ? (
                                            <div
                                                className={
                                                    index === 0
                                                        ? "left-right-game-result-item left-right-game-result-current"
                                                        : "left-right-game-result-item"
                                                }
                                            >
                                                <p>{index + 1}.</p>
                                                <p>{userName}</p>
                                                <p>
                                                    Score :{" "}
                                                    {((countCorrect(ele) / ele.arrAnswer.length) * 100).toFixed(2)}%
                                                </p>
                                                <p>Time: {ele.finishTime} s</p>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6 d-flex justify-content-end">
                            <div
                                className="left-right-game-result__home-button "
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Menu
                            </div>
                        </div>
                        <div className="col-6">
                            <div
                                className="left-right-game-result__again-button"
                                onClick={() => {
                                    navigate("/handgame");
                                }}
                            >
                                Replay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
