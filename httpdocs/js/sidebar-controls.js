// public/js/sidebar-controls.js

function loadSidebarControls(currentMapSpawnTypes, initialSpawnToggleState, initialDarkMode, onChangeCallback) {
    const sidebarPlaceholder = document.getElementById('sidebar-controls-placeholder');
    if (sidebarPlaceholder) {
        let htmlContent = `
            <aside class="sidebar-container">
                <div class="sidebar-header">
                    <h3 class="sidebar-title">Map Options</h3>
                    <button id="darkModeToggleButton" class="dark-mode-toggle-button"></button>
                </div>
        `;

        for (const typeKey in currentMapSpawnTypes) {
            if (Object.prototype.hasOwnProperty.call(currentMapSpawnTypes, typeKey)) {
                const typeLabel = currentMapSpawnTypes[typeKey];
                const isChecked = initialSpawnToggleState[typeKey] ? 'checked' : '';

                htmlContent += `
                    <div class="switch-row">
                        <span class="switch-label">${typeLabel}</span>
                        <label class="switch-toggle">
                            <input type="checkbox" id="toggle-${typeKey}" ${isChecked} data-spawn-type="${typeKey}" />
                            <span class="switch-slider"></span>
                        </label>
                    </div>
                `;
            }
        }

        htmlContent += `</aside>`; // Sidebar-End-Tag

        sidebarPlaceholder.innerHTML = htmlContent;

        const darkModeToggleButton = document.getElementById('darkModeToggleButton');
        let currentDarkMode = initialDarkMode; // Zustand für den Toggle-Button

        // Funktion zum Aktualisieren des Icons
        const updateToggleButtonIcon = () => {
            // Setze das src-Attribut des img-Tags auf die Server-Route für das SVG
            darkModeToggleButton.innerHTML = `
                <img src="/icon/${currentDarkMode ? 'moon-solid.svg' : 'sun-solid.svg'}" alt="${currentDarkMode ? 'Moon' : 'Sun'} Icon" />
            `;
        };

        // Initiales Setzen des Icons
        updateToggleButtonIcon();

        // Event-Listener für den Dunkelmodus-Button
        darkModeToggleButton.addEventListener('click', () => {
            currentDarkMode = !currentDarkMode; // Zustand umschalten
            updateToggleButtonIcon(); // Icon aktualisieren
            emitChange(); // Änderung melden
        });

        const emitChange = () => {
            const newSpawnToggleState = {};
            sidebarPlaceholder.querySelectorAll('input[type="checkbox"][data-spawn-type]').forEach(checkbox => {
                const typeKey = checkbox.dataset.spawnType;
                newSpawnToggleState[typeKey] = checkbox.checked;
            });

            const detail = {
                spawnToggleState: newSpawnToggleState,
                darkMode: currentDarkMode
            };
            onChangeCallback({ detail });
        };

        // Event-Listener für alle Spawn-Typ-Checkboxes
        sidebarPlaceholder.querySelectorAll('input[type="checkbox"][data-spawn-type]').forEach(checkbox => {
            checkbox.addEventListener('change', emitChange);
        });
    }
}
