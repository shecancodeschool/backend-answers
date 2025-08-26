// Check if number is Positive, Negative, or Zero using Ternary Operator

function checkSign(number) {
  return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
}

// Examples:
console.log(checkSign(5));  // "Positive"
console.log(checkSign(-3)); // "Negative"
console.log(checkSign(0));  // "Zero"
