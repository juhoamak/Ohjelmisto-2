"use strict";

const koirat = []

for (let i = 0; i < 6; i++) {
    const nimi = prompt("Syötä koiran nimi:");
    koirat.push(nimi);
}

koirat.sort();
koirat.reverse();

for (let i = 0; i < koirat.length; i++) {
    document.querySelector("#target").innerHTML += `<li>${koirat[i]}</li>`;
}
