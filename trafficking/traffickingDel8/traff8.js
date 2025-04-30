inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../traffickingDel8/traff8.html";
    } else {
        felKod();
    }
}, "inputDivTraff"); 