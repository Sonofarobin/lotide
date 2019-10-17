const eqArrays = function (A,B){
  if (A.length !== B.length){
    return false
  }
  for (let i = 0; i < B.length ; i++){
    if(A[i] !== B[i]){
      return false
    }
  }
  return true
 }
 const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B)) {
    console.log(`😊 😊 😊 Assertion Passed: [${A}] === [${B}]`);
  } else {
    console.log(`😢 😢 😢 Assertion Failed: [${A}] !== [${B}]`);
  }
 }
 

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

  assertArraysEqual(letterPositions("hello").e,[1]);

 // assertArraysEqual("hello", "hello");
