// Remove the Last Item in an Array

function removeLastItem(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, -1);
}

// Example:
console.log(removeLastItem(["apple", "banana", "cherry"])); // ["apple", "banana"]
