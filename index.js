const inputs = require('./inputs.json');
const input = inputs.day1;
let result = 0;
const toSum = [];

for (let i = 0; i <= input.length; i += 1) {
  const selfNumber = parseInt(input[i]);
  let nextNumber = parseInt(input[i + 1]);

  if (i === input.length - 1) {
    nextNumber = parseInt(input[0]);
  }

  if (selfNumber === nextNumber) {
    toSum.push(selfNumber);
  }
}

result = toSum.reduce((a, b) => a + b, 0);
console.log('RESULT', result);
