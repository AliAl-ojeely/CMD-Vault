const dockerCommands = [
    // System & Info
    { platform: "docker", category: "System & Info", command: "docker --version", desc_en: "Show the Docker version information.", desc_ar: "عرض إصدار Docker المثبت." },
    { platform: "docker", category: "System & Info", command: "docker info", desc_en: "Display system-wide information.", desc_ar: "عرض معلومات شاملة عن نظام Docker." },
    { platform: "docker", category: "System & Info", command: "docker system prune -a", desc_en: "Remove all unused containers, networks, images, and volumes.", desc_ar: "حذف جميع الحاويات، الشبكات، الصور، والمجلدات غير المستخدمة لتوفير المساحة." },

    // Images
    { platform: "docker", category: "Images", command: "docker pull <image>", desc_en: "Pull an image or a repository from a registry.", desc_ar: "تنزيل صورة (Image) من مستودع Docker Hub." },
    { platform: "docker", category: "Images", command: "docker build -t <name> .", desc_en: "Build an image from a Dockerfile in the current directory.", desc_ar: "بناء صورة جديدة باستخدام ملف Dockerfile الموجود في المسار الحالي." },
    { platform: "docker", category: "Images", command: "docker images", desc_en: "List all local images.", desc_ar: "عرض جميع الصور (Images) المحفوظة محلياً." },
    { platform: "docker", category: "Images", command: "docker rmi <image_id>", desc_en: "Remove one or more images.", desc_ar: "حذف صورة أو أكثر من الجهاز." },

    // Containers
    { platform: "docker", category: "Containers", command: "docker run -d -p 8080:80 <image>", desc_en: "Run a container in the background and map ports.", desc_ar: "تشغيل حاوية في الخلفية مع ربط منفذ الجهاز بمنفذ الحاوية." },
    { platform: "docker", category: "Containers", command: "docker run -it <image> /bin/bash", desc_en: "Run a container in interactive mode with bash access.", desc_ar: "تشغيل الحاوية في الوضع التفاعلي والدخول إلى سطر الأوامر الخاص بها." },
    { platform: "docker", category: "Containers", command: "docker ps", desc_en: "List running containers.", desc_ar: "عرض الحاويات التي تعمل حالياً فقط." },
    { platform: "docker", category: "Containers", command: "docker ps -a", desc_en: "List all containers (running and stopped).", desc_ar: "عرض جميع الحاويات (سواء التي تعمل أو المتوقفة)." },
    { platform: "docker", category: "Containers", command: "docker stop <container_id>", desc_en: "Stop one or more running containers.", desc_ar: "إيقاف حاوية قيد التشغيل." },
    { platform: "docker", category: "Containers", command: "docker start <container_id>", desc_en: "Start one or more stopped containers.", desc_ar: "إعادة تشغيل حاوية متوقفة." },
    { platform: "docker", category: "Containers", command: "docker rm <container_id>", desc_en: "Remove one or more stopped containers.", desc_ar: "حذف حاوية متوقفة تماماً من النظام." },
    { platform: "docker", category: "Containers", command: "docker logs <container_id>", desc_en: "Fetch the logs of a container.", desc_ar: "عرض السجلات (Logs) الخاصة بحاوية معينة." },
    { platform: "docker", category: "Containers", command: "docker exec -it <container_id> sh", desc_en: "Run a command in a running container.", desc_ar: "تنفيذ أمر تفاعلي (أو الدخول لسطر الأوامر) داخل حاوية تعمل حالياً." },

    // Volumes & Networks
    { platform: "docker", category: "Volumes & Networks", command: "docker volume create <volume_name>", desc_en: "Create a volume for persistent data.", desc_ar: "إنشاء مساحة تخزين (Volume) لحفظ بيانات الحاويات بشكل دائم." },
    { platform: "docker", category: "Volumes & Networks", command: "docker volume ls", desc_en: "List all volumes.", desc_ar: "عرض جميع مساحات التخزين (Volumes)." },
    { platform: "docker", category: "Volumes & Networks", command: "docker network ls", desc_en: "List all networks.", desc_ar: "عرض جميع الشبكات المتاحة في Docker." },

    // Docker Compose
    { platform: "docker", category: "Docker Compose", command: "docker-compose up -d", desc_en: "Create and start containers in the background.", desc_ar: "إنشاء وتشغيل الحاويات المرتبطة في الخلفية باستخدام ملف Compose." },
    { platform: "docker", category: "Docker Compose", command: "docker-compose down", desc_en: "Stop and remove containers, networks, and volumes.", desc_ar: "إيقاف وحذف جميع الحاويات والشبكات التي تم تشغيلها عبر Compose." },
    { platform: "docker", category: "Docker Compose", command: "docker-compose build", desc_en: "Build or rebuild services.", desc_ar: "بناء أو إعادة بناء الخدمات المحددة في ملف Compose." },
    { platform: "docker", category: "Docker Compose", command: "docker-compose logs -f", desc_en: "Follow log output from services.", desc_ar: "عرض وتتبع السجلات الحية لجميع الخدمات المشغلة عبر Compose." }
];

module.exports = dockerCommands;