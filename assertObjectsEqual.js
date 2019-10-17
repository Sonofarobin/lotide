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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if(keys1.length === keys2.length) {
   for (let key of keys1) {
     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
       if (!eqArrays(object1[key], object2[key])) {
 return false
       }
     }
     else if(object1[key] !== object2[key]){
       return false;
     }
     
   }
     return true;
  } else {
    return false
  }
 };
 

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(actual)}`);
    return true;
  }
  else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
  };

 const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false

  