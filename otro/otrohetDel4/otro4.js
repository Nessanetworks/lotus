/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel5/otro5.html";
    } else {
        felKod();
    }
}, "inputDiv");*/

inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["bennes pastabar", "bennes pasta bar", "bennes pasta", "bennes", "benne pasta", "bennepastabar", "benne pasta bar", "benne pastabar", "bennespasta bar", "bennepasta bar"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../otrohetDel5/otro5.html";
    } else {
        felKod();
    }
}, "inputDiv");





let muteButton = document.getElementById("muteButtonY");

let audio = new Audio("../../ljud/dinnerLotus.mp3");

audio.volume = 0.5;
audioButtonY(audio, muteButton, 2);

