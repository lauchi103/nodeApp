//server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

const ASSETS_BASE_PATH = path.join(__dirname, 'assets');
const ASSETS_MAPS_PATH = path.join(ASSETS_BASE_PATH, 'maps');
const ASSETS_ICONS_PATH = path.join(ASSETS_BASE_PATH, 'icon'); // Pfad zu Icons

app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/maps/:mapName'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'map-template.html'));
});

app.get('/image/:mapName/:imageFile', (req, res) => {
    const mapName = req.params.mapName;
    const imageFile = req.params.imageFile;

    if (!['.jpg', '.jpeg', '.png', '.gif'].some(ext => imageFile.toLowerCase().endsWith(ext))) {
        return res.status(400).send('Ungültiger Bilddateityp.');
    }

    const imagePath = path.join(ASSETS_MAPS_PATH, mapName, imageFile);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Bilddatei nicht gefunden: ${imagePath}`);
            return res.status(404).send('Bild nicht gefunden.');
        }

        let contentType = 'application/octet-stream'; // Standard
        if (imageFile.toLowerCase().endsWith('.jpg') || imageFile.toLowerCase().endsWith('.jpeg')) {
            contentType = 'image/jpeg';
        } else if (imageFile.toLowerCase().endsWith('.png')) {
            contentType = 'image/png';
        } else if (imageFile.toLowerCase().endsWith('.gif')) {
            contentType = 'image/gif';
        }
        res.setHeader('Content-Type', contentType);

        fs.createReadStream(imagePath).pipe(res);
    });
});

// ROUTE: SVG-Icons streamen (Wiederhergestellt)
app.get('/icon/:iconName', (req, res) => {
    const iconName = req.params.iconName;

    // Nur .svg Dateien zulassen
    if (!iconName.toLowerCase().endsWith('.svg')) {
        return res.status(400).send('Ungültiger Icon-Dateityp. Nur SVG erlaubt.');
    }

    const iconPath = path.join(ASSETS_ICONS_PATH, iconName);

    fs.access(iconPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Icon-Datei nicht gefunden: ${iconPath}`);
            return res.status(404).send('Icon nicht gefunden.');
        }

        res.setHeader('Content-Type', 'image/svg+xml'); // Korrekter Content-Type für SVG
        fs.createReadStream(iconPath).pipe(res);
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});