
/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "vera") {
        window.location.href = "../chap3/chapter3.html";
    } else {
        felKod();
    }
}, "inputDivChap2");*/

inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["your one true love vera", "your one true love, vera", "your one true love, vera.", "your one true love vera.", "your one true love"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../chap3/chapter3.html";
    } else {
        felKod();
    }
}, "inputDivChap2");


// Sorl och mummel
let muteButton = document.getElementById("muteButtonY");

let audioBusy = new Audio("../../ljud/busyresturant.mp3");

audioBusy.volume = 0.7;

audioButtonY(audioBusy, muteButton);