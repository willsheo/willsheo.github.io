import type { SiteConfig, ThemeConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://swheo.com/",
    author: "Seonmin Will Heo",
    desc: "Personal website of Seonmin Will Heo, Ph.D. Candidate in Economics at the University of California, Santa Barbara.",
    title: "Seonmin Will Heo",
    ogImage: "/avatar.jpg",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_will",
    themeDark: "dark_will",
};
