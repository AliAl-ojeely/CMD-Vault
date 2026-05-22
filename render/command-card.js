import { t, showModal, showInfoModal } from './ui.js';

let currentLang = 'ar';

export function setLanguage(lang) {
    currentLang = lang;
}

export function createCommandCard(cmd) {
    const card = document.createElement('div');
    card.className = 'command-card';
    card.cmdData = cmd;

    const promptSymbol = cmd.platform === 'windows' ? '>' : '$';
    let cleanCmd = cmd.command.replace(/^[>\$]\s*/, '');

    const header = document.createElement('div');
    header.className = 'cmd-header';
    header.innerHTML = `<code class="cmd-syntax">${promptSymbol} ${cleanCmd}</code>`;

    const desc = document.createElement('p');
    desc.className = 'cmd-description';
    updateDescription(card);

    const actions = document.createElement('div');
    actions.className = 'cmd-actions';

    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-copy';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i> ' + t('copy');
    copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(cleanCmd);
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> ' + t('copy');
        }, 1500);
    });

    // Details button
    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn-details';
    detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> ' + t('details');
    detailsBtn.addEventListener('click', () => {
        const cmdData = card.cmdData;
        const title = cmdData.command;
        const descText = currentLang === 'ar' ? cmdData.desc_ar : cmdData.desc_en;
        const contentHTML = `
            <div style="text-align: left;">
                <p style="margin-bottom: 0.5rem;"><strong>Command:</strong> <code style="background:#000; padding:0.2rem 0.5rem; border-radius:4px;">${cmdData.command}</code></p>
                <p><strong>Description:</strong><br>${descText}</p>
            </div>`;
        showInfoModal(title, contentHTML);
    });

    actions.appendChild(copyBtn);
    actions.appendChild(detailsBtn);
    // No execute button
    card.appendChild(header);
    card.appendChild(desc);
    card.appendChild(actions);

    return card;
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