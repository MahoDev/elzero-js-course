import { a as numOne, b as numTwo, c as numThree } from "./mod-two.js";
export { numOne, numTwo, numThree };

export default function (...args) {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
