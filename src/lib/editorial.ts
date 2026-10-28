import type { Lang } from './i18n';

const editorial = {
  en: {
    menuAbout: 'About', menuWork: 'The work', menuPhotos: 'Photographs', menuFaq: 'Questions',
    chapter: 'Leadership / Technology / AI', heroCta: 'Meet Hamza',
    companySectionLabel: '02 / Megsy AI', companySectionTitle: 'Many ways to create. One workspace.',
    companySectionBody: 'Megsy AI brings different kinds of AI-assisted work into one place. Its public company profile describes a single-screen workspace spanning conversation, code, images and documents, alongside automation and team collaboration.',
    companySectionMore: 'The creation platform presents websites, code, images and video as parts of the same offering. These are capabilities advertised by Megsy, rather than separate active companies or independently tested results.',
    companyCta: 'Explore the company', activeLabel: 'Currently active', activeName: 'Megsy AI',
    approachLabel: '04 / The bigger picture', approachTitle: 'From a prompt to something useful.',
    approachBody: 'The common thread across Megsy’s public descriptions is creation: expressing an idea, working with AI and developing an output. The workspace spans both creative material and practical tasks, rather than presenting AI chat as the whole product.',
    approachItems: [
      { title: 'Start with an idea', body: 'The creation-platform page describes text prompts as a starting point for websites and generated code.' },
      { title: 'Work across formats', body: 'Public descriptions include images, video, conversations and uploaded files, alongside website and coding tasks.' },
      { title: 'Keep work connected', body: 'The GoodFirms profile describes document handling, automation and team collaboration within a unified workspace.' },
    ],
    faqLabel: '06 / Questions', faqTitle: 'A closer look.',
    faqs: [
      { question: 'Who is Hamza Hassan Elgzairy?', answer: 'Hamza Hassan Elgzairy is the CEO of Megsy AI. This website brings together his company leadership, the work described by Megsy and links to its public sources.' },
      { question: 'What is Megsy AI?', answer: 'Megsy’s GoodFirms profile describes a unified AI workspace for chat, coding, images, documents, automation and team collaboration. Its creation platform also advertises website, image and video generation.' },
      { question: 'Are these different products or companies?', answer: 'The capabilities shown here belong to the Megsy AI offering. Only Megsy AI is currently active, as confirmed by the CEO; the customer-support service is paused.' },
      { question: 'Is Megsy the fourth company in Egypt?', answer: 'Megsy was the fourth visible listing on GoodFirms’ Egypt cloud-computing directory on October 28, 2026. That is an observed position in a specific directory, not a general ranking of all Egyptian companies.' },
      { question: 'Are the conference and meeting photos real events?', answer: 'No. These images were edited using Hamza’s original photograph as a reference. The settings are imagined and should not be treated as evidence of conference appearances or meetings.' },
      { question: 'Where can I read more about the company?', answer: 'The sources below include Megsy’s GoodFirms company profile, the Egypt cloud-computing directory and the Megsy creation-platform website. Product capabilities are attributed to those public descriptions.' },
    ],
    photoCaptions: ['On stage', 'A quiet moment', 'In a team meeting', 'At work'],
    contactEyebrow: 'Keep exploring', contactHeading: 'Meet the work behind Megsy AI.', contactText: 'Continue to the company website for its current offering.',
  },
  ar: {
    menuAbout: 'عن حمزة', menuWork: 'أعمال الشركة', menuPhotos: 'الصور', menuFaq: 'أسئلة',
    chapter: 'القيادة / التكنولوجيا / الذكاء الاصطناعي', heroCta: 'تعرّف على حمزة',
    companySectionLabel: '02 / Megsy AI', companySectionTitle: 'أكثر من طريقة للإنشاء. مساحة عمل واحدة.',
    companySectionBody: 'تجمع Megsy AI أنواعًا مختلفة من العمل بمساعدة الذكاء الاصطناعي في مكان واحد. يصف ملف الشركة العام مساحة عمل على شاشة واحدة تشمل المحادثة والبرمجة والصور والمستندات، إلى جانب الأتمتة وتعاون الفريق.',
    companySectionMore: 'وتعرض منصة الإنشاء المواقع والبرمجة والصور والفيديو ضمن نفس المنظومة. هذه إمكانات تعلن عنها Megsy، وليست شركات مستقلة أو نتائج خضعت لاختبارات أداء مستقلة.',
    companyCta: 'تعرّف على الشركة', activeLabel: 'المتاح حاليًا', activeName: 'Megsy AI',
    approachLabel: '04 / الصورة الأوسع', approachTitle: 'من فكرة مكتوبة إلى عمل قابل للتطوير.',
    approachBody: 'الخيط المشترك في أوصاف Megsy العامة هو الإنشاء: التعبير عن فكرة، والعمل عليها بمساعدة الذكاء الاصطناعي، ثم تطوير الناتج. تجمع مساحة العمل بين المحتوى الإبداعي والمهام العملية، بدل اختزال المنتج في المحادثة وحدها.',
    approachItems: [
      { title: 'البداية من الفكرة', body: 'تصف صفحة منصة الإنشاء الطلبات النصية كنقطة بداية لإنشاء المواقع وتوليد الكود.' },
      { title: 'العمل بأكثر من صيغة', body: 'تشمل الأوصاف المنشورة الصور والفيديو والمحادثات والملفات المرفوعة، إلى جانب مهام المواقع والبرمجة.' },
      { title: 'ربط أجزاء العمل', body: 'يصف ملف GoodFirms التعامل مع المستندات والأتمتة وتعاون الفريق داخل مساحة عمل موحّدة.' },
    ],
    faqLabel: '06 / أسئلة شائعة', faqTitle: 'تفاصيل تستحق التوضيح.',
    faqs: [
      { question: 'من هو حمزة حسن الجزايري؟', answer: 'حمزة حسن الجزايري هو الرئيس التنفيذي لشركة Megsy AI. يجمع هذا الموقع بين دوره في قيادة الشركة وأعمال Megsy المعلنة وروابط مصادرها العامة.' },
      { question: 'ما هي Megsy AI؟', answer: 'يصف ملف Megsy على GoodFirms مساحة عمل موحّدة للمحادثة والبرمجة والصور والمستندات والأتمتة وتعاون الفريق. وتعلن منصة الإنشاء أيضًا عن إنشاء المواقع وتوليد الصور والفيديو.' },
      { question: 'هل المعروض منتجات أو شركات مختلفة؟', answer: 'الإمكانات المعروضة هنا ضمن منظومة Megsy AI. والمتاح حاليًا هو Megsy AI فقط وفقًا لتأكيد الرئيس التنفيذي، بينما خدمة العملاء متوقفة.' },
      { question: 'هل Megsy رابع شركة في مصر؟', answer: 'ظهرت Megsy رابع اسم في دليل GoodFirms لشركات الحوسبة السحابية في مصر يوم 28 أكتوبر 2026. هذا موضع ظهور في دليل محدد، وليس تصنيفًا عامًا لجميع الشركات المصرية.' },
      { question: 'هل صور المؤتمر والاجتماع توثّق فعاليات حقيقية؟', answer: 'لا. الصور معدّلة باستخدام صورة حمزة الأصلية كمرجع. الأماكن متخيّلة، ولا تُعد دليلًا على المشاركة في مؤتمرات أو اجتماعات فعلية.' },
      { question: 'أين أجد معلومات إضافية عن الشركة؟', answer: 'تشمل المصادر أدناه ملف Megsy على GoodFirms، ودليل شركات الحوسبة السحابية في مصر، وموقع منصة الإنشاء. أوصاف الإمكانات منسوبة إلى المعلومات المنشورة في هذه المصادر.' },
    ],
    photoCaptions: ['على المسرح', 'لحظة تفكير', 'في اجتماع مع الفريق', 'أثناء العمل'],
    contactEyebrow: 'اكتشف المزيد', contactHeading: 'تعرّف على العمل وراء Megsy AI.', contactText: 'انتقل إلى موقع الشركة للاطلاع على ما تقدّمه حاليًا.',
  },
};

export const getEditorial = (lang: Lang) => editorial[lang];