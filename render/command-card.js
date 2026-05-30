// render/command-card.js
import { t, showModal, showInfoModal } from './ui.js';

let currentLang = 'ar';

export function setLanguage(lang) {
    currentLang = lang;
}

let toggleFavoriteCallback = null;
export function setToggleFavoriteCallback(cb) {
    toggleFavoriteCallback = cb;
}

export function createCommandCard(cmd, isFavorite = false) {
    const card = document.createElement('div');
    card.className = 'command-card';
    card.cmdData = cmd;

    // Determine prompt symbol and display command text
    let promptSymbol = cmd.platform === 'windows' ? '>' : '$';
    let fullCommand = cmd.command.replace(/^[>\$]\s*/, ''); // cleaned

    // SPECIAL HANDLING FOR AI PROMPTS
    let displayCmd = fullCommand;
    if (cmd.platform === 'ai') {
        promptSymbol = '✨';   // AI icon
        // Truncate to 60 characters + ellipsis
        if (displayCmd.length > 60) {
            displayCmd = displayCmd.substring(0, 60) + '…';
        }
    }

    const header = document.createElement('div');
    header.className = 'cmd-header';
    header.innerHTML = `<code class="cmd-syntax">${promptSymbol} ${escapeHtml(displayCmd)}</code>`;

    const desc = document.createElement('p');
    desc.className = 'cmd-description';
    updateDescription(card);

    const actions = document.createElement('div');
    actions.className = 'cmd-actions';

    // Favorite button
    const favBtn = document.createElement('button');
    favBtn.className = 'btn-favorite';
    favBtn.setAttribute('data-command', cmd.command);
    favBtn.title = isFavorite ? t('remove_from_favorites') : t('add_to_favorites');
    favBtn.innerHTML = isFavorite
        ? '<i class="fa-solid fa-heart"></i>'
        : '<i class="fa-regular fa-heart"></i>';
    favBtn.addEventListener('click', () => {
        if (toggleFavoriteCallback) {
            toggleFavoriteCallback(cmd.command);
        }
    });

    // Copy button – copies the FULL original prompt (not truncated)
    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-copy';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i> ' + t('copy');
    copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(cmd.command);
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> ' + t('copy');
        }, 1500);
    });

    // Details button – shows full prompt and bilingual description
    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn-details';
    detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> ' + t('details');
    detailsBtn.addEventListener('click', () => {
        const cmdData = card.cmdData;
        // Hide title for AI prompts by passing empty string
        const title = cmdData.platform === 'ai' ? '' : cmdData.command;
        const descText = currentLang === 'ar' ? cmdData.desc_ar : cmdData.desc_en;
        // Correct contentHTML – this was the problem!
        const contentHTML = `
            <div style="text-align: left;">
                <p style="margin-bottom: 0.5rem;">
                    <strong>${cmdData.platform === 'ai' ? 'Prompt:' : 'Command:'}</strong><br>
                    <code style="background:#000; padding:0.2rem 0.5rem; border-radius:4px; white-space: pre-wrap; word-break: break-word; display: inline-block; max-width: 100%;">
                        ${escapeHtml(cmdData.command)}
                    </code>
                </p>
                <p><strong>Description:</strong><br>${escapeHtml(descText)}</p>
            </div>`;
        showInfoModal(title, contentHTML);
    });

    actions.appendChild(favBtn);
    actions.appendChild(copyBtn);
    actions.appendChild(detailsBtn);
    card.appendChild(header);
    card.appendChild(desc);
    card.appendChild(actions);

    return card;
}

// Helper to prevent XSS
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

export function updateAllDescriptions(lang) {
    currentLang = lang;
    document.querySelectorAll('.command-card').forEach(card => updateDescription(card));
}

function updateDescription(card) {
    const cmd = card.cmdData;
    if (!cmd) return;
    const descEl = card.querySelector('.cmd-description');
    if (descEl) {
        descEl.textContent = currentLang === 'ar' ? cmd.desc_ar : cmd.desc_en;
    }
}