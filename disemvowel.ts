//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// Note: for this kata y isn't considered a vowel.

const str1 = "This website is for losers LOL!"
const expected1 = "Ths wbst s fr lsrs LL!"

const str2 = "Yikes this site is garbage lmao"
const expected2 = "Yks ths st s grbg lm"

//My solution
export class Kata {
    static disemvowel(str: string): string {
        let strArr = str.split('')

        for (let x = 0; x < str.length; x++) {
            let char = str[x].toLowerCase()
            if (char === 'a' || char === 'e' || char === 'o' || char === 'i' || char === 'u') {
                strArr[x] = '';
            }
        }
        return strArr.join('');
    }
}

//Regex Optimal
export class KataRegex {
    static disemvowel(str: string) {
        return str.replace(/[aeiou]/gi, "");
    }
}