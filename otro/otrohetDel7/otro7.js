/*inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    if (userCode === "gris") {
        window.location.href = "../otrohetDel8/otro8.html";
    } else {
        felKod();
    }
}, "inputDiv");*/


inputField(function () {
    const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

    const korrektaSvar = ["no return", "noreturn", "ingen återvändo"];

    if (korrektaSvar.includes(userCode)) {
        otro8Del2();
    } else {
        felKod();
    }
}, "inputDiv");





function otro8Del2() {

    function message() {
        const muteButton = document.getElementById("muteButtonNotis");
        const messageImg = document.getElementById("notisMessage");
        const audioNoti = new Audio("../../ljud/noti1.mp3");
        audioNoti.volume = 0.5;

        muteButton.addEventListener("click", () => {
            audioNoti.play();

            messageImg.style.display = "block";

            /*setTimeout(() => {
                messageImg.style.display = "none";
            }, 9000);*/
        });
    }

    const oldInput = document.getElementById("inputDiv");
    if (oldInput) oldInput.remove();

    let wrapperOtro = document.getElementById("wrapperOtro");

    let restOf = document.createElement("div");
    restOf.id = "restOf";
    restOf.innerHTML = `
        <div id="notisljud">
            <img src="../../bilder/chatBubbla.svg" alt="sound" id="muteButtonNotis"
     style="cursor: pointer; height: 17vw; width: 20vw; object-fit: cover; border-radius: 0;" />

        </div>

        <img class="message" src="../../bilder/camillaMeddelande.png" alt="Camillas meddelande" style="display: none;"
            id="notisMessage">

        <p>Det är ett sms från Camilla.</p>

        <p>Hjärtat slog snabbt. Mia behövde inget mer för att förstå att något viktigt var på gång. Hon stoppade snabbt
            telefonen tillbaka i fickan och började gå med snabba steg mot European Village.</p>
        
    `;

    wrapperOtro.appendChild(restOf);


    const newInputDiv = document.createElement("div");
    newInputDiv.id = "inputDiv";
    newInputDiv.innerHTML = `
        <img src="../../bilder/LoggaROSA.png" alt="">
        <p>Camilla skrev sitt sms hastigt och det blev fel i slutet. Vad var det hon egentligen ville skriva?</p>
    `;
    restOf.appendChild(newInputDiv);

    message()

    inputField(function () {
        const userCode = document.getElementById("codeInput").value.trim().toLowerCase();

        const korrektaSvar = ["vi ses på bron", "Vi ses på bron."];

        if (korrektaSvar.includes(userCode)) {
            window.location.href = "../otrohetDel8/otro8.html";
        } else {
            felKod();
        }
    }, "inputDiv");
}



// FÖR MUSIK

let muteButton = document.getElementById("muteButtonY");

let audio = new Audio("../../ljud/lotussWTF.mp3");
audio.volume = 0.5;
audioButtonY(audio, muteButton, 1);



// FÖR MOBILSIGNAL

/*let muteButton2 = document.getElementById("muteButton2Y");

let audioSignal = new Audio("../../ljud/noti1.mp3");

audioSignal.volume = 0.5;

audioButtonY2(audioSignal, muteButton2);*/



/*function message() {
    const muteButton = document.getElementById("muteButtonNotis");
    const messageImg = document.getElementById("notisMessage");
    const audioNoti = new Audio("../../ljud/noti1.mp3");
    audioNoti.volume = 0.5;

    muteButton.addEventListener("click", () => {
        audioNoti.play();

        messageImg.style.display = "block";

        /*setTimeout(() => {
            messageImg.style.display = "none";
        }, 9000);
    });
}

message();

*/


