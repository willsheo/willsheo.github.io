import { UAE_POLICY_PUBLICATION } from "./policy";

export type Locale = "en" | "ko" | "ar";

export const RESEARCH_SECTIONS = {
    ar: { academic: "البحوث الأكاديمية", policy: "بحوث السياسات", policyEmpty: "لا توجد منشورات مدرجة حاليًا." },
    en: {
        academic: "Academic Research",
        policy: "Policy Research",
        policyEmpty: "No policy publications listed yet.",
    },
    ko: {
        academic: "학술연구",
        policy: "정책연구",
        policyEmpty: "아직 등록된 정책연구 발간물이 없습니다.",
    },
} satisfies Record<Locale, { academic: string; policy: string; policyEmpty: string }>;

export type LocalizedPageKey =
    | "home"
    | "publications"
    | "book"
    | "teaching"
    | "cv"
    | "contact";

export interface LocalizedPageContent {
    title: string;
    path: string;
    status: "draft" | "published";
    description?: string;
    body: string[];
    facts?: Array<{
        label: string;
        value: string | string[];
    }>;
    links?: Array<{
        label: string;
        href: string;
    }>;
}

export const LANGUAGE_LABELS: Record<Locale, string> = {
    en: "English",
    ko: "한국어",
    ar: "العربية",
};

export interface LocalizedProfileContent {
    name: string;
    institution: string;
    title: string;
    avatarAlt: string;
    kiepProfileUrl: string;
    kiepProfileLabel: string;
}

export const LOCALIZED_PROFILE: Record<"ko" | "ar", LocalizedProfileContent> = {
    ar: {
        name: "سون مين حو",
        institution: "معهد كوريا للسياسات الاقتصادية الدولية (KIEP)",
        title: "زميل باحث مشارك",
        avatarAlt: "صورة سون مين حو",
        kiepProfileUrl: "https://www.kiep.go.kr/expertsView.es?mid=a20104000000&staff_seq=481",
        kiepProfileLabel: "الملف الشخصي لدى KIEP باللغة الإنجليزية",
    },
    ko: {
        name: "허선민",
        institution: "대외경제정책연구원(KIEP)",
        title: "부연구위원",
        avatarAlt: "허선민의 프로필 사진",
        kiepProfileUrl:
            "https://www.kiep.go.kr/expertsView.es?mid=a10406000000&staff_seq=481",
        kiepProfileLabel: "허선민 KIEP 프로필",
    },
};

export const LOCALIZED_PAGES: Record<
    Locale,
    Partial<Record<LocalizedPageKey, LocalizedPageContent>>
> = {
    ar: {
        home: {
            title: "نبذة عني", path: "/ar/", status: "draft",
            description: "سون مين حو، زميل باحث مشارك في معهد كوريا للسياسات الاقتصادية الدولية (KIEP)، متخصص في اقتصاد الشرق الأوسط والاقتصاد البيئي.",
            body: [
                "أعمل كزميل باحث مشارك في معهد كوريا للسياسات الاقتصادية الدولية (KIEP)، حيث أتولى مسؤولية البحوث الاقتصادية المتعلقة بالشرق الأوسط. وتتناول أبحاثي كيفية استجابة الأسواق والأسر للصدمات البيئية، بما في ذلك الكوارث الطبيعية والمخاطر المناخية والتلوث العابر للحدود.",
            ],
            links: [{ label: "تحميل السيرة الذاتية بالإنجليزية (PDF)", href: "/files/CV.pdf" }],
        },
        publications: { title: "البحوث", path: "/ar/publications/", status: "draft", description: "البحوث الأكاديمية وبحوث السياسات لسون مين حو.", body: [] },
        teaching: {
            title: "التدريس", path: "/ar/teaching/", status: "draft", body: [],
            facts: [
                { label: "مجالات التدريس", value: "الاقتصاد، والاقتصاد القياسي، والإحصاء، والاقتصاد البيئي" },
                { label: "المقررات", value: "الإحصاء الاقتصادي، ومقدمة في الاقتصاد القياسي (١ و٢)، والاقتصاد البيئي، والاقتصاد الجزئي المتوسط، ومبادئ الاقتصاد الجزئي، ودورة الرياضيات التحضيرية لطلاب الدكتوراه في الاقتصاد" },
                { label: "شهادة التدريس", value: "شهادة التدريس في الكليات والجامعات (CCUT)، جامعة كاليفورنيا، سانتا باربرا" },
            ],
        },
        book: { title: "الكتاب", path: "/ar/book/", status: "draft", body: [], links: [{ label: "The Counterfactual (بالإنجليزية)", href: "/book/the-counterfactual/" }] },
        contact: {
            title: "التواصل", path: "/ar/contact/", status: "draft",
            body: ["أرحب بالتواصل مع الباحثين والأكاديميين وصنّاع السياسات في منطقة الشرق الأوسط وشمال أفريقيا. ونسعى في معهد كوريا للسياسات الاقتصادية الدولية (KIEP) إلى تعزيز الروابط مع الجامعات والمؤسسات البحثية في مختلف أنحاء المنطقة. ومن خلال الندوات والمؤتمرات التي ننظمها في كوريا والمنطقة، نجمع بين الأوساط الأكاديمية ودوائر صنع السياسات لتبادل الأفكار واستكشاف فرص التعاون. يسعدني تواصلكم."],
            facts: [{ label: "البريد الإلكتروني", value: "sheo@kiep.go.kr" }],
        },
    },
    en: {
        home: {
            title: "About",
            path: "/",
            status: "published",
            body: [],
        },
        publications: {
            title: "Research",
            path: "/publications/",
            status: "published",
            body: [],
        },
        book: {
            title: "Book",
            path: "/book/",
            status: "published",
            body: [],
        },
        teaching: {
            title: "Teaching",
            path: "/teaching/",
            status: "published",
            body: [],
        },
        cv: {
            title: "Curriculum Vitae",
            path: "/cv/",
            status: "published",
            body: [],
        },
        contact: {
            title: "Contact",
            path: "/contact/",
            status: "published",
            body: ["I welcome opportunities to connect with researchers, scholars, and policymakers across the Middle East and North Africa (MENA). At KIEP, we seek to strengthen ties with universities and research institutes throughout the region. Through seminars and conferences in Korea and the region, we bring together academic and policy communities to exchange ideas and explore opportunities for collaboration. I look forward to hearing from you."],
        },
    },
    ko: {
        home: {
            title: "소개",
            path: "/ko/",
            status: "draft",
            description:
                "대외경제정책연구원(KIEP) 부연구위원 허선민의 개인 웹사이트입니다.",
            body: [],
            facts: [
                {
                    label: "소속",
                    value: "대외경제정책연구원(KIEP)",
                },
                {
                    label: "직위",
                    value: "부연구위원",
                },
                {
                    label: "연구 분야",
                    value: ["중동지역", "환경경제학"],
                },
            ],
        },
        publications: {
            title: "연구",
            path: "/ko/publications/",
            status: "draft",
            description: "허선민의 연구 목록입니다.",
            body: [],
        },
        book: {
            title: "책",
            path: "/ko/book/",
            status: "draft",
            body: ["한국어 책 페이지를 준비 중입니다."],
        },
        teaching: {
            title: "강의",
            path: "/ko/teaching/",
            status: "draft",
            description:
                "허선민의 강의 경험과 Certificate in College and University Teaching (CCUT) 정보입니다.",
            body: [],
            facts: [
                {
                    label: "강의 분야",
                    value: "경제학 · 계량경제학 · 통계학 · 환경경제학",
                },
                {
                    label: "주요 과목",
                    value: "경제통계학 · 계량경제학 입문 I·II · 환경경제학 · 중급미시경제학 · 미시경제학 원론 · 경제학 박사과정 수학 캠프",
                },
                {
                    label: "교수법 인증",
                    value: "Certificate in College and University Teaching (CCUT), UC Santa Barbara",
                },
            ],
        },
        cv: {
            title: "이력서",
            path: "/ko/cv/",
            status: "published",
            description: "대외경제정책연구원(KIEP) 부연구위원 허선민의 국문 이력서입니다.",
            body: ["이력서는 아래 링크에서 확인하실 수 있습니다."],
            links: [
                { label: "국문 이력서 (PDF)", href: "/files/CV_ko.pdf" },
                { label: "영문 이력서 (PDF)", href: "/files/CV.pdf" },
            ],
        },
        contact: {
            title: "연락처",
            path: "/ko/contact/",
            status: "published",
            body: [],
            facts: [{ label: "이메일", value: "sheo@kiep.go.kr" }],
        },
    },
};

export function getLocalizedPage(
    locale: Locale,
    page: LocalizedPageKey,
): LocalizedPageContent {
    const content = LOCALIZED_PAGES[locale][page];
    if (!content) throw new Error(`Missing localized page: ${locale}/${page}`);
    return content;
}

export function getLanguageLinks(pathname: string) {
    const current = getLocaleFromPath(pathname);
    const page = getPageKeyFromPath(current, pathname);
    const isPolicySummary = [UAE_POLICY_PUBLICATION.summaryUrl, UAE_POLICY_PUBLICATION.ar.summaryUrl]
        .includes(ensureTrailingSlash(pathname));
    return (Object.keys(LANGUAGE_LABELS) as Locale[])
        .filter((locale) => locale !== current && LOCALIZED_PAGES[locale][page])
        .map((locale) => ({
            locale,
            label: LANGUAGE_LABELS[locale],
            href: isPolicySummary && locale === "ar" ? UAE_POLICY_PUBLICATION.ar.summaryUrl
                : isPolicySummary && locale === "en" ? UAE_POLICY_PUBLICATION.summaryUrl
                : getLocalizedPage(locale, page).path,
        }));
}

export function getAlternateLocale(locale: Locale): Locale {
    return locale === "ko" ? "en" : "ko";
}

export function getLocaleFromPath(pathname: string): Locale {
    if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
    return pathname === "/ko" || pathname.startsWith("/ko/") ? "ko" : "en";
}

export function getAlternateLocalePath(pathname: string): string {
    const locale = getLocaleFromPath(pathname);
    const alternateLocale = getAlternateLocale(locale);
    const page = getPageKeyFromPath(locale, pathname);

    return getLocalizedPage(alternateLocale, page).path;
}

function getPageKeyFromPath(
    locale: Locale,
    pathname: string,
): LocalizedPageKey {
    const normalizedPath = ensureTrailingSlash(pathname);
    const exactMatch = Object.entries(LOCALIZED_PAGES[locale]).find(
        ([, page]) => page.path === normalizedPath,
    );

    if (exactMatch) {
        return exactMatch[0] as LocalizedPageKey;
    }

    const pathWithoutLocale =
        locale !== "en"
            ? normalizedPath.replace(/^\/(ko|ar)\/?/, "/")
            : normalizedPath;
    const section = pathWithoutLocale.split("/").filter(Boolean)[0];

    switch (section) {
        case "publications":
            return "publications";
        case "book":
            return "book";
        case "teaching":
            return "teaching";
        case "cv":
            return "cv";
        case "contact":
            return "contact";
        default:
            return "home";
    }
}

function ensureTrailingSlash(pathname: string): string {
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
}
