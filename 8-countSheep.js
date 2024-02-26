// const countSheep = function (num) {
//   let result = "";
//   for (let i = 0; i <= num; i++) {
//     result += i + " sheep...";
//   }
//   return result;
// };

// const countSheep = function (num) {
//   let result = "";
//   for (let i = 0; i <= num; i++) {
//     result += i + " sheep...";
//   }
//   return result;
// };

// const countSheep = (num) => {
//   let result = '';

//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`
//   }

//   return result
// }

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
