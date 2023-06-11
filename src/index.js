// non functional programming
let input = "    Javascript   "
let output = "<div>" + input.trim() + "</div>";

// functional programming
// 1. trim    2. wrapInDiv
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();

// function composition
const trimAndWrap = input => wrapInDiv(toLowerCase(trim(input)))