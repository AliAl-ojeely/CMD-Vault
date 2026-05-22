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
    },

    // new Commands:

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
    },

    // ─── new additional commands ─────────────────────────────────
    {
        "command": "which python3",
        "platform": "linux",
        "category": "Productivity",
        "desc_en": "Locates the full path of the python3 executable. Useful to verify which version will be executed.",
        "desc_ar": "يحدد المسار الكامل لملف python3 التنفيذي. مفيد للتحقق من الإصدار الذي سيتم تشغيله."
    },
    {
        "command": "man ls",
        "platform": "linux",
        "category": "Help",
        "desc_en": "Displays the manual page for the ls command. Press 'q' to exit. Replace 'ls' with any command to learn more about it.",
        "desc_ar": "يعرض صفحة الدليل لأمر ls. اضغط 'q' للخروج. استبدل 'ls' بأي أمر لمعرفة المزيد عنه."
    },
    {
        "command": "whatis ls",
        "platform": "linux",
        "category": "Help",
        "desc_en": "Shows a one-line description of what the ls command does. Great for quick reference.",
        "desc_ar": "يعرض وصفًا من سطر واحد لما يفعله أمر ls. رائع كمرجع سريع."
    },
    {
        "command": "ln -s /path/to/original /path/to/link",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Creates a symbolic link (symlink) from the original file/folder to a new location. Useful for shortcuts or organizing files.",
        "desc_ar": "ينشئ رابطًا رمزيًا (symlink) من الملف/المجلد الأصلي إلى موقع جديد. مفيد للاختصارات أو تنظيم الملفات."
    },
    {
        "command": "wc -l file.txt",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Counts the number of lines in a file. Use -w for words or -c for characters. Great for quick statistics.",
        "desc_ar": "يحسب عدد الأسطر في ملف. استخدم -w للكلمات أو -c للأحرف. رائع للإحصائيات السريعة."
    },
    {
        "command": "sort file.txt | uniq",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Sorts the content of a file and removes duplicate lines. Often used in data processing pipelines.",
        "desc_ar": "يقوم بفرز محتوى ملف ويزيل الأسطر المكررة. يُستخدم غالبًا في خطوط معالجة البيانات."
    },
    {
        "command": "du -sh /home/*",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Shows the disk usage of each subdirectory under /home in human-readable format. Helps find what's consuming space.",
        "desc_ar": "يعرض استخدام القرص لكل مجلد فرعي تحت /home بصيغة مفهومة. يساعد في معرفة ما يستهلك المساحة."
    },
    {
        "command": "mount /dev/sdb1 /mnt",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Mounts the partition /dev/sdb1 to the /mnt directory. Essential for accessing external drives manually.",
        "desc_ar": "يقوم بتثبيت القسم /dev/sdb1 إلى مجلد /mnt. ضروري للوصول إلى الأقراص الخارجية يدويًا."
    },
    {
        "command": "umount /mnt",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Unmounts the filesystem at /mnt. Always unmount before removing a drive to prevent data loss.",
        "desc_ar": "يفصل نظام الملفات عن /mnt. افصل دائمًا قبل إزالة محرك الأقراص لمنع فقدان البيانات."
    },
    {
        "command": "blkid",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Lists block device attributes like UUID and filesystem type. Useful for identifying drives before mounting.",
        "desc_ar": "يسرد سمات أجهزة الكتل مثل UUID ونوع نظام الملفات. مفيد لتحديد محركات الأقراص قبل التركيب."
    },
    {
        "command": "useradd -m newuser",
        "platform": "linux",
        "category": "User Management",
        "desc_en": "Creates a new user account with a home directory. Requires root privileges. Replace 'newuser' with the desired username.",
        "desc_ar": "ينشئ حساب مستخدم جديد مع مجلد رئيسي. يتطلب صلاحيات الجذر. استبدل 'newuser' باسم المستخدم المطلوب."
    },
    {
        "command": "passwd newuser",
        "platform": "linux",
        "category": "User Management",
        "desc_en": "Sets or changes the password for a user account. If run without a username, changes the current user's password.",
        "desc_ar": "يعين أو يغير كلمة المرور لحساب مستخدم. إذا تم تشغيله بدون اسم مستخدم، يغير كلمة مرور المستخدم الحالي."
    },
    {
        "command": "usermod -aG sudo newuser",
        "platform": "linux",
        "category": "User Management",
        "desc_en": "Adds a user to the sudo group, granting administrative privileges. Use 'wheel' on some distributions.",
        "desc_ar": "يضيف مستخدمًا إلى مجموعة sudo، مما يمنح صلاحيات إدارية. استخدم 'wheel' في بعض التوزيعات."
    },
    {
        "command": "last",
        "platform": "linux",
        "category": "User Management",
        "desc_en": "Shows a list of the last logged-in users, including reboot times. Useful for auditing system access.",
        "desc_ar": "يعرض قائمة بآخر المستخدمين الذين سجلوا الدخول، بما في ذلك أوقات إعادة التشغيل. مفيد لتدقيق الوصول إلى النظام."
    },
    {
        "command": "nc -zv example.com 80",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Tests if a TCP port is open on a remote host. The -z flag scans without sending data. Very handy for firewall debugging.",
        "desc_ar": "يختبر ما إذا كان منفذ TCP مفتوحًا على مضيف بعيد. يقوم العلم -z بالمسح دون إرسال بيانات. مفيد جدًا لتصحيح أخطاء جدار الحماية."
    },
    {
        "command": "iptables -L",
        "platform": "linux",
        "category": "Security",
        "desc_en": "Lists all active firewall rules (iptables). Essential for reviewing and troubleshooting network restrictions.",
        "desc_ar": "يسرد جميع قواعد جدار الحماية النشطة (iptables). ضروري لمراجعة قيود الشبكة واستكشاف أخطائها."
    },
    {
        "command": "ufw status",
        "platform": "linux",
        "category": "Security",
        "desc_en": "Checks the status of the Uncomplicated Firewall (active/inactive) and lists rules. Popular on Ubuntu.",
        "desc_ar": "يتحقق من حالة جدار الحماية غير المعقد (نشط/غير نشط) ويسرد القواعد. شائع على Ubuntu."
    },
    {
        "command": "ssh-keygen -t rsa -b 4096",
        "platform": "linux",
        "category": "Security",
        "desc_en": "Generates a new RSA SSH key pair (4096 bits). Used for secure password-less authentication to remote servers.",
        "desc_ar": "يُولّد زوج مفاتيح SSH جديد من نوع RSA (4096 بت). يُستخدم للمصادقة الآمنة بدون كلمة مرور على الخوادم البعيدة."
    },
    {
        "command": "ssh-copy-id user@server",
        "platform": "linux",
        "category": "Security",
        "desc_en": "Copies your public SSH key to a remote server, enabling password-less login. Replace with your actual username and server.",
        "desc_ar": "ينسخ مفتاح SSH العام الخاص بك إلى خادم بعيد، مما يتيح تسجيل الدخول بدون كلمة مرور. استبدل باسم المستخدم والخادم الفعليين."
    },
    {
        "command": "traceroute google.com",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Traces the network path packets take to a destination. Helps pinpoint where delays occur. Press Ctrl+C to stop.",
        "desc_ar": "يتتبع مسار الشبكة الذي تسلكه الحزم إلى وجهة. يساعد في تحديد مكان حدوث التأخير. اضغط Ctrl+C للإيقاف."
    },
    {
        "command": "dig google.com",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Queries DNS servers for information about a domain. More detailed than nslookup; great for troubleshooting DNS issues.",
        "desc_ar": "يستعلم من خوادم DNS للحصول على معلومات حول نطاق. أكثر تفصيلاً من nslookup؛ رائع لاستكشاف مشكلات DNS."
    },
    {
        "command": "nmap -sP 192.168.1.0/24",
        "platform": "linux",
        "category": "Networking",
        "desc_en": "Pings all hosts in a subnet to discover live devices. Requires nmap installed. Great for network mapping.",
        "desc_ar": "يقوم بإرسال ping إلى جميع المضيفين في شبكة فرعية لاكتشاف الأجهزة النشطة. يتطلب تثبيت nmap. رائع لرسم خرائط الشبكة."
    },
    {
        "command": "dd if=/dev/zero of=file.img bs=1M count=100",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Creates a 100 MB file filled with zeros. Can be used to test disk write speed or create swap files.",
        "desc_ar": "ينشئ ملفًا بحجم 100 ميجابايت مملوءًا بالأصفار. يمكن استخدامه لاختبار سرعة كتابة القرص أو إنشاء ملفات swap."
    },
    {
        "command": "watch -n 1 'cat /proc/loadavg'",
        "platform": "linux",
        "category": "Performance Monitoring",
        "desc_en": "Executes a command every second and displays the output. Here it monitors system load. Useful for live monitoring.",
        "desc_ar": "ينفذ أمرًا كل ثانية ويعرض المخرجات. هنا يراقب حمل النظام. مفيد للمراقبة المباشرة."
    },
    {
        "command": "lscpu",
        "platform": "linux",
        "category": "System Info",
        "desc_en": "Displays detailed CPU architecture information: cores, threads, speed, cache sizes. Perfect for hardware profiling.",
        "desc_ar": "يعرض معلومات معمارية وحدة المعالجة المركزية التفصيلية: الأنوية، الخيوط، السرعة، أحجام الذاكرة المؤقتة. مثالي لتعريف الأجهزة."
    },
    {
        "command": "lsblk",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Lists all block devices (drives and partitions) in a tree-like format. Great for visualizing disk layout.",
        "desc_ar": "يسرد جميع أجهزة الكتل (محركات الأقراص والأقسام) في تنسيق شجري. رائع لتصور تخطيط القرص."
    },
    {
        "command": "chown user:group file.txt",
        "platform": "linux",
        "category": "Permissions",
        "desc_en": "Changes the owner and group of a file. Replace 'user' and 'group' with the desired values. Often needed after transferring files.",
        "desc_ar": "يغير مالك ومجموعة ملف. استبدل 'user' و 'group' بالقيم المطلوبة. غالبًا ما يكون مطلوبًا بعد نقل الملفات."
    },
    {
        "command": "chmod 755 script.sh",
        "platform": "linux",
        "category": "Permissions",
        "desc_en": "Sets file permissions to rwxr-xr-x (owner full, others read/execute). Common for scripts and executables.",
        "desc_ar": "يعين صلاحيات الملف إلى rwxr-xr-x (المالك كامل، والآخرون قراءة/تنفيذ). شائع للسكربتات والملفات التنفيذية."
    },
    {
        "command": "export PATH=$PATH:/opt/myapp/bin",
        "platform": "linux",
        "category": "Customization",
        "desc_en": "Adds a custom directory to the PATH variable for the current session. Add to ~/.bashrc for permanent effect.",
        "desc_ar": "يضيف مجلدًا مخصصًا إلى متغير PATH للجلسة الحالية. أضفه إلى ~/.bashrc للحصول على تأثير دائم."
    },
    {
        "command": "screen -S mysession",
        "platform": "linux",
        "category": "Productivity",
        "desc_en": "Starts a named screen session that persists even when the terminal is closed. Reattach with screen -r mysession.",
        "desc_ar": "يبدأ جلسة screen مسماة تستمر حتى عند إغلاق الطرفية. أعد الاتصال باستخدام screen -r mysession."
    },
    {
        "command": "tmux new -s mysession",
        "platform": "linux",
        "category": "Productivity",
        "desc_en": "Starts a named tmux session (modern alternative to screen). Use Ctrl+B then D to detach, tmux attach -t mysession to rejoin.",
        "desc_ar": "يبدأ جلسة tmux مسماة (البديل الحديث لـ screen). استخدم Ctrl+B ثم D للفصل، و tmux attach -t mysession للعودة."
    },
    {
        "command": "fdisk -l",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Lists all disks and partitions with detailed information. Requires root. Prefer lsblk for a simpler view.",
        "desc_ar": "يسرد جميع الأقراص والأقسام مع معلومات مفصلة. يتطلب صلاحيات الجذر. يُفضل lsblk للحصول على عرض أبسط."
    },
    {
        "command": "parted /dev/sda print",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Displays partition table information of /dev/sda using the parted tool. Supports GPT and MBR.",
        "desc_ar": "يعرض معلومات جدول أقسام /dev/sda باستخدام أداة parted. يدعم GPT و MBR."
    },
    {
        "command": "mkfs.ext4 /dev/sdb1",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Formats a partition with the ext4 filesystem. All data on that partition will be erased – use with caution.",
        "desc_ar": "يقوم بتهيئة قسم بنظام ملفات ext4. سيتم مسح جميع البيانات الموجودة على هذا القسم – استخدم بحذر."
    },
    {
        "command": "fallocate -l 1G testfile",
        "platform": "linux",
        "category": "Disk Management",
        "desc_en": "Creates a 1 GB file instantly (space is allocated but not zeroed). Faster than dd for creating test files.",
        "desc_ar": "ينشئ ملفًا بحجم 1 جيجابايت فورًا (يتم تخصيص المساحة لكن لا يتم تصفيرها). أسرع من dd لإنشاء ملفات اختبار."
    },
    {
        "command": "truncate -s 0 file.txt",
        "platform": "linux",
        "category": "File Management",
        "desc_en": "Empties a file without deleting it. Useful for clearing logs while keeping the file in place.",
        "desc_ar": "يفرغ ملفًا دون حذفه. مفيد لمسح السجلات مع إبقاء الملف في مكانه."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = linuxCommands;
}