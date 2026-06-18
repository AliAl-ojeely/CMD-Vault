const flutterCommands = [
    { platform: "flutter", category: "Flutter Basics", command: "flutter create <project_name>", desc_en: "Create a new Flutter project.", desc_ar: "إنشاء مشروع فلاتر جديد." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter create --org <com.example> <project>", desc_en: "Create a new project with a specific organization name.", desc_ar: "إنشاء مشروع جديد مع تحديد اسم المؤسسة (لحزمة التطبيق)." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter doctor", desc_en: "Show information about the installed tooling.", desc_ar: "فحص بيئة التطوير وعرض المشاكل أو المتطلبات الناقصة." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter doctor -v", desc_en: "Show verbose information about the installed tooling.", desc_ar: "فحص بيئة التطوير وعرض تقرير مفصل جداً." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter clean", desc_en: "Delete the build/ and .dart_tool/ directories.", desc_ar: "تنظيف المشروع بحذف مجلدات البناء المؤقتة." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter upgrade", desc_en: "Upgrade your copy of Flutter.", desc_ar: "تحديث حزمة فلاتر إلى أحدث إصدار." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter downgrade", desc_en: "Downgrade Flutter to the last active version.", desc_ar: "العودة إلى الإصدار السابق من فلاتر." },
    { platform: "flutter", category: "Flutter Basics", command: "flutter --version", desc_en: "Print Flutter SDK version.", desc_ar: "عرض رقم إصدار فلاتر الحالي." },

    { platform: "flutter", category: "Flutter Run & Build", command: "flutter run", desc_en: "Run your Flutter app on an attached device.", desc_ar: "تشغيل التطبيق على الجهاز المتصل أو المحاكي." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter run --release", desc_en: "Run your app in release mode.", desc_ar: "تشغيل التطبيق في وضع الإصدار (أداء أعلى)." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter run -d <device_id>", desc_en: "Run your app on a specific device.", desc_ar: "تشغيل التطبيق على جهاز محدد بناءً على الـ ID." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter run -d chrome", desc_en: "Run your app on Google Chrome.", desc_ar: "تشغيل التطبيق على متصفح جوجل كروم." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build apk", desc_en: "Build a release APK for Android.", desc_ar: "استخراج ملف APK نهائي لنظام أندرويد." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build apk --split-per-abi", desc_en: "Build multiple APKs optimized for each ABI.", desc_ar: "استخراج عدة ملفات APK محسنة لكل معمارية (حجم أصغر)." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build appbundle", desc_en: "Build an Android App Bundle (AAB).", desc_ar: "استخراج حزمة AAB لرفعها على متجر جوجل بلاي." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build ios", desc_en: "Build an iOS application bundle (Mac only).", desc_ar: "استخراج حزمة التطبيق لنظام iOS (يتطلب ماك)." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build ipa", desc_en: "Build an iOS archive bundle (IPA).", desc_ar: "استخراج ملف IPA لرفعه على متجر أبل." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build web", desc_en: "Build a web application bundle.", desc_ar: "استخراج ملفات التطبيق للعمل على الويب." },
    { platform: "flutter", category: "Flutter Run & Build", command: "flutter build windows", desc_en: "Build a Windows desktop application.", desc_ar: "استخراج ملف تنفيذي لتطبيق ويندوز." },

    { platform: "flutter", category: "Flutter Packages", command: "flutter pub get", desc_en: "Get the packages defined in pubspec.yaml.", desc_ar: "تحميل الحزم المحددة في ملف pubspec.yaml." },
    { platform: "flutter", category: "Flutter Packages", command: "flutter pub add <package>", desc_en: "Add a new package to your project.", desc_ar: "إضافة حزمة جديدة للمشروع وتثبيتها." },
    { platform: "flutter", category: "Flutter Packages", command: "flutter pub add <package>:<version>", desc_en: "Add a specific version of a package.", desc_ar: "إضافة إصدار معين من حزمة محددة." },
    { platform: "flutter", category: "Flutter Packages", command: "flutter pub remove <package>", desc_en: "Remove a package from your project.", desc_ar: "حذف حزمة معينة من المشروع." },
    { platform: "flutter", category: "Flutter Packages", command: "flutter pub upgrade", desc_en: "Upgrade packages to the latest compatible versions.", desc_ar: "تحديث جميع الحزم إلى أحدث إصدار متوافق." },
    { platform: "flutter", category: "Flutter Packages", command: "flutter pub outdated", desc_en: "Check for outdated packages.", desc_ar: "التحقق من الحزم القديمة وعرض الإصدارات الجديدة المتاحة." },
    { platform: "flutter", category: "Flutter Packages", command: "flutter pub cache repair", desc_en: "Repair the pub cache.", desc_ar: "إصلاح ذاكرة التخزين المؤقت للحزم في حالة وجود أخطاء." },

    { platform: "flutter", category: "Flutter Code & Test", command: "flutter analyze", desc_en: "Analyze the project's Dart code.", desc_ar: "تحليل الكود لاكتشاف الأخطاء وتنبيهات الجودة." },
    { platform: "flutter", category: "Flutter Code & Test", command: "dart format .", desc_en: "Format Dart code in the current directory.", desc_ar: "تنسيق وترتيب الكود البرمجي في المشروع بالكامل." },
    { platform: "flutter", category: "Flutter Code & Test", command: "flutter test", desc_en: "Run unit and widget tests.", desc_ar: "تشغيل جميع اختبارات الوحدات والودجت." },
    { platform: "flutter", category: "Flutter Code & Test", command: "flutter test --coverage", desc_en: "Run tests and collect coverage information.", desc_ar: "تشغيل الاختبارات مع إنشاء تقرير بتغطية الكود." },

    { platform: "flutter", category: "Flutter Advanced", command: "flutter devices", desc_en: "List all connected devices.", desc_ar: "عرض جميع الأجهزة المتصلة والمتاحة للتشغيل." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter emulators", desc_en: "List all available emulators.", desc_ar: "عرض جميع المحاكيات المتاحة في النظام." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter emulators --launch <id>", desc_en: "Launch a specific emulator.", desc_ar: "تشغيل محاكي محدد بناءً على اسمه أو الـ ID." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter logs", desc_en: "Show log output for running Flutter apps.", desc_ar: "عرض سجلات النظام والأخطاء للتطبيقات قيد التشغيل." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter attach", desc_en: "Attach to a running Flutter app.", desc_ar: "الارتباط بتطبيق فلاتر قيد التشغيل (مفيد للـ Debugging)." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter config --enable-web", desc_en: "Enable Flutter for web.", desc_ar: "تفعيل دعم بناء تطبيقات الويب في فلاتر." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter config --enable-windows-desktop", desc_en: "Enable Windows desktop support.", desc_ar: "تفعيل دعم بناء تطبيقات سطح المكتب لويندوز." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter channel <channel>", desc_en: "Switch Flutter channel (stable, beta, master).", desc_ar: "تغيير مسار تحديثات فلاتر (stable أو beta أو master)." },
    { platform: "flutter", category: "Flutter Advanced", command: "flutter precache", desc_en: "Populate the Flutter tool's cache of binary artifacts.", desc_ar: "تنزيل وتحميل الملفات الثنائية المسبقة لفلاتر لتسريع العمل." }
];

module.exports = flutterCommands;