const eqArrays = function (A,B){
  if (A.length !== B.length){
    return false
  }
  for (let i = 0; i < B.length ; i++){
    if(A[i] !== B[i]){
      return false
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  let output;
  if (actual.length !== expected.length) {
    output = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        output = false;
      } else output = true;
    }
  }
  if (output) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
 };

const flatten = function (firstArray) {
  const flatArray = [];
     for (let i = 0; i < firstArray.length; i++){
        if (Array.isArray(firstArray[i])){
          for (let j = 0; j < firstArray[i].length; j++) {
            flatArray.push(firstArray[i][j]);
          }
        }
        else {
          flatArray.push(firstArray[i]);
             }
        }    
     return flatArray};