// render/shortcuts.js
import { t } from './ui.js';

let shortcutsModal = null;
let isModalOpen = false;

// Define shortcuts with icons and categories
const shortcuts = [
    { key: 'Ctrl+F', icon: 'fa-solid fa-magnifying-glass', action: 'focus_search', defaultEn: 'Focus search bar', defaultAr: 'التركيز على شريط البحث' },
    { key: 'Esc', icon: 'fa-solid fa-xmark', action: 'clear_search_close_modal', defaultEn: 'Clear search / Close modal', defaultAr: 'مسح البحث / إغلاق النافذة' },
    { key: 'Alt+←', icon: 'fa-solid fa-arrow-left', action: 'go_back', defaultEn: 'Go back to previous view', defaultAr: 'العودة إلى العرض السابق' },
    { key: 'Ctrl+K', icon: 'fa-solid fa-sliders', action: 'open_settings', defaultEn: 'Open Settings', defaultAr: 'فتح الإعدادات' },
    { key: 'F1', icon: 'fa-solid fa-keyboard', action: 'open_shortcuts', defaultEn: 'Open this shortcuts menu', defaultAr: 'فتح قائمة الاختصارات' },
    { key: 'Ctrl+C', icon: 'fa-regular fa-copy', action: 'copy_command', defaultEn: 'Copy selected command (when focused on card)', defaultAr: 'نسخ الأمر المحدد (عند التركيز على البطاقة)' },
    { key: '↑ / ↓', icon: 'fa-solid fa-arrow-up-wide-short', action: 'navigate_cards', defaultEn: 'Navigate between command cards', defaultAr: 'التنقل بين بطاقات الأوامر' },
    { key: 'Enter', icon: 'fa-solid fa-circle-info', action: 'show_details', defaultEn: 'Show command details (when card focused)', defaultAr: 'عرض تفاصيل الأمر (عند تركيز البطاقة)' }
];

function getShortcutDescription(shortcut) {
    const key = `shortcut_${shortcut.action}`;
    const translated = t(key);
    if (translated !== key) return translated;
    const isArabic = document.documentElement.lang === 'ar';
    return isArabic ? shortcut.defaultAr : shortcut.defaultEn;
}

function buildModalContent() {
    const isArabic = document.documentElement.lang === 'ar';
    const title = t('shortcuts_title') || (isArabic ? 'اختصارات لوحة المفاتيح' : 'Keyboard Shortcuts');

    let html = `
        <div class="shortcuts-modal-container">
            <div class="shortcuts-header">
                <i class="fa-solid fa-keyboard"></i>
                <h2>${title}</h2>
                <button class="shortcuts-close-btn" id="closeShortcutsModalBtn">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
            <div class="shortcuts-grid">
    `;

    shortcuts.forEach(s => {
        const desc = getShortcutDescription(s);
        html += `
            <div class="shortcut-card">
                <div class="shortcut-key-wrapper">
                    <i class="${s.icon} shortcut-icon"></i>
                    <kbd>${s.key}</kbd>
                </div>
                <span class="shortcut-desc">${desc}</span>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;
    return html;
}

function showShortcutsModal() {
    if (!shortcutsModal) {
        shortcutsModal = document.createElement('div');
        shortcutsModal.id = 'shortcutsModal';
        shortcutsModal.className = 'modal-overlay shortcuts-modal';
        document.body.appendChild(shortcutsModal);
    }

    shortcutsModal.innerHTML = buildModalContent();
    shortcutsModal.style.display = 'flex';
    isModalOpen = true;

    const closeBtn = document.getElementById('closeShortcutsModalBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            shortcutsModal.style.display = 'none';
            isModalOpen = false;
        });
    }

    shortcutsModal.addEventListener('click', (e) => {
        if (e.target === shortcutsModal) {
            shortcutsModal.style.display = 'none';
            isModalOpen = false;
        }
    });
}

function createShortcutsButton() {
    const landingPage = document.getElementById('landing-page');
    if (!landingPage || document.getElementById('landing-shortcuts-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'landing-shortcuts-btn';
    btn.className = 'shortcuts-fab';
    btn.innerHTML = `<img src="assets/icon.png" alt="Shortcuts" />`;
    btn.title = t('shortcuts_button_title') || 'Keyboard Shortcuts';
    btn.addEventListener('click', showShortcutsModal);
    landingPage.appendChild(btn);
}

export function updateShortcutsModalLanguage() {
    if (shortcutsModal && shortcutsModal.style.display === 'flex') {
        shortcutsModal.innerHTML = buildModalContent();
        const closeBtn = document.getElementById('closeShortcutsModalBtn');
        if (closeBtn) closeBtn.addEventListener('click', () => {
            shortcutsModal.style.display = 'none';
            isModalOpen = false;
        });
        shortcutsModal.addEventListener('click', (e) => {
            if (e.target === shortcutsModal) {
                shortcutsModal.style.display = 'none';
                isModalOpen = false;
            }
        });
    }
    const btn = document.getElementById('landing-shortcuts-btn');
    if (btn) btn.title = t('shortcuts_button_title') || 'Keyboard Shortcuts';
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

        if (event.key === 'F1') {
            event.preventDefault();
            showShortcutsModal();
            return;
        }

        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            const settingsBtn = document.getElementById('open-settings-btn');
            if (settingsBtn) settingsBtn.click();
            return;
        }

        if (event.altKey && event.key === 'ArrowLeft') {
            event.preventDefault();
            const backBtn = document.getElementById('back-to-landing');
            if (backBtn && backBtn.style.display !== 'none') backBtn.click();
            return;
        }

        if (event.key === 'Escape') {
            if (isModalOpen && shortcutsModal) {
                shortcutsModal.style.display = 'none';
                isModalOpen = false;
                return;
            }
            const searchInput = document.getElementById('search-input');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
            return;
        }
    });
}

export function initShortcuts() {
    createShortcutsButton();
    initKeyboardShortcuts();

    const observer = new MutationObserver(() => {
        const landing = document.getElementById('landing-page');
        if (landing && landing.style.display !== 'none') createShortcutsButton();
    });
    observer.observe(document.body, { attributes: true, subtree: false, attributeFilter: ['style'] });
}

export { showShortcutsModal };