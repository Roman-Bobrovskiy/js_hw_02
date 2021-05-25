const numbers = [];
let total = 0;
for (let i = 0; true; i++) {
  let input = +prompt("Enter numbers");
  numbers.push(input);
  if (!input) break;
  if (numbers.length > 0) {
    total += numbers[i];
  }
}

if (total) {
  console.log(`Total: ${total}`);
} else if (!/^[0-9]+$/.numbers) {
  alert("Try again");
}

// console.log(numbers);
