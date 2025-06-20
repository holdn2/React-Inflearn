// const moduleData = require("./math");
// const { add, sub } = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(3, 4));

const color = randomColor();
console.log(color);
