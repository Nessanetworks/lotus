

function slutsidaTraff() {
    clearWrapper();

    const wrapper = document.getElementById('wrapper');

    const imgEnd = document.createElement('img');
    imgEnd.src = '../bilder/LoggaGRON.png';
    imgEnd.alt = 'LOGGA';
    imgEnd.id = "imgEnd";
    wrapper.appendChild(imgEnd);

    wrapper.innerHTML += `
    <p><b>Spelet är över men minnena viskar vidare.</b></p>
    <p>Tack för att du checkade in hos The White Lotus: Malmö Edition. Du har vandrat genom toner, viskningar och vackra vyer och låtit ljuden guida dig genom en värld där inget var som det först verkade.</p>
    <p>Kanske har du löst gåtan. Kanske bär du fortfarande med dig frågor. Men en sak är säker, inget besök på The White Lotus lämnar någon oberörd.</p>
    <p><b>Checka ut i lugn och ro nu men kom ihåg…</b> vissa dörrar står alltid lite på glänt.</p>
`;

    const againButton = document.createElement('button');
    againButton.classList.add('buttonGreen');
    const againButtonText = document.createElement('h6');
    againButtonText.textContent = 'BÖRJA OM';
    againButton.appendChild(againButtonText);
    wrapper.appendChild(againButton);


    const endButton = document.createElement('button');
    endButton.classList.add('buttonGreen');
    const endButtonText = document.createElement('h6');
    endButtonText.textContent = 'AVSLUTA';
    endButton.appendChild(endButtonText);
    wrapper.appendChild(endButton);

}