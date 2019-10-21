# lotide
# Small person ripoff of Lodash

## Purpose
​
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**
​
This project was created and published by short people as part the Lighthouse Labs WebDev bootcamp.
​
## Usage
​
**Install it:**
​
`npm install @sonofarobin/lotide`
​
**Require it:**
​
`const _ = require('@sonofarobin/lotide');`
​
**Call it:**
​
`const results = _.tail([1, 2, 3]) // => [2, 3]`
​
## Documentation
​
The following functions are currently implemented:
​
* `assertArraysEqual(arr1, arr2)`: Logs a message to show whether 2 arrays match.
* `assertEqual(x,y)`: Logs a message to show whether 2 primary objects match.
* `assertObjectsEqual(Obj1, Obj2)`: Logs a message to show whether 2 objects match.
* `countLetters(string)`: Returns the count of each letter of the string with an Object format.
* `countOnly(allItems, itemsToCount)`: Returns the number of times a value (itemsToCount) appears in an array
* `eqObject(object1, object2)`: Compares tow objects and Returns a bollean if the values are the same and the number of keys are the same. *This currently does not work on nested objects- to be implented at a later date*
* `eqArrays(arr1,arr2)`: Compare 2 arrays and return true if they’re equal. *This currently does not work on nested arrays- to be implented at a later date*
* `findKey(obj1, callback)`: Returns the first key which matches the value which is given by the callback.
* `findKeyByValue(object, value)`: Returns the first key which matches the value. (This is with no callback function).
* `head(array)`: Returns the first element of the array.
* `letterPositions(sentence)`: Returns an object that contains the letters (key) and index positions (value) of the sentence
* `map(array, callback)`: takes in two arguments 1) array to map and 2) callback function (when predicate is met) should return the altered array
* `middle(array)`: Returns a new array with the middle index value/s of the original array
* `tail(array)`: Returns a new array without the first index value of the original array
* `takeUntil(array, callback)`: takes a slice of an array with index values taken from the beginning until callback/predicate Returns a truthy value