//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case). 

const example1 = "the-stealth-warrior"
const expected1 = "theStealthWarrior"

const example2 = "The_Stealth_Warrior"
const expected2 = "TheStealthWarrior"

const example3 = "A-B-C"
const expected3 = "ABC"

function toCamelCase(str) {
    let regex = /[_-]/g;
    str = str.split(regex);
    for (let i = 1; i < str.length; i++) {
        str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
    }
    str = str.join('');
    return str;
}

console.log(toCamelCase(example1));
console.log(toCamelCase(example2));
console.log(toCamelCase(example3));