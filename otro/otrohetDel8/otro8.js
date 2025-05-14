inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["öresund", "oresund", "öresundståg", "öresundståget", "öresundsbron", "öresundbron", "öresundbro"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../slutsidaOtro.html";
    } else {
        felKod();
    }
}, "inputDiv");


let muteButton = document.getElementById("muteButtonY");

let audioBaby = new Audio("../../ljud/SoundtrackOfficial.mp3");

audioBaby.volume = 0.5;

audioButtonY(audioBaby, muteButton);
