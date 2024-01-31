// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints);
//   let avarage = 0;
//   classPoints.forEach((element) => {
//     avarage += element;
//   });

//   return avarage / classPoints.length > yourPoints ? false : true;
// }

const betterThanAverage = (classPoints, yourPoints) => {
  const average =
    (classPoints.reduce((sum, point) => sum + point, 0) + yourPoints) /
    (classPoints.length + 1);
  return average <= yourPoints;
};
console.log(betterThanAverage([2, 3], 5));
