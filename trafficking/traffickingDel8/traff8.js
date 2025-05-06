inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "1303") {
        window.location.href = "../slutsidaTraff.html";
    } else {
        felKod();
    }
}, "inputDivTraff"); 