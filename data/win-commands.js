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

    // new commands:

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
    }
];

// Export for use in grouping script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = windowsCommands;
}