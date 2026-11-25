"use strict";

// funktio

function even(luvut) {
    const parilliset = [];

    for (const luku of luvut) {
        if (luku % 2 === 0){
            parilliset.push(luku);
        }
    }

    return parilliset;
}

// pääohjelma

const taulukko = [2,3,5,8,6,7,1];
const parillinenTaulukko = even(taulukko);

console.log(taulukko);
console.log(parillinenTaulukko);
