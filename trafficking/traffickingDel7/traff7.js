inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../slutsidaTraff.html";
    } else {
        felKod();
    }
}, "inputDivTraff");

let audio = new Audio("../../ljud/seaTurtle.mp3");
audio.volume = 0.5;
audioButton(audio, muteButton, 2);