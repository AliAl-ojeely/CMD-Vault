// data/git-commands.js
const gitCommands = [
    // Git Basics
    { platform: "git", category: "Git Basics", command: "git init", desc_en: "Initialize a new Git repository.", desc_ar: "تهيئة مستودع Git محلي جديد." },
    { platform: "git", category: "Git Basics", command: "git clone <url>", desc_en: "Clone a repository into a new directory.", desc_ar: "استنساخ مستودع بعيد إلى مجلد محلي." },
    { platform: "git", category: "Git Basics", command: "git status", desc_en: "Show the working tree status.", desc_ar: "عرض حالة الملفات في مساحة العمل." },
    { platform: "git", category: "Git Basics", command: "git add .", desc_en: "Add all current changes to the next commit.", desc_ar: "إضافة جميع التعديلات الحالية لتجهيزها للحفظ." },
    { platform: "git", category: "Git Basics", command: "git commit -m \"message\"", desc_en: "Record changes to the repository.", desc_ar: "حفظ التعديلات في المستودع مع رسالة توضيحية." },

    // Git Branching
    { platform: "git", category: "Git Branching", command: "git branch", desc_en: "List all local branches.", desc_ar: "عرض جميع الفروع المحلية." },
    { platform: "git", category: "Git Branching", command: "git branch <branch-name>", desc_en: "Create a new branch.", desc_ar: "إنشاء فرع جديد." },
    { platform: "git", category: "Git Branching", command: "git checkout <branch-name>", desc_en: "Switch to a specific branch.", desc_ar: "الانتقال إلى فرع محدد." },
    { platform: "git", category: "Git Branching", command: "git checkout -b <branch-name>", desc_en: "Create a new branch and switch to it.", desc_ar: "إنشاء فرع جديد والانتقال إليه مباشرة." },
    { platform: "git", category: "Git Branching", command: "git merge <branch-name>", desc_en: "Join two or more development histories together.", desc_ar: "دمج فرع محدد مع الفرع الحالي." },

    // Git Remote
    { platform: "git", category: "Git Remote", command: "git remote add origin <url>", desc_en: "Add a new remote repository.", desc_ar: "ربط المستودع المحلي بمستودع بعيد." },
    { platform: "git", category: "Git Remote", command: "git push -u origin main", desc_en: "Push changes to remote repository and set upstream.", desc_ar: "رفع التعديلات للمستودع البعيد مع ربط الفرع." },
    { platform: "git", category: "Git Remote", command: "git push", desc_en: "Update remote refs along with associated objects.", desc_ar: "رفع التعديلات المحلية إلى المستودع البعيد." },
    { platform: "git", category: "Git Remote", command: "git pull", desc_en: "Fetch from and integrate with another repository.", desc_ar: "جلب التحديثات من المستودع البعيد ودمجها محلياً." },
    { platform: "git", category: "Git Remote", command: "git fetch", desc_en: "Download objects and refs from another repository.", desc_ar: "جلب التحديثات من المستودع البعيد بدون دمجها." },

    // Git Undo
    { platform: "git", category: "Git Undo", command: "git restore <file>", desc_en: "Restore working tree files.", desc_ar: "التراجع عن التعديلات غير المحفوظة في ملف محدد." },
    { platform: "git", category: "Git Undo", command: "git reset HEAD <file>", desc_en: "Unstage a file while retaining changes.", desc_ar: "إزالة ملف من منطقة التجهيز مع الاحتفاظ بالتعديلات." },
    { platform: "git", category: "Git Undo", command: "git reset --hard", desc_en: "Reset current HEAD to the specified state.", desc_ar: "إلغاء جميع التعديلات المحلية والعودة لآخر حفظ." },
    { platform: "git", category: "Git Undo", command: "git revert <commit>", desc_en: "Revert some existing commits.", desc_ar: "التراجع عن حفظ معين عن طريق إنشاء حفظ عكسي." },

    // Git Advanced
    { platform: "git", category: "Git Advanced", command: "git log --oneline", desc_en: "Show commit logs in a compact way.", desc_ar: "عرض سجل الحفظ بشكل مختصر." },
    { platform: "git", category: "Git Advanced", command: "git stash", desc_en: "Stash the changes in a dirty working directory.", desc_ar: "تخزين التعديلات المؤقتة جانباً بدون حفظها." },
    { platform: "git", category: "Git Advanced", command: "git stash pop", desc_en: "Remove a single stashed state and apply it.", desc_ar: "استرجاع آخر تعديلات تم تخزينها مؤقتاً." },
    { platform: "git", category: "Git Advanced", command: "git cherry-pick <commit>", desc_en: "Apply the changes introduced by some existing commits.", desc_ar: "تطبيق تعديلات من حفظ معين ونقلها لفرع آخر." }
];

module.exports = gitCommands;