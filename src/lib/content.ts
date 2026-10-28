import type { Lang } from './i18n';
import { goodFirmsListing } from './company-facts';
import { getEditorial } from './editorial';

const content = {
  en: {
    listingNote: `Megsy appeared as listing ${goodFirmsListing.position} on GoodFirms’ Cloud Computing Companies in Egypt page on October 28, 2026. This is its visible list position, not a fourth-place ranking among all Egyptian companies; directory order may change.`,
    listingUrl: goodFirmsListing.url,
    name: 'Hamza Hassan Elgzairy', shortName: 'Hamza', role: 'CEO · Megsy LLC',
    nav: { about: 'About', company: 'Megsy LLC', contact: 'Contact' },
    heroLine: 'A clearer way to build.', heroBody: 'I’m Hamza Hassan Elgzairy, CEO of Megsy LLC. This is a space for my perspective on leadership, technology and the company we are building.',
    discover: 'About Megsy LLC', aboutLink: 'About Hamza', scroll: 'Ideas into direction',
    aboutLabel: '01 / About', aboutTitle: 'Hamza Hassan Elgzairy.',
    biography: 'I’m Hamza Hassan Elgzairy, CEO of Megsy LLC. My focus is the company’s direction: connecting an ambition for technology with clear priorities and useful work.',
    biographyMore: 'This website presents the person and the company behind the product. Megsy LLC is the company; Megsy AI is its currently active offering. The company’s story is broader than a list of product features.',
    perspective: 'A perspective on building', principles: [
      { title: 'Clarity first.', body: 'Start with the problem. Give every idea a clear purpose before adding complexity.' },
      { title: 'Useful by design.', body: 'Technology matters when it helps people do meaningful work.' },
      { title: 'Think beyond today.', body: 'Build a direction that can evolve, rather than chasing the next headline.' },
    ],
    companyLabel: '02 / The company', companyTitle: 'One unified AI workspace.',
    companyIntro: 'One unified workspace for AI chat, coding, image creation and document handling.',
    companyMore: 'Megsy’s GoodFirms profile describes bringing generative AI workflows, automation and team collaboration into a single screen, instead of switching between separate apps. Its creation platform advertises websites, video, images and code, Only Megsy AI is currently active; its customer-support service is paused.',
    productLabel: 'The ecosystem', productTitle: 'Explore the work.', productSub: 'Explore the tools within Megsy AI.',
    products: [
      { name: 'Megsy AI', tag: 'Workspace', symbol: 'spark', title: 'Websites and code.', body: 'Megsy’s creation-platform page describes building websites and generating code from prompts.', url: 'https://api.megsyai.com/', domain: 'api.megsyai.com' },
      { name: 'Megsy AI', tag: 'Images, video & chat', symbol: 'code', title: 'Images, video and chat.', body: 'The same creation platform advertises image and video generation, plus AI chat with file uploads, web search and memory.', url: 'https://api.megsyai.com/', domain: 'api.megsyai.com' },
      { name: 'Megsy AI', tag: 'Chat & documents', symbol: 'chat', title: 'Chat, documents and workflows.', body: 'Megsy’s GoodFirms profile describes AI chat, document handling, automation and team collaboration in the same workspace.', url: 'https://www.megsyai.com/', domain: 'megsyai.com' },
    ],
    sourcesLabel: 'Public sources', sourceNote: 'Company information is drawn from the sources below. Product descriptions are not independent performance claims.',
    sources: [ { name: 'GoodFirms · Megsy company profile', url: 'https://www.goodfirms.co/company/megsy' }, { name: 'GoodFirms · Egypt cloud directory', url: 'https://www.goodfirms.co/cloud-computing-companies/egypt' }, { name: 'Megsy AI · Creation platform', url: 'https://api.megsyai.com/' } ],
    contactLabel: 'Start a conversation', contactTitle: 'Good ideas start\nwith a conversation.', contactBody: 'Explore the active Megsy AI platform.', contactButton: 'Visit Megsy AI', support: 'Company support', backTop: 'Back to top', footer: 'Hamza Hassan Elgzairy · Megsy LLC',
    galleryLabel: 'Hamza', galleryTitle: 'In conversation. At work.', conferenceCaption: 'Conference setting', meetingCaption: 'Meeting setting', photoNote: 'Images edited from Hamza’s original photograph; the settings are imagined, not documentation of real events.', availability: 'Only Megsy AI is currently active, as confirmed by the company’s CEO. The customer-support service is paused. Descriptions reflect public company profiles, not independent performance tests.',
    companyHero: 'Megsy LLC', companyHeroBody: 'The company behind Megsy AI. A direction shaped by leadership, technology and useful creation.', location: 'Megsy AI', founderLabel: 'Leadership', founderTitle: 'Hamza Hassan\nElgzairy', founderBody: 'CEO of Megsy LLC. Working at the intersection of company leadership and technology.', personalSite: 'Meet Hamza',
  },
  ar: {
    listingNote: `ظهرت Megsy في الموضع ${goodFirmsListing.position} بقائمة GoodFirms لشركات الحوسبة السحابية في مصر عند مراجعتها يوم 28 أكتوبر 2026. ده ترتيب الظهور في القائمة، وليس تصنيف رابع شركة في مصر عمومًا، وقد يتغير ترتيب الدليل.`,
    listingUrl: goodFirmsListing.url,
    name: 'حمزة حسن الجزايري', shortName: 'Hamza', role: 'الرئيس التنفيذي · Megsy LLC',
    nav: { about: 'عن حمزة', company: 'Megsy LLC', contact: 'تواصل' },
    heroLine: 'رؤية أوضح.\nلبناء القادم.', heroBody: 'أنا حمزة حسن الجزايري، الرئيس التنفيذي لشركة Megsy LLC. هنا أشارك رؤيتي في القيادة والتكنولوجيا والاتجاه الذي نبنيه للشركة.',
    discover: 'عن شركة Megsy LLC', aboutLink: 'عن حمزة', scroll: 'من الفكرة إلى الاتجاه',
    aboutLabel: '01 / عن حمزة', aboutTitle: 'حمزة حسن الجزايري.',
    biography: 'أنا حمزة حسن الجزايري، الرئيس التنفيذي لشركة Megsy LLC. ينصبّ اهتمامي على اتجاه الشركة: تحويل الطموح في التكنولوجيا إلى أولويات واضحة وعمل له قيمة.',
    biographyMore: 'هذا الموقع عن الشخص والشركة وراء المنتج. Megsy LLC هي الشركة، وMegsy AI هو منتجها المتاح حاليًا. وحكاية الشركة أوسع من مجرد قائمة بإمكانات المنتج.',
    perspective: 'نظرة إلى البناء', principles: [
      { title: 'الوضوح أولًا.', body: 'نبدأ من المشكلة. لكل فكرة هدف واضح قبل إضافة المزيد من التعقيد.' },
      { title: 'الفائدة هي الأساس.', body: 'قيمة التكنولوجيا فيما تساعد الناس على إنجازه فعلًا.' },
      { title: 'نفكر أبعد من اليوم.', body: 'نبني اتجاهًا قابلًا للتطور، بدلًا من ملاحقة العنوان التالي.' },
    ],
    companyLabel: '02 / الشركة', companyTitle: 'مساحة عمل واحدة بالذكاء الاصطناعي.',
    companyIntro: 'مساحة عمل موحّدة للمحادثة والبرمجة وإنشاء الصور والتعامل مع المستندات بالذكاء الاصطناعي.',
    companyMore: 'يصف ملف Megsy على GoodFirms جمع أدوات الذكاء الاصطناعي والأتمتة وتعاون الفريق في شاشة واحدة بدل التنقل بين تطبيقات منفصلة. وتعلن منصة الإنشاء عن المواقع والفيديو والصور والبرمجة، والمتاح حاليًا هو Megsy AI فقط، بينما خدمة العملاء متوقفة.',
    productLabel: 'منظومة Megsy', productTitle: 'تعرّف على المنتجات.', productSub: 'أدوات Megsy AI داخل مساحة عمل واحدة.',
    products: [
      { name: 'Megsy AI', tag: 'مساحة العمل', symbol: 'spark', title: 'المواقع والبرمجة.', body: 'تصف صفحة منصة Megsy إنشاء المواقع وتوليد الكود من خلال الطلبات النصية.', url: 'https://api.megsyai.com/', domain: 'api.megsyai.com' },
      { name: 'Megsy AI', tag: 'الصور والفيديو والمحادثة', symbol: 'code', title: 'الصور والفيديو والمحادثة.', body: 'تعلن منصة الإنشاء نفسها عن توليد الصور والفيديو، ومحادثة بالذكاء الاصطناعي تدعم رفع الملفات والبحث على الويب والذاكرة.', url: 'https://api.megsyai.com/', domain: 'api.megsyai.com' },
      { name: 'Megsy AI', tag: 'المحادثة والمستندات', symbol: 'chat', title: 'المحادثة والمستندات وسير العمل.', body: 'يصف ملف Megsy على GoodFirms المحادثة بالذكاء الاصطناعي والتعامل مع المستندات والأتمتة وتعاون الفريق في مساحة عمل واحدة.', url: 'https://www.megsyai.com/', domain: 'megsyai.com' },
    ],
    sourcesLabel: 'مصادر المعلومات', sourceNote: 'معلومات الشركة مأخوذة من المصادر التالية. أوصاف المنتجات لا تمثّل تقييمًا مستقلًا لأدائها.',
    sources: [ { name: 'GoodFirms · ملف شركة Megsy', url: 'https://www.goodfirms.co/company/megsy' }, { name: 'GoodFirms · دليل الحوسبة السحابية في مصر', url: 'https://www.goodfirms.co/cloud-computing-companies/egypt' }, { name: 'Megsy AI · منصة الإنشاء', url: 'https://api.megsyai.com/' } ],
    contactLabel: 'نفتح باب الحوار', contactTitle: 'الأفكار الجيدة تبدأ\nبمحادثة.', contactBody: 'اكتشف منصة Megsy AI المتاحة حاليًا.', contactButton: 'زيارة Megsy AI', support: 'دعم الشركة', backTop: 'إلى الأعلى', footer: 'حمزة حسن الجزايري · Megsy LLC',
    galleryLabel: 'حمزة', galleryTitle: 'في الحوار والعمل.', conferenceCaption: 'مشهد مؤتمر', meetingCaption: 'مشهد اجتماع', photoNote: 'صور معدّلة من صورة حمزة الأصلية؛ الأماكن متخيّلة وليست توثيقًا لفعاليات حقيقية.', availability: 'المتاح حاليًا هو Megsy AI فقط، وفقًا لتأكيد الرئيس التنفيذي للشركة، وخدمة العملاء متوقفة. الأوصاف مستندة إلى ملفات الشركة العامة وليست تقييمًا مستقلًا للأداء.',
    companyHero: 'Megsy LLC', companyHeroBody: 'الشركة وراء Megsy AI. اتجاه يجمع بين القيادة والتكنولوجيا وبناء ما له قيمة.', location: 'Megsy AI', founderLabel: 'قيادة الشركة', founderTitle: 'حمزة حسن\nالجزايري', founderBody: 'الرئيس التنفيذي لشركة Megsy LLC. يجمع عمله بين قيادة الشركة والتكنولوجيا.', personalSite: 'تعرّف على حمزة',
  },
};
export const getContent = (lang: Lang) => ({ ...content[lang], ...getEditorial(lang) });
