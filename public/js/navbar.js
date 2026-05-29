// public/js/navbar.js
function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav>
                <div class="nav-logo-container" id="navLogoBtn">
                    <img src="/publicicon/favicon.svg" alt="PUBG Maps Logo" class="nav-logo" />
                    <span class="nav-logo-text">PUBG <span class="highlight">Maps</span></span>
                </div>
                <div class="nav-links">
                    <a href="/maps/erangel">Erangel</a>
                    <a href="/maps/miramar">Miramar</a>
                    <a href="/maps/sanhok">Sanhok</a>
                    <a href="/maps/vikendi">Vikendi</a>
                    <a href="/maps/karakin">Karakin</a>
                    <a href="/maps/paramo">Paramo</a>
                    <a href="/maps/taego">Taego</a>
                    <a href="/maps/deston">Deston</a>
                    <a href="/maps/rondo">Rondo</a>
                </div>
            </nav>
        `;

        // Event-Listener für das Logo (Routing zu Erangel)
        const navLogoBtn = document.getElementById('navLogoBtn');
        if (navLogoBtn) {
            navLogoBtn.addEventListener('click', () => {
                window.history.pushState({}, '', '/maps/erangel');
                navbarPlaceholder.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '/maps/erangel');
                });
                updateMapContent('erangel');
            });
        }

        // Event-Listener für Navigation und Active-Klasse
        const currentPath = window.location.pathname === '/' || window.location.pathname === '' ? '/maps/erangel' : window.location.pathname;
        navbarPlaceholder.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Standard-Link-Verhalten verhindern
                const newPath = link.getAttribute('href');
                window.history.pushState({}, '', newPath); // URL aktualisieren
                
                // Update active state in navbar
                navbarPlaceholder.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
                
                const mapName = newPath.split('/').pop();
                updateMapContent(mapName);
            });
        });
    }
}

// Funktion, um den Inhalt der Karte zu aktualisieren (SPA-Übergang statt Neuladen)
function updateMapContent(mapName) {
    if (typeof window.loadMap === 'function') {
        window.loadMap(mapName);
    } else {
        window.location.reload();
    }
}