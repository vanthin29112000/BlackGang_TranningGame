import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { ranking, renderCell } from "../../Data";
import "./Result.css";
export const FindNumberResult = () => {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem("playerName");
    return (
        <>
            <div className="bg-image"></div>
            <NavLink to="/">
                <img className="logo-image" src="../assets/img/DatLaptoplogo.png" alt="Logo.png"></img>
            </NavLink>
            <div className="row align-items-center justify-content-center h-100 result-game__bg">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <p className="result-game__title">HISTORY</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="result-game__container">
                                <div className="list-result">
                                    {ranking.map((ele, index) => (
                                        <div className={index === 0 ? "result-item result-current" : "result-item"}>
                                            <p>{index + 1}.</p>
                                            <p>{userName}</p>
                                            <p>Incorrect : {ele.countFail} </p>
                                            <p>
                                                {("0" + ele.timer.minutes).slice(-2)}:
                                                {("0" + ele.timer.seconds).slice(-2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6 d-flex justify-content-center">
                            <div
                                className="find-number-result-game__home-button"
                                onClick={() => {
                                    renderCell();
                                    navigate("/");
                                }}
                            >
                                Menu
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <div
                                className="find-number-result-game__again-button "
                                onClick={() => {
                                    renderCell();
                                    navigate("/findnumber");
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
