inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../slutsidaOtro.html";
    } else {
        felKod();
    }
}, "inputDiv"); 