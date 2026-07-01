import type { SiteConfig, ThemeConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://swheo.com/",
    author: "Seonmin Will Heo",
    desc: "Personal website of Seonmin Will Heo, Associate Research Fellow at the Korea Institute for International Economic Policy (KIEP).",
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
