function slutsidaOtro() {
    clearWrapper();

    const wrapper = document.getElementById('wrapper');

    const img = document.createElement('img');
    img.src = '../bilder/LoggaGUL.png';
    img.alt = 'LOGGA';
    wrapper.appendChild(img);

    wrapper.innerHTML += `
    <p><b>Spelet är över men minnena viskar vidare.</b></p>
    <p>Tack för att du checkade in hos The White Lotus: Malmö Edition. Du har vandrat genom toner, viskningar och vackra vyer och låtit ljuden guida dig genom en värld där inget var som det först verkade.</p>
    <p>Kanske har du löst gåtan. Kanske bär du fortfarande med dig frågor. Men en sak är säker, inget besök på The White Lotus lämnar någon oberörd.</p>
    <p><b>Checka ut i lugn och ro nu men kom ihåg…</b> vissa dörrar står alltid lite på glänt.</p>
`;

    const againButton = document.createElement('button');
    againButton.id = 'againTraffButton';
    const againButtonText = document.createElement('p');
    againButtonText.textContent = 'BÖRJA OM';
    againButton.appendChild(againButtonText);
    wrapper.appendChild(againButton);


    const endButton = document.createElement('button');
    endButton.id = 'endTraffButton';
    const endButtonText = document.createElement('p');
    endButtonText.textContent = 'AVSLUTA';
    endButton.appendChild(endButtonText);
    wrapper.appendChild(endButton);

}