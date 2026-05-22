// data/linux-commands.js
const linuxCommands = [
    {
        "command": "ls -la",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Lists all files and directories in the current folder, including hidden ones, with detailed permissions, ownership, size, and modification date. The fundamental command for exploring the filesystem.",
        "desc_ar": "يعرض جميع الملفات والمجلدات في المسار الحالي، بما في ذلك المخفية، مع الصلاحيات والمالك والحجم وتاريخ التعديل. الأمر الأساسي لاستكشاف نظام الملفات."
    },
    {
        "command": "df -h",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Reports disk space usage of all mounted filesystems in a human-readable format (GB/MB). Crucial for monitoring storage and preventing disk-full scenarios.",
        "desc_ar": "يبلغ عن استخدام مساحة القرص لجميع أنظمة الملفات المُثبّتة بصيغة مفهومة (غيغابايت/ميغابايت). ضروري لمراقبة التخزين ومنع امتلاء القرص."
    },
    {
        "command": "chmod +x script.sh",
        "platform": "linux",
        "category": "Permissions",
        "desc_en": "Grants execute permission to a file, allowing it to be run as a script or program. The foundation of making shell scripts executable.",
        "desc_ar": "يمنح صلاحية التنفيذ لملف، مما يسمح بتشغيله كبرنامج نصي. أساس جعل سكريبتات الشل قابلة للتنفيذ."
    },
    {
        "command": "top",
        "platform": "linux",
        "category": "Process Management",
        "desc_en": "Displays real-time system processes, sorted by resource usage (CPU, memory). Press 'q' to exit. A more user-friendly alternative is 'htop' if installed.",
        "desc_ar": "يعرض العمليات الجارية في النظام بشكل فوري، مرتبة حسب استخدام الموارد (المعالج، الذاكرة). اضغط 'q' للخروج. البديل الأكثر سهولة هو 'htop' إذا تم تثبيته."
    },
    {
        "command": "ps aux",
        "platform": "linux",
        "category": "Process Management",
        "desc_en": "Lists all running processes with user, PID, CPU/memory usage, and the command that started them. Often used with grep to find specific processes.",
        "desc_ar": "يسرد جميع العمليات الجارية مع المستخدم، معرف العملية، استخدام المعالج/الذاكرة، والأمر الذي بدأها. غالبًا ما يستخدم مع grep للعثور على عمليات محددة."
    },
    {
        "command": "kill -9 1234",
        "platform": "linux",
        "category": "Process Management",
        "desc_en": "Forcefully kills the process with PID 1234. Replace with the actual PID. -9 sends SIGKILL, which cannot be ignored by the process.",
        "desc_ar": "يقتل العملية ذات المعرف 1234 بقوة. استبدل بمعرف العملية الفعلي. يرسل -9 إشارة SIGKILL التي لا يمكن للعملية تجاهلها."
    },
    {
        "command": "ifconfig",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Displays network interface configuration (IP, MAC, etc.). Deprecated but still widely used; modern replacement is 'ip addr'.",
        "desc_ar": "يعرض تكوين واجهات الشبكة (IP، MAC، إلخ). أداة قديمة لكنها لا تزال مستخدمة على نطاق واسع؛ البديل الحديث هو 'ip addr'."
    },
    {
        "command": "ip addr",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Shows IP addresses assigned to all network interfaces. The modern replacement for 'ifconfig'. Use 'ip link' for link status.",
        "desc_ar": "يعرض عناوين IP المخصصة لجميع واجهات الشبكة. البديل الحديث لأمر 'ifconfig'. استخدم 'ip link' لعرض حالة الوصلات."
    },
    {
        "command": "ping -c 4 google.com",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Sends 4 ICMP packets to google.com to test connectivity. Use -c to limit the number of pings, otherwise it runs indefinitely.",
        "desc_ar": "يرسل 4 حزم ICMP إلى google.com لاختبار الاتصال. استخدم -c لتحديد عدد محاولات ping، وإلا فسيستمر إلى ما لا نهاية."
    },
    {
        "command": "netstat -tulpn",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Lists all TCP/UDP listening ports with associated process names and PIDs. Essential for security audits and service troubleshooting.",
        "desc_ar": "يسرد جميع منافذ TCP/UDP المستمعة مع أسماء العمليات ومعرفاتها. ضروري لتدقيق الأمان واستكشاف أخطاء الخدمات."
    },
    {
        "command": "ss -tulpn",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Modern replacement for 'netstat'. Displays socket statistics with listening ports and process information. Faster and more detailed.",
        "desc_ar": "البديل الحديث لأمر 'netstat'. يعرض إحصائيات المقابس مع منافذ الاستماع ومعلومات العملية. أسرع وأكثر تفصيلاً."
    },
    {
        "command": "curl -I https://example.com",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Fetches only the HTTP headers from a URL, useful for checking response codes, server type, and caching headers without downloading the body.",
        "desc_ar": "يجلب رؤوس HTTP فقط من عنوان URL، مفيد للتحقق من رموز الاستجابة ونوع الخادم ورؤوس التخزين المؤقت دون تنزيل المحتوى."
    },
    {
        "command": "wget -c https://example.com/file.tar.gz",
        "platform": "linux",
        "category": "File Transfer",
        "desc_en": "Downloads a file, resuming if interrupted (-c). A reliable command-line downloader that works even on slow connections.",
        "desc_ar": "يقوم بتنزيل ملف، مع استئناف التحميل إذا توقف (-c). أداة تنزيل موثوقة من سطر الأوامر تعمل حتى على الاتصالات البطيئة."
    },
    {
        "command": "scp user@server:/path/file.txt .",
        "platform": "linux",
        "category": "File Transfer",
        "desc_en": "Securely copies a file from a remote server to the local current directory using SSH. Essential for remote file operations.",
        "desc_ar": "ينسخ ملفًا بأمان من خادم بعيد إلى المجلد الحالي المحلي باستخدام SSH. ضروري لعمليات الملفات عن بُعد."
    },
    {
        "command": "rsync -avz source/ dest/",
        "platform": "linux",
        "category": "File Transfer",
        "desc_en": "Synchronizes files and directories between two locations efficiently (only transfers changes). Great for backups and mirrors.",
        "desc_ar": "يقوم بمزامنة الملفات والمجلدات بين موقعين بكفاءة (ينقل التغييرات فقط). رائع للنسخ الاحتياطي والنسخ المتطابقة."
    },
    {
        "command": "find /home -name \"*.log\" -size +10M",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Searches under /home for log files larger than 10 MB. The find command is incredibly powerful for locating files by name, size, date, etc.",
        "desc_ar": "يبحث تحت /home عن ملفات السجل التي يزيد حجمها عن 10 ميغابايت. أمر find قوي بشكل لا يصدق لتحديد موقع الملفات حسب الاسم أو الحجم أو التاريخ، إلخ."
    },
    {
        "command": "grep -r \"error\" /var/log/",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Recursively searches for the word 'error' in all files under /var/log/. grep is the primary text search tool in Linux.",
        "desc_ar": "يبحث بشكل متكرر عن كلمة 'error' في جميع الملفات تحت /var/log/. أداة grep هي أداة البحث النصي الرئيسية في Linux."
    },
    {
        "command": "tar -czvf archive.tar.gz folder/",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Creates a compressed tar archive (gzip) of a folder. -c create, -z gzip, -v verbose, -f file. Universal backup and distribution format.",
        "desc_ar": "ينشئ أرشيف tar مضغوط (gzip) لمجلد. -c إنشاء، -z ضغط gzip، -v عرض تفاصيل، -f ملف. صيغة عالمية للنسخ الاحتياطي والتوزيع."
    },
    {
        "command": "unzip archive.zip -d target/",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Extracts a ZIP archive into the specified target directory. Use -d to choose the output folder.",
        "desc_ar": "يستخرج أرشيف ZIP إلى المجلد الهدف المحدد. استخدم -d لتحديد مجلد الإخراج."
    },
    {
        "command": "alias ll='ls -la'",
        "platform": "linux",
        "category": "Customization",
        "desc_en": "Creates a short alias 'll' for the long listing command. Add this line to ~/.bashrc or ~/.zshrc to make it permanent.",
        "desc_ar": "ينشئ اختصارًا 'll' لأمر العرض الطويل. أضف هذا السطر إلى ~/.bashrc أو ~/.zshrc لجعله دائمًا."
    },
    {
        "command": "source ~/.bashrc",
        "platform": "linux",
        "category": "Customization",
        "desc_en": "Reloads the bash configuration file, applying any new aliases or environment variables without logging out.",
        "desc_ar": "يعيد تحميل ملف تكوين bash، مطبقًا أي اختصارات أو متغيرات بيئة جديدة دون الحاجة إلى تسجيل الخروج."
    },
    {
        "command": "crontab -e",
        "platform": "linux",
        "category": "Task Scheduling",
        "desc_en": "Opens the current user's crontab for editing, allowing you to schedule recurring tasks (jobs) at specific times or intervals.",
        "desc_ar": "يفتح crontab الخاص بالمستخدم الحالي للتحرير، مما يسمح لك بجدولة المهام المتكررة في أوقات أو فترات زمنية محددة."
    },
    {
        "command": "systemctl status sshd",
        "platform": "linux",
        "category": "Service Management",
        "desc_en": "Displays the current status of the SSH service (active, inactive, failed, etc.) on systemd-based distributions. Use 'service sshd status' on older systems.",
        "desc_ar": "يعرض الحالة الحالية لخدمة SSH (نشطة، غير نشطة، فاشلة، إلخ) على التوزيعات القائمة على systemd. استخدم 'service sshd status' على الأنظمة الأقدم."
    },
    {
        "command": "journalctl -u nginx -n 50",
        "platform": "linux",
        "category": "Logs",
        "desc_en": "Shows the last 50 log entries for the nginx service. Centralized logging made easy with systemd's journal.",
        "desc_ar": "يعرض آخر 50 إدخالاً في سجل خدمة nginx. أصبح التسجيل المركزي سهلاً مع دفتر يوميات systemd."
    },
    {
        "command": "dmesg | tail -20",
        "platform": "linux",
        "category": "Logs",
        "desc_en": "Prints the last 20 lines of the kernel ring buffer, which contains boot and hardware driver messages. Useful for diagnosing hardware issues.",
        "desc_ar": "يطبع آخر 20 سطرًا من المخزن المؤقت الدائري للنواة، والذي يحتوي على رسائل الإقلاع وتعريفات الأجهزة. مفيد لتشخيص مشكلات الأجهزة."
    },
    {
        "command": "hostnamectl",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Displays system hostname, OS version, kernel, architecture, and more. Part of systemd-hostnamed.",
        "desc_ar": "يعرض اسم مضيف النظام وإصدار نظام التشغيل والنواة والهندسة المعمارية والمزيد. جزء من systemd-hostnamed."
    },
    {
        "command": "uname -a",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Prints all system information: kernel name, hostname, kernel release, version, machine hardware, and OS.",
        "desc_ar": "يطبع جميع معلومات النظام: اسم النواة، اسم المضيف، إصدار النواة، الإصدار، أجهزة الجهاز، ونظام التشغيل."
    },
    {
        "command": "lsb_release -a",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Shows distribution-specific information (ID, release, codename). Useful for scripting cross-distro compatibility.",
        "desc_ar": "يعرض معلومات خاصة بالتوزيعة (المعرف، الإصدار، الاسم الرمزي). مفيد للسكربتات متعددة التوزيعات."
    },
    {
        "command": "uptime",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Tells how long the system has been running, how many users are logged on, and the load average. Quick snapshot of system health.",
        "desc_ar": "يخبرك بمدة تشغيل النظام، وعدد المستخدمين الذين قاموا بتسجيل الدخول، ومتوسط الحمل. لقطة سريعة لصحة النظام."
    },
    {
        "command": "free -h",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Displays total, used, and free memory (RAM and swap) in human-readable format. Great for monitoring memory pressure.",
        "desc_ar": "يعرض الذاكرة الإجمالية والمستخدمة والخالية (RAM و swap) بصيغة مفهومة. رائع لمراقبة ضغط الذاكرة."
    },
    {
        "command": "vmstat 1",
        "platform": "linux",
        "category": "Performance Monitoring",
        "desc_en": "Reports virtual memory statistics every second. Includes processes, memory, paging, block IO, traps, and CPU activity.",
        "desc_ar": "يبلغ عن إحصائيات الذاكرة الظاهرية كل ثانية. تتضمن العمليات، الذاكرة، الترحيل، الإدخال/الإخراج للكتل، المقاطعات، ونشاط وحدة المعالجة المركزية."
    },
    {
        "command": "iostat -x 1",
        "platform": "linux",
        "category": "Performance Monitoring",
        "desc_en": "Displays extended I/O statistics for all devices every second. Helps identify disk bottlenecks.",
        "desc_ar": "يعرض إحصائيات الإدخال/الإخراج الموسعة لجميع الأجهزة كل ثانية. يساعد في تحديد اختناقات القرص."
    },
    {
        "command": "history",
        "platform": "linux",
        "category": "Productivity",
        "desc_en": "Shows a numbered list of previously executed commands. Use '!number' to rerun a specific command from the list.",
        "desc_ar": "يعرض قائمة مرقمة بالأوامر المنفذة مسبقًا. استخدم '!رقم' لإعادة تشغيل أمر معين من القائمة."
    },
    {
        "command": "sudo apt update && sudo apt upgrade -y",
        "platform": "linux",
        "category": "Package Management",
        "desc_en": "Updates the package list and upgrades all installed packages on Debian/Ubuntu systems without prompts (-y). Keep your system secure.",
        "desc_ar": "يقوم بتحديث قائمة الحزم وترقية جميع الحزم المثبتة على أنظمة Debian/Ubuntu دون أسئلة (-y). حافظ على أمان نظامك."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = linuxCommands;
}