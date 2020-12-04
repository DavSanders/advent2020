import { getInputArray } from "../getInputArray";

const daydata = getInputArray(3);

const getFirstSolution = (daydata: string[], xinc: number, yinc: number) => {
  let treesHit = 0;
  let xpos = 0;

  for (let ypos = 0; ypos < daydata.length; ypos = ypos + yinc) {
    if (xpos > daydata[ypos].length - 2) {
      xpos = 1 + xpos - daydata[ypos].length;
    }
    const char = daydata[ypos][xpos];

    if (char == "#") {
      treesHit++;
    }

    xpos = xpos + xinc;
  }

  return treesHit;
};

const one = getFirstSolution(daydata, 3, 1);
console.log(one);

const getSecondSolution = (daydata: string[]) => {
  const a = getFirstSolution(daydata, 3, 1);
  const b = getFirstSolution(daydata, 1, 1);
  const c = getFirstSolution(daydata, 5, 1);
  const d = getFirstSolution(daydata, 7, 1);
  const e = getFirstSolution(daydata, 1, 2);

  return a * b * c * d * e;
};

const two = getSecondSolution(daydata);
console.log(two);
