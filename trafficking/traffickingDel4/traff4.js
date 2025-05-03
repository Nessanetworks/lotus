inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel5/traff5.html";
    } else {
        felKod();
    }
}, "inputDivTraff");

let audioDinner = new Audio("../../ljud/dinnerLotus.mp3");
audioDinner.volume = 0.5;
audioButton(audioDinner, muteButton, 1); 
