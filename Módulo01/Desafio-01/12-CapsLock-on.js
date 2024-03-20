function processData(input) {
    if (input === input.toUpperCase()) {
        return input.toLowerCase();
    } else if (input.charAt(0) === input.charAt(0).toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    } else {
        return null;
    }
}

const texto1 = "cAPS";
const texto2 = "lock";
const texto3 = "CAPS";

console.log(processData(texto1));
console.log(processData(texto2));
console.log(processData(texto3));