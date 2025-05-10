const PI = 3.14;

let radius = 3;

let area = radius ** 2 * PI;

console.log(area)

radius = 20;

area = radius ** 2 * PI;

console.log(area)

const ONE = 1;
const TWO = '2';

let result = ONE * TWO;

console.log(result);

result = ONE + TWO;

console.log(result);

let globalVariable = "I'm global";

function myFunction() {
    let blockVariable = "I am on the local level";
    console.log(blockVariable);
}
myFunction();
console.log(globalVariable);
console.log(blockVariable)