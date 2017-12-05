const checkSum = require('./checkSum');
const fs = require('fs');
const inputs = require('./inputs.json');
const input = inputs.day2;
const rows = input.split('/n');
const toSum = [];

rows.forEach((row) => {
  const rowSlitted = row.split(' ');
  toSum.push(Math.max(...rowSlitted) - Math.min(...rowSlitted));
});

console.log('day_2 result ', checkSum(toSum));
