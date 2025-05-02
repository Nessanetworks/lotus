//Notisljud
let muteButton = document.getElementById("muteButtonY");

let audioNoti = new Audio("../../ljud/noti1.mp3");

audioNoti.volume = 0.5;

audioButtonY(audioNoti, muteButton);


//lounge
let muteButton2 = document.getElementById("muteButton2Y");

let audioLounge = new Audio("../../ljud/themeSong.mp3");

let loopCount = 0;
const maxLoops = 3;

audioLounge.addEventListener('ended', function () {
    loopCount++;
    if (loopCount < maxLoops) {
        audioLounge.currentTime = 0;
        audioLounge.play();
    } else {
        console.log("Loopat klart");
    }
});

audioLounge.volume = 0.2;

audioButton2Y(audioLounge, muteButton2);

