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
    body: string[];
}

export const LANGUAGE_LABELS: Record<Locale, string> = {
    en: "English",
    ko: "한국어",
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
            body: ["한국어 소개 페이지를 준비 중입니다."],
        },
        publications: {
            title: "연구",
            path: "/ko/publications/",
            status: "draft",
            body: ["한국어 연구 페이지를 준비 중입니다."],
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
            body: ["한국어 강의 페이지를 준비 중입니다."],
        },
        cv: {
            title: "이력서",
            path: "/ko/cv/",
            status: "draft",
            body: ["한국어 이력서 페이지를 준비 중입니다."],
        },
        contact: {
            title: "연락처",
            path: "/ko/contact/",
            status: "draft",
            body: ["한국어 연락처 페이지를 준비 중입니다."],
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
