inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel7/traff7.html";
    } else {
        felKod();
    }
}, "inputDivTraff");

let audio = new Audio("../../ljud/seaTurtle.mp3");

let loopCount = 0;
const maxLoops = 5;

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

audioButton(audio, muteButton);