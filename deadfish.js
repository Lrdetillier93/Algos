//Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array

// Invalid characters should be ignored.

function deadfish(str) {
    value = 0;
    output = [];
    for (cmd of str) {
        if (cmd === "i") {
            value++;
        }
        if (cmd === "d") {
            value--;
        }
        if (cmd === "s") {
            value *= value;
        }
        if (cmd === "o") {
            output.push(value);
        }
    }

    return output
}

console.log(deadfish("iiisdoso"))