// const { shuffle } = require("../../LeftRightGame/seeder");

const { question_test } = require("../../../../Data/BARaven/Ques&Ans");
const {
   countQuestion_test,
   isShuffle_test,
} = require("../../../../Data/BARaven/SettingGame");
const { shuffle } = require("../../../../seeder");

let results = question_test;

let dataImport = [];

// =====================
// Bộ trộn câu hỏi và những câu trả lời

// dataImport = dataImport.map((ele) => {
//    return { ...ele, answers: shuffle(ele.answers) };
// });

// dataImport = shuffle(dataImport);

// =====================

// Render data
const renderData = () => {
   let tempData = [];
   for (let i = 1; i <= 60; i++) {
      let tempObj = {
         id: i,
         question: `./assets/img/game-img/BaRaven/question_${i}/Q.PNG`,
         answers: [],
      };

      let tempArr = [];
      for (let j = 1; j <= results[i - 1].countAns; j++) {
         let tempObjItem = {
            img: `./assets/img/game-img/BaRaven/question_${i}/A${j}.PNG`,
            isResult: false,
         };
         if (j === results[i - 1].result) {
            tempObjItem.isResult = true;
         }

         tempArr.push(tempObjItem);
      }

      tempObj.answers = tempArr;

      tempData.push(tempObj);
   }
   return tempData;
};

dataImport = renderData();
if (isShuffle_test) {
   shuffle(dataImport);
}
// ====================

// Số lượng câu hỏi
const countQuestion = countQuestion_test;

// ==============
// Bảng xếp hạng

// sample data
/*
    {
        daySubmitted : "" => Day,
        countCorrect : 0 => Number,
        countQuestion : 0 => Number,
        finishTimer : {
         minutes : 0 =>Number,
         seconds : 0 =>Number,
        }
    }
 */
let ranking = [];

const getRanking = () => {
   return ranking;
};

const setRanking = (amountTrue, seconds, minutes) => {
   let tempObj = {
      daySubmitted: new Date(),
      countCorrect: amountTrue,
      countQuestion: countQuestion,
      finishTimer: {
         minutes,
         seconds,
      },
   };

   ranking.unshift(tempObj);
};

module.exports = { dataImport, setRanking, getRanking, countQuestion };
