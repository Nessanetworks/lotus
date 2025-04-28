function felKod() {
    if (!document.getElementById("felKodPopup")) {
        const popup = document.createElement("div");
        popup.id = "felKodPopup";
        popup.classList.add("hidden");
        popup.innerHTML = "<p>Fel kod, försök igen!</p>";
        document.body.appendChild(popup);
    }

    const popup = document.getElementById("felKodPopup");
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3000);
}


function inputField(submitHandler, appendToId) {
    const appendTo = document.getElementById(appendToId);
    if (!appendTo) {
        console.error(`Element with id '${appendToId}' not found.`);
        return;
    }

    const inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "codeInput";
    input.placeholder = "Skriv in koden..";

    const button = document.createElement("button");
    button.id = "submitButton";

    const buttonText = document.createElement("h5");
    buttonText.textContent = "Submit";
    button.appendChild(buttonText);

    button.onclick = submitHandler;

    inputContainer.appendChild(input);
    inputContainer.appendChild(button);

    appendTo.appendChild(inputContainer);
}


function setupMuteButton(audio, muteButton, refreshButton) {
    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../bilder/on.png";
            refreshButton.style.display = "inline";
        } else {
            audio.pause();
            muteButton.src = "../bilder/off.png";
            refreshButton.style.display = "none";
        }
    };

    refreshButton.onclick = function () {
        audio.currentTime = 0;
        audio.play();
    };
}

function clearWrapper() {
    wrapper.innerHTML = "";
}


