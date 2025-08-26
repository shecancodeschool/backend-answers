// Triple the Numbers
// Returns a new array where each number is multiplied by 3.

function tripleNumbers(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(num => (typeof num === 'number' ? num * 3 : num));
}

// Example:
console.log(tripleNumbers([2, 4, 6])); 
