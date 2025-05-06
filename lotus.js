let wrapper = document.getElementById("wrapper");
console.log(wrapper);


function renderAppWelcome() {
    clearWrapper();
    window.scrollTo(0, 0);

    let welcomeDiv = document.createElement("div");
    welcomeDiv.id = "welcomeDiv";
    wrapper.appendChild(welcomeDiv);

    welcomeDiv.innerHTML = `
        <div id="del1Div">
            <img id="loggaWelcomeIMG" src="bilder/LoggaGUL.png" alt="Gul Logga">
            <img id="poster" src="bilder/live.webp" alt="Intro bild">
            <p id="welcomeHeadline">MALMÖ EDITION</p>
        </div>

        <div id="del3Div">
            <p id="welcomeUnderText">Exklusiv semester - dödsfall - kaos. <br> Är du redo att avslöja sanningen?</p>
            <button class="buttonYellow" onclick="spelInfo()"><h6>START</h6></button>
        </div>
    `;
}

function spelInfo() {
    clearWrapper();
    window.scrollTo(0, 0);

    let audio = new Audio('ljud/SoundtrackOfficial.mp3');
    audio.loop = true;
    audio.play();

    let spelInfoDiv = document.createElement("div");
    spelInfoDiv.id = "spelInfoDiv";
    wrapper.appendChild(spelInfoDiv);

    spelInfoDiv.innerHTML = `
        <img src="bilder/LoggaGUL.png" alt="Logga GUL">

        <h6 id="infoHeadline">MALMÖ LIVE</h6>

        <h4>VÄLKOMMEN</h4>

        <p>Du ska nu checka in på The White Lotus: Malmö Live Edition, ett femstjärnigt paradis dolt bland kullerstensgator
        och havsbris. Här blandas skandinavisk elegans med varm och inbjudande känsla, och i varje hörn viskar
        hemligheter från svunna gäster.</p>

        <h5>Luta dig tillbaka. Släpp vardagen.</h5>

        <p>Musiken sipprar in som mjuka vågor mot hotellkanten som en symfoni av exotiska toner och subtila rytmer som
        guidar dig genom upplevelsen. Höj volymen. Lyssna noggrant. I denna värld är inget en slump, varje ljud, varje
        melodi, varje viskning har en innebörd.</p>

        <h5>Din uppmärksamhet är nyckeln.</h5>

        <p>Så är du redo att checka in i denna förtrollade verklighet där lyx och spel flyter samman?</p>

        <p id="innanButton"><i>The White Lotus väntar på dig…</i></p>

        <button class="buttonYellow" onClick="window.location.href='./chapters/chapter1.html'">
                <h6>CHECKA IN</h6>
        </button>
        
       
    `;
}


function felKod() {
    if (!document.getElementById("felKodPopup")) {
        const popup = document.createElement("div");
        popup.id = "felKodPopup";
        popup.classList.add("hidden"); // your default hidden class
        popup.innerHTML = "<p>Fel kod, försök igen!</p>";
        document.body.appendChild(popup);
    }

    const popup = document.getElementById("felKodPopup");
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3000);
}


function inputField(submitHandler) {
    const inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "codeInput";
    input.placeholder = "Skriv in din kod..";

    const button = document.createElement("button");
    button.textContent = "Submit";
    button.onclick = submitHandler;

    inputContainer.appendChild(input);
    inputContainer.appendChild(button);
    wrapper.appendChild(inputContainer);
}

renderAppWelcome();








