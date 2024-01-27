// function getCount(str) {
//   const vowels = "aeiou";
//   let count = 0;
//
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }

// const getCount = (str) => {
//   const vowels = "aeiou";
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
const getCount = (str) =>
  str.split("").filter((char) => "aeiou".includes(char)).length;
console.log(getCount("salkjinvsaldkjf S(3hfslaioe"));
