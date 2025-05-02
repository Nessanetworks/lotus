inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel5/traff5.html";
    } else {
        felKod();
    }
}, "inputDivTraff");

let audioDinner = new Audio("../../ljud/dinnerLotus.mp3");

let loopCount = 0;
const maxLoops = 5;

audioDinner.addEventListener('ended', function () {
    loopCount++;
    if (loopCount < maxLoops) {
        audioDinner.currentTime = 0;
        audioDinner.play();
    } else {
        console.log("Loopat klart");
    }
});

audioDinner.volume = 0.5;

audioButton(audioDinner, muteButton);