let muteButton = document.getElementById("muteButton");
let refreshButton = document.getElementById("refreshButton");

let audio = new Audio("../ljud/SoundtrackOfficial.mp3");
audio.loop = true;
audio.volume = 0.5;


setupMuteButton(audio, muteButton, refreshButton);




/*function setupMuteButton(audio, muteButton, refreshButton) {
    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../bilder/on.png";
            refreshButton.style.display = "inline";
        } else {
            audio.pause();
            muteButton.src = "../bilder/off.png";
            refreshButton.style.display = "none";
        }
    };

    refreshButton.onclick = function () {
        audio.currentTime = 0;
        audio.play();
    };
}

let muteButton = document.getElementById("muteButton");
let refreshButton = document.getElementById("refreshButton");

//Gör en ny sån här när du vill ha ny audio, och call the function again.
let audio = new Audio("../ljud/SoundtrackOfficial.mp3");
audio.loop = true;
audio.volume = 0.5;


setupMuteButton(audio, muteButton, refreshButton);*/
