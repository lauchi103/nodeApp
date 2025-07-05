// public/js/map-display.js

// Parameter angepasst: spawnToggleState (der globale Zustand aller Toggle)
//                      currentMapSpawnTypes (die relevanten Typen für diese Karte)
function loadMapDisplay(mapImageSrc, mapAltText, spawnToggleState, darkMode, currentMapSpawnTypes, questions, top, bottom) {
    const mapSlug = mapImageSrc.split('/').filter(Boolean).pop();

    const mapDisplayPlaceholder = document.getElementById('map-display-placeholder');
    if (mapDisplayPlaceholder) {
        let overlaysHtml = '';
        // Dynamisches Generieren der Overlay-Bilder basierend auf den verfügbaren Spawn-Typen
        for (const typeKey in currentMapSpawnTypes) {
            if (Object.prototype.hasOwnProperty.call(currentMapSpawnTypes, typeKey)) {
                // Generiere die ID basierend auf dem Typ-Schlüssel
                const overlayId = `${typeKey}Overlay`;
                const imageSrc = `/image/${mapSlug}/spawns_${typeKey}.png`; // Z.B. spawns_hangGliders.png

                overlaysHtml += `
                    <img id="${overlayId}"
                        src="${imageSrc}"
                        loading="lazy"
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 1; transition: opacity 0.3s ease-in-out;" />
                `;
            }
        }

        mapDisplayPlaceholder.innerHTML = `
            <div style="flex-grow: 1; position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
                <img id="currentMapImage"
                    src="/image/${mapSlug}/map.jpg"
                    alt="${mapAltText}"
                    loading="lazy"
                    style="width: 100%; height: auto; display: block; ${darkMode ? 'filter: brightness(0.7) contrast(1.2);' : ''}" />

                <div id="overlays-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                    ${overlaysHtml} </div>
            </div>
        `;

        //Beschreibungen einfügen
        const mapInfoTop = document.getElementById('map-info-top');
        mapInfoTop.innerHTML = top;

        const mapInfoBottom = document.getElementById('map-info-bottom');
        mapInfoBottom.innerHTML = bottom;

        // Fragen und Antworten einfügen
        if (questions && Array.isArray(questions)) {
            let questionsHtml = '<section class="faq-section"><h3>Frequently Asked Questions</h3>';
            questions.forEach(q => {
                questionsHtml += `
                    <div class="faq-item" style="margin-bottom:1rem;">
                        <div class="faq-question">${q.question}</div>
                        <div class="faq-answer">${q.answer}</div>
                    </div>
                `;
            });
            questionsHtml += '</section>';
            const questionsContainer = document.getElementById('questions');
            if (questionsContainer) {
                questionsContainer.innerHTML = questionsHtml;
            }
        }

        // Initialer Aufruf zum Aktualisieren der Sichtbarkeit
        updateMapDisplay(mapImageSrc, spawnToggleState, darkMode, currentMapSpawnTypes);
    }
}

// Parameter angepasst: spawnToggleState (der globale Zustand aller Toggle)
//                      currentMapSpawnTypes (die relevanten Typen für diese Karte)
function updateMapDisplay(mapImageSrc, spawnToggleState, darkMode, currentMapSpawnTypes) {
    const currentMapImage = document.getElementById('currentMapImage');
    const mapSlug = mapImageSrc.split('/').filter(Boolean).pop();

    if (currentMapImage) {
        currentMapImage.src = `/image/${mapSlug}/map.jpg`;
        currentMapImage.style.filter = darkMode ? 'brightness(0.5) contrast(1.2)' : '';
    }

    // Iteriere über alle _verfügbaren_ Spawn-Typen für die aktuelle Karte
    for (const typeKey in currentMapSpawnTypes) {
        if (Object.prototype.hasOwnProperty.call(currentMapSpawnTypes, typeKey)) {
            const overlayId = `${typeKey}Overlay`;
            const overlayElement = document.getElementById(overlayId);

            if (overlayElement) {
                // Aktualisiere src und Sichtbarkeit
                overlayElement.src = `/image/${mapSlug}/${typeKey}.png`;
                // Nutze den globalen Toggle-Zustand, um die Sichtbarkeit zu steuern
                overlayElement.style.opacity = spawnToggleState[typeKey] ? '1' : '0';
            }
        }
    }
}