export const showAnswer = (sampleAnswer, chooseAnswer) => {
  if (chooseAnswer.length < 1)
    return {
      valid: [],
      unvalid: sampleAnswer,
    };

  for (let index = 0; index < sampleAnswer.length; index++) {
    if (chooseAnswer.length == index) {
      return {
        valid: chooseAnswer,
        unvalid: sampleAnswer.slice(index),
      };
    }

    if (sampleAnswer[index] !== chooseAnswer[index]) {
      return {
        valid: chooseAnswer.slice(0, index),
        unvalid: chooseAnswer.slice(index),
      };
    }
  }

  return { valid: chooseAnswer, unvalid: [] };
};

export const scoreQuiz = (newRecord) => {
  let scoreRef = JSON.parse(sessionStorage.getItem("drawHistory"));
  scoreRef.unshift(newRecord);
  sessionStorage.setItem("drawHistory", JSON.stringify(scoreRef.slice(0, 10)));
};
