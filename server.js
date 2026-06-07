//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./database');

const app = express();
const port = 3000;

const ASSETS_BASE_PATH = path.join(__dirname, 'assets');
const ASSETS_MAPS_PATH = path.join(ASSETS_BASE_PATH, 'maps');
const ASSETS_ICONS_PATH = path.join(ASSETS_BASE_PATH, 'icon'); // Pfad zu Icons

app.use(express.json());
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

// --- COMMENT SYSTEM API ENDPOINTS ---

// GET: Load comments for a specific map
app.get('/api/comments/:mapSlug', async (req, res) => {
    try {
        const mapSlug = req.params.mapSlug;
        const adminKey = req.headers['x-admin-key'];
        const expectedKey = process.env.ADMIN_SECRET_KEY || 'admin123';
        const isAdmin = adminKey && adminKey === expectedKey;

        console.log('GET api/comments called:', { mapSlug, adminKey, expectedKey, isAdmin });
        const comments = await db.getComments(mapSlug, isAdmin);
        if (comments.length > 0) {
            console.log('Sample comment fetched:', comments[0]);
        }
        res.json(comments);
    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

// POST: Add a new comment
app.post('/api/comments/:mapSlug', async (req, res) => {
    try {
        const mapSlug = req.params.mapSlug;
        const { username, text } = req.body;

        if (!username || typeof username !== 'string' || !username.trim()) {
            return res.status(400).json({ error: 'Username is required' });
        }
        if (!text || typeof text !== 'string' || !text.trim()) {
            return res.status(400).json({ error: 'Comment text is required' });
        }

        // Capture client IP address (supporting proxy forwarding headers)
        const rawIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
        const ipAddress = rawIp.split(',')[0].trim();

        const comment = await db.addComment(mapSlug, username.trim(), text.trim(), ipAddress);
        res.status(201).json(comment);
    } catch (err) {
        console.error('Error creating comment:', err);
        res.status(500).json({ error: 'Failed to save comment' });
    }
});

// DELETE: Delete a comment (Moderation)
app.delete('/api/comments/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const adminKey = req.headers['x-admin-key'];

        const expectedKey = process.env.ADMIN_SECRET_KEY || 'admin123';
        if (!adminKey || adminKey !== expectedKey) {
            return res.status(401).json({ error: 'Unauthorized: Invalid admin key' });
        }

        const deleted = await db.deleteComment(commentId);
        if (deleted) {
            res.json({ success: true, message: 'Comment deleted' });
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).json({ error: 'Failed to delete comment' });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});