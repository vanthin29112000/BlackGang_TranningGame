let ranking = [];

const addNewRanking = (newRank) => {
   ranking.unshift(newRank);
};

const getRanking = () => {
   return ranking;
};

const countCorrect = (ele) => {
   let count = 0;
   ele.arrAnswer.forEach((i) => {
      if (i.correct === true) {
         count++;
      }
   });
   return count;
};

module.exports = {
   addNewRanking,
   getRanking,
   countCorrect,
};
