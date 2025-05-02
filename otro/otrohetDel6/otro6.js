inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel7/otro7.html";
    } else {
        felKod();
    }
}, "inputDiv");

let muteButton = document.getElementById("muteButtonY");

let audio = new Audio("../../ljud/seaTurtle.mp3");

let loopCount = 0;
const maxLoops = 3;

audio.addEventListener('ended', function () {
    loopCount++;
    if (loopCount < maxLoops) {
        audio.currentTime = 0;
        audio.play();
    } else {
        console.log("Loopat klart");
    }
});

audio.volume = 0.5;

audioButtonY(audio, muteButton);