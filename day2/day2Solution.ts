import { getInputArray } from "../getInputArray";

const day2data = getInputArray(2);

const getPuzzle1solution = (day2data) => {
  let validlines: string[] = [];

  for (let i = 0; i < day2data.length; i++) {
    const splitline = day2data[i].split(" ");
    const range = splitline[0].split("-");
    const min = +range[0];
    const max = +range[1];
    const letter = splitline[1][0];
    const password = splitline[2];

    const count = password.split(letter).length - 1;

    if (min <= count && count <= max) {
      validlines.push(day2data[i]);
    }
  }

  return validlines.length;
};

const one = getPuzzle1solution(day2data);

console.log(one);

const getPuzzle2solution = (day2data: string[]) => {
  let validlines: string[] = [];

  for (let i = 0; i < day2data.length; i++) {
    const splitline = day2data[i].split(" ");
    const positions = splitline[0].split("-");
    const pos1 = +positions[0];
    const pos2 = +positions[1];
    const letter = splitline[1][0];
    const password = splitline[2];

    const relevantLetters = password[pos1 - 1] + password[pos2 - 1];

    const count = relevantLetters.split(letter).length - 1;

    if (count == 1) {
      validlines.push(day2data[i]);
    }
  }

  return validlines.length;
};

const two = getPuzzle2solution(day2data);

console.log(two);
