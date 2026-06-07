// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// Ensure data folder exists in workspace
const dbDir = path.join(__dirname, 'data');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to connect to SQLite database:', err);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS comments (
                id TEXT PRIMARY KEY,
                map_slug TEXT NOT NULL,
                username TEXT NOT NULL,
                comment_text TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
            if (err) {
                console.error('Error creating comments table:', err);
            } else {
                console.log('Comments table is ready.');
                // Migration: Add ip_address column if it does not exist
                db.run('ALTER TABLE comments ADD COLUMN ip_address TEXT', (err2) => {
                    if (err2 && !err2.message.includes('duplicate column name')) {
                        console.error('Error adding ip_address column:', err2);
                    }
                });
            }
        });
    });
}

// Get comments for a map slug
function getComments(mapSlug, includeIp = false) {
    return new Promise((resolve, reject) => {
        const query = includeIp
            ? 'SELECT id, username, comment_text as text, ip_address as ipAddress, created_at as createdAt FROM comments WHERE map_slug = ? ORDER BY created_at DESC'
            : 'SELECT id, username, comment_text as text, created_at as createdAt FROM comments WHERE map_slug = ? ORDER BY created_at DESC';
        db.all(
            query,
            [mapSlug],
            (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

// Add comment
function addComment(mapSlug, username, commentText, ipAddress) {
    return new Promise((resolve, reject) => {
        const id = crypto.randomUUID();
        db.run(
            'INSERT INTO comments (id, map_slug, username, comment_text, ip_address) VALUES (?, ?, ?, ?, ?)',
            [id, mapSlug, username, commentText, ipAddress],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, username, text: commentText, ipAddress, createdAt: new Date().toISOString() });
                }
            }
        );
    });
}

// Delete comment by ID
function deleteComment(commentId) {
    return new Promise((resolve, reject) => {
        db.run(
            'DELETE FROM comments WHERE id = ?',
            [commentId],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes > 0);
                }
            }
        );
    });
}

module.exports = {
    getComments,
    addComment,
    deleteComment
};
