inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "1303") {
        restOfText();
    } else {
        felKod();
    }
}, "inputDivTraff");



let audio = new Audio("../../ljud/lotussWTF.mp3");
audio.volume = 0.5;
audioButton(audio, muteButton, 2);



function restOfText() {

    const oldInput = document.getElementById("inputDivTraff");
    if (oldInput) oldInput.remove();

    let wrapperTraff = document.getElementById("wrapperTrafficking");

    let restOf = document.createElement("div");
    restOf.id = "restOf";
    restOf.innerHTML = `
        <p>Stående vid Veras dörr känner Mia på handtaget - låst. Hon kollar under dörrmattan - ingenting. Hon tänker en
            stund och drar sin hand längs toppen av dörrkarmen.</p>

        <p>Ett högt, metalliskt klang hörs när en nyckel slår i marken.Hon andas en lättad suck, böjer sig ner - nyckeln
            glider lätt in i låset, och hon är inne.</p>

        <p>Hennes handlingar är snabba och bestämda. Mia scannar igenom lägenheten: kläder på en fåtölj, en odiskad
            skål, en laptop - den är låst. Fotografier på Vera och, vad som kan antas vara, hennes föräldrar.</p>

        <p>Till sist - en bit papper. Handstilen känner hon direkt igen. Hon har sett sin chefs snabbt antecknade lappar
            ofta.</p>

        <img class="squareIMG" src="../../bilder/lappenJ.webp" alt="">

        <p>Mia vet exakt vad som menas med detta - hon måste ta sig till Titanic. Fort.</p>
    `;

    wrapperTraff.appendChild(restOf);


    const newInputDiv = document.createElement("div");
    newInputDiv.id = "inputDivTraff";
    newInputDiv.innerHTML = `
        <img src="../../bilder/LoggaROSA.png" alt="">
        <p>Ny gåta här, som tvingar spelaren att ta sig till titanic innan de kan spela vidare.</p>
    `;
    restOf.appendChild(newInputDiv);

    inputField(function () {
        const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

        if (userCode === "gris") {
            window.location.href = "../slutsidaTraff.html";
        } else {
            felKod();
        }
    }, "inputDivTraff");
}


