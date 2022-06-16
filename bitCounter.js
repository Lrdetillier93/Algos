//Write a function that takes an integer as input 
//and returns the number of bits that are equal to one in the binary representation of that number. 
//You can guarantee that input is non-negative.

const num1 = 0
const expected1 = 0

const num2 = 4
const expected2 = 1

const num3 = 7
const expected3 = 3

const num4 = 9627892003
const expected4 = 21

//My solution

function convertToBinary(number, bin) {
    if (number > 0) {
        return convertToBinary(parseInt(number / 2)) + (number % 2)
    };
    return '';
}

const countBits = (n) => {
    let bitCount = 0;
    const bin = convertToBinary(n)
    console.log(bin)

    for (bit of bin) {
        if (bit === '1') {
            bitCount++;
        }
    }

    return bitCount;
};

//Optimal Solution
const countBitsBetter = n => n.toString(2).split('0').join('').length;

console.log(countBits(num1))
console.log(countBits(num2))
console.log(countBits(num3))
console.log(countBitsBetter(num4))