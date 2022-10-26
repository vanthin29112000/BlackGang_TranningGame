const StartupCover = ({
    handleInputChange,
    findNumber,
    setIsSelecting,
    setCurrentIndex,
    setCountAnswer,
    isSelecting,
    answers,
}) => {
    return (
        <div>
            <section className="cta d-flex justify-content-center align-items-center vh-100">
                <div className="cta-content">
                    <div className="container ">
                        <h2 className="display-1 lh-1 mb-4 title-cus">
                            <span>
                                WELCOM TO DOTS TRAINING EXERCISE
                            </span>
                            <br />
                        </h2>

                        <div className="d-flex justify-content-center">
                            <div className="input-group mb-3 w-25 ">
                                <input
                                    className="input-start-dotsgame  d-flex justify-content-center text-center py-2 fs-4"
                                    aria-label="Default"
                                    min={1}
                                    max={6}
                                    type="number"
                                    placeholder="Nhập số 1-6"
                                    onChange={handleInputChange}
                                    value={findNumber}
                                    disabled={isSelecting ? false : true}
                                ></input>
                            </div>
                        </div>
                        <div className="row p-0 m-0 w-100 d-flex justify-content-center">
                            <div className="col-2 d-flex justify-content-center">
                                <button
                                    className="btn-start-dotsgame rounded-circle px-3 py-2 fw-bolder border-5 fs-4 border-dark"
                                    onClick={() => {
                                        setIsSelecting(false);
                                        setCurrentIndex(0);
                                        setCountAnswer(answers.filter((x) => x.value === findNumber).length);
                                    }}
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default StartupCover;
