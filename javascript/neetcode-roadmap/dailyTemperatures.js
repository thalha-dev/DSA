/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const waitingDays = new Array(temperatures.length);

  let highTempIndex = temperatures.length - 1;
  let maxValueIndex = temperatures.length - 1;

  for (let i = temperatures.length - 1; i >= 0; i--) {
    if (temperatures[i] > temperatures[maxValueIndex]) {
      maxValueIndex = i;
    }
    if (temperatures[i] > temperatures[highTempIndex]) {
      highTempIndex = i;
    }

    if (temperatures[i] <= temperatures[highTempIndex]) {
      for (let j = i; j <= maxValueIndex; j++) {
        waitingDays[i] = 0;
        if (temperatures[j] > temperatures[i]) {
          waitingDays[i] = j - i;

          highTempIndex = j;
          break;
        }
      }
    }
  }
  return waitingDays;
};

/**
 * https://leetcode.com/problems/daily-temperatures
 * Time O(N) | Space O(N)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures, stack = []) {
  const days = Array(temperatures.length).fill(0);

  for (let day = 0; day < temperatures.length; day++) {
    /* Time O(N + N) */
    while (canShrink(stack, temperatures, day)) {
      /* Time O(N + N) */
      const prevColdDay = stack.pop();
      const daysToWait = day - prevColdDay;

      days[prevColdDay] = daysToWait; /* Ignore Space O(N) */
    }

    stack.push(day); /* Space O(N) */
  }

  return days;
};

const canShrink = (stack, temperatures, day) => {
  const previousDay = stack[stack.length - 1];
  const [prevTemperature, currTemperature] = [
    temperatures[previousDay],
    temperatures[day],
  ];
  const isWarmer = prevTemperature < currTemperature;

  return stack.length && isWarmer;
};

/**
 * https://leetcode.com/problems/daily-temperatures
 * Time O(N) | Space O(1)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures, hottest = 0) {
  const days = new Array(temperatures.length).fill(0);

  for (let day = temperatures.length - 1; 0 <= day; day--) {
    /* Time O(N + N) */
    const temperature = temperatures[day];

    const isHotter = hottest <= temperature;
    if (isHotter) {
      hottest = temperature;
      continue; /* Time O(N + N) */
    }

    search(
      temperatures,
      day,
      temperature,
      days,
    ); /* Time O(N + N) | Ignore Space O(N) */
  }

  return days;
};

const search = (temperatures, day, temperature, days, dayCount = 1) => {
  const isHotter = () => temperatures[day + dayCount] <= temperature;
  while (isHotter()) dayCount += days[day + dayCount]; /* Time O(N + N) */

  days[day] = dayCount; /* Ignore Space O(N) */
};

var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // pair: [temp, index]

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [stackT, stackInd] = stack.pop();
      res[stackInd] = i - stackInd;
    }
    stack.push([t, i]);
  }

  return res;
};

let temp = [73, 74, 75, 71, 69, 72, 76, 73];
let temp2 = [30, 40, 50, 60];
let temp3 = [30, 60, 90];

console.log(dailyTemperatures(temp));
console.log(dailyTemperatures(temp2));
console.log(dailyTemperatures(temp3));
