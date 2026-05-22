import { renderCommandList } from './ui.js';

let allCommands = [];
let currentCategory = 'all';
let currentLang = 'en';

export function initSearch(commands, lang) {
    allCommands = commands;
    currentLang = lang;
}

export function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
}

export function setSearchLanguage(lang) {
    currentLang = lang;
    applyFilters(); // re‑apply filters to reflect language in descriptions
}

function applyFilters() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    let results = allCommands;

    if (currentCategory !== 'all') {
        results = results.filter(cmd => cmd.category === currentCategory);
    }

    if (query) {
        results = results.filter(cmd => {
            const desc = currentLang === 'ar' ? cmd.desc_ar : cmd.desc_en;
            return (
                cmd.command.toLowerCase().includes(query) ||
                (desc && desc.toLowerCase().includes(query))
            );
        });
    }

    renderCommandList(results);
}

// Attach search input listener once
export function setupSearchListeners() {
    document.getElementById('search-input').addEventListener('input', applyFilters);
}