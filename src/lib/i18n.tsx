import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const dict = {
  en: {
    nav: { home: "Hamza", megsy: "Megsy", contact: "Contact" },
    eyebrow: "Founder & CEO, Megsy",
    heroTitle: "Building the infrastructure for what comes next.",
    heroSub:
      "Hamza Hassan Elgzairy leads Megsy, a technology company working alongside Google, Amazon and Alibaba to bring world-class products to businesses everywhere.",
    ctaPrimary: "Discover Megsy",
    ctaSecondary: "Get in touch",
    partnersLabel: "Partnering with",
    aboutTitle: "About Hamza",
    aboutBody:
      "Hamza believes technology should be simple, useful and available to everyone. As founder and CEO of Megsy, he sets the company's direction, builds its partnerships, and focuses on products that last.",
    principles: [
      { t: "Long-term thinking", d: "Decisions made for the next decade, not the next quarter." },
      { t: "Craft over noise", d: "Fewer things, done exceptionally well." },
      { t: "Global by default", d: "Built in the region, designed for the world." },
    ],
    megsyTitle: "Megsy",
    megsySub:
      "A technology company building products and partnerships with the world's leading platforms.",
    megsyBody: [
      { t: "Partnerships", d: "Megsy works with Google, Amazon and Alibaba to deliver reliable technology at scale." },
      { t: "Products", d: "Focused, well-designed tools that help businesses grow faster." },
      { t: "Vision", d: "Connecting the Arab world to global technology — and the world to Arab talent." },
    ],
    contactTitle: "Let's build something together.",
    contactSub: "For partnerships, press and speaking requests.",
    footer: "© Megsy. All rights reserved.",
  },
  ar: {
    nav: { home: "حمزة", megsy: "ميجسي", contact: "تواصل" },
    eyebrow: "المؤسس والرئيس التنفيذي، Megsy",
    heroTitle: "نبني البنية التحتية لما هو قادم.",
    heroSub:
      "حمزة حسن الجزايري يقود Megsy، شركة تقنية تعمل جنبًا إلى جنب مع Google وAmazon وAlibaba لتقديم منتجات بمستوى عالمي للشركات في كل مكان.",
    ctaPrimary: "اكتشف Megsy",
    ctaSecondary: "تواصل معنا",
    partnersLabel: "شركاؤنا",
    aboutTitle: "عن حمزة",
    aboutBody:
      "يؤمن حمزة بأن التقنية يجب أن تكون بسيطة ومفيدة ومتاحة للجميع. بصفته المؤسس والرئيس التنفيذي لـ Megsy، يحدد اتجاه الشركة ويبني شراكاتها ويركّز على منتجات تدوم.",
    principles: [
      { t: "تفكير طويل المدى", d: "قرارات للعقد القادم، لا للربع القادم." },
      { t: "الإتقان قبل الضجيج", d: "أشياء أقل، منفّذة بشكل استثنائي." },
      { t: "عالمي بطبيعته", d: "صُنع في المنطقة، وصُمّم للعالم." },
    ],
    megsyTitle: "Megsy",
    megsySub: "شركة تقنية تبني منتجات وشراكات مع أكبر المنصات في العالم.",
    megsyBody: [
      { t: "الشراكات", d: "تعمل Megsy مع Google وAmazon وAlibaba لتقديم تقنية موثوقة على نطاق واسع." },
      { t: "المنتجات", d: "أدوات مركّزة ومصممة بعناية تساعد الشركات على النمو بسرعة." },
      { t: "الرؤية", d: "ربط العالم العربي بالتقنية العالمية — وربط العالم بالمواهب العربية." },
    ],
    contactTitle: "لنبنِ شيئًا معًا.",
    contactSub: "للشراكات والصحافة وطلبات التحدث.",
    footer: "© Megsy. جميع الحقوق محفوظة.",
  },
};

type Dict = (typeof dict)["en"];
const Ctx = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: "en",
  t: dict.en,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    const device = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
    setLangState(saved ?? (device.startsWith("ar") ? "ar" : "en"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  return <Ctx.Provider value={{ lang, t: dict[lang] as Dict, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
