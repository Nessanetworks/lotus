/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel6/otro6.html";
    } else {
        felKod();
    }
}, "inputDiv");*/

inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["stora varvsgatan 28", "stora varvsgatan", "varvsgatan", "varvsgatan 28", "stora varvgatan 28", "stora varvgatan", "varvgatan"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../otrohetDel6/otro6.html";
    } else {
        felKod();
    }
}, "inputDiv");



let muteButton = document.getElementById("muteButtonY");

let audioBusy = new Audio("../../ljud/busyresturant.mp3");

audioBusy.volume = 0.5;

audioButtonY(audioBusy, muteButton);
