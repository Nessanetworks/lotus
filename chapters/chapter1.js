
//ORAKLETS DIALOG
let muteButton = document.getElementById("muteButton");
let refreshButton = document.getElementById("refreshButton");

let audio = new Audio("../ljud/SoundtrackOfficial.mp3");
audio.loop = true;
audio.volume = 0.5;


setupMuteButton(audio, muteButton, refreshButton);


// SIREN FRÅN POLIS
let muteButton3 = document.getElementById("muteButton3");

let audioSirens = new Audio("../ljud/birdsPolice.mp3");

audioSirens.volume = 0.5;

audioButton3(audioSirens, muteButton3);


// HEARTBEAT
let muteButton4 = document.getElementById("muteButton4");

let audioBeat = new Audio("../ljud/heartbeat.mp3");

audioBeat.volume = 0.5;

audioButton3(audioBeat, muteButton4);


