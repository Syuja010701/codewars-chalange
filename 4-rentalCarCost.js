function rentalCarCost(d) {
  let price = 40 * d;

  if (d >= 3 && d < 7) {
    return price - 20;
  } else if (d >= 7) {
    return price - 50;
  } else {
    return price;
  }
}

console.log(rentalCarCost(10));
