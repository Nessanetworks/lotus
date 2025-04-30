inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel6/traff6.html";
    } else {
        felKod();
    }
}, "inputDivTraff"); 