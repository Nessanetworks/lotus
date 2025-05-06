/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel6/traff6.html";
    } else {
        felKod();
    }
}, "inputDivTraff");*/

inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["vit", "vita", "vitt", "vita fönsterkarmar", "en vit fönsterkarm", "vitt fönster", "vit fönster"];

    if (korrektaSvar.includes(userCode)) {
        window.location.href = "../traffickingDel6/traff6.html";
    } else {
        felKod();
    }
}, "inputDivTraff");


let audio = new Audio("../../ljud/lotussWTF.mp3");
audio.volume = 0.5;
audioButton(audio, muteButton, 4);