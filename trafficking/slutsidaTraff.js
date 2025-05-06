

function slutsidaTraff() {
    clearWrapper();
    window.scrollTo(0, 0);

    let audio = new Audio("../ljud/themeSong.mp3");
    audio.play();
    audio.volume = 0.5;

    const wrapper = document.getElementById('wrapper');

    const imgEnd = document.createElement('img');
    imgEnd.src = '../bilder/LoggaGRON.png';
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
    againButton.classList.add('buttonGreen');
    const againButtonText = document.createElement('h6');
    againButtonText.textContent = 'BÖRJA OM';
    againButton.appendChild(againButtonText);
    againButton.onclick = () => {
        window.location.href = '../chapters/chapter1.html';
    };
    wrapper.appendChild(againButton);

    const endButton = document.createElement('button');
    endButton.classList.add('buttonGreen');
    const endButtonText = document.createElement('h6');
    endButtonText.textContent = 'CHECKA UT';
    endButton.appendChild(endButtonText);
    endButton.onclick = () => {
        window.location.href = '../index.html';
    };
    wrapper.appendChild(endButton);
}


function goBetween() {
    clearWrapper();
    window.scrollTo(0, 0);


    let audio = new Audio("../ljud/heartbeat.mp3");
    audio.play();
    audio.volume = 0.5;

    const wrapper = document.getElementById('wrapper');

    wrapper.innerHTML += `
       <img src="../bilder/miaa.webp" alt="Mia">

        <p>Hon måste göra något. Nu är hennes chans.
            Mia stormar fram från sitt gömställe.
        </p>

        <p>”Släpp henne nu!” skriker hon så högt hon kan.</p>

        <p>Kim hinner precis se upp, och innan Mias händer är på honom hinner hans ansiktsuttryck gå från ilska till
            förvåning. Vera drar i sin arm igen. Mia tar Kim runt kragen och drar åt andra hållet - bort från henne.</p>

        <p>I en kort stund står deras krafter i jämvikt och ingen rör sig någonstans.
            I bakgrunden hörs en bil gasa iväg.
            Sedan släpper något. Vera glider ur greppet, och de två som är kvar snubblar framåt. Innan Mia hinner rätta
            sin kurs står Kim bakåtlutad över kanten. Han gör ögonkontakt medan han vinglar där i ett ögonblick.
        </p>

        <p>Sedan faller han mot stenarna under.
            Ett hårt, men vått ljud hörs när hans kropp slår i.
        </p>

        <p id="lastP">Mia ser över kanten och ser en scen hon minns alltför väl. En kropp i vattnet. Men det hon inte visste i
            morse var att blodet skulle vara på hennes händer.</p>

        <img class="squareIMG" src="../bilder/dod_kropp.jpg" alt="död">

        <button class="buttonGreen" onClick="slutsidaTraff()">
            <h6>NÄSTA</h6>
        </button>
    `;

}


function stanna() {
    clearWrapper();

    window.scrollTo(0, 0);


    let audio = new Audio("../ljud/heartbeat.mp3");
    audio.play();
    audio.volume = 0.5;

    const wrapper = document.getElementById('wrapper');

    wrapper.innerHTML += `

        <img src="../bilder/miaa.webp" alt="Mia">
        
        <p>Hon står där - frusen. Handlingslös. Hon vet att hon borde göra något, men rädslan håller henne tillbaka.</p>

        <p>Kim vänder sig om, hans hand fortfarande hårt kramande Veras handled. Vera ser till slut upp - på siluetten
            av främlingen som nu lagt sina händer på henne. Hon skriker till och rycker tillbaka i ett till försök.
            Det fångar Kim precis i ett steg. Han snubblar bakåt mot kanten. Han snurrar runt i fallet. Han ser vattnet.
            Han vet att han är på väg ner.
        </p>

        <img class="squareIMG" src="../bilder/grab.png" alt="">

        <p>I ett sista försök att hålla sig kvar på land försöker han hastigt stödja sig på Vera. De är båda nu ur
            balans. Deras kroppar går över kanten, och ett kvinnoskrik hörs innan det överröstas av ett mansrop - innan
            båda rösterna avbryts av en smäll när människokroppar kolliderar med kall och våt sten.</p>
        
            <h6>Ljud - skrik, kommer</h6>

        <p>Nu kan hennes ben röra sig - när det redan är för sent.</p>

        <p>Mia springer mot kanten medan en bilmotor hörs. I ögonvrån ser hon Jonatan köra iväg.</p>

        <p>Hon går ner på knä vid kanten och lutar sig över för att se.
            Vatten. Blod.
        </p>

        <img class="squareIMG" src="../bilder/bloodywater.webp" alt="vattenblod">

        <p>Hon kunde inte urskilja det i sitt undermedvetna, men det som liknar en gestalt är Kims lik, fallit över
            Veras.</p>

        <p id="lastP">Inte en kropp i vattnet - utan två.</p>

        <button class="buttonGreen" onClick="slutsidaTraff()">
            <h6>NÄSTA</h6>
        </button>
    `;

}
