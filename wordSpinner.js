/*Write a function that takes in a string of one or more words
and returns the same string, but with all five or more letter words reversed.
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present. */

const str1 = "Hey fellow warriors"
const expected1 = "Hey wollef sroirraw"

const str2 = "This is a test"
const expected2 = "This is a test"

const str3 = "Stop spinning my words!"
const expected3 = "Stop gninnips my sdrow!"

function spinWords(string) {
    const splitStr = string.split(" ")
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length < 5) {
            continue;
        }
        else {
            const puncCheck = !!splitStr[i].match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)
            console.log(puncCheck)
            if (puncCheck) {
                let mark = splitStr[i][splitStr[i].length - 1]
                splitStr[i] = splitStr[i].replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
                let newWord = wordSpinner(splitStr[i]);
                console.log(newWord)
                newWord += mark;
                splitStr[i] = newWord;
            }
            else {
                let newWord = wordSpinner(splitStr[i]);
                splitStr[i] = newWord;
            }
        }
    }
    const spunString = splitStr.join(" ");
    return spunString;
}

function wordSpinner(string) {
    let i = string.length - 1
    let newStr = ""
    while (i >= 0) {
        newStr += string[i]
        i--
    }
    return newStr
}

console.log(spinWords(str1))
console.log(spinWords(str2))
console.log(spinWords(str3))