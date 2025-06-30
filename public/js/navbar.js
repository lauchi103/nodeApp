// public/js/navbar.js
function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav style="background-color: var(--pubg-dark-bg); padding: var(--spacing3); display: flex; justify-content: space-around; border-bottom: 1px solid var(--pubg-border-color);">
                <a href="/maps/erangel" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Erangel</a>
                <a href="/maps/miramar" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Miramar</a>
                <a href="/maps/sanhok" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Sanhok</a>
                <a href="/maps/vikendi" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Vikendi</a>
                <a href="/maps/karakin" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Karakin</a>
                <a href="/maps/paramo" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Paramo</a>
                <a href="/maps/taego" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Taego</a>
                <a href="/maps/deston" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Deston</a>
                <a href="/maps/rondo" style="color: var(--pubg-text-color); text-decoration: none; padding: var(--spacing2); border-radius: 5px; transition: background-color 0.3s ease;">Rondo</a>
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