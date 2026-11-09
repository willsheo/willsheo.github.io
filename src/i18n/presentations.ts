import type { Locale } from "./pages";

export const PRESENTATION_LABELS = {
    en: { academic: "Academic Presentations", policy: "Policy Presentations", empty: "No presentations listed yet.", event: "Event", organizer: "Organizer", date: "Date", location: "Location", source: "Event information", slides: "Slides" },
    ko: { academic: "학술 발표", policy: "정책 발표", empty: "아직 등록된 발표 내역이 없습니다.", event: "행사명", organizer: "주최 기관", date: "날짜", location: "장소", source: "행사 안내", slides: "발표자료" },
    ar: { academic: "العروض الأكاديمية", policy: "عروض بحوث السياسات", empty: "لا توجد عروض مدرجة بعد.", event: "الفعالية", organizer: "الجهة المنظمة", date: "التاريخ", location: "المكان", source: "معلومات الفعالية", slides: "شرائح العرض" },
};

export interface Presentation {
    id: string;
    date: string;
    category: "academic" | "policy";
    // Set true only after verifying the facts and permission to share them.
    approvedForPublication: boolean;
    eventUrl: string;
    slidesUrl?: string;
    translations: Partial<Record<Locale, {
        title: string;
        event: string;
        organizer: string;
        location: string;
    }>>;
}

export const PRESENTATIONS: Presentation[] = [];
