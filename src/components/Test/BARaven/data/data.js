// const { shuffle } = require("../../LeftRightGame/seeder");

let results = [
   {
      id: 1,
      result: 4,
   },
   {
      id: 2,
      result: 5,
   },
   {
      id: 3,
      result: 1,
   },

   {
      id: 4,
      result: 2,
   },

   {
      id: 5,
      result: 6,
   },
   {
      id: 6,
      result: 3,
   },
   {
      id: 7,
      result: 6,
   },
   {
      id: 8,
      result: 2,
   },
   {
      id: 9,
      result: 1,
   },
   {
      id: 10,
      result: 3,
   },
   {
      id: 11,
      result: 4,
   },
   {
      id: 12,
      result: 5,
   },
   {
      id: 13,
      result: 2,
   },
   {
      id: 14,
      result: 6,
   },
   {
      id: 15,
      result: 1,
   },
   {
      id: 16,
      result: 2,
   },
   {
      id: 17,
      result: 1,
   },
   {
      id: 18,
      result: 3,
   },
   {
      id: 19,
      result: 5,
   },
   {
      id: 20,
      result: 6,
   },
   {
      id: 21,
      result: 4,
   },
   {
      id: 22,
      result: 3,
   },
   {
      id: 23,
      result: 4,
   },
   {
      id: 24,
      result: 5,
   },
   {
      id: 25,
      result: 8,
   },
   {
      id: 26,
      result: 2,
   },
   {
      id: 27,
      result: 3,
   },
   {
      id: 28,
      result: 8,
   },
   {
      id: 29,
      result: 7,
   },
   {
      id: 30,
      result: 4,
   },
   {
      id: 31,
      result: 5,
   },
   {
      id: 32,
      result: 1,
   },
   {
      id: 33,
      result: 7,
   },
   {
      id: 34,
      result: 6,
   },
   {
      id: 35,
      result: 1,
   },
   {
      id: 36,
      result: 2,
   },
   {
      id: 37,
      result: 3,
   },
   {
      id: 38,
      result: 4,
   },
   {
      id: 39,
      result: 3,
   },
   {
      id: 40,
      result: 7,
   },
   {
      id: 41,
      result: 8,
   },
   {
      id: 42,
      result: 6,
   },
   {
      id: 43,
      result: 5,
   },
   {
      id: 44,
      result: 4,
   },
   {
      id: 45,
      result: 2,
   },
   {
      id: 46,
      result: 2,
   },
   {
      id: 47,
      result: 5,
   },
   {
      id: 48,
      result: 6,
   },
   {
      id: 49,
      result: 7,
   },

   {
      id: 50,
      result: 6,
   },
   {
      id: 51,
      result: 8,
   },
   {
      id: 52,
      result: 2,
   },
   {
      id: 53,
      result: 1,
   },
   {
      id: 54,
      result: 5,
   },
   {
      id: 55,
      result: 1,
   },
   {
      id: 56,
      result: 6,
   },
   {
      id: 57,
      result: 3,
   },
   {
      id: 58,
      result: 6,
   },
   {
      id: 59,
      result: 4,
   },
   {
      id: 60,
      result: 2,
   },
];

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
         answers: [
            {
               img: "./assets/img/game-img/BaRaven/question_1/A1.PNG",
               isResult: false,
            },
            {
               img: "./assets/img/game-img/BaRaven/question_1/A2.PNG",
               isResult: false,
            },
            {
               img: "./assets/img/game-img/BaRaven/question_1/A3.PNG",
               isResult: false,
            },
            {
               img: "./assets/img/game-img/BaRaven/question_1/A4.PNG",
               isResult: true,
            },
            {
               img: "./assets/img/game-img/BaRaven/question_1/A5.PNG",
               isResult: false,
            },
            {
               img: "./assets/img/game-img/BaRaven/question_1/A6.PNG",
               isResult: false,
            },
         ],
      };

      let numQuestion = 0;
      if (i <= 24) {
         numQuestion = 6;
      } else {
         numQuestion = 8;
      }

      let tempArr = [];
      for (let j = 1; j <= numQuestion; j++) {
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

// ====================

// Số lượng câu hỏi
const countQuestion = 60;

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
