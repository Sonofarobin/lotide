const findKeyByValue = function(object,value) {
  keys = Object.keys(object)
  for (const key of keys) {
    if (value === object[key]) {
return key
    }
  }
}

module.exports = findKeyByValue;


