//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).

const str1 = "AAAA"
const expected1 = "TTTT"

const str2 = "ATTGC"
const expected2 = "TAACG"

const str3 = "GTAT"
const expected3 = "CATA"

//My solution
export class Dna {
    static dnaStrand(dna: string) {
        let newDna = ""
        for (let i = 0; i < dna.length; i++) {
            if (dna[i] === "A") newDna += "T"
            if (dna[i] === "T") newDna += "A"
            if (dna[i] === "G") newDna += "C"
            if (dna[i] === "C") newDna += "G"
        }
        return newDna
    }
}

//Optimal
export class Kata {
    static dnaStrand(dna: string) {
        return dna.replace(/./g, (c) => ({ A: 'T', T: 'A', G: 'C', C: 'G' })[c]);
    }
}