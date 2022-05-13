/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N. */

const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
const expected1 = 11

const arr2 = [160, 3, 1719, 19, 11, 13, -21]
const expected2 = 160

//Original Solution
function findOutlier(nums) {
    const isEven = num => num % 2 === 0;
    const obj = { true: 0, false: 0 }

    for (let i = 0; i < nums.length; i++) {
        isEven(nums[i]) ? obj[true]++ : obj[false]++
    }

    if (obj[true] > obj[false]) {
        for (num of nums) {
            if (!isEven(num)) return num
        }
    }
    if (obj[true] < obj[false]) {
        for (num of nums) {
            if (isEven(num)) return num
        }
    }
}

//Optimal Solution
function findOutlierBest(nums) {
    const even = nums.filter(a => a % 2 == 0);
    const odd = nums.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlierBest(arr1))
console.log(findOutlierBest(arr2))