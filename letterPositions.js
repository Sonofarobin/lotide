 const letterPositions = function(sentence) {
  const results = {};
  const joinedphrase = sentence.split(" ").join("");
    for (let i = 0; i < joinedphrase.length; i++) {
      if (results[joinedphrase[i]]) {
        results[joinedphrase[i]].push[i];

      } else 
      results[joinedphrase[i]] = [i];
    }

    return results;
  }

  module.exports = letterPositions;

