
const countLetters = function(phrase) {
  const results = {};
  for (const item of phrase.split(" ").join("")) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
}

const testPhrase = "lighthouse in the house of the rising sun";

console.log(countLetters(testPhrase));