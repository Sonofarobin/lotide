const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
 const keys1 = Object.keys(object1);
 const keys2 = Object.keys(object2);
 if(keys1.length === keys2.length) {
  for (let key of keys1) {

    if (object1[key] !== object2[key]){
      return false;
    }
    
  }
    return true;
 } else {
   return false
 }
};

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



//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

//const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
