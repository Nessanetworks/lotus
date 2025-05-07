document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("p").forEach(p => {
        // Vanliga citationstecken
        p.innerHTML = p.innerHTML.replace(/"([^"]+)"/g, '<i>"$1"</i>');

        // Smarta citationstecken (“...”)
        p.innerHTML = p.innerHTML.replace(/“([^”]+)”/g, '<i>“$1”</i>');

        // Ensamma avslutande citationstecken (”...”) – felaktigt men förekommer
        p.innerHTML = p.innerHTML.replace(/”([^”]+)”/g, '<i>”$1”</i>');
    });
});

