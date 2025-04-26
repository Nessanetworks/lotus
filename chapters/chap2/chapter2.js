
inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../chap3/chapter3.html";
    } else {
        felKod();
    }
}, "inputDivChap2"); 