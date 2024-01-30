function numberOfRectangles(rows, columns) {
  if (rows <= 0 || columns <= 0) {
    return "Invalid dimensions. Rows and columns must be positive integers.";
  }

  let totalRectangles = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      totalRectangles += i * j;
    }
  }

  return totalRectangles;
}

let result = numberOfRectangles(5, 5);
console.log(result);
