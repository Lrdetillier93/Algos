//Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive.
//The string can contain any char.

//my solution
export function xo(str: string) {
    const charObj = { "x": 0, "o": 0 }
    for (let char of str) {
        if (char.toLowerCase() === "x") {
            charObj["x"]++
        }
        if (char.toLowerCase() === "o") {
            charObj["o"]++
        }
    }
    return charObj['x'] === charObj['o']
}

//optimal
export function xoptimal(str: string) {
    return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
}