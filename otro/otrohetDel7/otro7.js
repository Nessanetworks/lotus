/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel8/otro8.html";
    } else {
        felKod();
    }
}, "inputDiv");*/

inputField(function () {
    const userCode = document.getElementById("codeInput").value
        .trim()
        .toLowerCase()


    const korrektaSvar = ["Annika Svenbro", "Annika", "Svenbro", "AnnikaSvenbro", "annika svenbro"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../otrohetDel8/otro8.html";
    } else {
        felKod();
    }
}, "inputDiv");


// FÖR MUSIK

let muteButton = document.getElementById("muteButtonY");

let audio = new Audio("../../ljud/lotussWTF.mp3");
audio.volume = 0.5;
audioButtonY(audio, muteButton, 1);



// FÖR MOBILSIGNAL

/*let muteButton2 = document.getElementById("muteButton2Y");

let audioSignal = new Audio("../../ljud/noti1.mp3");

audioSignal.volume = 0.5;

audioButtonY2(audioSignal, muteButton2);*/



function message() {
    const muteButton = document.getElementById("muteButtonNotis");
    const messageImg = document.getElementById("notisMessage");
    const audioNoti = new Audio("../../ljud/noti1.mp3");
    audioNoti.volume = 0.5;

    muteButton.addEventListener("click", () => {
        audioNoti.play();

        messageImg.style.display = "block";

        /*setTimeout(() => {
            messageImg.style.display = "none";
        }, 9000);*/
    });
}

message();


