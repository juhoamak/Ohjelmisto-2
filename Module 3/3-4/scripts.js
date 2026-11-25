"use strict";

const luvut = [];
let luku = Number(prompt("Syötä luku(0 lopettaa):"));

while (luku != 0) {
    luvut.push(luku);
    luku = Number(prompt("Syötä seuraava luku(0 lopettaa):"))
}

luvut.sort((a, b) => b - a);

console.log(luvut);