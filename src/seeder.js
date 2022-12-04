const renderData = () => {
   let question = [];

   for (let i = 1; i <= 204; i++) {
      question.push({
         image: `./assets/img/game-img//HandGame/LEFT/L (${i}).jpg`,
         question: "Which hand is this ?",
         answer: ["Left", "Right"],
         result: 0,
      });
   }
   for (let i = 223; i <= 517; i++) {
      question.push({
         image: `./assets/img/game-img//HandGame/RIGHT/R (${i}).jpg`,
         question: "Which hand is this ?",
         answer: ["Left", "Right"],
         result: 1,
      });
   }
   return question;
};

function shuffle(array) {
   var currentIndex = array.length,
      temporaryValue,
      randomIndex;

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
   }

   return array;
}
module.exports = { renderData, shuffle };
