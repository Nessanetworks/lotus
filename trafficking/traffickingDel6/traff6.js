/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel7/traff7.html";
    } else {
        felKod();
    }
}, "inputDivTraff");*/

inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["Vera är i fara", "Vera is in danger", "Vera är i fara."];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../traffickingDel7/traff7.html";
    } else {
        felKod();
    }
}, "inputDivTraff");

let audio = new Audio("../../ljud/busyresturant.mp3");
audio.volume = 0.5;
audioButton(audio, muteButton);