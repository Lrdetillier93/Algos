/* Given five positive integers, find the minimum and maximum values 
    that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

const arr1 = [1, 2, 3, 4, 5]
const expected = "10, 14"

const arr2 = [7, 69, 2, 221, 8974]
const expected2 = "299, 9271"

function miniMaxSum(arr) {
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    let minSum = sum;
    const arrsum = sum;
    for (const num of arr) {
        sum = arrsum - num;
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < minSum) {
            minSum = sum;
        }
    }
    console.log(`${minSum} ${maxSum}`)
}

miniMaxSum(arr1)
miniMaxSum(arr2)