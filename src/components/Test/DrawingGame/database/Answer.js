// // import sample01 from "./template/template01.png";
// // import sample02 from "./template/template02.png";
// // import sample03 from "./template/template03.png";
// // import sample04 from "./template/template04.png";
// // import sample05 from "./template/template05.png";
// import sample01 from "../../DrawingGame/database/template/template01.png"
// import sample02 from "../../DrawingGame/database/template/template02.png"
// import sample03 from "../../DrawingGame/database/template/template03.png"
// import sample04 from "../../DrawingGame/database/template/template04.png"
// import sample05 from "../../DrawingGame/database/template/template05.png";
// import {answer as Answer} from "../../DrawingGame/database/Answer.js";
// // const Answer = [
// //    {
// //       id: "quiz01",
// //       sample: sample01,
// //       origin: "b7",
// //       answer: ["d5", "c3", "e4", "g2"],
// //    },
// //    {
// //       id: "quiz02",
// //       sample: sample02,
// //       origin: "c2",
// //       answer: ["h3", "f4", "f6", "c6"],
// //    },
// //    {
// //       id: "quiz03",
// //       sample: sample03,
// //       origin: "e5",
// //       answer: ["e3", "h4", "h7", "b7", "b2"],
// //    },
// //    {
// //       id: "quiz04",
// //       sample: sample04,
// //       origin: "i5",
// //       answer: ["c3", "c8", "f5", "g6"],
// //    },
// //    {
// //       id: "quiz05",
// //       sample: sample05,
// //       origin: "b8",
// //       answer: ["d6", "i8", "i5", "j2"],
// //    },
// // ];

// function shuffle(array) {
//    let currentIndex = array.length,
//       randomIndex;

//    // While there remain elements to shuffle.
//    while (currentIndex !== 0) {
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//          array[randomIndex],
//          array[currentIndex],
//       ];
//    }

//    return array;
// }

// export const answer = shuffle(Answer);
export const limitedTime = 420;
