// public/js/navbar.js
function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav> <!-- Inline-Styles entfernt -->
                <a href="/maps/erangel">Erangel</a>
                <a href="/maps/miramar">Miramar</a>
                <a href="/maps/sanhok">Sanhok</a>
                <a href="/maps/vikendi">Vikendi</a>
                <a href="/maps/karakin">Karakin</a>
                <a href="/maps/paramo">Paramo</a>
                <a href="/maps/taego">Taego</a>
                <a href="/maps/deston">Deston</a>
                <a href="/maps/rondo">Rondo</a>
            </nav>
        `;

        // Event-Listener für Navigation
        navbarPlaceholder.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Standard-Link-Verhalten verhindern
                const newPath = link.getAttribute('href');
                window.history.pushState({}, '', newPath); // URL aktualisieren
                // Hier müsste die Seite neu gerendert werden oder der Inhalt dynamisch aktualisiert werden
                // Für dieses Beispiel wird ein einfacher Reload der Map Display Komponenten ausgelöst
                const mapName = newPath.split('/').pop();
                updateMapContent(mapName);
            });
        });
    }
}

// Funktion, um den Inhalt der Karte zu aktualisieren (dies wäre komplexer in einer echten App)
function updateMapContent(mapName) {
    // Hier müsste die Logik aus main.js neu ausgeführt werden, um die korrekten Daten zu laden
    // und die MapDisplay und SidebarControls entsprechend zu aktualisieren.
    // Dies ist eine Vereinfachung. In einer Single-Page-Application würden Sie hier
    // eher einen Router verwenden und Komponenten neu mounten.
    window.location.reload(); // Die einfachste (aber nicht beste) Lösung
}