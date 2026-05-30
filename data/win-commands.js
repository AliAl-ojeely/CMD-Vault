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
    },

    // ─── new additional commands ─────────────────────────────────
    {
        "command": "ping -t google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Pings the specified host continuously until stopped with Ctrl+C. Useful for long‑term connectivity monitoring.",
        "desc_ar": "يقوم بإرسال ping للمضيف المحدد بشكل مستمر حتى يتم الإيقاف بـ Ctrl+C. مفيد لمراقبة الاتصال لفترات طويلة."
    },
    {
        "command": "netstat -b",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays active connections and the executable involved in creating each connection. Requires admin rights. Great for malware analysis.",
        "desc_ar": "يعرض الاتصالات النشطة والملف التنفيذي المسؤول عن إنشاء كل اتصال. يتطلب صلاحيات المسؤول. رائع لتحليل البرامج الضارة."
    },
    {
        "command": "getmac",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Returns the MAC addresses of all network adapters. Useful for network access control or device identification.",
        "desc_ar": "يعرض عناوين MAC لجميع محولات الشبكة. مفيد للتحكم في الوصول للشبكة أو تعريف الأجهزة."
    },
    {
        "command": "hostname",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Prints the name of the computer. Quick way to identify a machine in scripts or remote sessions.",
        "desc_ar": "يطبع اسم الكمبيوتر. طريقة سريعة لتحديد الجهاز في السكربتات أو الجلسات البعيدة."
    },
    {
        "command": "systeminfo | findstr /C:\"Total Physical Memory\"",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Filters systeminfo output to show only the total RAM installed. Handy for checking memory capacity without scrolling.",
        "desc_ar": "يقوم بتصفية مخرجات systeminfo لعرض إجمالي الذاكرة المثبتة فقط. مفيد للتحقق من سعة الذاكرة دون الحاجة للتمرير."
    },
    {
        "command": "wmic memorychip get capacity",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Lists the capacity of each RAM stick in bytes. Helps verify installed memory modules and plan upgrades.",
        "desc_ar": "يسرد سعة كل قطعة RAM بالبايت. يساعد في التحقق من وحدات الذاكرة المثبتة والتخطيط للترقيات."
    },
    {
        "command": "wmic diskdrive get model,size",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Shows the model name and size of all physical disk drives. Essential for hardware inventory.",
        "desc_ar": "يعرض اسم الطراز والحجم لجميع محركات الأقراص الفعلية. ضروري لجرد الأجهزة."
    },
    {
        "command": "wmic bios get serialnumber",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Retrieves the serial number of the computer from the BIOS. Useful for warranty checks or asset tracking.",
        "desc_ar": "يسترجع الرقم التسلسلي للكمبيوتر من BIOS. مفيد لفحص الضمان أو تتبع الأصول."
    },
    {
        "command": "powercfg /batteryreport",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Generates a detailed battery health report (design capacity vs. current capacity) and opens it in the browser. Essential for laptop diagnostics.",
        "desc_ar": "يُولّد تقريرًا مفصلًا عن صحة البطارية (السعة التصميمية مقابل السعة الحالية) ويفتحه في المتصفح. ضروري لتشخيص أجهزة الكمبيوتر المحمولة."
    },
    {
        "command": "shutdown /r /t 0",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Restarts the computer immediately. Useful for applying updates or clearing temporary issues.",
        "desc_ar": "يقوم بإعادة تشغيل الكمبيوتر فورًا. مفيد لتطبيق التحديثات أو إزالة المشكلات المؤقتة."
    },
    {
        "command": "logoff",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Logs the current user off the session. Good for switching users without restarting the machine.",
        "desc_ar": "يسجّل خروج المستخدم الحالي من الجلسة. جيد لتبديل المستخدمين دون إعادة تشغيل الجهاز."
    },
    {
        "command": "rundll32.exe powrprof.dll,SetSuspendState 0,1,0",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Puts the computer into sleep mode (if supported). Alternative to closing the lid or using the Start menu.",
        "desc_ar": "يضع الكمبيوتر في وضع السكون (إن كان مدعومًا). بديل لإغلاق الغطاء أو استخدام قائمة ابدأ."
    },
    {
        "command": "rundll32.exe powrprof.dll,SetSuspendState 1,1,0",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Hibernates the computer – saves the session to disk and powers off. Saves more power than sleep.",
        "desc_ar": "يقوم بإسبات الكمبيوتر – يحفظ الجلسة على القرص ويوقف التشغيل. يوفر طاقة أكثر من السكون."
    },
    {
        "command": "diskpart list disk",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "(Inside diskpart) Shows all physical disks with their size and free space. The first step before selecting a disk for partitioning.",
        "desc_ar": "(داخل diskpart) يعرض جميع الأقراص الفعلية مع حجمها ومساحتها الحرة. الخطوة الأولى قبل اختيار قرص لتقسيمه."
    },
    {
        "command": "format X: /FS:NTFS /Q",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Quick‑formats drive X: with the NTFS file system. All data is erased, so use with caution.",
        "desc_ar": "يقوم بتهيئة سريعة لمحرك الأقراص X: بنظام ملفات NTFS. يتم مسح جميع البيانات، لذا استخدمه بحذر."
    },
    {
        "command": "label X: MyDrive",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Changes or sets the volume label of drive X: to 'MyDrive'. Labels help identify drives in File Explorer.",
        "desc_ar": "يغير أو يعيّن تسمية وحدة التخزين لمحرك الأقراص X: إلى 'MyDrive'. تساعد التسميات في التعرف على محركات الأقراص في مستكشف الملفات."
    },
    {
        "command": "convert X: /FS:NTFS",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Converts a FAT/FAT32 drive to NTFS without losing data. Useful when you need advanced NTFS features like permissions or encryption.",
        "desc_ar": "يحول محرك أقراص FAT/FAT32 إلى NTFS دون فقدان البيانات. مفيد عند الحاجة إلى ميزات NTFS المتقدمة مثل الصلاحيات أو التشفير."
    },
    {
        "command": "chkdsk /r",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Scans the disk for bad sectors and attempts recovery of readable information. More thorough than /f, but also slower.",
        "desc_ar": "يفحص القرص بحثًا عن القطاعات التالفة ويحاول استرداد المعلومات القابلة للقراءة. أكثر شمولًا من /f، لكنه أبطأ."
    },
    {
        "command": "sfc /verifyonly",
        "platform": "windows",
        "category": "System Maintenance",
        "desc_en": "Checks system file integrity without repairing. A safe way to see if any system files are corrupted before deciding to fix them.",
        "desc_ar": "يتحقق من سلامة ملفات النظام دون إصلاح. طريقة آمنة لمعرفة ما إذا كانت هناك ملفات نظام تالفة قبل اتخاذ قرار بإصلاحها."
    },
    {
        "command": "dism /online /cleanup-image /restorehealth",
        "platform": "windows",
        "category": "System Maintenance",
        "desc_en": "Repairs the Windows system image using Windows Update. Often fixes issues that sfc cannot. Requires internet.",
        "desc_ar": "يقوم بإصلاح صورة نظام Windows باستخدام Windows Update. غالبًا ما يعالج مشكلات لا يستطيع sfc حلها. يتطلب اتصالًا بالإنترنت."
    },
    {
        "command": "dism /online /get-packages",
        "platform": "windows",
        "category": "System Management",
        "desc_en": "Lists all installed Windows packages (updates, language packs, features). Useful for auditing what's installed.",
        "desc_ar": "يسرد جميع حزم Windows المثبتة (التحديثات، حزم اللغات، الميزات). مفيد لتدقيق ما تم تثبيته."
    },
    {
        "command": "schtasks /query",
        "platform": "windows",
        "category": "Task Scheduling",
        "desc_en": "Displays all scheduled tasks on the system. Helps identify automated scripts or maintenance jobs.",
        "desc_ar": "يعرض جميع المهام المجدولة على النظام. يساعد في تحديد السكربتات المؤتمتة أو مهام الصيانة."
    },
    {
        "command": "set",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Lists all environment variables and their values. Useful for debugging path issues or checking system configuration.",
        "desc_ar": "يسرد جميع متغيرات البيئة وقيمها. مفيد لتصحيح مشكلات المسار أو التحقق من تكوين النظام."
    },
    {
        "command": "echo %USERPROFILE%",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays the path to the current user's home folder. Often used in scripts to reference user‑specific locations.",
        "desc_ar": "يعرض المسار إلى المجلد الرئيسي للمستخدم الحالي. يُستخدم غالبًا في السكربتات للإشارة إلى مواقع خاصة بالمستخدم."
    },
    {
        "command": "net start",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Lists all currently running services. Quick way to see active services without scrolling through the Services console.",
        "desc_ar": "يسرد جميع الخدمات قيد التشغيل حاليًا. طريقة سريعة لرؤية الخدمات النشطة دون التمرير عبر وحدة تحكم الخدمات."
    },
    {
        "command": "net stop \"Spooler\"",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Stops a specific service (e.g., Print Spooler). Replace 'Spooler' with the exact service name. Requires admin rights.",
        "desc_ar": "يوقف خدمة معينة (مثل التخزين المؤقت للطباعة). استبدل 'Spooler' باسم الخدمة المحددة. يتطلب صلاحيات المسؤول."
    },
    {
        "command": "reg query HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Shows all programs that run at startup from that registry key. Essential for finding and disabling unwanted auto‑start entries.",
        "desc_ar": "يعرض جميع البرامج التي تعمل عند بدء التشغيل من مفتاح التسجيل هذا. ضروري للعثور على إدخالات بدء التشغيل غير المرغوب فيها وتعطيلها."
    },
    {
        "command": "reg add HKCU\\Software\\MyApp /v Setting /t REG_DWORD /d 1 /f",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Adds or modifies a DWORD registry value. Useful for scripting system tweaks. Replace the key/value as needed.",
        "desc_ar": "يضيف أو يعدل قيمة تسجيل من نوع DWORD. مفيد لسكربتات تعديل النظام. استبدل المفتاح/القيمة حسب الحاجة."
    },
    {
        "command": "reg delete HKCU\\Software\\MyApp /f",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Deletes a registry key without confirmation. Powerful and dangerous – always double‑check the key path before executing.",
        "desc_ar": "يحذف مفتاح تسجيل بدون تأكيد. قوي وخطير – تحقق دائمًا من مسار المفتاح قبل التنفيذ."
    },
    {
        "command": "takeown /f \"C:\\somefile.txt\"",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Grants ownership of a file to the current user. Useful when you're denied access to a file you need to modify.",
        "desc_ar": "يمنح ملكية ملف للمستخدم الحالي. مفيد عندما يتم رفض وصولك إلى ملف تحتاج إلى تعديله."
    },
    {
        "command": "icacls \"C:\\somefile.txt\" /grant %USERNAME%:F",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Grants full control (F) of a file to the current user. Often used after taking ownership to actually edit the file.",
        "desc_ar": "يمنح التحكم الكامل (F) لملف للمستخدم الحالي. غالبًا ما يُستخدم بعد أخذ الملكية لتعديل الملف فعليًا."
    },
    {
        "command": "compact /c /s:C:\\MyFolder",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Compresses all files in a folder (and subfolders) to save disk space. Transparent to applications; files are decompressed on access.",
        "desc_ar": "يضغط جميع الملفات في مجلد (ومجلداته الفرعية) لتوفير مساحة القرص. شفاف للتطبيقات؛ يتم فك ضغط الملفات عند الوصول إليها."
    },
    {
        "command": "cipher /e /s:C:\\MyFolder",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Encrypts a folder and its contents using Windows EFS (Encrypting File System). Only the user who encrypted it can access it later.",
        "desc_ar": "يقوم بتشفير مجلد ومحتوياته باستخدام نظام تشفير الملفات EFS. يمكن فقط للمستخدم الذي قام بالتشفير الوصول إليه لاحقًا."
    },
    {
        "command": "net use Z: \\\\server\\share",
        "platform": "windows",
        "category": "File Sharing",
        "desc_en": "Maps a network drive to the Z: letter. Replace with your server and share name. Great for persistent connections.",
        "desc_ar": "يعيّن محرك أقراص شبكة إلى الحرف Z:. استبدل باسم الخادم والمشاركة الخاصة بك. رائع للاتصالات الدائمة."
    },
    {
        "command": "net use Z: /delete",
        "platform": "windows",
        "category": "File Sharing",
        "desc_en": "Disconnects the previously mapped Z: network drive. Use if you no longer need the connection.",
        "desc_ar": "يفصل محرك أقراص الشبكة Z: المعين مسبقًا. يُستخدم إن لم تعد بحاجة إلى الاتصال."
    },
    {
        "command": "powercfg /requests",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Shows what programs or drivers are preventing the computer from sleeping. Essential for troubleshooting battery drain.",
        "desc_ar": "يعرض البرامج أو التعريفات التي تمنع الكمبيوتر من الدخول في وضع السكون. ضروري لاستكشاف مشكلات استنزاف البطارية."
    },
    {
        "command": "wevtutil qe System /c:10 /f:text",
        "platform": "windows",
        "category": "Logs",
        "desc_en": "Queries the last 10 events from the System log. Helpful for quickly checking recent errors without opening Event Viewer.",
        "desc_ar": "يستعلم عن آخر 10 أحداث من سجل النظام. مفيد للتحقق السريع من الأخطاء الحديثة دون فتح عارض الأحداث."
    },
    {
        "command": "tree",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays the directory structure graphically as a tree. Use /F to show files in addition to folders. Great for documentation.",
        "desc_ar": "يعرض هيكل المجلدات بشكل رسومي كشجرة. استخدم /F لعرض الملفات بالإضافة إلى المجلدات. رائع للتوثيق."
    },
    {
        "command": "where notepad.exe",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Searches for the executable in the PATH and displays its full location. Handy for verifying which version of a tool runs.",
        "desc_ar": "يبحث عن الملف التنفيذي في PATH ويعرض موقعه الكامل. مفيد للتحقق من أي إصدار من أداة يتم تشغيله."
    },
    {
        "command": "mklink /D \"C:\\Link\" \"C:\\Target\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a directory symbolic link. Similar to shortcuts but transparent to applications. Useful for redirecting folders.",
        "desc_ar": "ينشئ رابطًا رمزيًا للمجلد. يشبه الاختصارات لكنه شفاف للتطبيقات. مفيد لإعادة توجيه المجلدات."
    },
    {
        "command": "robocopy \"C:\\Source\" \"D:\\Backup\" /MIR",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Mirrors a directory to another location – copies new/changed files and deletes extra files in the destination. Perfect for backups.",
        "desc_ar": "يقوم بعمل نسخة متطابقة من مجلد إلى موقع آخر – ينسخ الملفات الجديدة/المتغيرة ويحذف الملفات الزائدة في الوجهة. مثالي للنسخ الاحتياطي."
    },

    // ─── 50 NEW COMMANDS (File Management, Network, System, Tools) ─────────────────
    {
        "command": "ver",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays the exact active Windows OS version and build number.",
        "desc_ar": "يعرض إصدار نظام التشغيل Windows النشط ورقم البناء بدقة."
    },
    {
        "command": "date /t",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays the current system date without prompting for a new one. Useful in scripts to log events.",
        "desc_ar": "يعرض تاريخ النظام الحالي دون المطالبة بإدخال تاريخ جديد. مفيد في السكربتات لتسجيل وقت الأحداث."
    },
    {
        "command": "time /t",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays the current system time without prompting for a new one.",
        "desc_ar": "يعرض وقت النظام الحالي دون المطالبة بإدخال وقت جديد."
    },
    {
        "command": "tzutil /g",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Displays the current time zone ID configured on the machine.",
        "desc_ar": "يعرض معرّف المنطقة الزمنية (Time Zone) الحالي المكوّن على الجهاز."
    },
    {
        "command": "wmic baseboard get product,Manufacturer",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Retrieves the exact motherboard model and manufacturer name. Very helpful before BIOS updates.",
        "desc_ar": "يسترجع طراز اللوحة الأم واسم الشركة المصنعة بدقة. مفيد جدًا قبل تحديثات BIOS."
    },
    {
        "command": "wmic os get InstallDate",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Shows the exact timestamp of when the Windows operating system was installed on the machine.",
        "desc_ar": "يعرض الطابع الزمني الدقيق للوقت الذي تم فيه تثبيت نظام التشغيل Windows على الجهاز."
    },
    {
        "command": "control",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Quickly opens the classic Windows Control Panel.",
        "desc_ar": "يفتح لوحة التحكم الكلاسيكية (Control Panel) في Windows بسرعة."
    },
    {
        "command": "control printers",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Instantly opens the 'Devices and Printers' window to manage connected hardware.",
        "desc_ar": "يفتح نافذة 'الأجهزة والطابعات' فوراً لإدارة الأجهزة المتصلة."
    },
    {
        "command": "compmgmt.msc",
        "platform": "windows",
        "category": "System Management",
        "desc_en": "Opens the Computer Management console (Task Scheduler, Event Viewer, Shared Folders, Device Manager).",
        "desc_ar": "يفتح وحدة تحكم إدارة الكمبيوتر (تتضمن مجدول المهام، عارض الأحداث، المجلدات المشتركة، وإدارة الأجهزة)."
    },
    {
        "command": "devmgmt.msc",
        "platform": "windows",
        "category": "System Management",
        "desc_en": "Directly launches the Device Manager to troubleshoot hardware drivers and devices.",
        "desc_ar": "يشغل إدارة الأجهزة (Device Manager) مباشرة لاستكشاف أخطاء تعريفات الأجهزة وإصلاحها."
    },
    {
        "command": "diskmgmt.msc",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Opens the GUI-based Disk Management tool for formatting, partitioning, and assigning drive letters.",
        "desc_ar": "يفتح أداة إدارة الأقراص الرسومية لتهيئة الأقراص، تقسيمها، وتعيين أحرف محركات الأقراص."
    },
    {
        "command": "eventvwr.msc",
        "platform": "windows",
        "category": "Logs",
        "desc_en": "Opens the Windows Event Viewer to inspect system, security, and application logs.",
        "desc_ar": "يفتح عارض أحداث Windows (Event Viewer) لفحص سجلات النظام والأمان والتطبيقات."
    },
    {
        "command": "services.msc",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Launches the Services console to start, stop, or configure background Windows services.",
        "desc_ar": "يشغل وحدة تحكم الخدمات (Services) لبدء أو إيقاف أو تكوين خدمات Windows في الخلفية."
    },
    {
        "command": "taskmgr",
        "platform": "windows",
        "category": "Process Management",
        "desc_en": "Opens the Windows Task Manager.",
        "desc_ar": "يفتح مدير مهام Windows (Task Manager)."
    },
    {
        "command": "ipconfig /release",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Releases the current DHCP-assigned IPv4 address for all active network adapters.",
        "desc_ar": "يحرر عنوان IPv4 الحالي المعين عبر DHCP لجميع محولات الشبكة النشطة."
    },
    {
        "command": "ipconfig /renew",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Requests a new IP address from the DHCP server. Often used right after 'ipconfig /release'.",
        "desc_ar": "يطلب عنوان IP جديدًا من خادم DHCP. يُستخدم غالبًا بعد أمر 'ipconfig /release'."
    },
    {
        "command": "ipconfig /displaydns",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays the contents of the DNS Resolver Cache. Shows recently visited domains and their resolved IPs.",
        "desc_ar": "يعرض محتويات ذاكرة التخزين المؤقت لمحلل DNS. يوضح النطاقات التي تم زيارتها مؤخراً وعناوين IP الخاصة بها."
    },
    {
        "command": "netsh winsock reset",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Resets the Winsock catalog back to default setting. The ultimate fix for severe internet connection issues.",
        "desc_ar": "يعيد تعيين كتالوج Winsock إلى إعداداته الافتراضية. الحل النهائي لمشاكل الاتصال الشديدة بالإنترنت."
    },
    {
        "command": "netsh int ip reset",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Resets the TCP/IP stack to its original state. Crucial when network settings get deeply corrupted.",
        "desc_ar": "يعيد تعيين مكدس TCP/IP إلى حالته الأصلية. ضروري عندما تتلف إعدادات الشبكة بشكل عميق."
    },
    {
        "command": "ping 127.0.0.1",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Pings the localhost loopback address. Used to verify that the local network interface card (NIC) is functioning.",
        "desc_ar": "يرسل Ping لعنوان الاسترجاع المحلي (localhost). يُستخدم للتحقق من أن بطاقة الشبكة المحلية تعمل بشكل صحيح."
    },
    {
        "command": "nbtstat -n",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays local NetBIOS names registered by the system. Useful in older domain or workgroup network setups.",
        "desc_ar": "يعرض أسماء NetBIOS المحلية المسجلة بواسطة النظام. مفيد في إعدادات شبكات النطاق (Domain) القديمة."
    },
    {
        "command": "net view",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays a list of domains, computers, or shared resources available on the current network.",
        "desc_ar": "يعرض قائمة بالنطاقات أو أجهزة الكمبيوتر أو الموارد المشتركة المتاحة على الشبكة الحالية."
    },
    {
        "command": "net localgroup",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Lists all the local groups on the computer (e.g., Administrators, Users, Guests).",
        "desc_ar": "يسرد كافة المجموعات المحلية على الكمبيوتر (مثل: المسؤولون، المستخدمون، الضيوف)."
    },
    {
        "command": "net localgroup administrators",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Lists all user accounts that currently possess Administrator privileges on the machine.",
        "desc_ar": "يسرد كافة حسابات المستخدمين الذين يمتلكون حالياً صلاحيات المسؤول (Administrator) على الجهاز."
    },
    {
        "command": "query user",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Displays information about user sessions on the system. Great for checking who is logged in via Remote Desktop.",
        "desc_ar": "يعرض معلومات حول جلسات المستخدمين على النظام. رائع للتحقق من المسجلين دخولهم عبر سطح المكتب البعيد (RDP)."
    },
    {
        "command": "cmdkey /list",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Lists all saved network passwords and credentials stored in the Windows Credential Manager.",
        "desc_ar": "يسرد جميع كلمات مرور الشبكة وبيانات الاعتماد المحفوظة في مدير بيانات الاعتماد (Credential Manager) الخاص بـ Windows."
    },
    {
        "command": "schtasks /run /tn \"TaskName\"",
        "platform": "windows",
        "category": "Task Scheduling",
        "desc_en": "Manually triggers a scheduled task to run immediately. Replace 'TaskName' with the actual task name.",
        "desc_ar": "يشغل مهمة مجدولة يدويًا على الفور. استبدل 'TaskName' باسم المهمة الفعلي."
    },
    {
        "command": "sc config \"ServiceName\" start= disabled",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Changes a service's startup type to 'Disabled'. Notice the space after 'start=' is mandatory.",
        "desc_ar": "يغير نوع بدء تشغيل الخدمة إلى 'معطل'. لاحظ أن المسافة بعد 'start=' إلزامية."
    },
    {
        "command": "color 0A",
        "platform": "windows",
        "category": "Utility",
        "desc_en": "Changes the command prompt text to bright green (A) on a black background (0). The classic hacker aesthetic.",
        "desc_ar": "يغير نص موجه الأوامر إلى الأخضر الفاتح (A) على خلفية سوداء (0). المظهر الكلاسيكي للهاكرز."
    },
    {
        "command": "title My Custom Terminal",
        "platform": "windows",
        "category": "Utility",
        "desc_en": "Changes the title of the CMD window. Useful when running multiple terminals to keep track of their purposes.",
        "desc_ar": "يغير عنوان نافذة موجه الأوامر. مفيد عند تشغيل عدة نوافذ لتتبع الغرض من كل واحدة."
    },
    {
        "command": "timeout /t 10",
        "platform": "windows",
        "category": "Utility",
        "desc_en": "Pauses command execution for 10 seconds. Excellent for creating delays in batch scripts.",
        "desc_ar": "يوقف تنفيذ الأوامر مؤقتًا لمدة 10 ثوانٍ. ممتاز لإنشاء تأخيرات في السكربتات (Batch)."
    },
    {
        "command": "start https://google.com",
        "platform": "windows",
        "category": "Utility",
        "desc_en": "Opens the specified URL using your default web browser directly from the terminal.",
        "desc_ar": "يفتح الرابط المحدد باستخدام متصفح الويب الافتراضي الخاص بك مباشرة من سطر الأوامر."
    },
    {
        "command": "copy \"file1.txt\" \"file2.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Makes a copy of 'file1.txt' and names the new copy 'file2.txt'.",
        "desc_ar": "ينشئ نسخة من 'file1.txt' ويسمي النسخة الجديدة 'file2.txt'."
    },
    {
        "command": "xcopy \"C:\\Source\" \"D:\\Backup\" /E /I",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Copies all files and directories, including empty ones (/E), and assumes the destination is a folder (/I).",
        "desc_ar": "ينسخ جميع الملفات والمجلدات، بما في ذلك المجلدات الفارغة (/E)، ويفترض أن الوجهة هي مجلد (/I)."
    },
    {
        "command": "move \"C:\\file.txt\" \"D:\\Folder\\\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Moves a file from one location to another. Can also be used to rename files/folders.",
        "desc_ar": "ينقل ملفًا من موقع إلى آخر. يمكن استخدامه أيضًا لإعادة تسمية الملفات/المجلدات."
    },
    {
        "command": "ren \"oldname.txt\" \"newname.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Renames a file or directory. The source can include a path, but the new name must only be the filename.",
        "desc_ar": "يعيد تسمية ملف أو مجلد. يمكن أن يتضمن المصدر مسارًا، ولكن يجب أن يكون الاسم الجديد اسم الملف فقط."
    },
    {
        "command": "del /q /s *.tmp",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Quietly (/q) deletes all files with a .tmp extension in the current directory and all subdirectories (/s).",
        "desc_ar": "يحذف بهدوء (/q) جميع الملفات ذات الامتداد tmp. في المجلد الحالي وجميع المجلدات الفرعية (/s)."
    },
    {
        "command": "mkdir \"NewFolder\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a new directory (folder) named 'NewFolder' in the current location.",
        "desc_ar": "ينشئ دليلًا (مجلدًا) جديدًا باسم 'NewFolder' في الموقع الحالي."
    },
    {
        "command": "rmdir /s /q \"OldFolder\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Quietly (/q) removes the directory 'OldFolder' and all of its files and subfolders (/s).",
        "desc_ar": "يزيل بهدوء (/q) الدليل 'OldFolder' وجميع ملفاته ومجلداته الفرعية (/s)."
    },
    {
        "command": "type \"config.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays the raw text contents of a file directly inside the command prompt window.",
        "desc_ar": "يعرض المحتويات النصية الخام لملف مباشرة داخل نافذة موجه الأوامر."
    },
    {
        "command": "more \"largefile.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays the contents of a text file one screen at a time. Press Space to see the next page.",
        "desc_ar": "يعرض محتويات ملف نصي شاشة واحدة في كل مرة. اضغط على مسافة (Space) لرؤية الصفحة التالية."
    },
    {
        "command": "attrib +h +s \"secret.txt\"",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Adds the Hidden (+h) and System (+s) attributes to a file, making it completely invisible to normal explorer views.",
        "desc_ar": "يضيف سمات 'مخفي' (+h) و'نظام' (+s) لملف، مما يجعله غير مرئي تمامًا في طرق عرض المستكشف العادية."
    },
    {
        "command": "find \"error\" log.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Searches for the specific text string 'error' inside the file 'log.txt' and outputs the matching lines.",
        "desc_ar": "يبحث عن النص المحدد 'error' داخل الملف 'log.txt' ويعرض الأسطر المطابقة."
    },
    {
        "command": "findstr /i /c:\"failed login\" auth.log",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Advanced text search. Looks for the exact phrase 'failed login' (/c:) ignoring case sensitivity (/i) in auth.log.",
        "desc_ar": "بحث نصي متقدم. يبحث عن العبارة الدقيقة 'failed login' (/c:) متجاهلاً حالة الأحرف (/i) في ملف auth.log."
    },
    {
        "command": "fc \"file1.txt\" \"file2.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "File Compare. Compares two files and displays the differences between them line by line.",
        "desc_ar": "مقارنة الملفات. يقارن ملفين ويعرض الاختلافات بينهما سطراً بسطر."
    },
    {
        "command": "sort \"list.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Reads the lines in 'list.txt', sorts them alphabetically, and outputs the result to the console.",
        "desc_ar": "يقرأ الأسطر في 'list.txt'، ويفرزها أبجديًا، ويعرض النتيجة على الشاشة."
    },
    {
        "command": "type \"file.txt\" | clip",
        "platform": "windows",
        "category": "Utility",
        "desc_en": "Reads the contents of 'file.txt' and pipes it directly into the Windows clipboard for pasting elsewhere.",
        "desc_ar": "يقرأ محتويات 'file.txt' ويوجهها مباشرة إلى حافظة Windows للصقها في مكان آخر."
    },
    {
        "command": "systeminfo > sysinfo.txt",
        "platform": "windows",
        "category": "Utility",
        "desc_en": "Executes 'systeminfo' but redirects (>) the output into a new text file named 'sysinfo.txt' instead of the screen.",
        "desc_ar": "ينفذ 'systeminfo' لكنه يعيد توجيه (>) المخرجات إلى ملف نصي جديد باسم 'sysinfo.txt' بدلاً من الشاشة."
    },
    {
        "command": "msg * \"Maintenance in 5 minutes\"",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Sends a popup message box to all (*) user sessions currently active on the system.",
        "desc_ar": "يرسل صندوق رسالة منبثق إلى جميع (*) جلسات المستخدمين النشطة حاليًا على النظام."
    },
    {
        "command": "vol",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Displays the disk volume label and serial number for the current drive.",
        "desc_ar": "يعرض تسمية وحدة التخزين (Volume Label) والرقم التسلسلي لمحرك الأقراص الحالي."
    },
    // ─── 50 MORE ADDITIONAL COMMANDS (no duplicates) ─────────────────────────
    {
        "command": "ipconfig",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays basic TCP/IP configuration for all network adapters (IP address, subnet mask, default gateway).",
        "desc_ar": "يعرض إعدادات TCP/IP الأساسية لجميع محولات الشبكة (عنوان IP، قناع الشبكة، البوابة الافتراضية)."
    },
    {
        "command": "ipconfig /flushdns",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Flushes the DNS resolver cache. Useful when a website's IP has changed and you need to clear old entries.",
        "desc_ar": "يمسح ذاكرة التخزين المؤقت لمحلل DNS. مفيد عندما يتغير IP لموقع ويب وتحتاج إلى مسح الإدخالات القديمة."
    },
    {
        "command": "ipconfig /registerdns",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Refreshes all DHCP leases and re‑registers DNS names. Helps when a computer's name doesn't resolve correctly.",
        "desc_ar": "يقوم بتحديث جميع عقود DHCP وإعادة تسجيل أسماء DNS. يساعد عندما لا يتم تحليل اسم الكمبيوتر بشكل صحيح."
    },
    {
        "command": "ping google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Sends 4 ICMP echo requests to google.com to test basic connectivity and round‑trip time.",
        "desc_ar": "يرسل 4 طلبات ICMP إلى google.com لاختبار الاتصال الأساسي وزمن الرحلة ذهابًا وإيابًا."
    },
    {
        "command": "tracert 8.8.8.8",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Traces the route packets take to reach Google's public DNS (8.8.8.8), identifying each hop.",
        "desc_ar": "يتتبع المسار الذي تسلكه الحزم للوصول إلى DNS العام لجوجل (8.8.8.8)، مع تحديد كل قفزة."
    },
    {
        "command": "nslookup",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Starts an interactive DNS query tool. Type domain names to see their IP addresses. Exit with 'exit'.",
        "desc_ar": "يبدأ أداة استعلام DNS تفاعلية. اكتب أسماء النطاقات لرؤية عناوين IP الخاصة بها. اخرج باستخدام 'exit'."
    },
    {
        "command": "netstat -an",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays all active TCP connections and listening ports in numeric form (no name resolution).",
        "desc_ar": "يعرض جميع اتصالات TCP النشطة والمنافذ المفتوحة بشكل رقمي (بدون تحليل الأسماء)."
    },
    {
        "command": "netstat -e",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Shows Ethernet statistics, including bytes, packets, and errors sent/received.",
        "desc_ar": "يعرض إحصائيات Ethernet، بما في ذلك البايتات والحزم والأخطاء المرسلة/المستلمة."
    },
    {
        "command": "netstat -s",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays per‑protocol statistics (IPv4, IPv6, ICMP, TCP, UDP). Useful for troubleshooting packet loss.",
        "desc_ar": "يعرض إحصائيات لكل بروتوكول (IPv4، IPv6، ICMP، TCP، UDP). مفيد لتشخيص فقدان الحزم."
    },
    {
        "command": "route add 192.168.1.0 mask 255.255.255.0 192.168.1.1",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Adds a persistent route to the 192.168.1.0/24 network via the gateway 192.168.1.1.",
        "desc_ar": "يضيف مسارًا ثابتًا إلى شبكة 192.168.1.0/24 عبر البوابة 192.168.1.1."
    },
    {
        "command": "route delete 192.168.1.0",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Removes the route for the 192.168.1.0 network from the routing table.",
        "desc_ar": "يزيل المسار الخاص بشبكة 192.168.1.0 من جدول التوجيه."
    },
    {
        "command": "arp -d",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Clears the entire ARP cache, forcing the system to rediscover MAC addresses.",
        "desc_ar": "يمسح ذاكرة التخزين المؤقت ARP بالكامل، مما يجبر النظام على إعادة اكتشاف عناوين MAC."
    },
    {
        "command": "arp -s 192.168.1.1 00-AA-00-62-C6-09",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Adds a static ARP entry mapping an IP address to a specific MAC address. Useful for preventing spoofing.",
        "desc_ar": "يضيف إدخال ARP ثابتًا يربط عنوان IP بعنوان MAC محدد. مفيد لمنع الانتحال."
    },
    {
        "command": "nbtstat -c",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Displays the NetBIOS name cache, showing recently resolved NetBIOS names and their IPs.",
        "desc_ar": "يعرض ذاكرة التخزين المؤقت لأسماء NetBIOS، مع عرض الأسماء التي تم حلها مؤخرًا وعناوين IP الخاصة بها."
    },
    {
        "command": "pathping -n google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Combines ping and tracert without resolving IPs to hostnames. Faster than standard pathping.",
        "desc_ar": "يجمع بين ping و tracert دون تحويل عناوين IP إلى أسماء مضيفين. أسرع من pathping العادي."
    },
    {
        "command": "ping -a 8.8.8.8",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Pings an IP address and attempts to resolve it to a hostname. Useful for reverse DNS lookups.",
        "desc_ar": "يرسل ping إلى عنوان IP ويحاول تحويله إلى اسم مضيف. مفيد لاستعلامات DNS العكسية."
    },
    {
        "command": "ping -n 10 google.com",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Sends 10 ping requests instead of the default 4. Useful for testing packet loss over longer periods.",
        "desc_ar": "يرسل 10 طلبات ping بدلاً من 4 الافتراضية. مفيد لاختبار فقدان الحزم على مدى فترات أطول."
    },
    {
        "command": "sc stop \"Spooler\"",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Stops the Print Spooler service. Replace 'Spooler' with any service name. Requires admin rights.",
        "desc_ar": "يوقف خدمة التخزين المؤقت للطباعة. استبدل 'Spooler' باسم أي خدمة. يتطلب صلاحيات المسؤول."
    },
    {
        "command": "sc start \"Spooler\"",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Starts a stopped service (e.g., Print Spooler). Requires admin rights.",
        "desc_ar": "يبدأ خدمة متوقفة (مثل التخزين المؤقت للطباعة). يتطلب صلاحيات المسؤول."
    },
    {
        "command": "sc delete \"MyService\"",
        "platform": "windows",
        "category": "Service Management",
        "desc_en": "Removes a service from the registry. Use with extreme caution; the service must be stopped first.",
        "desc_ar": "يزيل خدمة من السجل. استخدم بحذر شديد؛ يجب إيقاف الخدمة أولاً."
    },
    {
        "command": "schtasks /end /tn \"TaskName\"",
        "platform": "windows",
        "category": "Task Scheduling",
        "desc_en": "Stops a running scheduled task immediately. Replace 'TaskName' with the actual task name.",
        "desc_ar": "يوقف مهمة مجدولة قيد التشغيل فورًا. استبدل 'TaskName' باسم المهمة الفعلي."
    },
    {
        "command": "schtasks /delete /tn \"TaskName\" /f",
        "platform": "windows",
        "category": "Task Scheduling",
        "desc_en": "Deletes a scheduled task without prompting for confirmation (/f).",
        "desc_ar": "يحذف مهمة مجدولة دون طلب تأكيد (/f)."
    },
    {
        "command": "wevtutil cl System",
        "platform": "windows",
        "category": "Logs",
        "desc_en": "Clears all events from the Windows System log. Requires admin rights.",
        "desc_ar": "يمسح جميع الأحداث من سجل النظام Windows. يتطلب صلاحيات المسؤول."
    },
    {
        "command": "wevtutil epl System C:\\backup.evtx",
        "platform": "windows",
        "category": "Logs",
        "desc_en": "Exports the System log to a .evtx file (C:\\backup.evtx) for offline analysis.",
        "desc_ar": "يصدّر سجل النظام إلى ملف .evtx (C:\\backup.evtx) لتحليله دون اتصال."
    },
    {
        "command": "fsutil fsinfo drives",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Lists all available drives on the system (local, network, removable).",
        "desc_ar": "يسرد جميع محركات الأقراص المتاحة على النظام (محلية، شبكة، قابلة للإزالة)."
    },
    {
        "command": "fsutil volume diskfree C:",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Shows the total, used, and free space on the C: drive in bytes.",
        "desc_ar": "يعرض المساحة الإجمالية والمستخدمة والحرة على محرك الأقراص C: بالبايت."
    },
    {
        "command": "fsutil file createnew test.txt 1000",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a new file of exactly 1000 bytes (filled with zeros). Useful for testing or dummy files.",
        "desc_ar": "ينشئ ملفًا جديدًا بحجم 1000 بايت بالضبط (مملوء بالأصفار). مفيد للاختبار أو الملفات الوهمية."
    },
    {
        "command": "compact /u /s:C:\\MyFolder",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Decompresses all files in C:\\MyFolder and its subfolders, restoring normal size.",
        "desc_ar": "يفك ضغط جميع الملفات في C:\\MyFolder ومجلداته الفرعية، ويعيد الحجم الطبيعي."
    },
    {
        "command": "cipher /d /s:C:\\MyFolder",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Decrypts all files in C:\\MyFolder and subfolders that were encrypted with Windows EFS.",
        "desc_ar": "يفك تشفير جميع الملفات في C:\\MyFolder والمجلدات الفرعية التي تم تشفيرها باستخدام EFS لنظام Windows."
    },
    {
        "command": "takeown /f \"C:\\folder\" /r /d y",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Recursively takes ownership of a folder and all its contents, answering 'yes' to prompts automatically.",
        "desc_ar": "يأخذ ملكية مجلد وجميع محتوياته بشكل متكرر، ويجيب 'نعم' على المطالبات تلقائيًا."
    },
    {
        "command": "icacls \"C:\\folder\" /grant \"User:(OI)(CI)F\" /T",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Grants full control to 'User' on C:\\folder, inheriting to child objects (OI) and containers (CI).",
        "desc_ar": "يمنح تحكمًا كاملاً لـ 'User' على C:\\folder، مع توريث الكائنات الفرعية (OI) والحاويات (CI)."
    },
    {
        "command": "net accounts",
        "platform": "windows",
        "category": "User Management",
        "desc_en": "Displays password and lockout policies for the local computer (e.g., minimum password age, lockout duration).",
        "desc_ar": "يعرض سياسات كلمة المرور والقفل للكمبيوتر المحلي (مثل الحد الأدنى لعمر كلمة المرور، مدة القفل)."
    },
    {
        "command": "net config workstation",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Shows workstation configuration settings, including software version, domain, and logon domain.",
        "desc_ar": "يعرض إعدادات تكوين محطة العمل، بما في ذلك إصدار البرنامج والمجال ومجال تسجيل الدخول."
    },
    {
        "command": "net statistics workstation",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays network statistics for the workstation (bytes sent/received, server sessions).",
        "desc_ar": "يعرض إحصائيات الشبكة لمحطة العمل (البايتات المرسلة/المستلمة، جلسات الخادم)."
    },
    {
        "command": "net session",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Lists SMB sessions currently connected to the local computer from remote clients. Requires admin rights.",
        "desc_ar": "يسرد جلسات SMB المتصلة حاليًا بالكمبيوتر المحلي من عملاء بعيدين. يتطلب صلاحيات المسؤول."
    },
    {
        "command": "net use * /delete",
        "platform": "windows",
        "category": "File Sharing",
        "desc_en": "Deletes all mapped network drives, disconnecting them immediately.",
        "desc_ar": "يحذف جميع محركات أقراص الشبكة المعينة، ويفصلها فورًا."
    },
    {
        "command": "wmic environment get name, variablevalue",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Lists all system environment variables and their values (e.g., PATH, TEMP).",
        "desc_ar": "يسرد جميع متغيرات بيئة النظام وقيمها (مثل PATH، TEMP)."
    },
    {
        "command": "wmic desktopmonitor get screenheight, screenwidth",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays the screen resolution (height and width in pixels) of the primary monitor.",
        "desc_ar": "يعرض دقة الشاشة (الارتفاع والعرض بالبكسل) للشاشة الأساسية."
    },
    {
        "command": "wmic os get lastbootuptime",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Shows the date and time the operating system was last started (boot time).",
        "desc_ar": "يعرض تاريخ ووقت آخر بدء تشغيل لنظام التشغيل (وقت الإقلاع)."
    },
    {
        "command": "wmic os get totalvisiblememorysize, freephysicalmemory",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays total installed RAM and free physical memory in megabytes.",
        "desc_ar": "يعرض إجمالي ذاكرة RAM المثبتة والذاكرة الفعلية الحرة بالميجابايت."
    },
    {
        "command": "wmic cpu get loadpercentage",
        "platform": "windows",
        "category": "Performance Monitoring",
        "desc_en": "Shows the current CPU load percentage (instantaneous, not average).",
        "desc_ar": "يعرض نسبة حمل وحدة المعالجة المركزية الحالية (لحظية، وليست متوسطًا)."
    },
    {
        "command": "wmic diskdrive get status",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Returns the health status (OK, Pred Fail, etc.) of each physical disk drive.",
        "desc_ar": "يعيد الحالة الصحية (OK، Pred Fail، إلخ) لكل محرك أقراص فعلي."
    },
    {
        "command": "wmic memorychip get speed, manufacturer",
        "platform": "windows",
        "category": "System Info",
        "desc_en": "Displays the speed (MHz) and manufacturer of each installed RAM module.",
        "desc_ar": "يعرض السرعة (MHz) والشركة المصنعة لكل وحدة ذاكرة RAM مثبتة."
    },
    {
        "command": "wmic nic where netenabled=true get name, speed",
        "platform": "windows",
        "category": "Networking",
        "desc_en": "Lists all enabled network adapters with their names and connection speeds (in bits per second).",
        "desc_ar": "يسرد جميع محولات الشبكة الممكنة مع أسمائها وسرعات الاتصال (بت في الثانية)."
    },
    {
        "command": "mklink /H \"C:\\hardlink.txt\" \"C:\\target.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a hard link (multiple filenames pointing to the same data). Deleting either file keeps the data.",
        "desc_ar": "ينشئ رابطًا صلبًا (أسماء ملفات متعددة تشير إلى نفس البيانات). حذف أي ملف يحافظ على البيانات."
    },
    {
        "command": "mklink /J \"C:\\junction\" \"C:\\target\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a directory junction (similar to a symbolic link but works across volumes).",
        "desc_ar": "ينشئ تقاطع دليل (مشابه للرابط الرمزي ولكنه يعمل عبر وحدات تخزين مختلفة)."
    },
    {
        "command": "bcdedit /enum",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Lists all entries in the Boot Configuration Data (BCD) store. Essential for dual‑boot troubleshooting.",
        "desc_ar": "يسرد جميع الإدخالات في مخزن بيانات تكوين الإقلاع (BCD). ضروري لاستكشاف أخطاء الإقلاع المزدوج."
    },
    {
        "command": "powercfg /hibernate on",
        "platform": "windows",
        "category": "Power Management",
        "desc_en": "Enables hibernation and creates a hiberfil.sys file. Use 'off' to disable and reclaim disk space.",
        "desc_ar": "يمكن الإسبات وينشئ ملف hiberfil.sys. استخدم 'off' لتعطيله واستعادة مساحة القرص."
    },
    {
        "command": "reg export \"HKCU\\Software\\MyApp\" backup.reg",
        "platform": "windows",
        "category": "System Configuration",
        "desc_en": "Exports a registry key and all its subkeys to a .reg file for backup or transfer.",
        "desc_ar": "يصدّر مفتاح تسجيل وجميع مفاتحه الفرعية إلى ملف .reg للنسخ الاحتياطي أو النقل."
    },
    {
        "command": "defrag C: /U /V",
        "platform": "windows",
        "category": "Disk Management",
        "desc_en": "Defragments the C: drive, displaying progress on screen (/U) and verbose output (/V).",
        "desc_ar": "يزيل تجزئة محرك الأقراص C:، ويعرض التقدم على الشاشة (/U) ومخرجات مفصلة (/V)."
    },
    // ─── FILE & FOLDER COMMANDS (35 new, no duplicates) ───────────────────────
    {
        "command": "dir",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Lists files and subdirectories in the current directory. Use /b for bare format, /w for wide, /p to pause.",
        "desc_ar": "يعرض قائمة الملفات والمجلدات الفرعية في الدليل الحالي. استخدم /b للتنسيق البسيط، /w للعرض العريض، /p للإيقاف المؤقت."
    },
    {
        "command": "dir /b",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays a bare list (names only) of files and folders in the current directory, one per line.",
        "desc_ar": "يعرض قائمة بسيطة (أسماء فقط) للملفات والمجلدات في الدليل الحالي، كل اسم في سطر منفرد."
    },
    {
        "command": "dir /s /b > filelist.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Recursively lists every file in the current directory and subdirectories (bare format) and saves to filelist.txt.",
        "desc_ar": "يعرض قائمة بكل ملف في الدليل الحالي والمجلدات الفرعية بشكل متكرر (تنسيق بسيط) ويحفظها في filelist.txt."
    },
    {
        "command": "dir /a:d /s /b > folders.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Lists ONLY subdirectory names (not files) recursively, bare format, and exports to folders.txt.",
        "desc_ar": "يعرض أسماء المجلدات الفرعية فقط (بدون ملفات) بشكل متكرر، بتنسيق بسيط، ويصدّرها إلى folders.txt."
    },
    {
        "command": "dir *.* /s /b > all_items.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Lists all files and folders recursively (wildcard) and saves the full paths to all_items.txt.",
        "desc_ar": "يعرض جميع الملفات والمجلدات بشكل متكرر (باستخدام wildcard) ويحفظ المسارات الكاملة في all_items.txt."
    },
    {
        "command": "for /d %i in (*) do echo %i >> folderlist.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Batch command: loops over all top‑level folders in the current directory and appends each folder name to folderlist.txt.",
        "desc_ar": "أمر دفعي: يتكرر على جميع المجلدات عالية المستوى في الدليل الحالي ويضيف كل اسم مجلد إلى folderlist.txt."
    },
    {
        "command": "for /r %i in (*.txt) do echo %i >> txtfiles.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Recursively finds all .txt files and appends their full paths to txtfiles.txt. Use in batch scripts with %%i.",
        "desc_ar": "يبحث بشكل متكرر عن جميع ملفات .txt ويضيف مساراتها الكاملة إلى txtfiles.txt. استخدم %%i في السكربتات."
    },
    {
        "command": "forfiles /P C:\\MyFolder /S /M *.log /C \"cmd /c del @file\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Deletes all .log files recursively in C:\\MyFolder. Forfiles is great for batch operations on files older than N days.",
        "desc_ar": "يحذف جميع ملفات .log بشكل متكرر في C:\\MyFolder. Forfiles ممتاز للعمليات الدفعية على الملفات الأقدم من N أيام."
    },
    {
        "command": "forfiles /P C:\\Backup /S /D -30 /C \"cmd /c del @file\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Deletes files older than 30 days in C:\\Backup and its subfolders.",
        "desc_ar": "يحذف الملفات الأقدم من 30 يومًا في C:\\Backup والمجلدات الفرعية."
    },
    {
        "command": "forfiles /P D:\\Logs /M *.txt /C \"cmd /c move @file C:\\Archive\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Moves all .txt files from D:\\Logs to C:\\Archive. Useful for automated file sorting.",
        "desc_ar": "ينقل جميع ملفات .txt من D:\\Logs إلى C:\\Archive. مفيد للفرز التلقائي للملفات."
    },
    {
        "command": "ren *.jpeg *.jpg",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Renames all .jpeg files to .jpg in the current directory. Use carefully – wildcards work in the old name only.",
        "desc_ar": "يعيد تسمية جميع ملفات .jpeg إلى .jpg في الدليل الحالي. استخدم بحذر – تعمل أحرف البدل في الاسم القديم فقط."
    },
    {
        "command": "ren \"report 2024-*.txt\" \"2024_report_*.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Batch renames files matching a pattern (e.g., 'report 2024‑01.txt' → '2024_report_01.txt'). The asterisk preserves the number.",
        "desc_ar": "يعيد تسمية مجموعة من الملفات وفق نمط (مثال: 'report 2024‑01.txt' → '2024_report_01.txt'). العلامة النجمية تحافظ على الرقم."
    },
    {
        "command": "move *.pdf D:\\PDFs\\",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Moves all PDF files from the current directory to D:\\PDFs\\.",
        "desc_ar": "ينقل جميع ملفات PDF من الدليل الحالي إلى D:\\PDFs\\."
    },
    {
        "command": "copy /Y *.* D:\\Backup\\",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Copies all files from current directory to D:\\Backup\\, overwriting existing files without prompting (/Y).",
        "desc_ar": "ينسخ جميع الملفات من الدليل الحالي إلى D:\\Backup\\، مع استبدال الملفات الموجودة دون طلب تأكيد (/Y)."
    },
    {
        "command": "xcopy /s /i /q /y \"C:\\Source\" \"D:\\Backup\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Quietly copies source to destination including subdirectories (/s), creating destination if needed (/i), overwriting (/y).",
        "desc_ar": "ينسخ المصدر إلى الوجهة بهدوء مع تضمين المجلدات الفرعية (/s)، وإنشاء الوجهة إذا لزم الأمر (/i)، والاستبدال (/y)."
    },
    {
        "command": "robocopy \"C:\\Source\" \"D:\\Backup\" /E /COPY:DAT /R:3 /W:5",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Copies directories with subdirectories (/E), preserves file data, attributes, timestamps (/COPY:DAT), retries 3 times (/R:3).",
        "desc_ar": "ينسخ المجلدات مع المجلدات الفرعية (/E)، ويحافظ على بيانات الملف والسمات والطوابع الزمنية (/COPY:DAT)، ويعيد المحاولة 3 مرات (/R:3)."
    },
    {
        "command": "del /f /a *.tmp",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Force‑deletes (/f) all .tmp files, including read‑only ones, and matches any attributes (/a).",
        "desc_ar": "يحذف بالقوة (/f) جميع ملفات .tmp، بما في ذلك الملفات للقراءة فقط، ويطابق أي سمات (/a)."
    },
    {
        "command": "rmdir /s /q \"C:\Temp\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Silently removes C:\Temp and all its contents (/s) without confirmation (/q). Irreversible!",
        "desc_ar": "يزيل C:\Temp وجميع محتوياته (/s) بهدوء دون تأكيد (/q). لا يمكن التراجع!"
    },
    {
        "command": "attrib +r +h +s important.txt",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Marks a file as Read‑Only (+r), Hidden (+h), and System (+s) – protected against accidental deletion/modification.",
        "desc_ar": "يضع علامات على ملف كـ 'للقراءة فقط' (+r) و 'مخفي' (+h) و 'نظام' (+s) – محمي ضد الحذف/التعديل العرضي."
    },
    {
        "command": "attrib -r -h -s important.txt",
        "platform": "windows",
        "category": "Security",
        "desc_en": "Removes Read‑Only, Hidden, and System attributes from a file so it becomes normal.",
        "desc_ar": "يزيل سمات 'للقراءة فقط' و 'مخفي' و 'نظام' من ملف ليعود إلى وضعه الطبيعي."
    },
    {
        "command": "fc /b file1.bin file2.bin",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Performs a binary file comparison (byte‑by‑byte). Displays the offset and values where files differ.",
        "desc_ar": "يقوم بمقارنة ثنائية للملفات (بايت ببايت). يعرض الموقع والقيم حيث تختلف الملفات."
    },
    {
        "command": "comp file1.txt file2.txt /a /d /n=100",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Compares first 100 lines in ASCII (/a), showing differences in decimal format (/d).",
        "desc_ar": "يقارن أول 100 سطر بتنسيق ASCII (/a)، ويعرض الاختلافات بالتنسيق العشري (/d)."
    },
    {
        "command": "replace D:\\NewFiles\\*.* C:\\Target /A",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Adds (/A) new files from D:\\NewFiles to C:\\Target that don't already exist there. No overwriting.",
        "desc_ar": "يضيف (/A) ملفات جديدة من D:\\NewFiles إلى C:\\Target غير الموجودة بالفعل هناك. لا يستبدل الموجود."
    },
    {
        "command": "replace C:\\OldFolder\\*.txt D:\\Backup /U",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Updates (/U) only files in D:\\Backup that are older than the ones in C:\\OldFolder (like incremental backup).",
        "desc_ar": "يحدّث (/U) فقط الملفات في D:\\Backup الأقدم من تلك الموجودة في C:\\OldFolder (مثل النسخ الاحتياطي التدريجي)."
    },
    {
        "command": "mkdir \"Project 2025\\Reports\\Q1\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a nested folder structure in one command – creates all intermediate folders if they don’t exist.",
        "desc_ar": "ينشئ هيكل مجلدات متداخل في أمر واحد – ينشئ جميع المجلدات الوسيطة إذا لم تكن موجودة."
    },
    {
        "command": "echo %cd% > currentdir.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Writes the current working directory path to a text file.",
        "desc_ar": "يكتب مسار الدليل الحالي إلى ملف نصي."
    },
    {
        "command": "dir /s /b | findstr /i \"error\" > error_files.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Recursively lists all files and filters for filenames containing 'error' (case‑insensitive), saves to error_files.txt.",
        "desc_ar": "يعرض جميع الملفات بشكل متكرر ويصفّي الأسماء التي تحتوي على 'error' (دون حساسية حالة الأحرف)، ويحفظها في error_files.txt."
    },
    {
        "command": "find /N \"TODO\" *.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Searches all .txt files in the current directory for lines containing 'TODO' and displays line numbers (/N).",
        "desc_ar": "يبحث في جميع ملفات .txt في الدليل الحالي عن أسطر تحتوي على 'TODO' ويعرض أرقام الأسطر (/N)."
    },
    {
        "command": "findstr /S /M \"password\" *.config",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Recursively (/S) lists only the filenames (/M) that contain 'password' in .config files.",
        "desc_ar": "يعرض بشكل متكرر (/S) أسماء الملفات فقط (/M) التي تحتوي على 'password' في ملفات .config."
    },
    {
        "command": "fsutil hardlink create \"C:\\link.txt\" \"C:\\original.txt\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Creates a hard link (another filename pointing to the same data) – both files reflect the same content.",
        "desc_ar": "ينشئ رابطًا صلبًا (اسم ملف آخر يشير إلى نفس البيانات) – يعكس كلا الملفين نفس المحتوى."
    },
    {
        "command": "fsutil reparsepoint query \"C:\\junction\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Displays information about a reparse point (junction, symlink, mount point). Useful for debugging links.",
        "desc_ar": "يعرض معلومات حول نقطة إعادة التحليل (junction، symlink، نقطة التثبيت). مفيد لتصحيح أخطاء الروابط."
    },
    {
        "command": "where /R C:\\Users *.exe",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Recursively searches C:\\Users for all .exe files and displays their full paths.",
        "desc_ar": "يبحث بشكل متكرر في C:\\Users عن جميع ملفات .exe ويعرض مساراتها الكاملة."
    },
    {
        "command": "where /Q calc.exe",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Quiet mode (/Q) – returns 0 (success) if calc.exe is found in PATH, otherwise error level 1. Useful in scripts.",
        "desc_ar": "الوضع الصامت (/Q) – يعيد 0 (نجاح) إذا تم العثور على calc.exe في PATH، وإلا مستوى خطأ 1. مفيد في السكربتات."
    },
    {
        "command": "cmd /c dir /b > out.txt",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Runs a command and exits. Here, it writes bare directory listing to out.txt, useful for scheduled scripts.",
        "desc_ar": "ينفذ أمرًا ويخرج. هنا، يكتب قائمة الدليل البسيطة إلى out.txt، مفيد للسكربتات المجدولة."
    },
    {
        "command": "for /f %i in (filelist.txt) do del \"%i\"",
        "platform": "windows",
        "category": "File Management",
        "desc_en": "Reads each line from filelist.txt and deletes that file. Use in batch scripts with %%i. Powerful and dangerous!",
        "desc_ar": "يقرأ كل سطر من filelist.txt ويحذف ذلك الملف. استخدم في السكربتات مع %%i. قوي وخطير!"
    }
];

// Export for use in grouping script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = windowsCommands;
}