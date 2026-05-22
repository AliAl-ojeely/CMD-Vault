import { renderCommandList } from './ui.js';

let allCommands = [];
let currentCategory = 'all';
let currentLang = 'en';
let favorites = [];

export function initSearch(commands, lang, favs = []) {
    allCommands = commands;
    currentLang = lang;
    favorites = favs;
}

export function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
}

export function setSearchLanguage(lang) {
    currentLang = lang;
    applyFilters();
}

export function setFavorites(favs) {
    favorites = favs;
}

export function setupSearchListeners() {
    document.getElementById('search-input').addEventListener('input', applyFilters);
}

function applyFilters() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    let results = allCommands;

    if (currentCategory === 'favorites') {
        // Compare with raw command string (exactly as stored)
        results = results.filter(cmd => favorites.includes(cmd.command));
    } else if (currentCategory !== 'all') {
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

    renderCommandList(results, favorites);
}