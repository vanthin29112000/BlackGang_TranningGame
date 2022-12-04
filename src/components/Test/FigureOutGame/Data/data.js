const { question_test } = require("../../../../Data/FigureOutGame/Ques&Ans");
const {
   countQuestion_test,
   limitedTime_test,
   isShuffle_test,
} = require("../../../../Data/FigureOutGame/SettingGame");
const { shuffle } = require("../../LeftRightGame/seeder");
let dataImport = [];
const listResult = question_test;

const renderData = () => {
   let tempArr = [];
   let section1Length = 49; //Số lượng ảnh ở section 1
   for (let i = 1; i <= section1Length; i++) {
      let tempObj = {
         id: i,
         question: "Chọn hình khác với các hình còn lại",
         questionImg: `assets/img/game-img/FigureOutGame/Section 1/${i}.png`,
         result: listResult[i - 1].result,
      };
      tempArr.push(tempObj);
   }

   let j = 50;
   for (let i = 1; i <= 50; i++) {
      let tempObj = {
         id: j,
         question: "Chọn hình khác với các hình còn lại",
         questionImg: `assets/img/game-img/FigureOutGame/Section 2/${i}.png`,
         result: listResult[j - 1].result,
      };
      tempArr.push(tempObj);
      j++;
   }
   if (isShuffle_test) {
      shuffle(tempArr);
   }
   return tempArr;
};

dataImport = renderData();

const listAnswer = ["( A )", "( B )", "( C )", "( D )", "( E )"]; // Tùy chỉnh hình thức hiện đáp án

const amountQuestion = countQuestion_test; // Số lượng câu hỏi

const limitedTime = limitedTime_test; //Thời gian giới hạn (giây)

// ==============
// Bảng xếp hạng

// sample data
/*
    {
        daySubmitted : "" => Day,
        timeFinish : "" => Minutes / seconds,
        countCorrect : 0 => Number,
        countQuestion : 0 => Number,
    }
 */
let ranking = [];

const getRanking = () => {
   return ranking;
};

const setRanking = (value) => {
   ranking.unshift(value);
};

module.exports = {
   dataImport,
   listAnswer,
   amountQuestion,
   getRanking,
   setRanking,
   limitedTime,
};
