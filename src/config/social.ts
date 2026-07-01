import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/willsheo",
        linkTitle: `Follow Seonmin Will Heo on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "/contact",
        linkTitle: `Contact Seonmin Will Heo`,
        isActive: true,
    },
    {
        name: "KIEP Profile",
        href: "https://www.kiep.go.kr/expertsView.es?mid=a20104000000&staff_seq=481",
        linkTitle: `Seonmin Will Heo at KIEP`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?hl=en&user=2ZlxMncAAAAJ",
        linkTitle: `Seonmin Will Heo on Google Scholar`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    "KIEP Profile": "KIEP",
    "Google Scholar": "GoogleScholar",
};
