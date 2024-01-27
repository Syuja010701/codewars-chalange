function filter_list(l) {
  let listNumber = [];
  for (const list of l) {
    if (typeof list === "number") {
      listNumber.push(list);
    }
  }

  return listNumber;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
