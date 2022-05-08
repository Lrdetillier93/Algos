/* Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

    Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

const num1 = 1
const expected1 = false

const num2 = 73
const expected2 = true

const num3 = 40
const expected3 = false

const num4 = -1
const expected4 = false

function isPrime(num) {
    if (num <= 1) return false;

    const root = Math.sqrt(num)

    for (let i = 2; i <= root; i++) {
        if (num % i === 0) return false
    }
    return true;
}

console.log(isPrime(num1))
console.log(isPrime(num2))
console.log(isPrime(num3))
console.log(isPrime(num4))
console.log(isPrime(2147483647))