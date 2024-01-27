// function abbrevName(name) {
//   let initial;

//   let index = name.indexOf(" ") + 1;

//   initial = `${name[0].toUpperCase()}.${name[index].toUpperCase()}`;

//   return initial;
// }

const abbrevName = (name) => {
  let index = name.indexOf(" ") + 1;

  let initial = `${name[0].toUpperCase()}.${name[index].toUpperCase()}`;

  return initial;
};
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
