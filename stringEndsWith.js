/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). */

const str1 = 'abc'
const end1 = 'bc'
const expected1 = true

const str2 = 'abc'
const end2 = 'd'
const expected2 = false

function stringEndsWith(str, end) {
    return str.endsWith(end)
}

console.log(stringEndsWith(str2, end2))