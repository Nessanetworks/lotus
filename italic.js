document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("p").forEach(p => {

        p.innerHTML = p.innerHTML.replace(/\bJonatan\b/g, "Jonathan");

        p.innerHTML = p.innerHTML.replace(/\bJonatans\b/g, "Jonathans");

        // Vanliga citationstecken
        p.innerHTML = p.innerHTML.replace(/"([^"]+)"/g, '<i>"$1"</i>');

        // Smarta citationstecken (“...”)
        p.innerHTML = p.innerHTML.replace(/“([^”]+)”/g, '<i>“$1”</i>');

        // Ensamma avslutande citationstecken (”...”) – felaktigt men förekommer
        p.innerHTML = p.innerHTML.replace(/”([^”]+)”/g, '<i>”$1”</i>');
    });
});



