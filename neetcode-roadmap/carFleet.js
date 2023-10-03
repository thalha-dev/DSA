var carFleet = function (target, position, speed) {
  const pair = [];

  // Create an array of pairs (position, speed)
  for (let i = 0; i < position.length; i++) {
    pair.push([position[i], speed[i]]);
  }

  // Sort the pairs in reverse order based on position
  pair.sort((a, b) => b[0] - a[0]);

  const stack = [];

  for (const [p, s] of pair) {
    const timeToTarget = (target - p) / s;
    stack.push(timeToTarget);

    // Check if there's a car in front and if it takes less or equal time to reach the target
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};

// Example usage:
const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
