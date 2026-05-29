import { getCollection } from 'astro:content';

async function getTaggableCollections() {
    const publications = await getCollection('publications');
    const teaching = await getCollection('teaching');
    const book = await getCollection('book');

    return [
        ...publications.map(e => ({ ...e, collection: 'publications' })),
        ...teaching.map(e => ({ ...e, collection: 'teaching' })),
        ...book.map(e => ({ ...e, collection: 'book' })),
    ];
}

export async function getAllTags() {
    const allEntries = await getTaggableCollections();
    const tags: Record<string, number> = {};

    allEntries.forEach(entry => {
        const entryTags = (entry.data as any).tags || [];
        entryTags.forEach((tag: string) => {
            const normalizedTag = tag.trim().toLowerCase();
            if (normalizedTag) {
                tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
            }
        });
    });

    return Object.entries(tags)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getContentByTag(tag: string) {
    const normalizedSearchTag = tag.toLowerCase();
    const allEntries = await getTaggableCollections();

    const filterFn = (entry: any) => {
        const entryTags = (entry.data as any).tags || [];
        return entryTags.some((t: string) => t.toLowerCase() === normalizedSearchTag);
    };

    return allEntries.filter(filterFn).sort((a, b) => {
        const dateA = new Date((a.data as any).date || 0);
        const dateB = new Date((b.data as any).date || 0);
        return dateB.getTime() - dateA.getTime();
    });
}
