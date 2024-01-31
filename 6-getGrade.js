function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;

  let nilai = "";
  if (average >= 90 && average <= 100) {
    nilai = "A";
  } else if (average >= 80 && average < 90) {
    nilai = "B";
  } else if (average >= 70 && average < 80) {
    nilai = "C";
  } else if (average >= 60 && average < 70) {
    nilai = "D";
  } else {
    nilai = "F";
  }

  return nilai;
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(82, 85, 87));
console.log(getGrade(70, 70, 70));
console.log(getGrade(65, 70, 59));
console.log(getGrade(44, 55, 52));
