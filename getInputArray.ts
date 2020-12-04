import * as fs from "fs";

export function getInputArray(daynumber: number) {
  const dataString = fs.readFileSync(`./day${daynumber}/data.txt`, "utf-8");
  const array = dataString.split("\n");
  return array;
}
