//Notisljud
/*let muteButton = document.getElementById("muteButtonY");

let audioNoti = new Audio("../../ljud/noti1.mp3");

audioNoti.volume = 0.5;

audioButtonY(audioNoti, muteButton);*/


//lounge
let muteButton2 = document.getElementById("muteButton2Y");

let audioLounge = new Audio("../../ljud/themeSong.mp3");

audioLounge.volume = 0.3;

audioButtonY2(audioLounge, muteButton2, 2);




function message() {
    const muteButton = document.getElementById("muteButtonY");
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

message();
