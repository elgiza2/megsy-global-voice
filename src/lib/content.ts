import type { Lang } from './i18n';

const content = {
  en: {
    name: 'Hamza Hassan Elgzairy', shortName: 'Hamza', role: 'CEO · Megsy AI',
    nav: { about: 'About', company: 'Megsy AI', contact: 'Contact' },
    heroLine: 'A clearer way to build.', heroBody: 'Company leadership. Artificial intelligence. A focus on what comes next.',
    discover: 'Explore Megsy AI', aboutLink: 'About Hamza', scroll: 'Ideas into direction',
    aboutLabel: '01 / About', aboutTitle: 'The person behind\nthe direction.',
    biography: 'I’m Hamza Hassan Elgzairy, CEO of Megsy AI. This is where my work in technology and company leadership comes together.',
    biographyMore: 'Megsy AI brings tools for creation, development and AI-assisted work into a shared environment. My focus is the direction of the company and the opportunities ahead.',
    perspective: 'A perspective on building', principles: [
      { title: 'Clarity first.', body: 'Start with the problem. Give every idea a clear purpose before adding complexity.' },
      { title: 'Useful by design.', body: 'Technology matters when it helps people do meaningful work.' },
      { title: 'Think beyond today.', body: 'Build a direction that can evolve, rather than chasing the next headline.' },
    ],
    companyLabel: '02 / The company', companyTitle: 'One name.\nMore possibilities.',
    companyIntro: 'Megsy AI brings together artificial intelligence, content creation and software development.',
    companyMore: 'Its EgyptInnovate profile describes an integrated workspace for developers, creators and professionals, based in Cairo, Egypt.',
    productLabel: 'The ecosystem', productTitle: 'Explore the work.', productSub: 'Product descriptions below reflect Megsy’s public pages and ecosystem listing.',
    products: [
      { name: 'Megsy AI', tag: 'Workspace', symbol: 'spark', title: 'Ideas, connected.', body: 'A workspace bringing together AI-assisted production, coding and content creation.', url: 'https://www.megsyai.com/', domain: 'megsyai.com' },
      { name: 'Megsy Studio', tag: 'Creation platform', symbol: 'code', title: 'From prompt to creation.', body: 'The creation platform advertises chat, image and video generation, plus coding tools.', url: 'https://api.megsyai.com/', domain: 'api.megsyai.com' },
      { name: 'Megsy Bot', tag: 'Customer support', symbol: 'chat', title: 'A conversation, continued.', body: 'A customizable AI support chatbot for websites, with brand styling, context settings and voice features.', url: 'https://bot.megsyai.com/', domain: 'bot.megsyai.com' },
    ],
    sourcesLabel: 'Public sources', sourceNote: 'Company information is drawn from the sources below. Product descriptions are not independent performance claims.',
    sources: [ { name: 'EgyptInnovate · Company profile', url: 'https://egyptinnovate.com/en/entities/profile/megsyai' }, { name: 'Megsy Bot · Product website', url: 'https://bot.megsyai.com/' }, { name: 'Megsy AI · Creation platform', url: 'https://api.megsyai.com/' } ],
    contactLabel: 'Start a conversation', contactTitle: 'Good ideas start\nwith a conversation.', contactBody: 'For Megsy AI product and support enquiries.', contactButton: 'Contact Megsy AI', support: 'Company support', backTop: 'Back to top', footer: 'Hamza Hassan Elgzairy · Megsy AI',
    companyHero: 'Megsy AI', companyHeroBody: 'A connected space for AI, creation and development.', location: 'Cairo, Egypt', founderLabel: 'Leadership', founderTitle: 'Hamza Hassan\nElgzairy', founderBody: 'CEO of Megsy AI. Working at the intersection of company leadership and technology.', personalSite: 'Meet Hamza',
  },
  ar: {
    name: 'حمزة حسن الجزايري', shortName: 'Hamza', role: 'الرئيس التنفيذي · Megsy AI',
    nav: { about: 'عن حمزة', company: 'Megsy AI', contact: 'تواصل' },
    heroLine: 'رؤية أوضح.\nلبناء القادم.', heroBody: 'قيادة الشركات. الذكاء الاصطناعي. والاهتمام بما يستحق أن نبنيه.',
    discover: 'اكتشف Megsy AI', aboutLink: 'عن حمزة', scroll: 'من الفكرة إلى الاتجاه',
    aboutLabel: '01 / عن حمزة', aboutTitle: 'الشخص وراء\nاتجاه الشركة.',
    biography: 'أنا حمزة حسن الجزايري، الرئيس التنفيذي لشركة Megsy AI. هنا تلتقي تجربتي في قيادة الشركة باهتمامي بالتكنولوجيا.',
    biographyMore: 'تجمع Megsy AI أدوات صناعة المحتوى والتطوير والعمل بالذكاء الاصطناعي في بيئة مشتركة. ينصبّ اهتمامي على اتجاه الشركة والفرص القادمة.',
    perspective: 'نظرة إلى البناء', principles: [
      { title: 'الوضوح أولًا.', body: 'نبدأ من المشكلة. لكل فكرة هدف واضح قبل إضافة المزيد من التعقيد.' },
      { title: 'الفائدة هي الأساس.', body: 'قيمة التكنولوجيا فيما تساعد الناس على إنجازه فعلًا.' },
      { title: 'نفكر أبعد من اليوم.', body: 'نبني اتجاهًا قابلًا للتطور، بدلًا من ملاحقة العنوان التالي.' },
    ],
    companyLabel: '02 / الشركة', companyTitle: 'اسم واحد.\nإمكانات أوسع.',
    companyIntro: 'تجمع Megsy AI بين الذكاء الاصطناعي وصناعة المحتوى وتطوير البرمجيات.',
    companyMore: 'يصف ملف الشركة على EgyptInnovate مساحة عمل متكاملة للمطورين وصنّاع المحتوى والمحترفين، ومقرها القاهرة، مصر.',
    productLabel: 'منظومة Megsy', productTitle: 'تعرّف على المنتجات.', productSub: 'الأوصاف التالية مستندة إلى صفحات Megsy العامة وملفها على EgyptInnovate.',
    products: [
      { name: 'Megsy AI', tag: 'مساحة العمل', symbol: 'spark', title: 'الأفكار، في مكان واحد.', body: 'مساحة تجمع أدوات الإنتاج والبرمجة وصناعة المحتوى بمساعدة الذكاء الاصطناعي.', url: 'https://www.megsyai.com/', domain: 'megsyai.com' },
      { name: 'Megsy Studio', tag: 'منصة الإنشاء', symbol: 'code', title: 'من الطلب إلى الإبداع.', body: 'تقدّم المنصة نفسها كمساحة للمحادثة وتوليد الصور والفيديو وأدوات البرمجة.', url: 'https://api.megsyai.com/', domain: 'api.megsyai.com' },
      { name: 'Megsy Bot', tag: 'خدمة العملاء', symbol: 'chat', title: 'محادثة لا تنقطع.', body: 'بوت دعم بالذكاء الاصطناعي للمواقع، مع تخصيص الهوية وإعداد السياق وإمكانات صوتية.', url: 'https://bot.megsyai.com/', domain: 'bot.megsyai.com' },
    ],
    sourcesLabel: 'مصادر المعلومات', sourceNote: 'معلومات الشركة مأخوذة من المصادر التالية. أوصاف المنتجات لا تمثّل تقييمًا مستقلًا لأدائها.',
    sources: [ { name: 'EgyptInnovate · ملف الشركة', url: 'https://egyptinnovate.com/en/entities/profile/megsyai' }, { name: 'Megsy Bot · موقع المنتج', url: 'https://bot.megsyai.com/' }, { name: 'Megsy AI · منصة الإنشاء', url: 'https://api.megsyai.com/' } ],
    contactLabel: 'نفتح باب الحوار', contactTitle: 'الأفكار الجيدة تبدأ\nبمحادثة.', contactBody: 'للاستفسار عن منتجات Megsy AI وخدمات الدعم.', contactButton: 'تواصل مع Megsy AI', support: 'دعم الشركة', backTop: 'إلى الأعلى', footer: 'حمزة حسن الجزايري · Megsy AI',
    companyHero: 'Megsy AI', companyHeroBody: 'مساحة تجمع الذكاء الاصطناعي والإبداع والتطوير.', location: 'القاهرة، مصر', founderLabel: 'قيادة الشركة', founderTitle: 'حمزة حسن\nالجزايري', founderBody: 'الرئيس التنفيذي لشركة Megsy AI. يجمع عمله بين قيادة الشركة والتكنولوجيا.', personalSite: 'تعرّف على حمزة',
  },
};
export const getContent = (lang: Lang) => content[lang];
