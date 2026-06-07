// public/js/comments.js

(function() {
    // Check URL parameters for admin moderation key
    const urlParams = new URLSearchParams(window.location.search);
    const adminKey = urlParams.get('admin');
    if (adminKey !== null) {
        if (adminKey === '') {
            localStorage.removeItem('adminKey');
            console.log('Admin key removed.');
        } else {
            localStorage.setItem('adminKey', adminKey);
            console.log('Admin key saved in localStorage.');
        }
    }

    // Helper to safely escape HTML tags (XSS protection)
    function escapeHTML(str) {
        if (!str) return '';
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    // Initialize Map Comments
    window.initMapComments = function(mapSlug) {
        const container = document.getElementById('comments-section');
        if (!container) return;

        const savedUsername = localStorage.getItem('lastCommentUsername') || '';
        const isAdmin = !!localStorage.getItem('adminKey');

        container.innerHTML = `
            <div class="comments-wrapper">
                <div class="comments-header">
                    <h3>💬 Community Comments</h3>
                    <p class="comments-subtitle">Share tactics, tips, and spawn secrets for ${mapSlug.charAt(0).toUpperCase() + mapSlug.slice(1)}.</p>
                </div>
                
                <form id="commentForm" class="comment-form">
                    <div class="form-row">
                        <input type="text" id="commentUsername" class="comment-input" placeholder="Your Username..." required maxlength="30" value="${escapeHTML(savedUsername)}">
                    </div>
                    <div class="form-row">
                        <textarea id="commentText" class="comment-textarea" placeholder="Add a tactical tip or comment..." required maxlength="500"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="comment-submit-btn">Post Comment</button>
                    </div>
                </form>

                <div id="commentsList" class="comments-list">
                    <div class="comments-loading">Loading comments...</div>
                </div>
            </div>
        `;

        const form = document.getElementById('commentForm');
        const listContainer = document.getElementById('commentsList');

        // Function to load and render comments
        async function loadComments() {
            try {
                const headers = {};
                if (isAdmin) {
                    headers['x-admin-key'] = localStorage.getItem('adminKey');
                }

                const response = await fetch(`/api/comments/${mapSlug}`, { headers });
                if (!response.ok) throw new Error('Failed to fetch comments');
                const comments = await response.json();

                if (comments.length === 0) {
                    listContainer.innerHTML = `
                        <div class="comments-empty">
                            No comments yet. Be the first to share your tactical insight!
                        </div>
                    `;
                    return;
                }

                listContainer.innerHTML = '';
                comments.forEach(c => {
                    const dateStr = new Date(c.createdAt).toLocaleString();
                    const commentEl = document.createElement('div');
                    commentEl.className = 'comment-card';
                    
                    const ipBadge = c.ipAddress ? `<span class="comment-ip" title="User IP (Admin only)">(IP: ${escapeHTML(c.ipAddress)})</span>` : '';

                    commentEl.innerHTML = `
                        <div class="comment-card-header">
                            <span class="comment-author">👤 ${escapeHTML(c.username)} ${ipBadge}</span>
                            <span class="comment-date">${dateStr}</span>
                            ${isAdmin ? `<button class="comment-delete-btn" data-id="${c.id}" title="Delete comment">🗑️</button>` : ''}
                        </div>
                        <div class="comment-card-body">
                            <p>${escapeHTML(c.text).replace(/\n/g, '<br>')}</p>
                        </div>
                    `;
                    listContainer.appendChild(commentEl);
                });
            } catch (err) {
                console.error(err);
                listContainer.innerHTML = `<div class="comments-error">Error loading comments. Please try again.</div>`;
            }
        }

        // Form Submit Handler
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('commentUsername');
            const textInput = document.getElementById('commentText');

            const username = usernameInput.value.trim();
            const text = textInput.value.trim();

            if (!username || !text) return;

            try {
                const response = await fetch(`/api/comments/${mapSlug}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, text })
                });

                if (response.ok) {
                    // Success
                    textInput.value = '';
                    localStorage.setItem('lastCommentUsername', username);
                    // Reload list
                    loadComments();
                } else {
                    const errData = await response.json();
                    alert(`Failed to save comment: ${errData.error || 'Server error'}`);
                }
            } catch (err) {
                console.error('Error posting comment:', err);
                alert('Connection error. Failed to post comment.');
            }
        });

        // Deletion Moderation Handler (click delegation)
        listContainer.addEventListener('click', async (e) => {
            const deleteBtn = e.target.closest('.comment-delete-btn');
            if (!deleteBtn) return;

            const commentId = deleteBtn.dataset.id;
            const adminSecret = localStorage.getItem('adminKey');

            if (!adminSecret) return;

            if (confirm('Do you really want to delete this comment?')) {
                try {
                    const response = await fetch(`/api/comments/${commentId}`, {
                        method: 'DELETE',
                        headers: {
                            'x-admin-key': adminSecret
                        }
                    });

                    if (response.ok) {
                        loadComments();
                    } else {
                        const errData = await response.json();
                        alert(`Failed to delete comment: ${errData.error || 'Unauthorized'}`);
                    }
                } catch (err) {
                    console.error('Error deleting comment:', err);
                    alert('Connection error. Failed to delete comment.');
                }
            }
        });

        // Initial Load
        loadComments();
    };
})();
