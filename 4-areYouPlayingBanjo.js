// function areYouPlayingBanjo(name) {
//   if (name.charAt(0) === "R" || name.charAt(0) === "r") {
//     return `${name} does not play banjo`;
//   } else {
//     return `${name} plays banjo"`;
//   }
// }

function areYouPlayingBanjo(name) {
  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

// const areYouPlayingBanjo = (name) =>
//   name.charAt(0) === "R" || name.charAt(0) === "r"
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("Raul"));
