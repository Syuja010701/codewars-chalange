// function findShort(s) {
//   const sToArray = s.split(" ");
//   let minsWords = sToArray.map((word) => word.length);
//   let minWord = Math.min(...minsWords);
//   return minWord;
// }

const findShort = (s) => Math.min(...s.split(" ").map((word) => word.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
