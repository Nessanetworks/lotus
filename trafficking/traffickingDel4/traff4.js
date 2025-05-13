/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel5/traff5.html";
    } else {
        felKod();
    }
}, "inputDivTraff");*/


inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["båt", "båten", "båtar", "båtarna", "en båt", "en segelbåt", "en segel båt", "segelbåt", "segel båt", "segel", "segelbåtar", "segel båtar"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../traffickingDel5/traff5.html";
    } else {
        felKod();
    }
}, "inputDivTraff");

let audioDinner = new Audio("../../ljud/dinnerLotus.mp3");
audioDinner.volume = 0.5;
audioButton(audioDinner, muteButton, 1);


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
