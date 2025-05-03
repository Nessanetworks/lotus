
inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../chap3/chapter3.html";
    } else {
        felKod();
    }
}, "inputDivChap2");


// Sorl och mummel
let muteButton = document.getElementById("muteButtonY");

let audioBusy = new Audio("../../ljud/busyresturant.mp3");

audioBusy.volume = 0.5;

audioButtonY(audioBusy, muteButton);