function slutsidaOtro() {
    clearWrapper();
    window.scrollTo(0, 0);

    let audio = new Audio("../ljud/themeSong.mp3");
    audio.play();
    audio.volume = 0.5;

    const wrapper = document.getElementById('wrapper');

    const imgEnd = document.createElement('img');
    imgEnd.src = '../bilder/LoggaGUL.png';
    imgEnd.alt = 'LOGGA';
    imgEnd.id = "imgEnd";
    wrapper.appendChild(imgEnd);

    wrapper.innerHTML += `
        <h2>Berättelsen är över...</h2>
        <p>Tack för att du checkade in hos The White Lotus: Malmö Edition. Du har vandrat genom toner, viskningar och vackra vyer och låtit ljuden guida dig genom en värld där inget var som det först verkade.</p>
        <p>Kanske har du löst gåtan. Kanske bär du fortfarande med dig frågor. Men en sak är säker, inget besök på The White Lotus lämnar någon oberörd.</p>
        <p id="lastP"><b>Checka ut i lugn och ro nu men kom ihåg…</b> vissa dörrar står alltid lite på glänt.</p>
    `;

    const againButton = document.createElement('button');
    againButton.classList.add('buttonYellow');
    const againButtonText = document.createElement('h6');
    againButtonText.textContent = 'BÖRJA OM';
    againButton.appendChild(againButtonText);
    againButton.onclick = () => {
        window.location.href = '../chapters/chapter1.html';
    };
    wrapper.appendChild(againButton);

    const endButton = document.createElement('button');
    endButton.classList.add('buttonYellow');
    const endButtonText = document.createElement('h6');
    endButtonText.textContent = 'CHECKA UT';
    endButton.appendChild(endButtonText);
    endButton.onclick = () => {
        window.location.href = '../index.html';
    };
    wrapper.appendChild(endButton);

}