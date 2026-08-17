export type Locale = "en" | "ko";

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
};

export interface LocalizedProfileContent {
    name: string;
    institution: string;
    title: string;
    avatarAlt: string;
    kiepProfileUrl: string;
    kiepProfileLabel: string;
}

export const LOCALIZED_PROFILE: Record<"ko", LocalizedProfileContent> = {
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
    Record<LocalizedPageKey, LocalizedPageContent>
> = {
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
            body: [],
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
    return LOCALIZED_PAGES[locale][page];
}

export function getAlternateLocale(locale: Locale): Locale {
    return locale === "ko" ? "en" : "ko";
}

export function getLocaleFromPath(pathname: string): Locale {
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
        locale === "ko"
            ? normalizedPath.replace(/^\/ko\/?/, "/")
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
