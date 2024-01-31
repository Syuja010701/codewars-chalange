// function DNAtoRNA(dna) {
//   let rna = "";

//   for (let i = 0; i < dna.length; i++) {
//     //     if (dna[i] === "T") {
//     //       rna += "U";
//     //     } else {
//     //       rna += dna[i];
//     //     }
//     rna += dna[i] == "T" ? "U" : dna[i];
//   }

//   return rna;
// }

// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((el) => (el == "T" ? "U" : el))
//     .join("");
// }

const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((el) => (el == "T" ? "U" : el))
    .join("");

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
