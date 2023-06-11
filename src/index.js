import { compose, pipe } from 'lodash/fp';

// non functional programming
let input = "    Javascript   "
let output = "<div>" + input.trim() + "</div>";

// functional programming
// 1. trim    2. wrapInDiv
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();

// function composition without Lodash compose
const trimAndWrap = input => wrapInDiv(toLowerCase(trim(input)))

// composes the functions from left to right
const transform = compose(wrapInDiv, toLowerCase, trim)
transform(input);

const transform2 = pipe(trim, toLowerCase, wrapInDiv)

console.log("Trim and Wrap: ", trimAndWrap(input))
console.log("Transform w/ compose: ", transform(input))
console.log("Transform w/ pipe: ", transform2(input))


