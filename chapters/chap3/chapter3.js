//Notisljud
let muteButton = document.getElementById("muteButtonY");

let audioNoti = new Audio("../../ljud/noti1.mp3");

audioNoti.volume = 0.5;

audioButtonY(audioNoti, muteButton);


//lounge
let muteButton2 = document.getElementById("muteButton2Y");

let audioLounge = new Audio("../../ljud/themeSong.mp3");

audioLounge.volume = 0.3;

audioButtonY2(audioLounge, muteButton2, 2);

