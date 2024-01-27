function addBinary(a, b) {
  const sum = a + b;

  const binarySum = sum.toString(2);

  return binarySum;
}

// const addBinary = (a, b) => (a + b).toString(2);

console.log(addBinary(5, 9));
