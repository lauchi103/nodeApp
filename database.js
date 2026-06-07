// database.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Ensure data folder and comments JSON file exist in workspace
const dbDir = path.join(__dirname, 'data');
const dbPath = path.join(dbDir, 'comments.json');

if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]), 'utf8');
}

// Read helper
function readData() {
    try {
        if (!fs.existsSync(dbPath)) return [];
        const content = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(content || '[]');
    } catch (e) {
        console.error('Failed to read comments JSON database:', e);
        return [];
    }
}

// Write helper
function writeData(data) {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error('Failed to write comments JSON database:', e);
    }
}

// Get comments for a map slug
function getComments(mapSlug, includeIp = false) {
    return new Promise((resolve) => {
        const all = readData();
        const filtered = all
            .filter(c => c.mapSlug === mapSlug)
            .map(c => {
                const res = {
                    id: c.id,
                    username: c.username,
                    text: c.text,
                    createdAt: c.createdAt
                };
                if (includeIp) {
                    res.ipAddress = c.ipAddress;
                }
                return res;
            });
        
        // Sort chronologically (newest first)
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        resolve(filtered);
    });
}

// Add comment
function addComment(mapSlug, username, commentText, ipAddress) {
    return new Promise((resolve) => {
        const all = readData();
        const newComment = {
            id: crypto.randomUUID(),
            mapSlug,
            username,
            text: commentText,
            ipAddress,
            createdAt: new Date().toISOString()
        };
        all.push(newComment);
        writeData(all);
        resolve(newComment);
    });
}

// Delete comment by ID
function deleteComment(commentId) {
    return new Promise((resolve) => {
        const all = readData();
        const initialLength = all.length;
        const filtered = all.filter(c => c.id !== commentId);
        writeData(filtered);
        resolve(filtered.length < initialLength);
    });
}

module.exports = {
    getComments,
    addComment,
    deleteComment
};
