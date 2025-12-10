// 1, 2

let string1 = "Hello";
let string2 = "World123";
let string3 = "123456789";

let regex1 = /^[a-zA-Z]+$/;
let regex2 = /^[0-9]+$/;

console.log(regex1.test(string1));
console.log(regex1.test(string2));
console.log(regex1.test(string3));
console.log(regex2.test(string1));
console.log(regex2.test(string2));
console.log(regex2.test(string3));

// 3.

const input = document.querySelector("#username");
const submit = document.querySelector("#submit");

submit.disabled = true;
let regex = /^[a-zA-Z0-9]+$/;

input.addEventListener("input", function () {
  let validation = regex.test(input.value);
  submit.disabled = !validation;
  if (input.value === "") submit.disabled = true;
});
