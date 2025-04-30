inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel8/otro8.html";
    } else {
        felKod();
    }
}, "inputDiv");

// FÖR MUSIK

let muteButton = document.getElementById("muteButton");

let audioWTF = new Audio("../../ljud/lotussWTF.mp3");

let loopCount = 0;
const maxLoops = 2;

audioWTF.addEventListener('ended', function () {
    loopCount++;
    if (loopCount < maxLoops) {
        audioWTF.currentTime = 0;
        audioWTF.play();
    } else {
        console.log("Loopat klart");
    }
});

audioWTF.volume = 0.5;

audioButton(audioWTF, muteButton);



// FÖR MOBILSIGNAL

let muteButton2 = document.getElementById("muteButton2");

let audioSignal = new Audio("../../ljud/noti1.mp3");

audioSignal.volume = 0.5;

audioButton2(audioSignal, muteButton2);


