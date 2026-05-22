# CMD Vault

**Cross‑platform, offline command reference hub – built with Electron.js**  

<div align="center">
  <img src="assets/icon.png" alt="CMD Vault Logo" width="120" />
</div>

<p align="center">
  <strong>English</strong> |
  <a href="#%D9%88%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9">العربية</a>
</p>

---

## What is CMD Vault?

CMD Vault is a **fully offline, bilingual** command reference application for **Windows**, **Linux**, and **macOS**. It provides a categorized, instantly searchable library of essential terminal commands, each accompanied by a detailed explanation in **English and Arabic**.  

Built with Electron.js, the app requires no internet connection, respects your privacy, and is perfect for isolated servers, secure environments, or anyone tired of searching the web for command syntax.

> **Important:** CMD Vault is a **reference tool** – it displays commands, lets you copy them, and explains their purpose. It does **not** execute any command on your system.

---

## Features

- **Bilingual First** – Full Arabic & English UI and command descriptions.  
- **100% Offline** – No ads, no tracking, no analytics. Works in air‑gapped environments.  
- **Multi‑OS Support** – Dedicated command sets for Windows, Linux, and macOS.  
- **Linux Distro Selector** – Choose Debian/Ubuntu, Red Hat/Fedora, or Arch/Manjaro to see relevant commands.  
- **Instant Search & Categories** – Filter by keyword or browse by category (System Info, Networking, File Management, etc.).  
- **One‑Click Copy** – Copy any command to your clipboard with a single click.  
- **Detailed Descriptions** – Each command includes a comprehensive “what it does” and “when to use it” in both languages.  
- **Persistent Settings** – Language and window size preferences are saved automatically.  
- **OLED Dark Theme** – High‑contrast, dark interface designed for terminals and night work.  
- **Developer Info Modal** – Quick access to project credits and version information.  
- **Portable & Lightweight** – No heavy database engine; all command data lives in simple JavaScript files.  
- **Cross‑Platform Builds** – Pre‑built installers for Windows, macOS, and Linux are available.  

---

## Installation

### Pre‑built releases

Download the latest installer for your operating system from the [Releases](https://github.com/AliAl-ojeely/CMD-Vault/releases) page:

- **Windows** – `.exe` NSIS installer (x64 / ARM64)  
- **macOS** – `.dmg` universal binary (Intel + Apple Silicon)  
- **Linux** – `.AppImage` (x64 / ARM64)  

### Run from source (development)

```bash
git clone https://github.com/AliAl-ojeely/CMD-Vault.git
cd CMD-Vault
npm install
npm start
```

Requirements: Node.js 22+ and npm.

Build from source
To create distributable installers locally:

Bash
npm run dist          # Build for the current OS
npm run dist-win      # Windows only
npm run dist-linux    # Linux only
The outputs will appear in the dist/ folder.

Project Structure
CMD-Vault/
├── .github/
│   └── workflows/
│       └── release.yml          # GitHub Actions – automatic releases
├── assets/
│   ├── fonts/                   # Cairo, Poppins (supports Arabic)
│   ├── fontawesome/             # Icons
│   ├── icon.ico
│   ├── icon.png
│   └── icon.icns
├── css/
│   ├── main.css                 # Entry point, imports all other CSS
│   ├── variables.css            # OLED dark theme variables
│   ├── layout.css               # Sidebar, content, landing page layout
│   ├── components.css           # Cards, buttons, animations
│   ├── terminal-ui.css          # Command syntax styling
│   └── modals.css               # Modals and overlays
├── data/
│   ├── win-commands.js          # Windows commands with bilingual descriptions
│   ├── linux-commands.js        # Linux commands
│   └── commands-grouping.js     # Utility: merges the above into commands.json
├── modules/
│   ├── database.js              # Loads commands from the .js files
│   ├── os-validator.js          # Ensures command platform matches host OS
│   ├── distro-detector.js       # Detects Linux distribution family
│   ├── updater.js               # Checks for new GitHub releases
│   └── dialogs.js               # (placeholder for future dialogs)
├── render/
│   ├── state.js                 # Centralised renderer state
│   ├── ui.js                    # DOM helpers, language switching, modal logic
│   ├── search.js                # Search & filter logic
│   ├── command-card.js          # Creates individual command cards
│   └── render-main.js           # Main renderer orchestrator
├── src/
│   ├── main.js                  # Electron main process, IPC handlers
│   ├── preload.js               # Context bridge (secure API exposure)
│   └── translations.js          # Full Arabic & English dictionary
├── index.html                   # Single-page application shell
├── package.json                 # Dependencies, scripts, build configuration
├── README.md                    # This file
└── .gitignore

Usage
Launch the app.

On the landing page, choose your operating system (Windows or Linux).

If you pick Linux, a second screen lets you select your distribution family.

Browse commands in the left sidebar by category, or use the search bar.

Click Copy to copy a command, or Details to read a full description.

Access Settings from the sidebar to change the language or adjust the window size.

Contributing
Contributions are welcome!

You can help by:

Adding new commands to the data/ files (follow the existing format).

Improving translations or descriptions.

Reporting bugs or suggesting features via Issues.

Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License – see the LICENSE file for details.

Credits
Frontend-End Web Developer – Ali Al‑ojeely (Mr.Ghost)

Email – <alialojeely@gmail.com>

GitHub – AliAl‑ojeely

Version – 1.0.0

وصف المشروع (Arabic)
CMD Vault هو تطبيق مرجعي للأوامر الطرفية مخصص لأنظمة ويندوز ولينكس.

يحتوي على مكتبة شاملة من الأوامر المفيدة مع شرح مفصّل باللغتين العربية والإنجليزية.

التطبيق يعمل بشكل كامل دون اتصال بالإنترنت، ولا يقوم بتنفيذ الأوامر – بل يعرضها فقط بغرض النسخ والاستخدام اليدوي.

الميزات
واجهة مستخدم ثنائية اللغة (عربي / English).

دعم محسّن لأنظمة ويندوز ولينكس (مع اختيار التوزيعة).

بحث سريع وفئات منظمة (الشبكات، إدارة الملفات، معلومات النظام، …).

نسخ الأوامر بنقرة واحدة وقراءة وصف شامل لكل أمر.

إعدادات دائمة (اللغة وحجم النافذة).

تصميم OLED داكن مريح للعين ومناسب لبيئات العمل الليلية.

التحميل
يمكنك تحميل أحدث إصدار لأنظمة ويندوز ولينكس من صفحة الإصدارات.

المساهمة
نرحب بمساهماتكم! يمكنكم إضافة أوامر جديدة، تحسين الترجمات، أو الإبلاغ عن المشكلات.
