const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const testPhrase = "lighthouse in the house";

console.log(countLetters(testPhrase));