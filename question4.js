// Print Even Numbers up to n

function printEvenNumbers(n) {
  if (typeof n !== 'number' || n < 2) return;
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

// Example:
printEvenNumbers(10); // 2 4 6 8 10
