const { isPrime } = require('./isPrime');

let args = process.argv;

if (args.length !== 3) {
  console.log('please provide a number');
  process.exit(1);
}

let number = parseInt(args[2]);

if (Number.isNaN(number)) {
  console.log('please provide a valid number');
  process.exit(1);
}

const prime = isPrime(number);

console.log(
  prime ? `${number} is a primenumber` : `${number} is not a primenumber`
);
