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



//INPUTFIELD
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


// FÖR STÄLLEN SOM BEHÖVER EN REPLAY KNAPP - INTE KLAR!!
function setupMuteButton(audio, muteButton, refreshButton) {
    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../bilder/PlayG.svg";
            refreshButton.style.display = "block";
        } else {
            audio.pause();
            muteButton.src = "../bilder/PauseG.svg";
            refreshButton.style.display = "none";
        }
    };

    refreshButton.onclick = function () {
        audio.currentTime = 0;
        audio.play();
    };
}







//FÖR SIDOR FRÅN DEL 2 TRAFFICKING/GRÖNA SIDOR - GULA KNAPPAR
function audioButton(audio, muteButton, maxLoops = 0) {
    let loopCount = 0;

    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../../bilder/PauseY.svg";
        } else {
            audio.pause();
            muteButton.src = "../../bilder/PlayY.svg";
        }
    };

    audio.addEventListener("ended", function () {
        if (loopCount < maxLoops) {
            loopCount++;
            audio.currentTime = 0;
            audio.play();
        } else {
            muteButton.src = "../../bilder/PlayY.svg";
            loopCount = 0;
        }
    });
}





//FÖR GULA SIDOR (OTROHET) - GRÖN knapp.
function audioButtonY(audio, muteButton, maxLoops = 0) {
    let loopCount = 0;

    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../../bilder/PauseG.svg";
        } else {
            audio.pause();
            muteButton.src = "../../bilder/PlayG.svg";
        }
    };

    audio.addEventListener("ended", function () {
        if (loopCount < maxLoops) {
            loopCount++;
            audio.currentTime = 0;
            audio.play();
        } else {
            muteButton.src = "../../bilder/PlayG.svg";
            loopCount = 0;
        }
    });
}




//AudioButton 2 för GULA SIDOR.
function audioButtonY2(audio, muteButton, maxLoops = 0) {
    let loopCount = 0;

    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../../bilder/PauseG.svg";
        } else {
            audio.pause();
            muteButton.src = "../../bilder/PlayG.svg";
        }
    };

    audio.addEventListener("ended", function () {
        if (loopCount < maxLoops) {
            loopCount++;
            audio.currentTime = 0;
            audio.play();
        } else {
            muteButton.src = "../../bilder/PlayG.svg";
            loopCount = 0;
        }
    });
}





function audioButton3(audio, muteButton, maxLoops = 0) {
    let loopCount = 0;

    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../bilder/PauseB.svg";
        } else {
            audio.pause();
            muteButton.src = "../bilder/PlayB.svg";
        }
    };

    audio.addEventListener("ended", function () {
        if (loopCount < maxLoops) {
            loopCount++;
            audio.currentTime = 0;
            audio.play();
        } else {
            muteButton.src = "../bilder/PlayB.svg";
            loopCount = 0;
        }
    });
}






function audioButton4(audio, muteButton, maxLoops = 0) {
    let loopCount = 0;

    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../bilder/PauseG.svg";
        } else {
            audio.pause();
            muteButton.src = "../bilder/PlayG.svg";
        }
    };

    audio.addEventListener("ended", function () {
        if (loopCount < maxLoops) {
            loopCount++;
            audio.currentTime = 0;
            audio.play();
        } else {
            muteButton.src = "../bilder/PlayG.svg";
            loopCount = 0;
        }
    });
}


function audioButton4(audio, muteButton, maxLoops = 0) {
    let loopCount = 0;

    muteButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            muteButton.src = "../bilder/PauseY.svg";
        } else {
            audio.pause();
            muteButton.src = "../bilder/PlayY.svg";
        }
    };

    audio.addEventListener("ended", function () {
        if (loopCount < maxLoops) {
            loopCount++;
            audio.currentTime = 0;
            audio.play();
        } else {
            muteButton.src = "../bilder/PlayY.svg";
            loopCount = 0;
        }
    });
}




function clearWrapper() {
    wrapper.innerHTML = "";
}


