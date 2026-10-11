export const versions = [
  {
    id: "local-navy-revision-20261011-21",
    date: "11/10/2026",
    time: "02:30 PM",
    description:
      "Review round one: Semanoor navy replaces the near-black canvas; focus areas and exploration fields become an icon-led strip; Insights returns to the original three-card grid and moves above the documentary archive; footer columns anchored and the email aligned in RTL.",
    changes: [
      {
        file: "client/src/index.css",
        lines: "tokens, signal, insights, archive, footer",
        before:
          "#0f1011 canvas; text-only strip; list-style insights; paper archive",
        after:
          "#0c1a38 navy canvas with screen-blended backdrops; icon tiles; card grid; archive on the navy canvas; footer grid anchored to both edges",
      },
      {
        file: "client/src/components/SignalStrip.tsx",
        lines: "1-end",
        before: "Two rows of text chips",
        after:
          "Four focus-area tiles with their illustrations and six field tiles with Semanoor's line icons (client/src/data/fieldIcons.ts)",
      },
      {
        file: "client/src/components/Insights.tsx",
        lines: "1-end",
        before: "Editorial list with status pill",
        after:
          "Three illustrated cards as in the original site; draft pill only when an article is a draft",
      },
      {
        file: "client/src/components/ArchiveSection.tsx",
        lines: "new",
        before: "Archive carousel inside ImpactSection",
        after: "Own section placed after Insights (Home.tsx order)",
      },
      {
        file: "client/src/components/SiteFooter.tsx",
        lines: "email + X links",
        before: "Anchor with dir=ltr stretched and left-aligned in RTL",
        after: "Inline LTR span inside a start-aligned anchor",
      },
    ],
    screenshotBefore: "scratchpad/shots/final/ar-1440-insights.png",
    screenshotAfter: "scratchpad/shots/rev/ar-1440-insights.png",
    publicationStatus: "local-only-unpublished",
    isCurrent: true,
  },
  {
    id: "local-origin-redesign-20261011-20",
    date: "11/10/2026",
    time: "12:00 PM",
    description:
      "Origin-led redesign of the whole experience: near-black canvas, serif display typography, four coloured focus-area modules, atmospheric hero, honest labelling of provisional content. Content records and the local Content Studio preserved and extended.",
    changes: [
      {
        file: "client/src/index.css",
        lines: "1-end",
        before: "Navy-and-gold system with Calibri/Arial fallbacks",
        after:
          "Design tokens (#0f1011 canvas, graphite surfaces, violet/iris/sky/orchid panels, paper pause), self-hosted Newsreader/Inter/JetBrains Mono/Amiri/IBM Plex Sans Arabic",
      },
      {
        file: "client/src/data/siteContent.ts",
        lines: "1-end",
        before:
          "Copy without status fields; explorer paths hard-coded in Home.tsx",
        after:
          "Status fields (milestone status/date, article status, project kind), approach + explorer content, atmosphere visuals; validator accepts older packages via OPTIONAL_KEYS",
      },
      {
        file: "client/src/components/*",
        lines: "new",
        before:
          "NeuralHero, FocusAreas, Timeline, PhotoStrip, KeyFeatures, Navigation, Footer",
        after:
          "Hero, SignalStrip, FilmModule, Statement, FocusModules, Approach, Explorer, Journey, ImpactSection, Insights, ContactSection, SiteHeader, SiteFooter, Reveal, ui-kit",
      },
      {
        file: "client/public/site-assets/atmosphere/*",
        lines: "new",
        before: "CDN hero artwork",
        after:
          "Generated conceptual backdrops and hero loop frames (see docs/media/campaign.md)",
      },
    ],
    screenshotBefore: "scratchpad/shots/before/en-desktop-fold.png",
    screenshotAfter: "scratchpad/shots/after1/en-desktop-fold.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "Hero headline kept as approved in draft 16; the earlier line 'From idea to solution. From solution to venture.' now anchors the Approach section.",
      "Partners remain hidden; client logo data preserved in approvedMedia.ts.",
      "Impact pillars labelled qualitative, journey labelled thematic and undated, articles labelled final, smart book labelled static concept, explorer labelled rule-based.",
      "Contact keeps the mailto flow and says so; Content Studio keeps local save, JSON import/export and the local-only warning.",
      "Template leftovers (Zenith landing pages, placeholder logos, app-store buttons) removed.",
      "Verified with Playwright at 360/390/1440 in both languages: navigation, language switch, explorer, article dialog, film playback, contact, studio save; production build passes.",
      "No push/checkpoint/publish; private preview only.",
    ],
  },
  {
    id: "local-alliance-partners-20261010-19",
    date: "10/10/2026",
    time: "05:50 PM",
    description:
      "Temporarily hide Our partners in both languages without deleting its data; append the supplied Semanoor–Elaph alliance photograph once to the shared photo strip and media library.",
    changes: [
      {
        file: "client/src/pages/Home.tsx",
        lines: "322",
        before: "<ClientLogos language={language} />",
        after:
          "{false && <ClientLogos language={language} />} — reversible rendering gate only",
      },
      {
        file: "client/src/data/librarySuppliedMedia.ts",
        lines: "92-99",
        before: "Seven supplied documentary photographs",
        after:
          "Append one approved bilingual record: supplied-semanoor-elaph-alliance; preserve all previous records and their order",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-alliance-partners-19-qa/before-partners-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-alliance-partners-19-qa/strip-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "Approved by user13:10Riyadh; source scope exact two files plus version and task log documentation.",
      "Unmodified original1600x1072 PNG1841784bytes uploaded to the same project storage; SHA256matches original and public preview download.",
      "Our partners absent and no reserved blank space; component,12logos and approvedMedia data remain intact for restoration on request.",
      "Eight documentary photos in the strip;19media records:10illustrations,8photographs,one language-specific video; no duplicate alliance image or inferred identities/date.",
      "12 independent-language viewport cases360/390/430/820/1024/1440 passed: navigation to final image, return, search, zoom and Escape; Chromium emulation not real devices/Safari.",
      "Video playback and preserved navigation regression passed; production build and TypeScript passed.",
      "Known separate issue: after language switch without reload, English360px carousel may leave last photo partially outside viewport; direct language loading/reload works. Carousel source not changed outside approved scope.",
      "No push/checkpoint/publish or auto_publish setting changes. Temporary preview asset gateway outside repository includes42approved asset paths.",
      "Previous ZIP11 packages are not current19; Jawani cleaning and remaining pending changes not performed.",
    ],
  },
  {
    id: "local-company-word-20261010-18",
    date: "10/10/2026",
    time: "01:08 PM",
    description:
      "كلمة شركة في وسط السطر الأول بحجم14pxوبالأبيض فقط، مع حفظ السطر الثاني والإنجليزية والشعار والقائمة.",
    changes: [
      {
        file: "client/src/components/Navigation.tsx",
        lines: "43-47",
        before: "styles.descriptorLineفقط لكلمةشركة",
        after: "إضافةstyles.companyWordفقط؛JSXعداهومطابقحرفياً",
      },
      {
        file: "client/src/components/Navigation.module.css",
        lines: "9-13",
        before: "لاقاعدةcompanyWord",
        after: "text-align:center;font-size:14px;color:#ffffff",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-company-word-18-qa/before-header-ar-1440.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-company-word-18-qa/after-header-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتمادصريح13:04لخريطةالكلمةوالمقاسواللونفقط",
      "14حالة360/390/430/820/1024/1440/1920باللغتين،المركزمطابقللسطرالثانيبفرقأقل0.1px",
      "السطرالثانيوالخطواللونوالقائمةوالإنجليزيةوالشعارومحتوىmainمحفوظة",
      "الفحصChromiumمحاكاةمقاساتلاSafariأوأجهزةمادية؛بناءTypeScriptوالإنتاجناجحان",
      "لاpush/checkpoint/publish/auto_publish،آخرحفظ7ad61ef7لميتغير",
      "إخفاءشركاؤناوصورةالعمير/إيلافالجديدةلمينفذابعد؛تنظيفبطاقةجوانيوالتواصوالمميزاتقيدالاعتماد",
    ],
  },
  {
    id: "local-jawani-card-20261010-17",
    date: "10/10/2026",
    time: "12:03 PM",
    description:
      "بطاقة جواني الأصلية في محور جواني بالرئيسية فقط، كاملة على الكحلي وظل خفيف، باللغتين دون تغيير النصوص أو المحاور الأخرى.",
    changes: [
      {
        file: "client/src/components/FocusAreas.tsx",
        lines: "12,65-87",
        before: "رسم الأسرة في صورة المحور الرابع",
        after: "بطاقة جواني الأصلية داخل إطار الصورة نفسه، بقية المحاور محفوظة",
      },
      {
        file: "client/src/components/FocusAreas.module.css",
        lines: "1-13",
        before: "غير موجود",
        after: "تنسيق معزول وسط الإطار و90%وعرض كامل containوظل خفيف",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-jawani-card-17-qa/before-jawani-ar-1440.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-jawani-card-17-qa/after-jawani-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتماد صريح11:57لصورة جواني وخريطة محور الرئيسية فقط",
      "نفس ألوان وكتابة الأصل،WebP1110x455losslessومطابقةpixelsوSHA256منالتخزين",
      "12حالة360/390/430/820/1024/1440باللغتين،مقاسالإطاربفرققياسأقل0.1pxوالنصوصمطابقة",
      "لا تعديلsiteContentأوالحلولأوالإنجازاتأوالمكتبةأوالفيديوأوالأزرار",
      "TypeScriptوبناءالإنتاجوالفيديووالأسهموالتنقلناجحون،ChromiumمحاكاةشاشاتلاSafari",
      "لاpush/checkpoint/publish/auto_publish،حزم11لاتمثل17",
      "بيانات المكتب وصورة إيلاف وإثراء المميزاتطلباتلاحقةتنتظرخريطةاعتمادولمتنفذ",
    ],
  },
  {
    id: "local-hero-headline-20261010-16",
    date: "10/10/2026",
    time: "11:49 AM",
    description:
      "استبدال عنوان المقدمة فقط بالخيار1 المعتمد: نمنح المعرفة ذكاءً، ونحوّل الابتكار إلى أثر، وصيغته الإنجليزية.",
    changes: [
      {
        file: "client/src/data/siteContent.ts",
        lines: "186-187,484-485",
        before:
          "من الفكرة إلى الحل، ومن الحل إلى شركة. / From idea to solution. From solution to venture.",
        after:
          "نمنح المعرفة ذكاءً، ونحوّل الابتكار إلى أثر. / Bringing intelligence to knowledge. Turning innovation into impact.",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-headline-16-qa/before-ar-1440.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-headline-16-qa/after-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتماد صريح11:46للعنوان والترجمة وخريطة4حقول فقط",
      "16حالة360/390/430/820/1024/1280/1440/1920باللغتين، النص والتنسيق محفوظان باستثناء العنوان",
      "فحص المصدر مطابق حرفياً بعد استبعاد القيم4المعتمدة؛لاCSSأوالأزرارأوالوصفأوالمكوناتأوالخادمتغير",
      "الفيديو والأسهم وتبديل لغة الحلول والتواصل مجربة؛TypeScriptوبناءالإنتاجناجحان",
      "الإنجليزية تلتف طبيعياً وفق الخط والحجم الحالي؛لا تعديل عرض أوحجم غيرمعتمد",
      "لاpush/checkpoint/publish/auto_publish؛حزم11السابقةلاتمثل16",
      "Chromium محاكاة شاشات، لاSafariأوأجهزةمادية",
    ],
  },
  {
    id: "local-studio-book-copy-20261010-15",
    date: "10/10/2026",
    time: "11:41 AM",
    description:
      "تنقيح نصوص صفحة الاستوديو ورواد الأعمال وربط أدواره بالمحاور؛ تنقيح نص الكتاب الذكي المختصر فقط وفق تقرير الاعتماد.",
    changes: [
      {
        file: "client/src/data/solutionCatalog.ts",
        lines: "236-257,260-278,297-334 (قبل التنقيح)",
        before: "الاستوديو بعنوان مختصر وبطاقتين تركزان على الألعاب",
        after:
          "عنوان صفحة موسع، مقدمة تكامل وخدمة رواد الأعمال، تنقيح البطاقة الأولى والثالثة والإتاحة والتعاون، حفظ V Makkah وبقية المحاور حرفياً",
      },
      {
        file: "client/src/components/SmartBookShowcase.tsx",
        lines: "18-21,30-33,42-45,54-57,96-97,150-152 (قبل التنقيح)",
        before: "يكيّف المعرفة معه، أوصاف مختصرة عامة، اكتشف عقل الكتاب",
        after:
          "يكيّف الشرح مع قدراته، توضيح دور المعلمين والمتعلمين والمحركات، تعرّف إلى الكتاب الذكي؛ الأوصاف الكاملة والتصميم محفوظة",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-studio-copy-15-qa/before-studio-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-studio-copy-15-qa/studio-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتماد صريح11:37للنصوص والخريطة فقط",
      "20حالة360/390/430/820/1440 باللغتين؛ النصوص مطابقة للتقرير ولاoverflow",
      "بيانات المحاور الثلاثة الأخرى وV Makkah مطابقان حرفياً؛ الاسم المختصر في الرئيسية محفوظ",
      "العرض الكامل للكتاب الذكي مطابق حرفياً باللغتين؛ JSX محفوظ ماعدا النص المعتمد والتفاف المنسق",
      "الفيديو والأسهم والتنقل وتبديل اللغة والتواصل نجحت؛TypeScriptوبناء الإنتاج ناجحان",
      "لاCSSأوHomeأوSolutionDetailأوbackendمتغير قبل التوثيق",
      "لاpush/checkpoint/publish/auto_publish؛حزم11السابقةلاتمثل15",
      "فحصChromium ومحاكاة مقاسات لاSafari أوأجهزة فعلية",
    ],
  },
  {
    id: "local-smart-book-showcase-20261010-14",
    date: "10/10/2026",
    time: "11:28 AM",
    description:
      "عرض ثابت للكتاب الذكي: مختصر في الرئيسية وكامل في صفحة التعليم الذكي فقط، بالرسم المعتمد والمراحل الأربع باللغتين.",
    changes: [
      {
        file: "client/src/pages/Home.tsx",
        lines: "1-506",
        before: "المسودة13؛مرجع محفوظ خارج المستودع",
        after: "استيراد وإدراج العرض فقط",
      },
      {
        file: "client/src/pages/SolutionDetail.tsx",
        lines: "1-164",
        before: "المسودة13؛مرجع محفوظ خارج المستودع",
        after: "استيراد وإدراج العرض فقط",
      },
      {
        file: "client/src/components/SmartBookShowcase.tsx",
        lines: "1-159",
        before: "غير موجود",
        after: "مكون ثابت معزول ثنائي اللغة بالرسم الحالي وبطاقات ترث الجوار",
      },
      {
        file: "client/src/components/SmartBookShowcase.module.css",
        lines: "1-87",
        before: "غير موجود",
        after: "مكون ثابت معزول ثنائي اللغة بالرسم الحالي وبطاقات ترث الجوار",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-smart-book-14-qa/before-home-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-smart-book-14-qa/compact-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتماد11:23لتنفيذالخريطةوالموضعين؛عرضثابتلاAPIأوتجربةحية",
      "20حالة360/390/430/820/1440باللغتين؛4مراحل،نسخةكاملةأطول،containولامجاوزةأفقية",
      "HomeوSolutionDetailمطابقانحرفياًإلاالاستيرادوالإدراج؛كلباقيالمصدرمحفوظقبلالتوثيق",
      "لاإضافةلبقيةصفحاتالمحاور؛قدراتها3كلصفحةمحفوظة",
      "الفيديووالأسهمباللغتينوالتواصلوتبديللغةالحلولمجربة؛TypeScriptوبناءالإنتاجناجحان",
      "لاpush/checkpoint/publish/auto_publish؛حزم11السابقةلاتمثل14",
      "ChromiumومحاكاةالمقاساتلاSafariأوأجهزةفعلية",
    ],
  },
  {
    id: "local-products-solutions-20261010-13",
    date: "10/10/2026",
    time: "11:09 AM",
    description:
      "إنجازات المنتجات الثلاث وصفحات المحاور الأربع؛ اعتماد اسم ستوديو سيمانور وتصحيح جواني المالية. التوليد الحقيقي قيد تحديد متطلبات الربط ولم ينفذ.",
    changes: [
      {
        file: "client/src/pages/Home.tsx",
        lines: "1-500",
        before: "المسودة12؛بصمة ومرجع محفوظان خارج المستودع",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/components/FocusAreas.tsx",
        lines: "1-94",
        before: "المسودة12؛بصمة ومرجع محفوظان خارج المستودع",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/App.tsx",
        lines: "1-87",
        before: "المسودة12؛بصمة ومرجع محفوظان خارج المستودع",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/data/siteContent.ts",
        lines: "1-1298",
        before: "المسودة12؛بصمة ومرجع محفوظان خارج المستودع",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/data/productAchievements.ts",
        lines: "1-74",
        before: "غير موجود",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/data/solutionCatalog.ts",
        lines: "1-444",
        before: "غير موجود",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/components/ProductAchievements.tsx",
        lines: "1-69",
        before: "غير موجود",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/components/ProductSolutions.module.css",
        lines: "1-155",
        before: "غير موجود",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
      {
        file: "client/src/pages/SolutionDetail.tsx",
        lines: "1-157",
        before: "غير موجود",
        after:
          "الإضافة المحلية المعتمدة؛إنجازات المنتجات وصفحات المحاور وروابطها دون خادم أو محاكاة ذكاء",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-products-13-qa/before-impact-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-products-13-qa/achievements-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "30حالةعرضصفحةباللغتين390/820/1440،3إنجازات،4روابطمحاور،12قدرةبصفحاتالمحاور،لاoverflow",
      "تشغيلالفيديوباللغتينوفكالإطاراتوcontainوالأسهموالعودةوالتواصلوتبديللغةالحلولناجح",
      "اسمستوديوسيمانورمعتمدوصفجواني6–24والمالية،لاادعاءترخيصأوأفضليّةمقارنةأوجاهزيةكلالمنتجات",
      "CSSعاموالهيدرومحررالمحتوىوالصوروالشريطوالفيديووالخادموالتكوينلمتتغير،بصماتمحفوظة",
      "التجربةالتوليديةالحقيقيةلمتنفذبطلبالمستخدم،وثيقةمتطلباتوAPIالمنتجوالاستضافةوذاكرةالجلسةللاعتماد",
      "ChromiumمحاكاةشاشاتلاSafariأوأجهزةفعلية؛TypeScriptوبناءالإنتاجناجحان",
      "لاpush/checkpoint/publish/auto_publish؛حزم11القديمةلاتمثل13",
    ],
  },
  {
    id: "local-header-arrows-20261010-12",
    date: "10/10/2026",
    time: "07:22 AM",
    description:
      "اسم الشركة العربي على سطرين وأسهم شريط الصور على الطرفين فقط؛مواءمةالعناوينمؤجلةبطلبالمستخدم.",
    changes: [
      {
        file: "client/src/components/Navigation.tsx",
        lines: "4,38-52",
        before: "اسم عربي بنص واحد يلتف تلقائياً",
        after:
          "شركة في السطر الأول والتعليم والتدريب الإلكتروني في الثاني؛الإنجليزية والقائمة والمنطق محفوظة",
      },
      {
        file: "client/src/components/Navigation.module.css",
        lines: "1-7",
        before: "غير موجود",
        after: "تنسيق معزول يمنع التفاف السطر الثاني ولا يغير اللون أو الخط",
      },
      {
        file: "client/src/components/PhotoStrip.tsx",
        lines: "71-140",
        before: "أسهم متجاورة فوق الصور",
        after: "نقل نفس الأسهم إلى غلاف الشريط،دونتغييرأيمنطق",
      },
      {
        file: "client/src/components/PhotoStrip.module.css",
        lines: "7-27",
        before: "controlsمتجاورة في رأس القسم",
        after:
          "تموضعالطرفينعندمنتصفارتفاعالصور،والصوروأحجامهاوالأسهموألوانهامحفوظة",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-header-arrows-12-qa/before-header-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-header-arrows-12-qa/header-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتماد07:17لتعديل1و2فقط؛لامواءمةللعناوينحالياً",
      "16حالة360/390/430/820/1024/1280/1440/1920باللغتينناجحة؛الأسهمعلىطرفينومنتصفالصور،7أصولمحملةبـcontainبلاoverflowأوتداخلالهيدر",
      "منطقPhotoStripقبلreturnمطابقحرفياً؛العناوينوالمحتوىوHomeوالمكتبةوالفيديووالشعاراتوالخادموتكوينالمشروعلمتتغير",
      "TypeScriptوبناءالإنتاجناجحان؛الفحصChromiumومحاكاةشاشاتلاSafariأوأجهزةفعلية",
      "لاpush/checkpoint/publish/auto_publish؛آخرcheckpoint7ad61ef7ثابت",
      "المرفقانالتاليانقيدمراجعةالترتيب؛لميدمجذلكالطلبفي12،وحزم11السابقةلا تتضمن12",
    ],
  },
  {
    id: "local-photo-strip-20261010-11",
    date: "10/10/2026",
    time: "12:42 AM",
    description:
      "تصحيح تسميتي الجامعة ومجموعة عطاء التعليمية؛ استبدال مدخل المكتبة الرئيسية بشريط7صور فوتوغرافية بأسهم يدوية دون إنفوغرافيك أو فيديو داخل الشريط.",
    changes: [
      {
        file: "client/src/data/librarySuppliedMedia.ts",
        lines: "62-65,78-81",
        before: "مدارس الرواد؛عطاء التعليمية",
        after:
          "جامعة الأمير مساعد بن عبدالرحمن والاسم السابق في الوصف؛مجموعة عطاء التعليمية،باللغتين؛الصور والمسارات والأسماء الأخرى محفوظة",
      },
      {
        file: "client/src/pages/Home.tsx",
        lines: "19,376",
        before: "مدخل المكتبة بنص وصورة مولدة؛بعدالرؤىوقبلالتواصل",
        after:
          "استيرادPhotoStripوربطهفيالموضعنفسهفقط؛بقيةشفرةHomeمطابقةحرفياًللمرجع",
      },
      {
        file: "client/src/components/PhotoStrip.tsx",
        lines: "1-140",
        before: "غير موجود",
        after:
          "شريطصورأصلية7فقطوعنوانالقسمورابطالمكتبة؛أسهميدويةولوحةمفاتيحوسحببدونتشغيلتلقائي",
      },
      {
        file: "client/src/components/PhotoStrip.module.css",
        lines: "1-68",
        before: "غير موجود",
        after:
          "CSSمعزوليَرثالكحليوالذهبيوالحدودوتباعدالجوار؛3صوروجزءمنالتاليةعلىالمكتب،2علىالمتوسط،1علىالجوال،contain",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-photo-strip-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-photo-strip-qa/strip-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتمادصريح00:37بتوقيتالرياضللتصحيحوالشريطوالنطاق؛لاpush/checkpoint/publish/auto_publish",
      "الصورأصليةبنفسالمسارات؛لاقلبأفقيولاتغييروجوهأوألوانولاصورمولدةداخلشريطالرئيسية",
      "المكتبة18بطاقةومشغلهاوبقيةالأقساممحفوظة؛لاتعديلMediaLibraryأوCSSعامأوالخادمأوالمحرر",
      "12حالة360/390/430/820/1024/1440باللغتين:3/2/1صوركاملةوجزءالتالية،أسهمولوحةمفاتيحوصور7محمّلةبلاoverflow",
      "حالتانإضافيتانللأسهمبحركةطبيعيةوالسحبوالفيديوالقديموصوته؛TypeScriptوبناءالإنتاجناجحان",
      "فحصالمصدر:Homeتغيرهفقطفيالاستيرادوموضعالمدخل،بياناتالصورفقطفي8أسطرتصحيح،بقيةملفاتالمصدرلمتتغيرقبلالتوثيق",
      "تسميةالجامعةمنالمستخدم؛الأصلومسارالتخزينيحافظانعلىاسمهماالتقنيالسابقلاالمعروض",
      "رقم11مسودةمحليةلاcheckpoint؛7ad61ef7مازالآخرحفظمنصة",
    ],
  },
  {
    id: "local-library-photos-20261010-10",
    date: "10/10/2026",
    time: "12:25 AM",
    description:
      "إضافة7صور توثيقية أصلية إلى المكتبة والفيديو العربي9/الإنجليزي1حسب اللغة؛ مسودة محلية غير منشورة.",
    changes: [
      {
        file: "client/src/pages/MediaLibrary.tsx",
        lines: "1-259",
        before: "المكتبة تعرض10رسومات وتدعم photo/press/illustration فقط",
        after:
          "حفظ10رسومات وإضافة7صور أصلية وبطاقة فيديو واحدة حسب اللغة وتصنيف فيديو ومشغل يدوي داخل الحوار الحالي فقط",
      },
      {
        file: "client/src/data/librarySuppliedMedia.ts",
        lines: "1-119",
        before: "غير موجود",
        after:
          "مراجع صور وفيديو خاصة بالمكتبة فقط؛مصادر أصلية وأوصاف ثنائية بلا تواريخ مختلقة",
      },
      {
        file: "client/src/components/ContentMedia.module.css",
        lines: "294-301",
        before: "لا قاعدة فيديو مكتبة",
        after:
          "إضافة.libraryVideo فقط بعرض100%ونسبة16:9وcontainولون الخلفية الموروث",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-library-photos-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-library-photos-qa/photos-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "صور الشرع ومحمد بن راشد والتوقيع والمدارس والأمير سلطان وعطاء والتبادل الجماعي؛7صور أصلية مرفوعة إلى تخزين المشروع وبصماتSHA256مطابقة",
      "إضافة مكتبة فقط دون مقدمة أو شعارات أو محرر أو خادم أو CSSعام",
      "12حالة عرض360/390/430/820/1024/1440باللغتين؛84اختبارتكبيرصور و12تشغيلوفكصوتوإطارات فيديو؛لا تجاوزأوقص",
      "فيديو العربي9والإنجليزي1وغلافصحيححسباللغة؛controlsوتشغيل يدوي؛لا إعادة إنتاج أو صور أخبار مولدة",
      "لاpush/checkpoint/publish/auto_publish؛رقم10محلي وليس حفظاً بالمنصة",
      "تصميم بطاقة جواني المصرفية خارج نطاق الصور التوثيقية ولم يرفع إلى التخزين؛شعاراتولقطاتالتصميممستبعدة",
      "مديرواحدوحفظالخادممؤجلان؛المواد المضافة في ملف مكتبة معزول ولا تغيير للمحرر المحلي",
    ],
  },
  {
    id: "local-final-copy-20261009-09",
    date: "09/10/2026",
    time: "11:56 PM",
    description:
      "النصوص النهائية المعتمدة، شركاؤنا، مميزات6، تكبير القائمة18px، إزالة ملاحظات التطوير العامة والفراغات غير الموثقة؛ مسودة محلية غير منشورة.",
    changes: [
      {
        file: "client/src/index.css",
        lines: "1-1747",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/components/Footer.tsx",
        lines: "1-51",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/components/ClientLogos.tsx",
        lines: "1-59",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/pages/Home.tsx",
        lines: "1-549",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/pages/MediaLibrary.tsx",
        lines: "1-219",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/data/siteContent.ts",
        lines: "1-1294",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/components/KeyFeatures.tsx",
        lines: "1-42",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
      {
        file: "client/src/components/KeyFeatures.module.css",
        lines: "1-6",
        before: "المسودة08 قبل المرحلة؛ خريطةالملفوالأسطرمعتمدةفيتقريرالمراجعة",
        after:
          "النصوصوالبدائلالمعتمدة؛القائمة18pxومميزات6ونقلملاحظاتالتطويرإلىتقريرخارجي",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-final-copy-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-final-copy-qa/features-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "اعتمادصريح23:48بتوقيتالرياض؛لاpush/checkpoint/publish/auto_publish",
      "شركاؤنا/Ourpartners؛الشعارات12بأصولهاوألوانهاوترتيبها",
      "المميزات6بعدالمحاوروبطاقاتهاورثتfocus-cardوالكحليوالذهبي",
      "القائمة18pxباللغتين؛لااسمأوشعارأولونأوترتيبمتغير",
      "نصوصنهائيةومقالات3كاملة؛أثرنوعيومسيرةغيرمؤرخةبدلاًمنأرقاموتواريخغيرمعتمدة",
      "إخفاءقنواتوتصنيفاتخاليةورابطمحررعام؛المحررمحليلاادعاءحمايةوحسابمديرواحدمؤجل",
      "استيراد08وحفظالنصالمخصصوإضافةحقولfeatures/articlebodyدونمسحالنسخةالسابقة؛JSONsave/exportللمميزاتناجح",
      "16حالة360/390/430/820/960/1024/1280/1440باللغتين؛الفيديو16:9containوالأغلفةصحيحةو580على1440؛المحاور4والأيقونات6محفوظة",
      "بناءTypeScriptوالإنتاجناجح؛تحذيرrefsموروثفيDialogوالطلبان404غيرمنسوبينلشبكةالصفحةسجلافقطلاتعديلخارجمجالالاعتماد",
      "لمتعتمدحقائقالأرقاموالمشاريعوالعلاقاتوالترجماتالقانونية،نقلتخارجالواجهةبدلاًمنالاختلاق",
    ],
  },
  {
    id: "local-content-media-20261009-08",
    date: "09/10/2026",
    time: "11:21 PM",
    description:
      "تطوير المحتوى العربي والإنجليزي ورسومات الأقسام ومكتبة الصور والأخبار والمحرر المحلي؛ تأجيل ربط الاستضافة وحساب مدير واحد.",
    changes: [
      {
        file: "client/src/App.tsx",
        lines: "1-77",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/Footer.tsx",
        lines: "1-59",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/FocusAreas.tsx",
        lines: "1-86",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/Timeline.tsx",
        lines: "1-54",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/ContentStudio.tsx",
        lines: "1-451",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/ImageField.tsx",
        lines: "1-113",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/MediaEditor.tsx",
        lines: "1-252",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/components/ContentMedia.module.css",
        lines: "1-292",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/pages/Home.tsx",
        lines: "1-543",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/pages/MediaLibrary.tsx",
        lines: "1-241",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/data/siteContent.ts",
        lines: "1-1186",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
      {
        file: "client/src/data/mediaTypes.ts",
        lines: "1-55",
        before: "المصدر المحلي07 قبل المرحلة؛ مرفق baseline/fارق الحزمة",
        after:
          "تحديث المحتوى/الرسومات/المكتبة وفق الخطة المعتمدة دون تغيير الفيديو أو الشريط أو الهوية",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-content-media-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-content-media-qa/ecosystem-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "10رسومات أصلية نانو بنانا؛ نسخWebPمرفوعة إلى نفس المشروع ومطابقةSHA256؛ حزمة الاستضافة32أصلاً مستقلة عن التخزين والمعاينة",
      "المحاور4 والتخصصات6 ومقاس الفيديو580 ونسبة16:9 والشريط أسفل المقدمة محفوظة",
      "مكتبة/photo/press/illustrationوبحث وتكبير ومسودات مخفية",
      "صور وروابط HTTPS ورفع محلي خفيف؛ retain draft/apply/export/import؛ ليس حساب مدير أو رفع استضافة",
      "لا أخبار أو صور مشاريع فعلية مختلقة؛ الأرقام والتواريخ الموروثة أولية وتحتاج اعتماداً",
      "12سيناريو عرض360/390/430/820/1024/1440باللغتين؛ الفيديوان والغلافان والشعارات12سليمة",
      "الهوية والكاليبري والهيدر والخادم والتكوين لا تعديل",
      "لاpush/checkpoint/publish/auto_publish؛ آخر حفظ منصة7ad61ef7ثابت",
    ],
  },
  {
    id: "local-remove-business-20261009-07",
    date: "09/10/2026",
    time: "08:19 PM",
    description:
      "Removed only the Business solutions card from the bilingual hero icon strip and closed the vacated desktop column. All other content, ordering, icon sizes, video, and header typography remain unchanged.",
    changes: [
      {
        file: "client/src/components/SpecializationIcons.tsx",
        lines: "former10-15",
        before:
          "Business solutions entry between Intelligent learning and Fintech",
        after: "Removed this one entry only; six remaining entries unchanged",
      },
      {
        file: "client/src/components/SpecializationIcons.module.css",
        lines: "7",
        before: "1.7fr repeat(6, minmax(0, 1fr))",
        after: "1.7fr repeat(5, minmax(0, 1fr))",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-remove-business-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-remove-business-qa/after-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "Explicit approval for this two-file scope in both languages",
      "Runtime source diff matches exactly one removed entry and one grid count change; all other source files unchanged before documentation",
      "12 viewport/language cases pass at360/390/430/820/1024/1440; six icons load, approved order and96/64sizes preserved; desktop row has no vacant column",
      "Video source and cover correct for each language;16:9contain; playback/audio/frame decoding verified in two desktop cases;12client logos load",
      "TypeScript and production build pass; right-hand preview route3000 verified",
      "Business solution mentions elsewhere and stored image are retained; header enlargement remains unapproved and unapplied",
      "No push, checkpoint, publishing, or auto_publish changes",
      "Previous ZIP exports have not been regenerated for draft07",
    ],
  },
  {
    id: "local-strip-position-20261009-06",
    date: "09/10/2026",
    time: "07:58 PM",
    description:
      "نقل شريط الأيقونات المعتمد أسفل مساحة النص والأزرار والفيديو وقبل hero-bottom باللغتين، دون أي تعديل للتنسيق أو المقاسات أو المنطق.",
    changes: [
      {
        file: "client/src/components/NeuralHero.tsx",
        lines: "19,48",
        before: "SpecializationIcons قبل hero-layout",
        after:
          "نقل نفس SpecializationIcons بعد hero-layout وقبل hero-bottom فقط",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-strip-position-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-strip-position-qa/after-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "موافقة صريحة على النقل فقط وترك بقية التنسيق كما هو",
      "فحص بصمات المصدر يثبت تغير NeuralHero فقط قبل التوثيق، والفارق مطابق حرفياً لنقل سطر واحد",
      "12 حالة باللغتين360/390/430/820/1024/1440 نجحت؛ الشريط بعد النص والفيديو وقبل السطر الختامي",
      "أيقونات96/64 والفيديو580px على1440 محفوظة؛ لا قص أو تجاوز أفقي؛ صحة الفيديو والغلاف بكل لغة",
      "اختبار تشغيل وفك صوت وإطارات في4 حالات؛ TypeScript وبناء الإنتاج ناجحان",
      "تحديث المعاينة الجانبية؛ لا push أو checkpoint أو publish أو تغيير auto_publish",
      "حزمZIP02 القديمة لم تحدث ولا تحتوي تعديل06",
    ],
  },
  {
    id: "local-nano-icons-20261009-05",
    date: "09/10/2026",
    time: "07:50 PM",
    description:
      "دمج الأيقونات السبع المولدة بنانو بنانا برو والمعتمدة صراحةً في شريط المقدمة فقط؛ التعليم الذكي96px وبقية المجالات64px، مع حفظ التسميات والترتيب والتنسيق المجاور والفيديو والهوية.",
    changes: [
      {
        file: "client/src/components/SpecializationIcons.tsx",
        lines: "1-78",
        before: "رموزLucideبأحجام52/30معالتسمياتوالترتيبالمعتمدين",
        after:
          "صورالأيقوناتالمعتمدةبمساراتتخزينالمشروعالفعليةوبنفسالتسمياتوالترتيبوالعناصرالمجاورة",
      },
      {
        file: "client/src/components/SpecializationIcons.module.css",
        lines: "30-36,52-55",
        before: "قواعدلونSVGفي.iconو.primary.icon",
        after:
          "صور64x64والتعليم96x96معobject-fit:containوعدم تغيير أي قاعدة أخرى",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-nano-icons-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-nano-icons-qa/after-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "رفع7أيقوناتإلىتخزينالمشروعcxmUJcgp2gYksNKMzVJ828فعلياًوفحصبصماتSHA256عبررابطالمعاينةالخارجي",
      "نسخ384x384WebPخفيفةبنفسالرسمونسبةالصورةدونقصأوإعادةتوليدأوتلوين؛الأصولالأصليةمحفوظةخارجالمستودع",
      "نجحت22حالةعرضباللغتينومقاسات360/390/430/681/820/960/1024/1280/1281/1440/1920",
      "تشغيلالفيديووصحةأغلفةاللغتينوالإطاراتوالصوتومقاساتالفيديومحفوظة،وشعاراتالعملاء12محمّلة",
      "فحصبصماتالمصدرحصرالتغييرفيملفينالشريطقبلالتوثيق؛لاخادمأونماذجأواستوديوأومحتوىآخرمتغير",
      "معاينة3001محدثة؛بوابةالمعاينةالمؤقتةخارجالمشروعأضيفتإليهاالأصول7فقط",
      "TypeScriptوبناءالإنتاجناجحان؛لاpushأوcheckpointأوpublishأوتغييرauto_publish",
      "حزمZIPالإصدار02سابقةلمتحدثوليسفيهانتائج05",
    ],
  },
  {
    id: "local-specializations-20261009-04",
    date: "09/10/2026",
    time: "07:44 PM",
    description:
      "شريط اختصاصات معتمد أعلى المقدمة مع إبراز التعليم الذكي، وتكبير الفيديو إلى580px فوق1280. تغيير التسميتين إلى التعليم الذكي والألعاب الإلكترونية. أيقونات نانو بنانا الجديدة جاهزة للمراجعة ولم تدمج بعد.",
    changes: [
      {
        file: "client/src/components/NeuralHero.tsx",
        lines: "5,19",
        before: "المقدمة تبدأ مباشرة بمساحة العنوان والفيديو",
        after: "استيراد وإدراج شريط الاختصاصات قبلها مع حفظ بقية العناصر",
      },
      {
        file: "client/src/components/SpecializationIcons.tsx",
        lines: "1-78",
        before: "غير موجود",
        after:
          "سبعة اختصاصات ثنائية اللغة بترتيب معتمد والتعليم الذكي أكبر؛ الأيقونات الخطية الأولى مؤقتة بعد رفضها ومجموعة نانو بنانا تنتظر الاعتماد",
      },
      {
        file: "client/src/components/SpecializationIcons.module.css",
        lines: "1-98",
        before: "غير موجود",
        after:
          "تنسيق معزول بالألوان والخط القائمين مع حجم أكبر للتعليم وشبكة متجاوبة دون تغييرات عامة",
      },
      {
        file: "client/src/components/ApprovedMedia.module.css",
        lines: "13-17",
        before: "الحد الأقصى للفيديو510 فوق1280",
        after:
          "الحد الأقصى580 فوق1280 فقط، ولا تغيير للنسبة أو contain أو الأدوات أو الجوال",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-specializations-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-specializations-qa/after-ar-1440.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "موافقة صريحة على القائمة والموضع والأسلوب والخريطة وزيادة الفيديو",
      "22سيناريو باللغتين ناجحة بعد تحديث التسميات، ومنها360/390/430 بلا قص أو تجاوز أفقي",
      "عرض الفيديو580px على1440/1920 مع حفظ العمود ونسبة16:9 والأغلفة والتشغيل اليدوي",
      "بصمات جميع ملفات المصدر الأخرى محفوظة؛ المقارنة البصرية للمحتوى مستثنى منها علامات الشفرة والحركة وبصمةCSS المتولدة فقط",
      "أيقونات nano-banana-pro ولدت خارج المستودع ولم ترفع إلى تخزين المشروع ولم تدمج",
      "لا push أو checkpoint أو publish أو تغيير auto_publish",
      "حزمZIP السابقة02لم تحدث ولا تتضمن الشريط أو رابط الرئيسية03",
    ],
  },
  {
    id: "local-nav-20261009-03",
    date: "09/10/2026",
    time: "07:33 PM",
    description:
      "إضافةالرئيسية/Homeكأولعنصرفيقائمتيالتنقل،باستخدامcopy.homeوالتنسيقالقائم؛تعديلمعتمدومحليفقطدوننشرأوcheckpoint.",
    changes: [
      {
        file: "client/src/components/Navigation.tsx",
        lines: "13",
        before: "القائمةتبدأبالرؤية/story",
        after:
          "إضافة[home,copy.home]أولاًمعالحفاظعلىترتيببقيةالروابطوالتنسيقومنطقالإغلاق",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-home-nav-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-home-nav-qa/after-ar.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "موافقةصريحةمنالمستخدمعلىالسطرالمحدد",
      "8اختباراتباللغتين360/820/1024/1440ناجحة",
      "توريثالتنسيقوالترتيبمحفوظوالرابطيعيد/#homeويغلقالقائمةالمختصرة",
      "TypeScriptوبناءالإنتاجناجحان",
      "لاpushأوcheckpointأوpublishأوتعديلauto_publish",
      "حزمZIPالسابقة02تظلنسخاًسابقةولاتحتويإضافةالرابط03",
    ],
  },
  {
    id: "local-media-20261009-02",
    date: "09/10/2026",
    time: "07:10 PM",
    description:
      "إزالة قيد عرض حاوية الفيديو بين681و1280فقط، مع تصدير بناء الموقع الأصلي بأصول محلية للرفع اليدوي؛ مسودة غير منشورة ولا checkpoint جديد.",
    changes: [
      {
        file: "client/src/components/ApprovedMedia.module.css",
        lines: "5-11",
        before:
          "حاوية الفيديو ترث max-width490/510منlab-visual فتترك فراغاً في عمود الشاشات المتوسطة",
        after:
          "mediaquery681–1280بـheroVideo.heroVideoعرض100%وmax-width:noneفقط؛النسبة والقص والجوال والمكتب وبقية التنسيق محفوظة",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-medium-qa/before-ar-820.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-medium-qa/after-ar-820.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "26سيناريوقبل/بعدباللغتين؛14سيناريوفيالنطاقتملأالعمود100%",
      "360/390/430/680و1281و1440دونتغييرعنالمسودةالسابقة",
      "بقاءside-by-sideفوق960وتحتالمقدمة960وأقل",
      "CSSمحليفقطدونتغييرالعناوينوالأزراروالشعاراتوالمنطق",
      "تصديرstaticمنdist/publicمعالفيديوينوالغلافينوالشعارات12والشعاروأصولالهويةالقائمة",
      "22اختبارنسخةالتصديرمعمنعجميعطلباتالشبكةالخارجيةوفحص22بصمةملف",
      "تحويلمساراتالأصولوحذفحقنالمعاينةوالتحليلاتفيartifactcopyفقط",
      "لاpushأوcheckpointأوpublishأوتعديلauto_publish",
    ],
  },
  {
    id: "local-media-20261009-01",
    date: "09/10/2026",
    time: "06:40 PM",
    description:
      "مسودة دمج الفيديو العربي9 والإنجليزي1 وشعارات العملاء12 في المشروع الأصلي؛ محلية غير منشورة وغير محفوظة في checkpoint بتوجيه صريح من المستخدم.",
    changes: [
      {
        file: "client/src/components/NeuralHero.tsx",
        lines: "1-58",
        before: "رسم المجالات في المساحة البصرية للمقدمة",
        after:
          "مشغل الفيديو المعتمد حسب اللغة دون تعديل العنوان والوصف والأزرار والخلفية",
      },
      {
        file: "client/src/pages/Home.tsx",
        lines: "14-18,310-315",
        before: "قسم الأثر يتبعه الرؤى مباشرة",
        after:
          "إضافة قسم العملاء بينهما فقط مع بقاء الترتيب النسبي لبقية الأقسام",
      },
      {
        file: "client/src/components/HeroVideo.tsx",
        lines: "1-78",
        before: "غير موجود",
        after:
          "تشغيل يدوي و16:9 contain وغلاف اللغة وأدوات تحكم وصوت وإيقاف السابقة عند تغيير اللغة",
      },
      {
        file: "client/src/components/ClientLogos.tsx",
        lines: "1-70",
        before: "غير موجود",
        after:
          "شعارات أصلية في قسم مستقل مع وراثة تنسيق الأثر وأسماء غير مختلقة",
      },
      {
        file: "client/src/components/ApprovedMedia.module.css",
        lines: "1-87",
        before: "غير موجود",
        after: "تنسيق محلي للمشغل والشعارات فقط دون قواعد عامة",
      },
      {
        file: "client/src/data/approvedMedia.ts",
        lines: "1-109",
        before: "غير موجود",
        after:
          "مسارات تخزين المشروع الفعلية ومراجع النسخ ومعلومات المصادر وneedsNameReview",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-integration-qa/before-ar.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-integration-qa/desktop-ar.png",
    compliant: true,
    isCurrent: false,
    checkpointCreated: false,
    publicationStatus: "local-only-unpublished",
    baseCheckpoint: "7ad61ef7",
    highlights: [
      "نجاح TypeScript والبناء واختبارات الرابط الخارجي",
      "فيديو وغلاف صحيحان لكل لغة دون تشغيل تلقائي",
      "العربية والإنجليزية على360/390/430 دون قص أو تجاوز أفقي",
      "الشعارات12والأصول16مطابقة SHA256",
      "بقية محتوى وتنسيق الأقسام محفوظة",
      "لا push أو checkpoint أو publish أو تعديل auto_publish",
      "المعاينة المحلية على3001تستخدم بوابة تخزين مؤقتة خارج المستودع؛3000لم يُضف له مسار التخزين",
    ],
  },
  {
    id: "d4afaa22",
    date: "09/10/2026",
    time: "09:44 AM",
    description:
      "النسخة المكتبية المعتمدة بثيم مختبر الابتكار وصناعة الشركات، لغتان، Calibri، أربعة محاور وستة مجالات استكشاف واستوديو محتوى محلي.",
    changes: [
      {
        file: "client/index.html",
        lines: "1-31",
        before: "خطوط عديدة دون عنوان نهائي",
        after:
          "هوية ووصف وبيانات مشاركة وعربية افتراضية مع الاعتماد على Calibri وبدائله",
      },
      {
        file: "client/src/App.tsx",
        lines: "1-66",
        before: "صفحة مركبة من Home وServices وAbout وContact",
        after: "واجهة عامة جديدة ومسار استوديو محلي وحالة صفحة مفقودة",
      },
      {
        file: "client/src/index.css",
        lines: "1-1746",
        before: "نسق أبيض وكحلي وذهبي سابق",
        after:
          "نظام بصري للمختبر مع Calibri، وصول وحركة مخفضة وتوافق وظيفي أساسي للشاشات الصغيرة",
      },
      {
        file: "client/src/pages/Home.tsx",
        lines: "1-487",
        before: "قسم افتتاحي تعليمي فقط",
        after:
          "رؤية ومحاور ومختبر إمكانات وتايم لاين وأثر ومشاريع ورؤى وتواصل mailto",
      },
      {
        file: "client/src/components/NeuralHero.tsx",
        lines: "1-175",
        before: "مكون أولي غير مربوط",
        after: "خريطة تفاعلية بستة مجالات ضمن مشهد بصري أصلي",
      },
      {
        file: "client/src/components/FocusAreas.tsx",
        lines: "1-71",
        before: "مكون أولي غير مربوط",
        after: "ربط المحاور الأربعة المعتمدة بنسق المختبر",
      },
      {
        file: "client/src/components/Timeline.tsx",
        lines: "1-39",
        before: "لا يوجد",
        after: "مسيرة زمنية أولية قابلة للتحرير",
      },
      {
        file: "client/src/components/ContentStudio.tsx",
        lines: "1-376",
        before: "لا يوجد",
        after: "محرر محلي للحقول وحزم JSON مع تحقق وتصدير واستيراد وحفظ",
      },
      {
        file: "client/src/components/Navigation.tsx",
        lines: "1-89",
        before: "تنقل أبيض بأربعة روابط",
        after: "تنقل داكن متجاوب ولغتان وشعار محفوظ",
      },
      {
        file: "client/src/components/Footer.tsx",
        lines: "1-56",
        before: "تذييل سابق وروابط اجتماعية غير فعالة",
        after: "تذييل رسمي وروابط تنقل وبريد واستوديو مع وسم المعاينة",
      },
      {
        file: "client/src/contexts/LanguageContext.tsx",
        lines: "1-94",
        before: "قاموس ثابت سابق",
        after: "محتوى محلي موحد وحفظ اللغة وتحديث RTL/LTR",
      },
      {
        file: "client/src/data/siteContent.ts",
        lines: "1-716",
        before: "محتوى أولي يركز على التعليم",
        after:
          "رسالة مختبر ابتكار متعدد المجالات وقاموس كامل ومؤشرات أولية وروابط قابلة للتحرير والتحقق",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-before-theme-review.png",
    screenshotAfter:
      "/home/ubuntu/webdev-static-assets/semanoor-desktop-ar.png",
    compliant: true,
    isCurrent: false,
    highlights: [
      "اعتماد المستخدم للثيم الداكن واللغتين يتقدم على أمثلة التصميم الخاصة بمشروع آخر",
      "الشعار والاسم الرسمي محفوظان",
      "لا تعديل للخادم أو قاعدة البيانات",
      "مستكشف إرشادي لا يدعي وجود نموذج AI",
      "استوديو محلي وليس حساب مدير آمناً",
      "الجوال المتخصص والنشر مؤجلان",
      "فحص الأنواع والبناء واختبارات المتصفح نجحت",
    ],
  },
  {
    id: "9458ebd0",
    date: "09/10/2026",
    time: "09:32 AM",
    description:
      "مرحلة تأسيس المحتوى والمكونات الأولية دون ربطها بالواجهة السابقة.",
    changes: [
      {
        file: "client/src/data/siteContent.ts",
        lines: "1-433",
        before: "لا يوجد مصدر موحد",
        after: "محتوى عربي وإنجليزي أولي",
      },
      {
        file: "client/src/components/NeuralHero.tsx",
        lines: "1-66",
        before: "لا يوجد",
        after: "مكون أولي غير مربوط",
      },
      {
        file: "client/src/components/FocusAreas.tsx",
        lines: "1-67",
        before: "لا يوجد",
        after: "مكون أولي للمحاور",
      },
    ],
    screenshotBefore:
      "/home/ubuntu/webdev-static-assets/semanoor-before-theme-review.png",
    screenshotAfter:
      "/home/ubuntu/screenshots/webdev-preview-root-1791527555238735379-3758.png",
    compliant: true,
    isCurrent: false,
    highlights: ["محفوظ كمرحلة أولية قبل اعتماد ثيم المختبر"],
  },
];
