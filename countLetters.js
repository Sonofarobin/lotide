
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

module.exports = countLetters;

