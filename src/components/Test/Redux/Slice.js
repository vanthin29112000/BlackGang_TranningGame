import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   currentCount: 1,
   result: [],
   isShowResult: true,
};

// Game 1 :
// {
//    timeFinish: { minutes, second },
//    countCorrect: amountTrue,
//    countQuestion: amountQuestion,
// }

//Game 2 :
// {
//    timeFinish: { minutes, second },
//    countCorrect: countCorrect,
//    countQuestion: countQuestion,
// };
//Game 3 :
// {
//    timeFinish: { minutes, second },
//    countCorrect: tempCorrect,
//    countQuestion: tempAnswer,
// };
//Game 4 :
// {
//    timeFinish: { minutes, second },
//    countInCorrect: countFail,
//    countCorrect: count,
//    countQuestion: countMax,
// };
// Game 5 :
// {
//    timeFinish: { minutes, second },
//    countCorrect: countTrue,
//    countQuestion: countQuestion,
// };
// Game 6 :
// {
//    timeFinish: { minutes, second },
//    countCorrect: countCorrect,
//    countQuestion: countQuestion,
// };
// Game 7 :
// {
//    timeFinish: { minutes, second },
//    countCorrect: countCorrect,
//    countQuestion: numberQuiz.total,
// };

const infoGameSlice = createSlice({
   name: "game",
   initialState,
   reducers: {
      handleAddResult: (state, actions) => {
         state.result.push(actions.payload);
         localStorage.setItem("result", JSON.stringify(state.result));
      },
      handleNextGame: (state, actions) => {
         if (state.currentCount + 1 > 8) {
            state.currentCount = 1;
            localStorage.setItem("currentCount", state.currentCount);
         } else {
            state.currentCount += 1;
            localStorage.setItem("currentCount", state.currentCount);
         }
      },
      handleIsShowResult: (state, actions) => {
         state.isShowResult = true;
         localStorage.setItem("isShowResult", true);
      },
      updateLocalStorage: (state, actions) => {
         state.currentCount =
            JSON.parse(localStorage.getItem("currentCount")) || 1;
         state.result = JSON.parse(localStorage.getItem("result")) || [];
         state.isShowResult =
            JSON.parse(localStorage.getItem("isShowResult")) || false;
      },
      resetGame: (state, actions) => {
         state.currentCount = 1;
         state.result = [];
         state.isShowResult = false;
         localStorage.removeItem("result");
         localStorage.removeItem("currentCount");
         localStorage.removeItem("isShowResult");
      },
   },
});

export const {
   handleAddResult,
   handleNextGame,
   updateLocalStorage,
   handleIsShowResult,
   resetGame,
} = infoGameSlice.actions;
export default infoGameSlice.reducer;
