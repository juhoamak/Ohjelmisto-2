"use strict";

const luku1 = parseInt(prompt("Syötä ensimmäinen luku: "))
const luku2 = parseInt(prompt("Syötä toinen luku: "))
const luku3 = parseInt(prompt("Syötä kolmas luku: "))

const summa = luku1 + luku2 + luku3
const tulo = luku1 * luku2 * luku3
const keskiarvo = summa / 3

document.querySelector("#target").innerHTML =
    "Summa: " + summa + "<br>" +
    "Tulo: " + tulo + "<br>" +
    "Keskiarvo: " + keskiarvo;