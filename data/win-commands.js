// data/win-commands.js
const windowsCommands = [
    {
        "command": "systeminfo",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays detailed configuration information about the computer and its operating system, including OS version, RAM, network cards, and hotfixes. Useful for inventory, troubleshooting, and verifying system specifications.",
        "desc_ar": "يعرض معلومات تفصيلية عن تكوين الكمبيوتر ونظام التشغيل، بما في ذلك إصدار النظام والذاكرة وبطاقات الشبكة والتحديثات. مفيد لجرد الأجهزة واستكشاف الأخطاء والتحقق من مواصفات الجهاز."
    },
    {
        "command": "ipconfig /all",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Shows the full TCP/IP configuration for all network adapters: IP address, MAC address, DHCP status, DNS servers. Essential for diagnosing connectivity issues.",
        "desc_ar": "يعرض إعدادات TCP/IP الكاملة لجميع بطاقات الشبكة: عنوان IP و MAC وحالة DHCP وخوادم DNS. ضروري لتشخيص مشكلات الاتصال."
    },
    {
        "command": "tasklist",
        "platform": "windows",
        "category": "Process Management",
        "desc_en": "Lists all running processes with their Process ID (PID) and memory usage. Helps identify resource hogs or suspicious programs.",
        "desc_ar": "يسرد جميع العمليات الجارية مع معرف العملية واستهلاك الذاكرة. يساعد في اكتشاف البرامج المستنزفة للموارد أو المشبوهة."
    },
    {
        "command": "taskkill /F /PID 1234",
        "platform": "windows",
        "category": "Process Management",
        "desc_en": "Forcefully terminates a process with the specified PID. Replace 1234 with the actual PID. Useful for killing unresponsive programs.",
        "desc_ar": "ينهي عملية جارية بقوة باستخدام معرف العملية المحدد. استبدل 1234 بمعرف العملية الفعلي. مفيد لإنهاء البرامج غير المستجيبة."
    },
    {
        "command": "netstat -ano",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays all active network connections, listening ports, and the associated process ID (PID). Crucial for identifying which application is using a port.",
        "desc_ar": "يعرض جميع اتصالات الشبكة النشطة والمنافذ المفتوحة مع معرف العملية المرتبط بها. أساسي لتحديد التطبيق الذي يستخدم منفذًا معينًا."
    },
    {
        "command": "sfc /scannow",
        "platform": "windows",
        "category": "System Maintenance",
        "desc_en": "Scans all protected system files and replaces corrupted versions with correct Microsoft versions. Essential for fixing Windows system file issues.",
        "desc_ar": "يفحص جميع ملفات النظام المحمية ويستبدل النسخ التالفة بنسخ صحيحة من Microsoft. ضروري لإصلاح مشاكل ملفات نظام Windows."
    },
    {
        "command": "chkdsk C: /f",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Checks the C: drive for file system errors and attempts to fix them. Requires admin rights. Use /r for a thorough scan for bad sectors.",
        "desc_ar": "يفحص محرك الأقراص C: بحثًا عن أخطاء في نظام الملفات ويحاول إصلاحها. يتطلب صلاحيات المسؤول. استخدم /r لإجراء فحص شامل للقطاعات التالفة."
    },
    {
        "command": "diskpart",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Launches the Disk Partition tool. Inside, you can list disks, create partitions, format drives, etc. Powerful but dangerous – use with caution.",
        "desc_ar": "يشغل أداة تقسيم القرص. يمكنك من الداخل عرض الأقراص، إنشاء أقسام، تهيئة محركات الأقراص، إلخ. قوية لكنها خطيرة – استخدمها بحذر."
    },
    {
        "command": "shutdown /s /t 0",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Shuts down the computer immediately. Replace /s with /r to restart, or /l to log off. The /t parameter sets the timeout in seconds.",
        "desc_ar": "يقوم بإيقاف تشغيل الكمبيوتر فورًا. استبدل /s بـ /r لإعادة التشغيل، أو /l لتسجيل الخروج. يحدد المؤقت /t الوقت بالثواني."
    },
    {
        "command": "powercfg /energy",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Analyzes the system for common energy-efficiency and battery life problems. Generates an HTML report with findings and recommendations.",
        "desc_ar": "يحلل النظام بحثًا عن مشكلات كفاءة الطاقة وعمر البطارية الشائعة. يُنشئ تقرير HTML مع النتائج والتوصيات."
    },
    {
        "command": "driverquery",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays a list of all installed device drivers and their properties. Useful for troubleshooting hardware issues or checking driver versions.",
        "desc_ar": "يعرض قائمة بجميع برامج تشغيل الأجهزة المثبتة وخصائصها. مفيد لاستكشاف مشاكل الأجهزة أو التحقق من إصدارات التعريفات."
    },
    {
        "command": "wmic cpu get name",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Retrieves the name of the CPU installed in the machine. You can replace 'cpu' with 'memorychip' or 'diskdrive' to get other hardware details.",
        "desc_ar": "يسترجع اسم المعالج المثبت في الجهاز. يمكنك استبدال 'cpu' بـ 'memorychip' أو 'diskdrive' للحصول على تفاصيل مكونات أخرى."
    },
    {
        "command": "assoc",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays or modifies file extension associations. Run without arguments to see the full list of file type mappings.",
        "desc_ar": "يعرض أو يعدل ارتباطات امتدادات الملفات. قم بتشغيله بدون وسائط لرؤية القائمة الكاملة لتعيينات أنواع الملفات."
    },
    {
        "command": "cipher /w:C",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Overwrites deleted data on the C: drive, making it unrecoverable. Useful for securely wiping free space without affecting existing files.",
        "desc_ar": "يكتب فوق البيانات المحذوفة على محرك الأقراص C: مما يجعلها غير قابلة للاسترداد. مفيد لمسح المساحة الحرة بأمان دون التأثير على الملفات الموجودة."
    },
    {
        "command": "whoami",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Displays the current logged-in user name. Useful in scripts for checking privileges or identifying the user context.",
        "desc_ar": "يعرض اسم المستخدم الحالي المسجل دخوله. مفيد في السكربتات للتحقق من الصلاحيات أو معرفة سياق المستخدم."
    },
    {
        "command": "net user",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Lists all user accounts on the local machine. Can also be used to add, delete, or modify user accounts with appropriate parameters.",
        "desc_ar": "يسرد جميع حسابات المستخدمين على الجهاز المحلي. يمكن استخدامه أيضًا لإضافة أو حذف أو تعديل حسابات المستخدمين باستخدام وسائط مناسبة."
    },
    {
        "command": "gpupdate /force",
        "platform": "windows",
        "category": "System Management",
        "desc_en": "Forces an immediate update of Group Policy settings. Essential for applying new policies without waiting for the next background refresh.",
        "desc_ar": "يفرض تحديثًا فوريًا لإعدادات نهج المجموعة. ضروري لتطبيق السياسات الجديدة دون انتظار التحديث التلقائي التالي."
    },
    {
        "command": "sc query state= all",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Lists all installed services and their current status (running, stopped, etc.). Useful for monitoring or troubleshooting Windows services.",
        "desc_ar": "يسرد جميع الخدمات المثبتة وحالتها الحالية (قيد التشغيل، متوقفة، إلخ). مفيد لمراقبة أو استكشاف أخطاء خدمات Windows."
    },
    {
        "command": "netsh wlan show profiles",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays a list of Wi-Fi profiles stored on the computer. Add 'key=clear' to a profile name to reveal the Wi-Fi password.",
        "desc_ar": "يعرض قائمة بملفات تعريف Wi-Fi المخزنة على الكمبيوتر. أضف 'key=clear' إلى اسم الملف الشخصي لكشف كلمة مرور Wi-Fi."
    },
    {
        "command": "netsh interface ip set dns name=\"Wi-Fi\" static 8.8.8.8",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Changes the DNS server for the Wi-Fi adapter to Google's public DNS (8.8.8.8). Replace 'Wi-Fi' with your adapter name.",
        "desc_ar": "يغير خادم DNS لمحول Wi-Fi إلى DNS العام من Google (8.8.8.8). استبدل 'Wi-Fi' باسم المحول الخاص بك."
    },
    {
        "command": "pathping google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Combines features of ping and tracert, providing detailed network latency and packet loss statistics. Excellent for diagnosing network bottlenecks.",
        "desc_ar": "يجمع بين ميزات ping و tracert، مما يوفر إحصائيات مفصلة عن زمن انتقال الشبكة وفقدان الحزم. ممتاز لتشخيص اختناقات الشبكة."
    },
    {
        "command": "tracert google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Traces the route that packets take to reach a destination. Useful for identifying where delays or failures occur in the network path.",
        "desc_ar": "يتتبع المسار الذي تسلكه الحزم للوصول إلى الوجهة. مفيد لتحديد مكان حدوث التأخير أو الفشل في مسار الشبكة."
    },
    {
        "command": "nslookup google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Queries DNS to obtain the IP address of a domain name. Also useful for diagnosing DNS resolution problems.",
        "desc_ar": "يستعلم من DNS للحصول على عنوان IP لاسم نطاق. مفيد أيضًا لتشخيص مشكلات تحليل DNS."
    },
    {
        "command": "route print",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays the local IP routing table, showing how network traffic is directed. Essential for advanced network troubleshooting.",
        "desc_ar": "يعرض جدول توجيه IP المحلي، موضحًا كيفية توجيه حركة مرور الشبكة. ضروري لاستكشاف أخطاء الشبكة المتقدمة."
    },
    {
        "command": "arp -a",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Shows the ARP (Address Resolution Protocol) cache, which maps IP addresses to MAC addresses. Useful for detecting duplicate IPs or ARP spoofing.",
        "desc_ar": "يعرض ذاكرة التخزين المؤقت ARP (بروتوكول تحليل العنوان)، والتي تعين عناوين IP إلى عناوين MAC. مفيد لاكتشاف عناوين IP المكررة أو انتحال ARP."
    },
    {
        "command": "fsutil dirty query C:",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Checks if the C: drive is marked as 'dirty', meaning it has pending file system errors that need chkdsk.",
        "desc_ar": "يتحقق مما إذا كان محرك الأقراص C: موسومًا بـ 'dirty'، مما يعني وجود أخطاء معلقة في نظام الملفات تحتاج إلى chkdsk."
    },
    {
        "command": "wmic logicaldisk get size,freespace,caption",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Displays the size and free space of all logical drives in a concise table. Helps monitor disk usage.",
        "desc_ar": "يعرض حجم جميع محركات الأقراص المنطقية والمساحة الفارغة في جدول موجز. يساعد في مراقبة استخدام القرص."
    },
    {
        "command": "regedit",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Opens the Registry Editor. The Windows registry stores low-level system and application settings. Use extreme caution.",
        "desc_ar": "يفتح محرر التسجيل. يخزن سجل Windows إعدادات النظام والتطبيقات منخفضة المستوى. كن حذرًا للغاية."
    },
    {
        "command": "msconfig",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Opens System Configuration utility where you can manage startup items, services, and boot options. Great for troubleshooting startup issues.",
        "desc_ar": "يفتح أداة تكوين النظام حيث يمكنك إدارة عناصر بدء التشغيل والخدمات وخيارات الإقلاع. رائعة لاستكشاف مشكلات بدء التشغيل."
    },
    {
        "command": "cleanmgr",
        "platform": "windows",
        "category": "System Maintenance",
        "desc_en": "Launches the Disk Cleanup utility to remove temporary files, system cache, and other unnecessary data, freeing up disk space.",
        "desc_ar": "يشغل أداة تنظيف القرص لإزالة الملفات المؤقتة وذاكرة التخزين المؤقت للنظام وغيرها من البيانات غير الضرورية، مما يوفر مساحة على القرص."
    },
    {
        "command": "perfmon",
        "platform": "windows",
        "category": "Performance Monitoring",
        "desc_en": "Starts the Performance Monitor, which provides real-time graphs of system performance counters like CPU, memory, disk, and network usage.",
        "desc_ar": "يبدأ تشغيل مراقب الأداء، والذي يوفر رسومات بيانية فورية لعدادات أداء النظام مثل استخدام وحدة المعالجة المركزية والذاكرة والقرص والشبكة."
    },
    {
        "command": "net share",
        "platform": "windows",
        "category": "File Sharing",
        "desc_en": "Displays all shared resources on the local computer, including administrative shares. Useful for auditing what is exposed on the network.",
        "desc_ar": "يعرض جميع الموارد المشتركة على الكمبيوتر المحلي، بما في ذلك المشاركات الإدارية. مفيد لتدقيق ما يتم كشفه على الشبكة."
    },
    {
        "command": "manage-bde -status",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Shows the BitLocker encryption status for all drives. Essential for verifying data protection on laptops and portable drives.",
        "desc_ar": "يعرض حالة تشفير BitLocker لجميع محركات الأقراص. ضروري للتحقق من حماية البيانات على أجهزة الكمبيوتر المحمولة ومحركات الأقراص المحمولة."
    },
    {
        "command": "wmic path softwarelicensingservice get OA3xOriginalProductKey",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Retrieves the original Windows product key embedded in the BIOS/UEFI. Useful before reinstalling Windows.",
        "desc_ar": "يسترجع مفتاح منتج Windows الأصلي المضمن في BIOS/UEFI. مفيد قبل إعادة تثبيت Windows."
    },
    {
        "command": "explorer .",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Opens the current directory in Windows File Explorer. A convenient way to switch between command-line and graphical file management.",
        "desc_ar": "يفتح المجلد الحالي في مستكشف ملفات Windows. طريقة مريحة للتبديل بين إدارة الملفات من خلال سطر الأوامر والواجهة الرسومية."
    }
];

// Export for use in grouping script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = windowsCommands;
}