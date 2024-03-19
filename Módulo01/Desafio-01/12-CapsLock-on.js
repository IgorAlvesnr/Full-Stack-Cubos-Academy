function processData(input) {
    if (input === input.toUpperCase() || input === input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    } else {
        return input
    }
}

const texto1 = "cAPS";
const texto2 = "lock";
const texto3 = "CAPS";

console.log(processData(texto1));
console.log(processData(texto2));
console.log(processData(texto3));