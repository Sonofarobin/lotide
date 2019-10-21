const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {

  console.log('array: ', array);
  console.log('callback: ', callback);
  
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}

map(words);

const results1 = map(words, word => word[0]);














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

console.log(results1);