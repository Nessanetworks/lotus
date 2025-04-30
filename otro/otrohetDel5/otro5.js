inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel6/otro6.html";
    } else {
        felKod();
    }
}, "inputDiv");


let muteButton = document.getElementById("muteButton");

let audioBusy = new Audio("../../ljud/busyresturant.mp3");

audioBusy.volume = 0.5;

audioButton(audioBusy, muteButton);
