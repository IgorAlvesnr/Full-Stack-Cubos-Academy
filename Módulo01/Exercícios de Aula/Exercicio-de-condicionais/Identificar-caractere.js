const caractere = "2";

if ("aeiou".includes(caractere.toLowerCase())) {
    console.log(`O caractere "${caractere}" é uma VOGAL MINÚSCULA`);
} else if ("AEIOU".includes(caractere.toUpperCase())) {
    console.log(`O caractere "${caractere}" é uma VOGAL MAIÚSCULA`);
} else if ("bcdfghjklmnpqrstvwxyz".includes(caractere.toLowerCase())) {
    console.log(`O caractere "${caractere}" é uma CONSOANTE MINÚSCULA`);
} else if ("BCDFGHJKLMNPQRSTVWXYZ".includes(caractere.toUpperCase())) {
    console.log(`O caractere "${caractere}" é uma CONSOANTE MAIÚSCULA`)
} else {
    console.log(`O caractere "${caractere}" é um NUMERAL`)
}
