"use strict";

const nimi = prompt("Syötä oppilaan nimi: ");

const arvonta = Math.floor(Math.random() * 4) + 1;

let tupa;

switch (arvonta) {
    case 1:
        tupa = "Rohkelikko";
        break;
    case 2:
        tupa = "Luihuinen";
        break;
    case 3:
        tupa = "Puuskupuh";
        break;
    case 4:
        tupa = "Korpinkynsi";
        break;
}


document.querySelector("#target").innerHTML = `${nimi}, sinä olet ${tupa}.`;