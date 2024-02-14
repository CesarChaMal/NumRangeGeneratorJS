// Defines a function to generate a range of numbers between 'start' and 'end' using array methods.
const range = (start, end) => {
  // Creates an array from a sequence of integers starting from 0 up to (end - start), then maps each element to adjust the starting point.
  let result = [...Array(end - start + 1).keys()].map(el => el + start);
  // Returns the resulting array of numbers.
  return result;
};

// Defines a recursive function to generate a range of numbers between 'start' and 'end'.
function rangeRecursive(start, end, result = []) {
  // Base case: if 'start' exceeds 'end', returns the accumulated result.
  if (start > end) return result;
  // Adds the current 'start' value to the result array.
  result.push(start);
  // Recursively calls itself with the next value of 'start', building up the 'result' array.
  return rangeRecursive(start + 1, end, result);
}

// Defines a function to generate a range of numbers using the Array.from() method.
const rangeArrayFrom = (start, end) => 
  // Creates a new array with a specified length and maps each element to its corresponding number in the range.
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

// Defines a generator function to yield a range of numbers between 'start' and 'end'.
function* rangeGenerator(start, end) {
  // Loops from 'start' to 'end', yielding one number at a time.
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
// Uses the spread operator to convert the generator's yielded values into an array.

module.exports = { range, rangeRecursive, rangeArrayFrom, rangeGenerator };
