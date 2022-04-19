/*
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. 
Count how many candles are tallest. 
*/
const arr1 = [3, 2, 1, 3]

/*
Function Description:

Complete the function birthdayCakeCandles

birthdayCakeCandles has the following parameter(s):

    int candles[n]: the candle heights

Returns:

    int: the number of candles that are tallest

*/

function birthdayCakeCandles(candles) {
    const heightObj = {}
    let max = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] in heightObj) {
            heightObj[candles[i]]++
        }
        else {
            heightObj[candles[i]] = 1;
        }

        if (candles[i] > max) {
            max = candles[i];
        }
    }
    return heightObj[max];
}

console.log(birthdayCakeCandles(arr1))