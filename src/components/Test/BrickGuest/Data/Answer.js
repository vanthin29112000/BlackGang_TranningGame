// sample data
/*
    {
        daySubmitted : "" => Day,
        countCorrect : 0 => Number,
        countQuestion : 0 => Number,
        finishTime : {
            minutes : 0 => Number,
            seconds : 0 => Number
        }
    }
 */

let ranking = [];

const addNewRanking = (newRanking) => {
   ranking.unshift(newRanking);
};

const getRanking = () => {
   return ranking;
};

module.exports = { addNewRanking, getRanking };
