const {
   isShuffle_test,
   countQuestion_test,
   limitedTime_test,
} = require("../../../../Data/LeftRightGame/SettingGame");
const { renderData, shuffle } = require("../seeder");

const question = renderData();
if (isShuffle_test) {
   shuffle(question);
}
const countQuestion = countQuestion_test;
const limitedTime = limitedTime_test; //=> time finish
module.exports = { question, countQuestion, limitedTime };
