/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

const num1 = 10
const expected1 = 23

const num2 = -1
const expected2 = 0

const num3 = 23
const expected3 = 119

//First look solution

function sumOf3Or5(num) {
    let numObj = {};
    let sum = 0;

    if (num < 0) return 0

    for (let i = 1; i < num; i++) {
        if (i % 3 === 0) {
            numObj[i] = 1;
            sum += i;
        }
        if (i % 5 === 0) {
            if (numObj[i]) {
                continue;
            }
            else {
                numObj[i] = 1;
                sum += i;
            }
        }
    }
    return sum
}

//Optimal solution
function optimal3or5(num) {
    var sum = 0;

    for (var i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}


console.log(sumOf3Or5(num1))
console.log(sumOf3Or5(num2))
console.log(sumOf3Or5(num3))
