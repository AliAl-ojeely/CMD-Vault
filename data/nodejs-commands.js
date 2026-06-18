const nodejsCommands = [
    // Node.js Basics
    { platform: "nodejs", category: "Node.js Basics", command: "node -v", desc_en: "Print Node.js version.", desc_ar: "عرض إصدار Node.js المثبت." },
    { platform: "nodejs", category: "Node.js Basics", command: "npm -v", desc_en: "Print npm version.", desc_ar: "عرض إصدار مدير الحزم npm." },
    { platform: "nodejs", category: "Node.js Basics", command: "node <file.js>", desc_en: "Execute a JavaScript file using Node.js.", desc_ar: "تشغيل ملف جافاسكريبت باستخدام Node.js." },
    { platform: "nodejs", category: "Node.js Basics", command: "node", desc_en: "Start the Node.js REPL (interactive shell).", desc_ar: "بدء بيئة Node.js التفاعلية (REPL) لكتابة الكود مباشرة." },
    { platform: "nodejs", category: "Node.js Basics", command: "npm init", desc_en: "Create a package.json file interactively.", desc_ar: "إنشاء ملف package.json للمشروع بشكل تفاعلي." },
    { platform: "nodejs", category: "Node.js Basics", command: "npm init -y", desc_en: "Create a package.json file with default values.", desc_ar: "إنشاء ملف package.json فوراً بالقيم الافتراضية." },

    // NPM Packages
    { platform: "nodejs", category: "NPM Packages", command: "npm install", desc_en: "Install all dependencies listed in package.json.", desc_ar: "تثبيت جميع الحزم المذكورة في ملف package.json." },
    { platform: "nodejs", category: "NPM Packages", command: "npm install <package>", desc_en: "Install a package and add it to dependencies.", desc_ar: "تثبيت حزمة وإضافتها إلى قائمة الاعتماديات." },
    { platform: "nodejs", category: "NPM Packages", command: "npm install <package> --save-dev", desc_en: "Install a package as a development dependency.", desc_ar: "تثبيت حزمة كاعتمادية خاصة ببيئة التطوير فقط (devDependencies)." },
    { platform: "nodejs", category: "NPM Packages", command: "npm install -g <package>", desc_en: "Install a package globally on your system.", desc_ar: "تثبيت حزمة بشكل عام (Global) على مستوى النظام." },
    { platform: "nodejs", category: "NPM Packages", command: "npm uninstall <package>", desc_en: "Remove a package from your project.", desc_ar: "حذف حزمة من المشروع ومن ملف package.json." },
    { platform: "nodejs", category: "NPM Packages", command: "npm update", desc_en: "Update all packages to their latest compatible versions.", desc_ar: "تحديث جميع الحزم إلى أحدث إصدار متوافق." },
    { platform: "nodejs", category: "NPM Packages", command: "npm outdated", desc_en: "Check for outdated packages in your project.", desc_ar: "التحقق من الحزم القديمة في مشروعك وعرض التحديثات المتاحة." },
    { platform: "nodejs", category: "NPM Packages", command: "npm list", desc_en: "List installed packages and their versions.", desc_ar: "عرض شجرة الحزم المثبتة وإصداراتها." },
    { platform: "nodejs", category: "NPM Packages", command: "npm list -g --depth=0", desc_en: "List globally installed packages.", desc_ar: "عرض الحزم المثبتة على مستوى النظام (بدون الاعتماديات الفرعية)." },

    // NPM Scripts
    { platform: "nodejs", category: "NPM Scripts", command: "npm start", desc_en: "Run the 'start' script defined in package.json.", desc_ar: "تشغيل سكربت 'start' المعرف في ملف package.json." },
    { platform: "nodejs", category: "NPM Scripts", command: "npm test", desc_en: "Run the 'test' script defined in package.json.", desc_ar: "تشغيل سكربت الاختبارات 'test'." },
    { platform: "nodejs", category: "NPM Scripts", command: "npm run <script-name>", desc_en: "Run a custom script defined in package.json.", desc_ar: "تشغيل سكربت مخصص تم تعريفه في package.json." },
    { platform: "nodejs", category: "NPM Scripts", command: "npx <package>", desc_en: "Execute a package binary without installing it globally.", desc_ar: "تنفيذ أداة أو حزمة دون الحاجة لتثبيتها بشكل دائم." },

    // Cache & Config
    { platform: "nodejs", category: "Cache & Config", command: "npm cache clean --force", desc_en: "Clear the npm cache.", desc_ar: "مسح ذاكرة التخزين المؤقت لـ npm بالكامل (لإصلاح مشاكل التثبيت)." },
    { platform: "nodejs", category: "Cache & Config", command: "npm cache verify", desc_en: "Verify the contents of the npm cache.", desc_ar: "التحقق من سلامة محتويات ذاكرة التخزين المؤقت لـ npm." },
    { platform: "nodejs", category: "Cache & Config", command: "npm config list", desc_en: "Show all npm configuration settings.", desc_ar: "عرض جميع إعدادات npm الحالية." },
    { platform: "nodejs", category: "Cache & Config", command: "npm config set <key> <value>", desc_en: "Set an npm configuration value.", desc_ar: "تعيين قيمة جديدة لإعداد معين في npm." },
    { platform: "nodejs", category: "Cache & Config", command: "npm audit", desc_en: "Run a security audit on your project dependencies.", desc_ar: "فحص أمني لاكتشاف الثغرات في حزم المشروع." },
    { platform: "nodejs", category: "Cache & Config", command: "npm audit fix", desc_en: "Automatically fix security vulnerabilities.", desc_ar: "إصلاح الثغرات الأمنية في الحزم تلقائياً (إن أمكن)." },

    // Advanced & Debugging
    { platform: "nodejs", category: "Advanced & Debugging", command: "node --inspect <file.js>", desc_en: "Run a Node.js script with the inspector enabled.", desc_ar: "تشغيل السكربت مع تفعيل أداة الفحص (Debugging)." },
    { platform: "nodejs", category: "Advanced & Debugging", command: "node --watch <file.js>", desc_en: "Run script and automatically restart on file changes.", desc_ar: "تشغيل السكربت وإعادة تشغيله تلقائياً عند حفظ التعديلات (Node 18+)." },
    { platform: "nodejs", category: "Advanced & Debugging", command: "npm publish", desc_en: "Publish a package to the npm registry.", desc_ar: "نشر حزمتك الخاصة إلى مستودع npm العام." },
    { platform: "nodejs", category: "Advanced & Debugging", command: "npm login", desc_en: "Log in to the npm registry.", desc_ar: "تسجيل الدخول إلى حساب npm الخاص بك من موجه الأوامر." },
    { platform: "nodejs", category: "Advanced & Debugging", command: "npm link", desc_en: "Symlink a package folder for local development.", desc_ar: "إنشاء رابط وهمي للحزمة لاختبارها محلياً قبل النشر." }
];

module.exports = nodejsCommands;