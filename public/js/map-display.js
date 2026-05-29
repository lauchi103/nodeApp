// public/js/map-display.js

// Parameter angepasst: spawnToggleState (der globale Zustand aller Toggle)
//                      currentMapSpawnTypes (die relevanten Typen für diese Karte)
function loadMapDisplay(mapImageSrc, mapName, spawnToggleState, darkMode, currentMapSpawnTypes, questions, top, bottom, addon) {
    const mapSlug = mapImageSrc.split('/').filter(Boolean).pop();

    const mapNameElement = document.querySelector('.map-name');
    if (mapNameElement) {
        mapNameElement.textContent = mapName; // Setze den Kartennamen im Header
    }

    // Dynamisch den Meta-Description-Tag anpassen
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        // Nutze mapName und top (ohne HTML-Tags) für die Beschreibung, max. 160 Zeichen
        const plainTop = top ? top.replace(/<[^>]+>/g, '').replace(/\n/g, ' ') : '';
        metaDescription.setAttribute(
            'content',
            `${mapName} - PUBG Map Guide: ${plainTop.slice(0, 160)}`
        );
    }

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
                        alt="${typeKey} Overlay"
                        src="${imageSrc}"
                        loading="lazy"
                        class="map-overlay-img" />
                `;
            }
        }

        mapDisplayPlaceholder.innerHTML = `
            <div class="map-wrapper-inner">
                <img id="currentMapImage"
                    src="/image/${mapSlug}/map.jpg"
                    alt="${mapName} Map"
                    loading="lazy"
                    class="map-base-img" />

                <div id="overlays-container" class="map-overlays-container">
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
            let questionsHtml = '<section class="faq-section"><h3>Frequently Asked Questions - FAQ</h3>';
            questions.forEach(q => {
                questionsHtml += `
                    <div class="faq-item">
                        <div class="faq-question">${q.question}</div>
                        <div class="faq-answer">${q.answer}</div>
                    </div>
                `;
            });
            if (addon){
                questionsHtml += "<div class='addon'>";
                questionsHtml += addon;
                questionsHtml += '</div>';
            }
            questionsHtml += '<div class="support">Found an issue or have suggestions? <a href="mailto:support@pubg-maps.com">Contact us via email</a> - your feedback helps us improve the map.</div>'; 
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