// data/mac-commands.js
const macCommands = [
    {
        "command": "networksetup -listallnetworkservices",
        "platform": "macos",
        "category": "Networking",
        "desc_en": "Lists all network services (Ethernet, Wi‑Fi, VPN) configured on the Mac. Useful for scripting network changes or verifying adapter names.",
        "desc_ar": "يسرد جميع خدمات الشبكة (Ethernet, Wi‑Fi, VPN) المهيأة على جهاز Mac. مفيد لأتمتة تغييرات الشبكة أو التحقق من أسماء المحولات."
    },
    {
        "command": "softwareupdate --list",
        "platform": "macos",
        "category": "System Update",
        "desc_en": "Queries Apple's software update server and displays available updates for macOS and installed Apple software. The command-line equivalent of the Software Update pane.",
        "desc_ar": "يستعلم من خادم تحديثات أبل ويعرض التحديثات المتوفرة لنظام macOS وبرامج أبل المثبّتة. المكافئ السطري للوحة تحديث البرامج."
    },
    {
        "command": "pmset -g batt",
        "platform": "macos",
        "category": "Power Management",
        "desc_en": "Shows detailed battery status and power management settings, including charge percentage, health, and time remaining. Essential for diagnosing battery issues.",
        "desc_ar": "يعرض حالة البطارية وإعدادات إدارة الطاقة، بما في ذلك نسبة الشحن والصحة والوقت المتبقي. ضروري لتشخيص مشكلات البطارية."
    },
    {
        "command": "diskutil list",
        "platform": "macos",
        "category": "Disk Management",
        "desc_en": "Lists all partitions and drives on the Mac. Essential before formatting, partitioning, or resizing disks.",
        "desc_ar": "يسرد جميع الأقسام ومحركات الأقراص على جهاز Mac. ضروري قبل تهيئة الأقراص أو تقسيمها أو تغيير حجمها."
    },
    {
        "command": "tmutil startbackup",
        "platform": "macos",
        "category": "Backup",
        "desc_en": "Manually starts a Time Machine backup if the destination is configured. Great for on-demand backups without waiting for the schedule.",
        "desc_ar": "يبدأ نسخًا احتياطيًا يدويًا لـ Time Machine إذا تم تكوين الوجهة. رائع للنسخ الاحتياطي الفوري دون انتظار الجدول الزمني."
    },
    {
        "command": "tmutil listbackups",
        "platform": "macos",
        "category": "Backup",
        "desc_en": "Shows a list of all available Time Machine backups with their timestamps. Useful for locating a specific backup version.",
        "desc_ar": "يعرض قائمة بجميع نُسخ Time Machine الاحتياطية المتاحة مع طوابعها الزمنية. مفيد لتحديد موقع إصدار نسخة احتياطية معينة."
    },
    {
        "command": "scutil --dns",
        "platform": "macos",
        "category": "Networking",
        "desc_en": "Displays the current DNS configuration, including search domains and resolver addresses. Very useful for DNS troubleshooting.",
        "desc_ar": "يعرض تكوين DNS الحالي، بما في ذلك نطاقات البحث وعناوين المحلل. مفيد جدًا لاستكشاف أخطاء DNS."
    },
    {
        "command": "system_profiler SPHardwareDataType",
        "platform": "macos",
        "category": "System Info",
        "desc_en": "Shows detailed hardware information: model name, processor, memory, serial number, etc. Equivalent to 'System Information' app.",
        "desc_ar": "يعرض معلومات مفصلة عن الأجهزة: اسم الطراز، المعالج، الذاكرة، الرقم التسلسلي، إلخ. يعادل تطبيق 'معلومات النظام'."
    },
    {
        "command": "sysctl -n machdep.cpu.brand_string",
        "platform": "macos",
        "category": "System Info",
        "desc_en": "Displays the CPU brand string (e.g., 'Apple M1 Pro'). Use sysctl to read kernel state information.",
        "desc_ar": "يعرض سلسلة العلامة التجارية لوحدة المعالجة المركزية (مثل 'Apple M1 Pro'). استخدم sysctl لقراءة معلومات حالة النواة."
    },
    {
        "command": "sw_vers",
        "platform": "macos",
        "category": "System Info",
        "desc_en": "Prints the macOS version, build number, and product name. Quick way to know exactly which OS version is running.",
        "desc_ar": "يطبع إصدار macOS ورقم البنية واسم المنتج. طريقة سريعة لمعرفة إصدار نظام التشغيل الذي يتم تشغيله بالضبط."
    },
    {
        "command": "top -l 1 -n 5",
        "platform": "macos",
        "category": "Process Management",
        "desc_en": "Displays a single snapshot of the top 5 processes by CPU usage. Replace '-l 1' with '-l 0' for continuous monitoring.",
        "desc_ar": "يعرض لقطة واحدة لأفضل 5 عمليات من حيث استخدام وحدة المعالجة المركزية. استبدل '-l 1' بـ '-l 0' للمراقبة المستمرة."
    },
    {
        "command": "ps -ax",
        "platform": "macos",
        "category": "Process Management",
        "desc_en": "Lists all running processes in a detailed format, including those not attached to a terminal. Commonly used with 'grep' to filter.",
        "desc_ar": "يسرد جميع العمليات الجارية بتنسيق مفصل، بما في ذلك تلك غير المرتبطة بطرفية. تُستخدم عادةً مع 'grep' للتصفية."
    },
    {
        "command": "killall \"Google Chrome\"",
        "platform": "macos",
        "category": "Process Management",
        "desc_en": "Kills all processes with the name 'Google Chrome'. Use with caution – unsaved work may be lost. Works for any application name.",
        "desc_ar": "يقتل جميع العمليات التي تحمل الاسم 'Google Chrome'. استخدم بحذر – فقد تُفقد الأعمال غير المحفوظة. يعمل لأي اسم تطبيق."
    },
    {
        "command": "lsof -i :3000",
        "platform": "macos",
        "category": "Networking",
        "desc_en": "Lists processes that are using port 3000. Great for identifying what's blocking a port you want to use.",
        "desc_ar": "يسرد العمليات التي تستخدم المنفذ 3000. رائع لتحديد ما يحجب منفذًا تريد استخدامه."
    },
    {
        "command": "mdls document.pdf",
        "platform": "macos",
        "category": "Metadata",
        "desc_en": "Lists all metadata attributes of a file (Spotlight metadata). Use 'mdimport' to re-import metadata if needed.",
        "desc_ar": "يسرد جميع سمات البيانات الوصفية لملف (بيانات Spotlight الوصفية). استخدم 'mdimport' لإعادة استيراد البيانات الوصفية إذا لزم الأمر."
    },
    {
        "command": "xattr -l file.txt",
        "platform": "macos",
        "category": "File Management",
        "desc_en": "Displays extended attributes attached to a file. These can include Finder info, quarantine flags, and more. Use -d to remove an attribute.",
        "desc_ar": "يعرض السمات الموسعة المرفقة بملف. يمكن أن تتضمن معلومات Finder وأعلام الحجر الصحي والمزيد. استخدم -d لإزالة سمة."
    },
    {
        "command": "open .",
        "platform": "macos",
        "category": "File Management",
        "desc_en": "Opens the current directory in Finder. Very handy to jump from terminal to graphical file browsing.",
        "desc_ar": "يفتح المجلد الحالي في Finder. مفيد جدًا للانتقال من الطرفية إلى تصفح الملفات الرسومية."
    },
    {
        "command": "qlmanage -p file.pdf",
        "platform": "macos",
        "category": "Productivity",
        "desc_en": "Previews a file using Quick Look, just like pressing spacebar in Finder. Supports many file types.",
        "desc_ar": "يعاين ملفًا باستخدام Quick Look، تمامًا مثل الضغط على مفتاح المسافة في Finder. يدعم العديد من أنواع الملفات."
    },
    {
        "command": "caffeinate",
        "platform": "macos",
        "category": "Power Management",
        "desc_en": "Prevents the system from sleeping. Run it in a terminal to keep the Mac awake for long tasks. Press Ctrl+C to stop.",
        "desc_ar": "يمنع النظام من الدخول في وضع السكون. قم بتشغيله في الطرفية لإبقاء Mac مستيقظًا للمهام الطويلة. اضغط Ctrl+C للإيقاف."
    },
    {
        "command": "defaults read com.apple.dock",
        "platform": "macos",
        "category": "System Configuration",
        "desc_en": "Reads macOS user defaults for the Dock. You can modify many hidden settings with 'defaults write'.",
        "desc_ar": "يقرأ إعدادات المستخدم الافتراضية لـ Dock في macOS. يمكنك تعديل العديد من الإعدادات المخفية باستخدام 'defaults write'."
    },
    {
        "command": "csrutil status",
        "platform": "macos",
        "category": "Security",
        "desc_en": "Checks if System Integrity Protection (SIP) is enabled. SIP restricts root access to certain system locations.",
        "desc_ar": "يتحقق مما إذا كانت حماية سلامة النظام (SIP) ممكّنة. تقيد SIP وصول الجذر إلى مواقع معينة في النظام."
    },
    {
        "command": "nettop -m tcp",
        "platform": "macos",
        "category": "Networking",
        "desc_en": "Monitors TCP network traffic in real time, showing source/destination and state. Press 'q' to quit. An excellent diagnostic tool.",
        "desc_ar": "يراقب حركة مرور شبكة TCP في الوقت الفعلي، مع إظهار المصدر/الوجهة والحالة. اضغط 'q' للخروج. أداة تشخيص ممتازة."
    },
    {
        "command": "du -sh *",
        "platform": "macos",
        "category": "Disk Management",
        "desc_en": "Shows the disk usage of each file/folder in the current directory in a human-readable format. Helps find space hogs.",
        "desc_ar": "يعرض استخدام القرص لكل ملف/مجلد في الدليل الحالي بتنسيق يمكن قراءته بواسطة الإنسان. يساعد في العثور على الملفات المستنزفة للمساحة."
    },
    {
        "command": "df -h",
        "platform": "macos",
        "category": "Disk Management",
        "desc_en": "Shows disk space usage of all mounted filesystems. Same as Linux, works on macOS too. Monitor your storage.",
        "desc_ar": "يعرض استخدام مساحة القرص لجميع أنظمة الملفات المُثبّتة. يعمل على macOS أيضًا. راقب مساحة التخزين الخاصة بك."
    },
    {
        "command": "mdfind \"kind:image\"",
        "platform": "macos",
        "category": "Productivity",
        "desc_en": "Searches the entire Spotlight index for image files. Replace 'kind:image' with any search query. Extremely fast.",
        "desc_ar": "يبحث في فهرس Spotlight بأكمله عن ملفات الصور. استبدل 'kind:image' بأي استعلام بحث. سريع للغاية."
    },
    {
        "command": "say \"Hello, world\"",
        "platform": "macos",
        "category": "Accessibility",
        "desc_en": "Uses the built-in text-to-speech engine to speak the provided text. Fun and sometimes useful for notifications.",
        "desc_ar": "يستخدم محرك تحويل النص إلى كلام المدمج لنطق النص المقدم. ممتع ومفيد أحيانًا للإشعارات."
    },
    {
        "command": "dscacheutil -flushcache && sudo killall -HUP mDNSResponder",
        "platform": "macos",
        "category": "Networking",
        "desc_en": "Flushes the DNS cache and restarts the mDNS responder. Essential after changing DNS servers or editing /etc/hosts.",
        "desc_ar": "يمسح ذاكرة التخزين المؤقت لنظام DNS ويعيد تشغيل مستجيب mDNS. ضروري بعد تغيير خوادم DNS أو تحرير /etc/hosts."
    },
    {
        "command": "sudo periodic daily weekly monthly",
        "platform": "macos",
        "category": "System Maintenance",
        "desc_en": "Forces the execution of daily, weekly, and monthly maintenance scripts. macOS normally runs these automatically.",
        "desc_ar": "يفرض تنفيذ سكربتات الصيانة اليومية والأسبوعية والشهرية. يقوم macOS عادةً بتشغيلها تلقائيًا."
    },
    {
        "command": "brew update && brew upgrade",
        "platform": "macos",
        "category": "Package Management",
        "desc_en": "If Homebrew is installed, updates the package list and upgrades all installed formulae. Keep your command-line tools current.",
        "desc_ar": "إذا تم تثبيت Homebrew، يقوم بتحديث قائمة الحزم وترقية جميع الصيغ المثبتة. حافظ على أدوات سطر الأوامر محدثة."
    },
    {
        "command": "airport -s",
        "platform": "macos",
        "category": "Networking",
        "desc_en": "Scans for available Wi-Fi networks using the built-in AirPort tool. Shows SSID, BSSID, channel, and signal strength.",
        "desc_ar": "يفحص شبكات Wi-Fi المتاحة باستخدام أداة AirPort المدمجة. يعرض SSID و BSSID والقناة وقوة الإشارة."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = macCommands;
}