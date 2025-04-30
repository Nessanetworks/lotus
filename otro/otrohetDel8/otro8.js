inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../slutsidaOtro.html";
    } else {
        felKod();
    }
}, "inputDiv");


let muteButton = document.getElementById("muteButton");

let audioBaby = new Audio("../../ljud/SoundtrackOfficial.mp3");

audioBaby.volume = 0.5;

audioButton(audioBaby, muteButton);
