// Count Characters in a String without using .length

function countCharacters(str) {
  if (typeof str !== 'string') return 0;
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

// Example:
console.log(countCharacters("coding")); // 6
