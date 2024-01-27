function isTriangle(a, b, c) {
  let tes;
  if (a + b > c && a + c > b && b + c > a) {
    tes = true;
  } else {
    tes = false;
  }
  return tes;
}

console.log(isTriangle(1, 2, 3));
