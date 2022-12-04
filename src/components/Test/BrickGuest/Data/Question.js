const { question_test } = require("../../../../Data/BrickGuest/Ques&Ans");
const {
   countQuestion_test,
   limitedTime_test,
   isShuffle_test,
} = require("../../../../Data/BrickGuest/SettingGame");
const { shuffle } = require("../../FindingNumber/seeder");

const questionAndAnswer = question_test;

if (isShuffle_test) {
   shuffle(questionAndAnswer);
}

const countQuestion = countQuestion_test; //=> Số câu hỏi muốn trả lời
const limitedTime = limitedTime_test; //=> Thời gian thực hiện bài

const arrayAnswer = { YES: true, No: false };

const random = () => {
   return Math.floor(Math.random() * 4);
};

module.exports = {
   questionAndAnswer,
   countQuestion,
   random,
   arrayAnswer,
   limitedTime,
};
