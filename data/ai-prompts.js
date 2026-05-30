// data/ai-prompts.js
const aiPrompts = [
    // ========== PORTRAIT & SELFIE PROMPTS (15) ==========
    {
        "command": "A hyper-realistic cinematic portrait with harsh, high-contrast black and white lighting. Subject stands on a wet, rain-slicked city street at 3 AM. Film Noir aesthetic with moody shadows and heavy film grain. Shot on a 50mm lens with a single streetlamp creating strong rim light from behind. Deep blacks, crisp whites, no mid-tones.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Neo‑noir detective style: dramatic black‑and‑white portrait with harsh lighting and film grain. Perfect for artistic profile photos.",
        "desc_ar": "صورة نمط فيلم نوار: صورة دراماتيكية بالأبيض والأسود بإضاءة قاسية وحبيبات فيلم. مثالية لصور الملف الشخصي الفنية."
    },
    {
        "command": "Cinematic portrait at golden hour with warm sunlight streaming from behind, creating a natural halo effect around the subject's hair. Shallow depth of field with creamy bokeh in the background. Shot on Kodak Portra 400 film emulation. Soft, romantic lighting with subtle lens flare. The subject gazes slightly off-camera with a serene, confident expression.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Golden hour goddess: warm backlit portrait with soft bokeh and romantic feel. Great for lifestyle branding.",
        "desc_ar": "صورة عند الساعة الذهبية: إضاءة خلفية دافئة مع تأثير بوكيه ناعم. رائعة للعلامات التجارية الحياتية."
    },
    {
        "command": "Classic 1940s Hollywood studio portrait with soft, diffused lighting. Black and white with rich tonal range. Subject positioned against a dark velvet backdrop with Rembrandt lighting creating a triangle of light on the cheek. Slight soft focus for a dreamy quality. Elegant, timeless composition reminiscent of George Hurrell's celebrity portraits.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Vintage Hollywood glamour: timeless black‑and‑white portrait with Rembrandt lighting and soft focus.",
        "desc_ar": "سحر هوليوود القديم: صورة خالدة بالأبيض والأسود بإضاءة رامبرانت وتركيز ناعم."
    },
    {
        "command": "Editorial portrait set deep in a misty old-growth forest. Dappled sunlight filtering through the canopy creates pools of light and shadow. Desaturated color palette with enhanced greens and earth tones. Fantasy aesthetic with an otherworldly, ethereal atmosphere. Subject wears flowing natural fabrics that blend with the environment. Medium shot with cinematic 2.39:1 aspect ratio.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Moody forest saga: fantasy editorial portrait with dappled light and earthy tones. Ideal for creative professionals.",
        "desc_ar": "ملحمة الغابة الكئيبة: صورة تحريرية خيالية مع ضوء مرقط وألوان ترابية. مثالية للمبدعين."
    },
    {
        "command": "Gritty street photography portrait against a weathered concrete wall covered in shadows and textures. Stark midday sun creates harsh, unforgiving shadows. High contrast with deep blacks and blown-out highlights. Shot on a 35mm lens with subtle vignetting. Raw, authentic, documentary style. No retouching aesthetic.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "High‑contrast urban: raw street portrait with harsh shadows and authentic feel. Perfect for musicians or artists.",
        "desc_ar": "مدني عالي التباين: صورة شارع خام بظلال قاسية. مثالية للموسيقيين أو الفنانين."
    },
    {
        "command": "Professional headshot against a softly blurred white office background. Even, diffused lighting from a large softbox creates gentle shadows that define facial structure without harshness. Subject wearing formal business attire, looking directly at camera with a confident, approachable expression. Studio photography quality with natural skin texture. Vertical 4:5 format optimized for LinkedIn.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Corporate executive: polished headshot for LinkedIn or company websites. Clean, professional, approachable.",
        "desc_ar": "تنفيذي محترف: صورة شخصية أنيقة للينكد إن أو مواقع الشركات. نظيفة ومهنية وودودة."
    },
    {
        "command": "Relaxed professional portrait in a bright, naturally-lit modern workspace. Large windows provide soft directional light from the side. Subject dressed in smart casual attire, leaning slightly forward with engaged expression. Shallow depth of field blurs the tastefully decorated background. Warm, inviting color temperature. Shot at eye level for approachable perspective.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Creative professional: approachable headshot in a modern office setting. Great for startups and freelancers.",
        "desc_ar": "محترف مبدع: صورة شخصية ودودة في بيئة مكتبية حديثة. رائعة للشركات الناشئة والمستقلين."
    },
    {
        "command": "High-fashion editorial portrait with dramatic single-source lighting from above and to the side. Strong shadows sculpt facial features. Clean, minimal background in neutral gray. Subject's expression is intense and focused, looking slightly past camera. Magazine-quality skin retouching while maintaining realistic texture. Shot on a medium format camera for that distinctive shallow focus falloff.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Editorial fashion: dramatic, magazine‑style portrait with sculpted lighting. Ideal for models or influencers.",
        "desc_ar": "أزياء تحريرية: صورة دراماتيكية على غرار المجلات بإضاءة منحوتة. مثالية للموديلات أو المؤثرين."
    },
    {
        "command": "Ultra-clean portrait against a seamless off-white backdrop. Even, gallery-style lighting with no visible shadows. Subject centered in frame with generous negative space around them. High-key exposure creating a bright, optimistic mood. Expression is genuine and warm. Suitable for museum or gallery about page aesthetics.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Minimalist studio: clean, bright portrait with negative space. Perfect for artists or consultants.",
        "desc_ar": "استوديو بسيط: صورة نظيفة ومشرقة مع مساحة سلبية. مثالية للفنانين أو الاستشاريين."
    },
    {
        "command": "Authentic portrait taken near a large north-facing window during overcast afternoon light. Soft, even illumination without harsh shadows. Subtle catchlights in the eyes. Natural, unposed expression as if caught mid-conversation. Background is softly blurred interior space. Realistic skin tones and textures. The warmth and intimacy of natural available light photography.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Warm natural light: candid, approachable portrait using soft window light. Best for personal branding.",
        "desc_ar": "ضوء طبيعي دافئ: صورة عفوية وودودة باستخدام ضوء النافذة الناعم. أفضل للعلامات الشخصية."
    },
    {
        "command": "Transform this photo into a hyper-detailed collectible action figure displayed in original retail packaging. The figure is made of high-quality plastic with articulated joints and realistic proportions. Packaging includes a clear plastic window, product name, manufacturer logo, and illustrated backing card. Studio product photography lighting with clean white background. The face captures the exact likeness of the original photo.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "3D action figure: turns any portrait into a packaged action figure. Extremely shareable for social media.",
        "desc_ar": "تمثال حركي ثلاثي الأبعاد: يحول أي صورة شخصية إلى تمثال حركة معبأ. قابل للمشاركة جداً على وسائل التواصل."
    },
    {
        "command": "Convert this image into a 3D Pixar-style animated character. Clean, stylized features with exaggerated proportions typical of Pixar films. Smooth, polished render with soft ambient occlusion. Large, expressive eyes with detailed highlights. Simplified but recognizable likeness. Warm, friendly color palette. Studio lighting typical of Pixar promotional stills.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Pixar character: transforms photo into a charming 3D cartoon character. Works best with clear, well‑lit faces.",
        "desc_ar": "شخصية بيكسار: يحول الصورة إلى شخصية كرتونية ثلاثية الأبعاد ساحرة. يعمل بشكل أفضل مع الوجوه الواضحة والمضاءة جيداً."
    },
    {
        "command": "Reimagine this photo as a high-quality anime character in the style of Studio Ghibli. Soft watercolor palette with delicate linework. Large, expressive eyes with detailed reflections. Hair rendered with flowing, dynamic strands. Cozy atmosphere with magical elements like floating lights or subtle sparkles. Maintain the original person's key identifying features while adapting to anime proportions.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Anime transformation: Studio Ghibli style with soft watercolor and magical elements. Very popular for fan art.",
        "desc_ar": "تحول أنمي: بأسلوب استوديو غيبلي مع ألوان مائية ناعمة وعناصر سحرية. شائع جداً لفن المعجبين."
    },
    {
        "command": "Transform this portrait into a frozen frame from a 1980s VHS tape. Vibrant magenta and cyan color bleeding, visible tracking lines, and authentic CRT scanline artifacts. Color temperature shifts toward warm yellows in highlights and cool purples in shadows. Deliberate chromatic aberration and subtle distortion at frame edges. Nostalgic, analog imperfection.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Retro VHS aesthetic: adds 80s VHS artifacts and color bleeding for a nostalgic, analog look.",
        "desc_ar": "جمالية VHS القديم: يضيف شوائب VHS من الثمانينيات ونزيف ألوان لمظهر حنين وتناظري."
    },
    {
        "command": "Convert this photo into a delicate watercolor painting. Soft, translucent washes of color that blend naturally at the edges. Visible paper texture beneath the paint. Subtle brush strokes and intentional areas where the white paper shows through. Loose, artistic interpretation rather than photorealistic rendering. Muted, harmonious color palette with occasional bold accent.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Watercolor portrait: turns any photo into a soft, artistic watercolor painting. Great for couples or creative profiles.",
        "desc_ar": "بورتريه مائي: يحول أي صورة إلى لوحة مائية ناعمة وفنية. رائعة للأزواج أو الملفات الإبداعية."
    },

    // ========== PHOTO EDITING PROMPTS (12) ==========
    {
        "command": "Replace the current background with a modern minimalist living room featuring floor-to-ceiling windows overlooking a city skyline at sunset. Match the existing lighting on the subject perfectly, ensuring shadows and highlights remain consistent with the new environment. Maintain the original subject exactly as they appear, including position, expression, and clothing.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Seamless background replacement – changes background while keeping subject and lighting consistent.",
        "desc_ar": "استبدال الخلفية بسلاسة – يغير الخلفية مع الحفاظ على تناسق الإضاءة والموضوع."
    },
    {
        "command": "Add gentle rainfall to this outdoor scene. Include visible raindrops catching the light, wet reflections on ground surfaces, and a slightly overcast ambient light. The subject's hair and clothing should show subtle moisture effects. Maintain the overall composition but adjust colors to reflect the moody, atmospheric conditions of a rainy day.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Weather transformation – adds realistic rain and overcast lighting to outdoor photos.",
        "desc_ar": "تحويل الطقس – يضيف مطراً واقعياً وإضاءة غائمة للصور الخارجية."
    },
    {
        "command": "Transform this daytime photo into a nighttime scene with city lights in the background. Add realistic artificial lighting that illuminates the subject from nearby sources like street lamps or building windows. Stars visible in the clear night sky. Adjust the overall color temperature to cooler blues while maintaining warm accent lights on the subject.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Time of day shift – converts day photos to convincing night scenes with city lights.",
        "desc_ar": "تحويل وقت اليوم – يحول صور النهار إلى مشاهد ليلية مقنعة مع أضواء المدينة."
    },
    {
        "command": "Enhance this outdoor scene by adding more lush vegetation in the background and improving the sky to show dramatic cumulus clouds with golden-hour lighting. Increase the vibrancy of natural colors without making them look artificial. Maintain the subject and foreground exactly as they are while enriching the environmental context.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Environment enhancement – enriches vegetation, sky, and colors for a more dramatic outdoor look.",
        "desc_ar": "تحسين البيئة – يثري الغطاء النباتي والسماء والألوان للحصول على مظهر خارجي أكثر دراماتيكية."
    },
    {
        "command": "Perform a professional beauty retouch on this portrait. Even skin tone subtly, remove only temporary blemishes like spots or redness, while preserving all natural pores, texture, and facial features. Avoid the plastic, over-smoothed look. Subtle dodge and burn to balance midtones. The result should look like naturally perfect skin, not obviously edited.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Natural skin retouching – removes blemishes while preserving natural texture. No plastic look.",
        "desc_ar": "تنقيح البشرة الطبيعي – يزيل العيوب مع الحفاظ على الملمس الطبيعي. لا مظهر بلاستيكي."
    },
    {
        "command": "Apply a cinematic teal and orange color grade to this photo. Shadows pushed toward deep teal, midtones slightly warm, highlights with orange cast. Increase contrast for a more dramatic look while preserving shadow detail. The overall effect should resemble a contemporary Hollywood film still.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Cinematic color grading – adds teal/orange Hollywood movie look to any photo.",
        "desc_ar": "تدرج لوني سينمائي – يضيف لون هوليوود الأخضر/البرتقالي لأي صورة."
    },
    {
        "command": "Improve the lighting in this photo by adding subtle fill light to the shadow side of the face. Create more defined catch lights in the eyes. Slightly enhance rim lighting along hair edges. The goal is professional studio-quality lighting while maintaining the natural look of the original setting.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Lighting enhancement – adds fill light, catchlights, and rim light for studio quality.",
        "desc_ar": "تحسين الإضاءة – يضيف ضوء تعبئة وأضواء هالة للحصول على جودة استوديو."
    },
    {
        "command": "Remove the [specific object] from this image. Fill the resulting space with contextually appropriate content that matches the surrounding area seamlessly. Pay attention to perspective, lighting, and texture consistency so the edit is completely invisible.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Object removal – erases specified objects and fills the area realistically. Best for isolated items.",
        "desc_ar": "إزالة الكائنات – يمحو الكائنات المحددة ويملأ المنطقة بشكل واقعي. أفضل للعناصر المعزولة."
    },
    {
        "command": "Convert this color photo to a high-contrast black and white image with rich tonal range. Emphasize texture and form through dramatic lighting. Apply subtle grain reminiscent of classic film photography. Ensure deep, true blacks and clean whites without losing important detail in either extreme. The result should feel timeless and dramatic.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Artistic black and white – high‑contrast monochrome with film grain and rich tones.",
        "desc_ar": "أبيض وأسود فني – تباين عالٍ بالأبيض والأسود مع حبيبات فيلم ونغمات غنية."
    },
    {
        "command": "Add professional-quality background blur to this portrait, simulating a wide aperture lens with beautiful bokeh. The subject should remain perfectly sharp while the background falls away into soft, creamy blur. Any light sources in the background should become soft, circular bokeh orbs. Maintain natural edge transitions without harsh cutouts.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Soft focus enhancement – adds DSLR‑style bokeh background blur to any portrait.",
        "desc_ar": "تحسين التركيز الناعم – يضيف تأثير بوكيه DSLR للخلفية في أي صورة شخصية."
    },
    {
        "command": "Add authentic film grain to this digital photo that matches the characteristics of Kodak Tri-X 400 black and white film. The grain should be fine but visible, with natural clumping patterns rather than digital noise. Slightly reduce sharpness for that soft film look. Adjust contrast to match the film stock's characteristic curve.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Film grain application – adds realistic analog film grain and softness to digital images.",
        "desc_ar": "تطبيق حبيبات الفيلم – يضيف حبيبات فيلم تناظرية واقعية ونعومة للصور الرقمية."
    },
    {
        "command": "Optimize this photo for Instagram feed display. Enhance colors for maximum impact on mobile screens without appearing oversaturated. Adjust composition to work in both square and 4:5 vertical crops. Increase clarity and micro-contrast for sharpness that survives compression. The result should be scroll-stopping while still looking natural.",
        "platform": "ai",
        "category": "Photo Editing",
        "desc_en": "Social media optimization – adjusts colors, contrast, and crop for best Instagram performance.",
        "desc_ar": "تحسين لوسائل التواصل – يضبط الألوان والتباين والقص لأفضل أداء على إنستغرام."
    },

    // ========== LOGO & TEXT RENDERING PROMPTS (10) ==========
    {
        "command": "Create a modern, minimalist logo for a coffee shop called 'The Daily Grind'. The text should be in a clean, bold, sans-serif font. Feature a simple, stylized icon of a coffee bean seamlessly integrated with the text. Color scheme is black and white only. The design should work at any size from business card to storefront signage. Professional vector-style quality.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Minimalist logo – clean black‑and‑white logo with coffee bean icon. Vector‑style quality.",
        "desc_ar": "شعار بسيط – شعار نظيف بالأبيض والأسود مع أيقونة حبة قهوة. جودة على طراز المتجهات."
    },
    {
        "command": "Design a vintage-style circular badge logo for 'Mountain Peak Brewing Co.' established 2020. Include decorative borders, small stars, and a mountain silhouette. Text arranged in an arc following the circle's curve. Weathered, distressed texture as if printed on aged paper. Colors: deep forest green and cream. Classic Americana aesthetic.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Vintage badge emblem – circular, distressed texture, mountain theme. Perfect for craft breweries.",
        "desc_ar": "شارة عتيقة – دائرية، نسيج متآكل، طابع جبلي. مثالية لمصانع الجعة الحرفية."
    },
    {
        "command": "Generate a photorealistic neon sign that reads 'OPEN LATE' against a dark brick wall. Pink and blue neon tubes with authentic glow, subtle flickering effect, and realistic reflections on the wall surface. Visible mounting brackets and power cables for authenticity. The overall mood is late-night urban atmosphere.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Neon sign text – realistic neon sign with glowing effect and brick wall background.",
        "desc_ar": "نص لافتة نيون – لافتة نيون واقعية مع تأثير متوهج وخلفية جدار من الطوب."
    },
    {
        "command": "Create a hand-lettered chalk art design on a dark green chalkboard that reads 'Fresh Baked Daily'. Decorative flourishes and small illustrations of bread and croissants around the text. Imperfect, charming letterforms that look genuinely hand-drawn. Subtle chalk dust and texture. Warm, inviting bakery aesthetic.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Hand‑lettered style – chalkboard art with charming, imperfect lettering and bakery illustrations.",
        "desc_ar": "نمط مكتوب بخط اليد – فن السبورة بخط جميل غير كامل ورسوم توضيحية للمخبوزات."
    },
    {
        "command": "Generate bold 3D text that says 'SUMMER SALE' with dramatic perspective. Bright yellow letters with subtle gradient, casting strong shadows on a clean background. Letters appear to pop out of the image toward the viewer. High-gloss, plastic-like material with reflections and highlights. Dynamic, energetic retail promotional style.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "3D typography – eye‑catching 3D text with shadows and glossy material. Great for promotions.",
        "desc_ar": "طباعة ثلاثية الأبعاد – نص ثلاثي الأبعاد جذاب مع ظلال ومادة لامعة. رائع للترويج."
    },
    {
        "command": "Design an Instagram quote graphic with the text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.' Attribution: Winston Churchill. Clean, modern layout with elegant serif font for the quote and simple sans-serif for attribution. Soft gradient background in pastel pink to lavender. Square format optimized for Instagram feed.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Social media quote card – elegant quote graphic with attribution, pastel gradient, square format.",
        "desc_ar": "بطاقة اقتباس لوسائل التواصل – رسم اقتباس أنيق مع الإسناد، تدرج باستيل، تنسيق مربع."
    },
    {
        "command": "Create a premium product label for 'Organic Lavender Honey' 12oz jar. Include product name in elegant script, net weight, certified organic seal, and small honeybee illustration. Color palette of deep purple, gold, and cream. The design conveys artisanal quality and natural ingredients. Rectangular label format with decorative border.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Product label design – premium label for organic honey with script font and decorative border.",
        "desc_ar": "تصميم ملصق منتج – ملصق فاخر لعسل عضوي بخط مزخرف وحدود زخرفية."
    },
    {
        "command": "Design an elegant wedding invitation for 'Sarah & Michael' getting married on June 15, 2025 at The Garden Estate. Romantic script font for names, clean serif for details. Floral illustrations in soft watercolor style framing the text. Color palette of sage green, blush pink, and gold accents. Classic, timeless elegance.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Event invitation – elegant wedding invite with floral watercolor frame and classic typography.",
        "desc_ar": "دعوة مناسبة – دعوة زفاف أنيقة بإطار أزهار مائية وطباعة كلاسيكية."
    },
    {
        "command": "Create a professional infographic header that reads '5 Steps to Better Sleep' with a small moon and stars icon. Modern, clean design with blue gradient background. Bold, easily readable sans-serif typography. The style should match corporate health and wellness content. Horizontal banner format suitable for blog post headers.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Infographic header – clean, corporate header with icon and gradient background. Great for blog posts.",
        "desc_ar": "رأس إنفوجرافيك – رأس نظيف للشركات مع أيقونة وخلفية متدرجة. رائع لمنشورات المدونة."
    },
    {
        "command": "Design a subtle photographer's watermark that reads 'J.Smith Photography' in an elegant, thin script font. Semi-transparent white text that would overlay on photos without being distracting. Include a small camera aperture icon. The overall design should be professional and minimally intrusive.",
        "platform": "ai",
        "category": "Logo Design",
        "desc_en": "Watermark signature – semi‑transparent script watermark with camera icon. Professional and subtle.",
        "desc_ar": "توقيع علامة مائية – علامة مائية شفافة بخط مزخرف وأيقونة كاميرا. احترافي وغير مزعج."
    },

    // ========== PRODUCT & MARKETING PROMPTS (8) ==========
    {
        "command": "Photograph this product on a pure white seamless background with soft, even studio lighting from multiple angles. No shadows, no gradients, just clean white surrounding the product. Professional e-commerce quality with accurate colors and sharp detail. The product should appear to float on the white space. Suitable for Amazon or Shopify listings.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Clean white background – studio‑quality e‑commerce product photo on pure white. Perfect for online stores.",
        "desc_ar": "خلفية بيضاء نظيفة – صورة منتج للتجارة الإلكترونية بجودة استوديو على خلفية بيضاء نقية. مثالية للمتاجر الإلكترونية."
    },
    {
        "command": "Place this product in a realistic lifestyle setting where it would naturally be used. A modern, well-lit home environment with complementary decor. The product is the clear focal point, but the setting tells a story about the type of person who would own it. Shallow depth of field keeps the product sharp while the background provides context. Natural daylight from a window.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Lifestyle context shot – shows product in real‑use environment with natural lighting.",
        "desc_ar": "لقطة سياق حياتي – يظهر المنتج في بيئة استخدام حقيقية مع إضاءة طبيعية."
    },
    {
        "command": "Create an aesthetically pleasing flat lay arrangement featuring this product as the hero item. Include complementary props that enhance without distracting. Clean, neutral background surface (marble, wood, or linen). Overhead camera angle. Balanced composition with intentional negative space. Soft, even lighting with minimal shadows. Instagram-worthy styling.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Flat lay composition – overhead product arrangement with props and negative space. Instagram‑ready.",
        "desc_ar": "تكوين مسطح – ترتيب منتج من الأعلى مع دعائم ومساحة سلبية. جاهز لإنستغرام."
    },
    {
        "command": "Generate a dramatic hero image featuring this product with dynamic lighting and bold composition. Slightly low angle to make the product appear impressive and desirable. Rich colors and high contrast for maximum visual impact. Subtle motion blur or particle effects suggesting energy and innovation. Premium brand aesthetic suitable for above-the-fold website placement.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Hero image for landing page – dramatic, low‑angle product shot with dynamic lighting and motion effects.",
        "desc_ar": "صورة بطلة للصفحة الرئيسية – لقطة منتج دراماتيكية بزاوية منخفضة مع إضاءة ديناميكية وتأثيرات حركة."
    },
    {
        "command": "Create a scroll-stopping social media ad featuring this product. Bold, saturated colors that pop on mobile screens. Clean composition with clear product focus. Room for text overlay in the upper portion. Lifestyle elements that suggest the product's benefits without cluttering the image. Optimized for Instagram feed and Facebook ads.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Social media ad creative – vibrant, mobile‑optimized product ad with space for text overlay.",
        "desc_ar": "إعلان إبداعي لوسائل التواصل – إعلان منتج نابض بالحياة ومحسن للجوال مع مساحة للنص العلوي."
    },
    {
        "command": "Display this product packaging on a clean surface with professional product photography lighting. Show the package at a slight angle to reveal depth and dimension. Subtle reflections on the surface beneath. Sharp focus on all text and design elements. The setting is a premium retail or unboxing environment. Suitable for investor presentations or media kits.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Packaging mockup – angled product packaging shot with reflections and sharp focus. Great for presentations.",
        "desc_ar": "تصميم تجسيدي للتغليف – لقطة عبوة بزاوية مع انعكاسات وتركيز حاد. رائع للعروض التقديمية."
    },
    {
        "command": "Create a split-screen comparison image. The left side shows the 'before' state with problem elements clearly visible. The right side shows the 'after' state demonstrating the product's positive effects. Clean dividing line down the center. Consistent lighting and angle on both sides for fair comparison. Labels indicating 'Before' and 'After' in clean, readable text.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Before and after comparison – split‑screen image showing product transformation with labels.",
        "desc_ar": "مقارنة قبل وبعد – صورة شاشة منقسمة توضح تحول المنتج مع تسميات."
    },
    {
        "command": "Arrange multiple product variants in an organized grid layout. Each item photographed consistently from the same angle with identical lighting. Clean spacing between items. Neutral background that lets the product colors stand out. The arrangement should showcase the full range while maintaining visual harmony. Suitable for catalog pages or product line announcements.",
        "platform": "ai",
        "category": "Product Photography",
        "desc_en": "Collection grid layout – organized grid of product variants with consistent lighting and spacing.",
        "desc_ar": "تخطيط شبكة المجموعة – شبكة منظمة من المتغيرات المنتجة بإضاءة وتباعد متناسقين."
    },

    // ========== ADVANCED TECHNIQUES (5) – to reach 50 total ==========
    {
        "command": "A weathered fisherman in his sixties photographed from a low angle mending nets with calloused hands on a wooden dock at dawn. Moody documentary style with desaturated colors, natural available light creating rim highlights, shot on a 35mm lens with subtle film grain.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Fisherman documentary portrait – low‑angle, moody, desaturated, with film grain. Excellent example of the six‑element prompt structure.",
        "desc_ar": "بورتريه وثائقي لصياد – زاوية منخفضة، كئيب، ألوان غير مشبعة، مع حبيبات فيلم. مثال ممتاز لبنية الستة عناصر."
    },
    {
        "command": "Maintain the exact identity of the original subject: oval face with high cheekbones, wide-set hazel eyes, short wavy dark-brown bob, right eyebrow with small scar notch, light olive skin, subtle dimple on left cheek when smiling. Mid-thirties appearance. Do not alter facial proportions or bone structure. Use this identity anchor in subsequent prompts to preserve face consistency.",
        "platform": "ai",
        "category": "Advanced Techniques",
        "desc_en": "Identity anchor template – detailed description of facial features to ensure consistent character across images.",
        "desc_ar": "قالب مرساة الهوية – وصف تفصيلي لميزات الوجه لضمان اتساق الشخصية عبر الصور."
    },
    {
        "command": "Use Image A for the person's face and pose, Image B for the clothing style, and Image C for the background environment. Combine these elements into a single cohesive image with consistent lighting. Maintain the exact face from Image A, the outfit from Image B, and the setting from Image C. Adjust shadows and highlights so all elements look like they belong in the same photo.",
        "platform": "ai",
        "category": "Advanced Techniques",
        "desc_en": "Multi‑image fusion – blends up to 14 reference images into one coherent output. Requires Nano Banana Pro.",
        "desc_ar": "دمج متعدد الصور – يمزج ما يصل إلى 14 صورة مرجعية في مخرجات متماسكة واحدة. يتطلب Nano Banana Pro."
    },
    {
        "command": "Generate a diagram of the 2024 Mars Rover with accurate component labels based on current mission data. Include labeled parts: solar panels, robotic arm, cameras, wheels, and scientific instruments. Use factual information from NASA's Mars 2020 mission. The style should be clean technical illustration with clear typography for labels.",
        "platform": "ai",
        "category": "Advanced Techniques",
        "desc_en": "Search grounding – pulls real‑time factual data from Google Search for accurate diagrams and infographics. Requires Nano Banana Pro.",
        "desc_ar": "تثبيت البحث – يسحب بيانات واقعية في الوقت الفعلي من بحث Google للحصول على رسومات بيانية دقيقة. يتطلب Nano Banana Pro."
    },
    {
        "command": "Start with a basic product photo on white background. Then refine through natural dialogue: 'Make the background a modern kitchen', 'Add warm morning sunlight from the left', 'Include a fresh cup of coffee next to the product', 'Increase contrast slightly', 'Make the shadows softer'. Each iteration builds on the previous, allowing precise control without regenerating from scratch.",
        "platform": "ai",
        "category": "Advanced Techniques",
        "desc_en": "Iterative refinement chain – progressively perfect an image through conversational edits. Works best with Nano Banana's fast generation.",
        "desc_ar": "سلسلة تحسين تكرارية – تحسين الصورة بشكل تدريجي من خلال تعديلات محادثة. يعمل بشكل أفضل مع التوليد السريع لـ Nano Banana."
    },

    // ─── 7 NEW AI PROMPTS (Corporate headshots, cinematic street, etc.) ─────
    {
        "command": "Generate a 1:1 ultra-realistic 4K corporate headshot with studio lighting and keep the person's face the exact same.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Ultra‑realistic 1:1 corporate headshot with studio lighting, preserving face identity exactly.",
        "desc_ar": "صورة شخصية مؤسسية فائقة الواقعية بنسبة 1:1 وإضاءة استوديو، مع الحفاظ على هوية الوجه تمامًا."
    },
    {
        "command": "I need a professional, high-resolution, profile photo, maintaining the exact facial structure, identity, and key features of the person in the input image. The subject is framed from the chest up, with ample headroom and negative space above their head, ensuring the top of their head is not cropped. The person looks directly at the camera with a confident, authoritative expression, and the subject’s body is positioned at a slight 3/4 angle to the camera. They are styled for a professional photo studio shoot, wearing a premium navy business suit with a crisp white dress shirt and understated tie. The background is a solid ‘#141414’ neutral studio. Shot from a high angle with bright and airy soft, diffused studio lighting, gently illuminating the face and creating a subtle catchlight in the eyes, conveying a sense of authority and leadership. Captured on an 85mm f/1.8 lens with a shallow depth of field, exquisite focus on the eyes, and beautiful, soft bokeh. Observe crisp detail on the fabric texture of the suit, individual strands of hair, and natural, realistic skin texture. The atmosphere exudes confidence, professionalism, and executive presence. Clean and bright cinematic color grading with subtle warmth and balanced tones, ensuring a polished and contemporary feel.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Executive portrait: navy suit, confident expression, 3/4 angle, shallow depth of field, cinematic grading.",
        "desc_ar": "صورة تنفيذية: بدلة زرقاء داكنة، تعبير واثق، زاوية ¾، عمق ميدان ضحل، تدرج سينمائي."
    },
    {
        "command": "I need a professional, high-resolution, profile photo, maintaining the exact facial structure, identity, and key features of the person in the input image. The subject is framed from the chest up, with ample headroom and negative space above their head, ensuring the top of their head is not cropped. The person looks directly at the camera with a relaxed, approachable expression, and the subject’s body is casually positioned with a slight lean. They are styled for a professional photo studio shoot, wearing a modern henley shirt in heather gray with rolled sleeves. The background is a solid ‘#141414’ neutral studio. Shot from a high angle with bright and airy soft, diffused studio lighting, gently illuminating the face and creating a subtle catchlight in the eyes, conveying a sense of innovation and accessibility. Captured on an 85mm f/1.8 lens with a shallow depth of field, exquisite focus on the eyes, and beautiful, soft bokeh. Observe crisp detail on the fabric texture of the henley, individual strands of hair, and natural, realistic skin texture. The atmosphere exudes confidence, innovation, and modern professionalism. Clean and bright cinematic color grading with subtle warmth and balanced tones, ensuring a polished and contemporary feel.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Modern professional headshot: heather gray henley, relaxed expression, high‑angle diffused light, 85mm lens.",
        "desc_ar": "صورة شخصية مهنية عصرية: قميص هنلي رمادي، تعبير هادئ، إضاءة منتشرة بزاوية عالية، عدسة 85مم."
    },
    {
        "command": "Cinematic overhead shot of me standing still on a brick city sidewalk, wearing a dark oversized blazer, motion-blurred crowd rushes past around me with a moody lighting 35mm film look. Shallow depth of field, sharp focus on me. Ration portrait 4:3",
        "platform": "ai",
        "category": "Street & Urban",
        "desc_en": "Overhead cinematic street shot: sharp subject, blurred crowd, moody 35mm film aesthetic, 4:3 portrait.",
        "desc_ar": "لقطة علوية سينمائية في الشارع: موضوع حاد، حشد ضبابي، جمالية فيلم 35mm كئيبة، صورة شخصية 4:3."
    },
    {
        "command": "Generate a top-angle and close-up black and white portrait of my face, focused on the head facing forward. Use a 35mm lens look, 10.7K 4HD quality. Proud expression, water droplets on my face. Deep black shadow background – only the face is visible and appears ultra-sharp. 4:3 ratio, with a 1/5 processing depth effect.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Top‑angle B&W close‑up portrait, water droplets, proud expression, ultra‑sharp face on black background, 4:3.",
        "desc_ar": "صورة شخصية مقربة بالأبيض والأسود من زاوية علوية، قطرات ماء، تعبير فخور، وجه حاد للغاية على خلفية سوداء، نسبة 4:3."
    },
    {
        "command": "Profile shot of me walking through a rushing metro station crowd. Everyone else is motion-blurred with trailing effects, while I remain in sharp focus with a serious expression, wearing a long trench coat. Cool blue tones dominate the scene, evoking a 35mm film aesthetic. Ambient lighting comes from train signs and station fixtures. Ratio: Portrait 4:3",
        "platform": "ai",
        "category": "Street & Urban",
        "desc_en": "Metro station crowd shot: sharp subject in trench coat, motion‑blurred crowd, cool blue tones, 35mm film look, 4:3.",
        "desc_ar": "لقطة في محطة مترو وسط حشد: موضوع حاد مرتدي معطف طويل، حشد ضبابي، ألوان زرقاء باردة، مظهر فيلم 35mm، نسبة 4:3."
    },
    {
        "command": "Create a high-end black and white portrait using my selfie. The face must remain exactly as in on my original selfie — no editing, no retouching, no smoothing. I’m wearing the business suits. Preserve every facial detail and texture for a raw, authentic look. The lighting should be dramatic and studio-quality, using strong contrast and shadows to sculpt the features. Use a clean, blurred studio-style background with soft gradients or subtle texture to enhance focus on the subject. Frame the portrait vertically (9:16 format), centered composition, with ultra-realistic skin texture and depth. No digital makeup or alterations. The final result should look timeless, editorial, and emotionally powerful — suitable for a gallery or fashion magazine.",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "High‑end B&W editorial portrait, no retouching, dramatic contrast, raw skin texture, 9:16 vertical, gallery quality.",
        "desc_ar": "صورة شخصية تحريرية راقية بالأبيض والأسود، بدون تنقيح، تباين دراماتيكي، نسيج جلد خام، عمودي 9:16، جودة معرض فني."
    },

    // ─── TRENDING BOYS & TEEN PROMPTS (1–17) ─────────────────────────────────
    {
        "command": "Teen boy taking a selfie outdoors in winter, white knit beanie, brown knit scarf, cream puffer jacket, curly hair, frozen lake and snow-covered trees in background, overcast natural light, joyful smile, realistic skin texture, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Winter selfie with frozen lake backdrop – cozy knitwear, snow, natural light, joyful expression.",
        "desc_ar": "سيلفي شتوي مع بحيرة متجمدة في الخلفية – ملابس محبوكة دافئة، ثلج، إضاءة طبيعية، تعبير مرح."
    },
    {
        "command": "Teen boy full-body studio portrait, retro 90s color-block windbreaker in teal and purple, baggy ripped jeans, white sneakers, navy trucker cap, silver chain necklace, arms crossed confident pose, warm beige studio background, dramatic side shadow, realistic skin and fabric texture, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Retro 90s studio portrait – bold windbreaker, ripped jeans, trucker cap, confident crossed arms, dramatic side shadow.",
        "desc_ar": "صورة استوديو رجعية بأسلوب التسعينيات – سترة جريئة بألوان زاهية، جينز ممزق، قبعة كاب، ذراعان متقاطعتان بوثوق، ظل جانبي دراماتيكي."
    },
    {
        "command": "Teen boy wearing hoodie, standing on urban street, casual pose, natural daylight, realistic skin texture, soft shadows, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Street & Urban",
        "desc_en": "Casual street style – teen in hoodie, urban background, natural daylight, relaxed pose.",
        "desc_ar": "ستريت ستايل كاجوال – مراهق يرتدي هودي، خلفية حضرية، ضوء طبيعي، وضعية مريحة."
    },
    {
        "command": "Teen boy casual portrait, natural sunlight, relaxed expression, soft shadows, realistic skin and hair texture, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Casual natural-light portrait – relaxed expression, soft shadows, realistic textures.",
        "desc_ar": "بورتريه كاجوال بإضاءة طبيعية – تعبير هادئ، ظلال ناعمة، أنسجة واقعية."
    },
    {
        "command": "Teen boy sitting on stairs, relaxed pose, soft morning light, realistic skin tones, subtle background blur, casual outfit, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Relaxed pose on stairs – dynamic depth, soft morning light, natural look.",
        "desc_ar": "وضعية مريحة على الدرج – عمق ديناميكي، ضوء الصباح الناعم، مظهر طبيعي."
    },
    {
        "command": "Teen boy with headphones, moody indoor lighting, cinematic mood, soft shadows, realistic skin texture, casual outfit, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Moody cinematic portrait – headphones, soft shadows, indoor lighting, cinematic mood.",
        "desc_ar": "بورتريه سينمائي كئيب – سماعات رأس، ظلال ناعمة، إضاءة داخلية، جمالية سينمائية."
    },
    {
        "command": "Teen boy portrait at golden hour, warm sunlight, realistic skin tone, soft glow, outdoor setting, subtle background blur, natural pose, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Golden hour teen portrait – warm sunlight, soft glow, natural outdoor setting.",
        "desc_ar": "بورتريه مراهق في الساعة الذهبية – ضوء دافئ، توهج ناعم، بيئة خارجية طبيعية."
    },
    {
        "command": "Teen boy street portrait, low-angle view, confident stance, urban background, natural light, realistic skin, soft shadows, using reference photo",
        "platform": "ai",
        "category": "Street & Urban",
        "desc_en": "Low‑angle confident street portrait – dramatic perspective, urban setting, natural light.",
        "desc_ar": "بورتريه شارع من زاوية منخفضة وواثق – منظور دراماتيكي، بيئة حضرية، ضوء طبيعي."
    },
    {
        "command": "Teen boy walking on city street, candid pose, casual outfit, natural lighting, shallow depth of field, realistic textures, using reference photo",
        "platform": "ai",
        "category": "Street & Urban",
        "desc_en": "Candid walking shot – natural motion, city street, casual style, shallow depth.",
        "desc_ar": "لقطة عفوية أثناء المشي – حركة طبيعية، شارع المدينة، نمط كاجوال، عمق ميدان ضحل."
    },
    {
        "command": "Teen boy portrait, minimalist style, clean background, natural expression, soft lighting, realistic skin and hair, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Minimalist clean portrait – simple background, soft light, natural expression.",
        "desc_ar": "بورتريه بسيط ونظيف – خلفية بسيطة، ضوء ناعم، تعبير طبيعي."
    },
    {
        "command": "Teen boy with backpack, standing outdoors, casual daily life pose, natural sunlight, realistic skin, soft background blur, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Everyday teen with backpack – natural sunlight, daily life pose, soft blur.",
        "desc_ar": "مراهق يومي مع حقيبة ظهر – ضوء الشمس الطبيعي، وضعية الحياة اليومية، ضبابية ناعمة."
    },
    {
        "command": "Teen boy in gym attire, athletic build, confident pose, natural light, realistic skin and hair texture, subtle background blur, using reference photo",
        "platform": "ai",
        "category": "Sports & Fitness",
        "desc_en": "Athletic teen portrait – gym attire, confident pose, natural light, realistic muscle tone.",
        "desc_ar": "بورتريه رياضي لمراهق – ملابس رياضية، وضعية واثقة، ضوء طبيعي، نسيج عضلي واقعي."
    },
    {
        "command": "Teen boy portrait, smooth skin, enhanced lighting, natural expression, soft shadows, realistic textures, using reference photo",
        "platform": "ai",
        "category": "Social Media",
        "desc_en": "Glow-up portrait – enhanced skin, vibrant lighting, social media ready.",
        "desc_ar": "بورتريه متألق – بشرة محسنة، إضاءة نابضة، جاهز لوسائل التواصل الاجتماعي."
    },
    {
        "command": "Teen boy portrait, enhanced lighting, blurred background, natural pose, realistic skin and hair texture, soft shadows, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Professional portrait with blurred background – focused on subject, enhanced lighting.",
        "desc_ar": "بورتريه احترافي بخلفية ضبابية – تركيز على الشخص، إضاءة محسنة."
    },
    {
        "command": "Indian teen boy wearing a pastel kurta, walking through a narrow Old Delhi alley, warm afternoon light, rickshaws and spice stalls softly blurred in background, candid lifestyle feel, realistic skin texture, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Cultural",
        "desc_en": "Indian teen in kurta, Old Delhi lane – cultural authenticity, warm light, candid lifestyle.",
        "desc_ar": "مراهق هندي يرتدي كورتا، في زقاق دلهي القديمة – أصالة ثقافية، ضوء دافئ، أسلوب حياة عفوي."
    },
    {
        "command": "Teen boy on a rooftop terrace at golden hour, Indian cityscape with water tanks and temple spires blurred behind him, warm atmospheric haze, casual streetwear outfit, confident lean against the ledge, realistic skin tone, cinematic color grade, using reference photo",
        "platform": "ai",
        "category": "Cultural",
        "desc_en": "Rooftop portrait, Indian city skyline – golden hour, atmospheric haze, confident lean, cinematic grade.",
        "desc_ar": "بورتريه على السطح، أفق مدينة هندي – الساعة الذهبية، ضباب جوي، اتكاء واثق، تدرج سينمائي."
    },
    {
        "command": "Teen boy in cricket whites holding a bat over his shoulder, stadium floodlights glowing at dusk, dramatic low-angle view, athletic confident pose, shallow depth of field, cinematic mood, realistic skin and fabric texture, using reference photo",
        "platform": "ai",
        "category": "Sports & Fitness",
        "desc_en": "Cricket attitude shot – whites, bat over shoulder, stadium floodlights, low‑angle, cinematic.",
        "desc_ar": "لقطة كريكيت جريئة – زي الكريكيت الأبيض، مضرب على الكتف، أضواء الاستاد، زاوية منخفضة، سينمائية."
    },

    // ─── MEN'S PORTRAIT PROMPTS (18–32) ──────────────────────────────────────
    {
        "command": "Professional male headshot, neutral background, sharp focus on face, realistic skin texture, soft shadows, natural expression, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Professional headshot – neutral background, sharp focus, soft shadows, natural expression.",
        "desc_ar": "صورة شخصية احترافية – خلفية محايدة، تركيز حاد، ظلال ناعمة، تعبير طبيعي."
    },
    {
        "command": "Man wearing suit, confident pose, neutral studio lighting, realistic skin and hair texture, soft shadows, professional expression, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Man in suit – confident pose, studio lighting, professional look.",
        "desc_ar": "رجل يرتدي بدلة – وضعية واثقة، إضاءة استوديو، مظهر مهني."
    },
    {
        "command": "Man casual portrait, sitting by window, soft natural light, realistic skin texture, relaxed expression, subtle background blur, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Window light casual portrait – soft natural light, relaxed expression, warm feel.",
        "desc_ar": "بورتريه كاجوال بإضاءة النافذة – ضوء طبيعي ناعم، تعبير هادئ، إحساس دافئ."
    },
    {
        "command": "Man with medium beard, cinematic lighting, soft shadows, realistic skin texture, dramatic mood, studio background, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Bearded cinematic portrait – medium beard, dramatic mood, studio lighting.",
        "desc_ar": "بورتريه سينمائي بلحية – لحية متوسطة، مزاج دراماتيكي، إضاءة استوديو."
    },
    {
        "command": "Man business-casual attire, clean look, natural lighting, realistic skin and hair texture, relaxed expression, subtle background blur, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Business‑casual clean look – professional yet approachable, natural light.",
        "desc_ar": "مظهر كاجوال أنيق للأعمال – احترافي لكن ودود، ضوء طبيعي."
    },
    {
        "command": "Man outdoor portrait, casual outfit, natural daylight, realistic skin texture, soft background blur, relaxed posture, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Outdoor lifestyle portrait – natural daylight, casual outfit, relaxed posture.",
        "desc_ar": "بورتريه حياة خارجي – ضوء النهار الطبيعي، ملابس كاجوال، وضعية مريحة."
    },
    {
        "command": "Close-up male portrait, realistic skin texture, soft lighting, neutral background, focused expression, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Close‑up realistic skin – soft lighting, neutral background, focused expression.",
        "desc_ar": "بورتريه مقرب للبشرة الواقعية – إضاءة ناعمة، خلفية محايدة، تعبير مركز."
    },
    {
        "command": "Man editorial portrait, dramatic framing, studio lighting, realistic skin and hair, confident expression, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Editorial dramatic framing – magazine‑style, confident expression, studio lighting.",
        "desc_ar": "تأطير دراماتيكي تحريري – على غرار المجلات، تعبير واثق، إضاءة استوديو."
    },
    {
        "command": "Man with fade haircut, realistic hair texture, neutral lighting, natural expression, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Fade haircut style – modern hairstyle, neutral lighting, realistic texture.",
        "desc_ar": "قصة شعر fading حديثة – تسريحة عصرية، إضاءة محايدة، نسيج واقعي."
    },
    {
        "command": "Man with full beard, realistic hair texture, natural lighting, neutral background, soft shadows, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Full beard addition – mature look, natural lighting, soft shadows.",
        "desc_ar": "إضافة لحية كاملة – مظهر ناضج، إضاءة طبيعية، ظلال ناعمة."
    },
    {
        "command": "Man fitness portrait, athletic build, gym lighting, realistic skin and muscle texture, confident pose, using reference photo",
        "platform": "ai",
        "category": "Sports & Fitness",
        "desc_en": "Fitness portrait – athletic build, gym lighting, confident pose.",
        "desc_ar": "بورتريه لياقة بدنية – بناء رياضي، إضاءة صالة ألعاب، وضعية واثقة."
    },
    {
        "command": "Man portrait, moody lighting, soft shadows, realistic skin texture, relaxed expression, studio background, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Moody soft‑shadow portrait – cinematic atmosphere, relaxed expression.",
        "desc_ar": "بورتريه بظلال ناعمة وكئيبة – أجواء سينمائية، تعبير هادئ."
    },
    {
        "command": "Indian man wearing an ivory embroidered sherwani, standing in a palace courtyard with arched marble columns, warm ambient lighting, confident regal posture, shallow depth of field, realistic fabric texture, using reference photo",
        "platform": "ai",
        "category": "Cultural",
        "desc_en": "Royal sherwani portrait – ivory embroidery, palace courtyard, regal posture, warm light.",
        "desc_ar": "بورتريه ملكي بشيرواني – تطريز عاجي، فناء قصر، وضعية ملكية، ضوء دافئ."
    },
    {
        "command": "Indian man in a sharp navy blazer and open-collar shirt, standing by a floor-to-ceiling office window, Bandra-Worli Sea Link visible behind him at dusk, cinematic city glow, professional yet modern mood, realistic skin texture, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Cultural",
        "desc_en": "Mumbai businessman portrait – navy blazer, Sea Link backdrop, dusk city glow, modern professional.",
        "desc_ar": "بورتريه رجل أعمال من مومباي – سترة زرقاء داكنة، خلفية جسر Bandra-Worli، توهج المدينة عند الغسق، مهني عصري."
    },
    {
        "command": "Bearded Indian man sitting at a roadside chai stall at night, warm yellow tungsten lighting, steam rising from a glass of tea, rustic wooden background, candid documentary feel, realistic skin texture, soft shadows, using reference photo",
        "platform": "ai",
        "category": "Cultural",
        "desc_en": "Chai stall night portrait – tungsten light, rising steam, documentary feel, rustic setting.",
        "desc_ar": "بورتريه ليلي عند كشك شاي – ضوء تنغستن دافئ، بخار متصاعد، إحساس وثائقي، بيئة ريفية."
    },

    // ─── VIRAL & SOCIAL MEDIA AESTHETIC PROMPTS (33–42) ──────────────────────
    {
        "command": "Portrait with soft pastel colors, gentle lighting, smooth skin texture, dreamy aesthetic, realistic hair, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Social Media",
        "desc_en": "Soft pastel aesthetic – dreamy, gentle lighting, smooth skin, popular on Instagram/TikTok.",
        "desc_ar": "جمالية الباستيل الناعمة – حالمة، إضاءة لطيفة، بشرة ناعمة، شائعة على إنستغرام وتيك توك."
    },
    {
        "command": "Portrait with moody rim light, dark background, dramatic shadows, realistic skin and hair, cinematic mood, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Moody rim‑lit portrait – dark background, dramatic shadows, cinematic rim light.",
        "desc_ar": "بورتريه بإضاءة حافة كئيبة – خلفية داكنة، ظلال دراماتيكية، إضاءة حافة سينمائية."
    },
    {
        "command": "Portrait in muted film tones, soft lighting, realistic skin texture, natural pose, subtle background blur, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Film‑style muted tones – cinematic color grading, soft contrast, realistic skin.",
        "desc_ar": "أفلام بتدرجات باهتة – تدرج لوني سينمائي، تباين ناعم، بشرة واقعية."
    },
    {
        "command": "Portrait with neon lights, cyberpunk style, vibrant colors, dramatic shadows, realistic skin and hair, urban background, using reference photo",
        "platform": "ai",
        "category": "Social Media",
        "desc_en": "Neon cyber aesthetic – cyberpunk, neon lights, vibrant, futuristic, dramatic shadows.",
        "desc_ar": "جمالية النيون السايبربنك – سايبربانك، أضواء نيون، نابضة بالحياة، مستقبلية، ظلال دراماتيكية."
    },
    {
        "command": "High-contrast black-and-white portrait, realistic skin texture, sharp details, soft background blur, natural expression, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "High‑contrast B&W – striking monochrome, sharp details, natural expression.",
        "desc_ar": "أبيض وأسود عالي التباين – مونوكروم لافت، تفاصيل حادة، تعبير طبيعي."
    },
    {
        "command": "Backlit silhouette portrait, soft glow around subject, realistic hair and skin highlights, dramatic mood, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Backlit silhouette – soft glow, dramatic mood, artistic backlighting.",
        "desc_ar": "صورة ظلية مضاءة من الخلف – توهج ناعم، مزاج دراماتيكي، إضاءة خلفية فنية."
    },
    {
        "command": "Portrait in minimalist beige tones, soft lighting, realistic skin texture, calm expression, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Social Media",
        "desc_en": "Minimalist beige‑tone – clean, modern, calm expression, soft lighting.",
        "desc_ar": "ألوان بيج بسيطة – نظيفة، عصرية، تعبير هادئ، إضاءة ناعمة."
    },
    {
        "command": "Portrait with cinematic color grading, soft light, realistic skin, subtle shadows, dramatic composition, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Cinematic color graded – professional movie‑like color, soft light, dramatic composition.",
        "desc_ar": "تدرج لوني سينمائي – ألوان شبيهة بالأفلام الاحترافية، ضوء ناعم، تكوين دراماتيكي."
    },
    {
        "command": "DSLR-style portrait, sharp focus, realistic skin and hair texture, natural expression, soft background blur, using reference photo",
        "platform": "ai",
        "category": "Portraits",
        "desc_en": "Sharp DSLR‑style – crisp details, professional camera look, shallow depth.",
        "desc_ar": "أسلوب DSLR حاد – تفاصيل واضحة، مظهر كاميرا احترافي، عمق ميدان ضحل."
    },
    {
        "command": "Instagram-style portrait, clean framing, soft natural light, realistic skin and hair, subtle background blur, natural pose, using reference photo",
        "platform": "ai",
        "category": "Social Media",
        "desc_en": "Instagram‑optimized – clean framing, soft light, feed‑ready composition.",
        "desc_ar": "محسّن لإنستغرام – تأطير نظيف، ضوء ناعم، تكوين جاهز للمنشور."
    },

    // ─── INDIAN SEASONAL & EVENT PROMPTS (43–46) ──────────────────────────────
    {
        "command": "Indian boy standing in a dimly lit courtyard during Diwali, warm orange and gold bokeh from diyas and string lights surrounding him, traditional kurta, soft glow on face, festive yet editorial mood, realistic skin tone, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Diwali bokeh portrait – diyas, string lights, warm bokeh, traditional kurta, festive editorial.",
        "desc_ar": "بورتريه ديوالي بوكيه – دياس، أضواء متسلسلة، بوكيه دافئ، كورتا تقليدي، تحريري احتفالي."
    },
    {
        "command": "Young Indian man in an IPL team jersey, stadium floodlights blazing behind him, crowd softly blurred, dramatic rim lighting, high-energy attitude pose, vibrant saturated colors, Instagram reel cover aesthetic, realistic skin texture, using reference photo",
        "platform": "ai",
        "category": "Sports & Fitness",
        "desc_en": "IPL match night vibe – team jersey, floodlights, crowd, rim lighting, high energy, reel cover.",
        "desc_ar": "أجواء ليلة مباراة IPL – قميص الفريق، أضواء كاشفة، حشد، إضاءة حافة، طاقة عالية، غلاف ريل."
    },
    {
        "command": "Stylish Indian man in a linen open shirt and white trousers on a Goa beach at sunset, golden ocean reflection, relaxed confidence, shallow depth of field, warm color grade, travel influencer aesthetic, realistic skin and hair texture, using reference photo",
        "platform": "ai",
        "category": "Cultural",
        "desc_en": "Luxury Goa beach portrait – linen shirt, sunset, ocean reflection, travel influencer style.",
        "desc_ar": "بورتريه فاخر على شاطئ غوا – قميص كتان، غروب الشمس، انعكاس المحيط، أسلوب مؤثر سفر."
    },
    {
        "command": "Indian teen boy standing on a rain-soaked street during monsoon, warm tungsten streetlights reflecting in puddles, muted teal and orange color grade, wet hair and clothes, cinematic mood, shallow depth of field, film-style aesthetic, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Monsoon street aesthetic – rain‑soaked, tungsten reflections, teal/orange grade, wet look, cinematic.",
        "desc_ar": "جمالية شارع المونسون – مبلل بالمطر، انعكاسات تنغستن، تدرج أخضر/برتقالي، مظهر مبتل، سينمائي."
    },

    // ─── MANGA, ANIME & CARICATURE PROMPTS (47–53) ───────────────────────────
    {
        "command": "Anime boy portrait, clean line art, expressive eyes, detailed hair, soft color palette, minimal background, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Clean anime line art – crisp lines, expressive eyes, detailed hair, soft colors.",
        "desc_ar": "خطوط أنمي نظيفة – خطوط واضحة، عيون معبرة، شعر مفصل، ألوان ناعمة."
    },
    {
        "command": "Manga-style teen boy, large expressive eyes, detailed hair, soft shading, light background, stylized pose, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Manga expressive eyes – large eyes, soft shading, stylized pose, light background.",
        "desc_ar": "مانغا بعيون معبرة – عيون كبيرة، تظليل ناعم، وضعية منمقة، خلفية فاتحة."
    },
    {
        "command": "Semi-realistic anime boy, realistic skin and hair, soft lighting, expressive features, subtle background, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Semi‑realistic anime – blends realistic textures with anime features, soft lighting.",
        "desc_ar": "أنمي شبه واقعي – يمزج الأنسجة الواقعية مع ميزات الأنمي، إضاءة ناعمة."
    },
    {
        "command": "Cartoon boy portrait, exaggerated facial features, bright colors, dynamic expression, simplified background, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Exaggerated cartoon – playful, bright colors, dynamic expression, simplified background.",
        "desc_ar": "كرتون مبالغ فيه – مرح، ألوان زاهية، تعبير ديناميكي، خلفية مبسطة."
    },
    {
        "command": "Chibi boy character, large head, small body, cute proportions, bright colors, playful pose, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Chibi cute proportions – large head, small body, bright colors, playful.",
        "desc_ar": "نسب تشيبي لطيفة – رأس كبير، جسم صغير، ألوان زاهية، لعوب."
    },
    {
        "command": "Caricature boy portrait, exaggerated facial features, playful expression, bold lines, bright colors, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Caricature style – exaggerated features, playful expression, bold lines, bright.",
        "desc_ar": "أسلوب كارتون مبالغ – ميزات مبالغة، تعبير لعوب، خطوط جريئة، ساطع."
    },
    {
        "command": "Illustrated anime-inspired boy, detailed hair and eyes, soft shading, expressive pose, vibrant colors, subtle background, using reference photo",
        "platform": "ai",
        "category": "Manga",
        "desc_en": "Anime‑inspired illustration – detailed, vibrant, soft shading, expressive pose.",
        "desc_ar": "رسم توضيحي مستوحى من الأنمي – مفصل، نابض بالحياة، تظليل ناعم، وضعية معبرة."
    },

    // ─── CINEMATIC & STORYTELLING PROMPTS (54–61) ────────────────────────────
    {
        "command": "Portrait with dramatic shadows, emotional expression, soft cinematic lighting, realistic skin and hair texture, subtle background, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Dramatic shadow emotional portrait – high‑contrast shadows, emotional expression, cinematic light.",
        "desc_ar": "بورتريه عاطفي بظلال دراماتيكية – ظلال عالية التباين، تعبير عاطفي، ضوء سينمائي."
    },
    {
        "command": "Man portrait in rain, city lights reflection, cinematic lighting, realistic skin and hair, moody background, soft wet surface effects, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Rainy city lights portrait – rain, reflections, cinematic, moody, wet surface.",
        "desc_ar": "بورتريه في المطر مع أضواء المدينة – مطر، انعكاسات، سينمائي، كئيب، سطح مبلل."
    },
    {
        "command": "Intense movie-style close-up portrait, detailed facial features, dramatic lighting, realistic skin texture, subtle depth of field, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Intense movie close‑up – dramatic lighting, detailed features, shallow depth, emotional.",
        "desc_ar": "لقطة مقربة سينمائية مكثفة – إضاءة دراماتيكية، ميزات مفصلة، عمق ميدان ضحل، عاطفي."
    },
    {
        "command": "Teen boy walking under streetlights, urban night scene, realistic skin and hair, soft shadows, cinematic mood, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Streetlight night walk – urban night, soft shadows, cinematic mood, natural pose.",
        "desc_ar": "المشي ليلاً تحت أضواء الشوارع – ليل حضري، ظلال ناعمة، مزاج سينمائي، وضعية طبيعية."
    },
    {
        "command": "Epic hero portrait of man, strong dramatic lighting, confident pose, realistic skin and hair, cinematic background, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Epic hero portrait – strong dramatic light, confident pose, cinematic background.",
        "desc_ar": "بورتريه بطل ملحمي – ضوء دراماتيكي قوي، وضعية واثقة، خلفية سينمائية."
    },
    {
        "command": "Portrait with storytelling background, realistic male or teen, natural pose, cinematic lighting, soft depth of field, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Storytelling background portrait – narrative context, natural pose, cinematic light.",
        "desc_ar": "بورتريه بخلفية قصصية – سياق سردي، وضعية طبيعية، ضوء سينمائي."
    },
    {
        "command": "Indian man in a dark half-open shirt, standing in the rain on a Mumbai street at night, neon hoardings reflecting in puddles, cinematic Bollywood color grading with teal and orange tones, intense emotional expression, dramatic shadows, slow-motion freeze feel, realistic skin texture, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Bollywood dramatic portrait – rain, neon reflections, teal/orange grade, intense expression, slow‑motion freeze.",
        "desc_ar": "بورتريه بوليوودي دراماتيكي – مطر، انعكاسات نيون، تدرج أخضر/برتقالي، تعبير مكثف، تجميد الحركة البطيء."
    },
    {
        "command": "Young Indian man in a dramatic white kurta and turban, standing on golden Thar desert dunes at magic hour, strong backlight creating a halo effect, wind-blown fabric, epic wide-angle hero composition, cinematic warm tones, realistic skin and fabric texture, using reference photo",
        "platform": "ai",
        "category": "Cinematic",
        "desc_en": "Desert warrior portrait – Rajasthan dunes, magic hour, backlight halo, white kurta, epic composition.",
        "desc_ar": "بورتريه محارب الصحراء – كثبان راجستان، الساعة السحرية، هالة الإضاءة الخلفية، كورتا أبيض، تكوين ملحمي."
    },

    // ─── SEASONAL & EVENT-BASED PROMPTS (62–72) ──────────────────────────────
    {
        "command": "Teen or man portrait, soft pink tones, romantic lighting, realistic skin and hair, gentle expression, Valentine's Day theme, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Valentine’s Day soft pink – romantic, gentle expression, pastel pink, seasonal.",
        "desc_ar": "يوم الحب بألوان وردية ناعمة – رومانسي، تعبير لطيف، باستيل وردي، موسمي."
    },
    {
        "command": "Portrait celebrating New Year, festive lighting, sparkling background, realistic skin and hair, joyful expression, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "New Year celebration – festive lights, sparkling background, joyful expression.",
        "desc_ar": "الاحتفال بالعام الجديد – أضواء احتفالية، خلفية متلألئة، تعبير بهيج."
    },
    {
        "command": "Portrait in cozy winter/Christmas setting, warm lighting, realistic skin and hair, soft textures, festive background, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Cozy Christmas/winter – warm lighting, soft textures, festive, comfortable feel.",
        "desc_ar": "كريسماس/شتاء مريح – إضاءة دافئة، أنسجة ناعمة، احتفالي، إحساس مريح."
    },
    {
        "command": "Summer vacation portrait, bright sunlight, realistic skin and hair, casual outfit, outdoor background, cheerful expression, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Summer vacation bright – bright sunlight, cheerful expression, casual outdoor.",
        "desc_ar": "عطلة صيفية مشرقة – ضوء شمس ساطع، تعبير مبتهج، كاجوال في الهواء الطلق."
    },
    {
        "command": "Teen portrait, back-to-school theme, backpack, casual outfit, natural lighting, realistic skin and hair, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Back‑to‑school teen – backpack, casual outfit, natural light, seasonal theme.",
        "desc_ar": "مراهق العودة إلى المدرسة – حقيبة ظهر، ملابس كاجوال، ضوء طبيعي، موضوع موسمي."
    },
    {
        "command": "Halloween portrait, moody lighting, spooky or playful expression, realistic skin and hair, costume or props, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Halloween moody – spooky/playful, moody lighting, costume, seasonal fun.",
        "desc_ar": "هالوين كئيب – مخيف/مرح، إضاءة كئيبة، أزياء، متعة موسمية."
    },
    {
        "command": "Birthday portrait, joyful expression, festive background, realistic skin and hair, colorful decorations, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Birthday joyful – festive background, colorful decorations, happy expression.",
        "desc_ar": "عيد ميلاد بهيج – خلفية احتفالية، زينة ملونة، تعبير سعيد."
    },
    {
        "command": "Indian man in a rich maroon or navy kurta, standing in a beautifully decorated home entrance lit by diyas and warm fairy lights, festive Diwali atmosphere, soft warm glow on face, subtle rangoli visible in foreground, elegant and joyful expression, realistic skin texture, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Diwali festive glow – maroon/navy kurta, diyas, fairy lights, rangoli, elegant joyful expression.",
        "desc_ar": "توهج ديوالي الاحتفالي – كورتا كستنائي/أزرق داكن، دياس، أضواء خرافية، رانجولي، تعبير أنيق بهيج."
    },
    {
        "command": "Indian teen boy mid-throw during Holi, vibrant clouds of pink, yellow, and green color powder exploding around him, bright natural daylight, joyful laughing expression, casual white kurta stained with color, candid energy, realistic skin and fabric texture, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Holi color burst – pink/yellow/green powder, joyful laugh, white kurta stained, candid energy.",
        "desc_ar": "انفجار ألوان هولي – مسحوق وردي/أصفر/أخضر، ضحكة مرح، كورتا أبيض ملون، طاقة عفوية."
    },
    {
        "command": "Young Indian man in a crisp white kurta-pyjama on Eid morning, soft warm sunlight, sincere and joyful smile, subtle mosque architecture or decorative archway softly blurred in background, clean and elegant festive mood, realistic skin texture, shallow depth of field, using reference photo",
        "platform": "ai",
        "category": "Seasonal",
        "desc_en": "Eid morning portrait – white kurta‑pyjama, warm sunlight, sincere smile, mosque/archway blurred background.",
        "desc_ar": "بورتريه صباح العيد – كورتا بيجامة بيضاء، ضوء شمس دافئ، ابتسامة صادقة، خلفية ضبابية لمسجد/قوس."
    },
    {
        "command": "Indian teen boy dressed in IPL team colors, face paint on cheek, inside a stadium with evening floodlights and blurred crowd behind him, excited and passionate expression, vibrant saturated colors, dynamic low-angle composition, realistic skin texture, using reference photo",
        "platform": "ai",
        "category": "Sports & Fitness",
        "desc_en": "IPL match day fan – team colors, face paint, stadium floodlights, excited expression, low‑angle.",
        "desc_ar": "مشجع يوم مباراة IPL – ألوان الفريق، رسم على الوجه، أضواء الاستاد، تعبير متحمس، زاوية منخفضة."
    }
];

// Export for use in the main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = aiPrompts;
}