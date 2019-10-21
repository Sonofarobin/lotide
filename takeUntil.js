const takeUntil = function (array, predicate) {
  let newArray = [];
  for (element of array) {
    console.log(!predicate(element));
    if (!predicate(element)) {
      newArray.push(element);
    } else {
      return newArray;
    }
  } 
  return newArray;
}


