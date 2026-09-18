import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
    schema: z.object({
        title: z.string(),
        author: z.string().optional(),
        date: z.string().optional(),
        journal: z.string().optional(),
        external_url: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const teaching = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/teaching" }),
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        institution: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        external_url: z.string().url().optional(),
    }),
});

const book = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/book" }),
    schema: z.object({
        title: z.string(),
        order: z.number(),
        label: z.string().optional(),
        description: z.string().optional(),
        date: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
    }),
});

const bio = defineCollection({
    loader: glob({ pattern: "bio.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        avatar: z.string(),
        shortBio: z.string().optional(),
        institution: z.string().optional(),
    }),
});

const cv = defineCollection({
    loader: glob({ pattern: "cv.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        experience: z.array(z.object({
            role: z.string(),
            institution: z.string(),
            period: z.string(),
            description: z.string(),
        })).optional(),
        education: z.array(z.object({
            degree: z.string(),
            institution: z.string(),
            period: z.string(),
            thesis: z.string().optional(),
            description: z.string().optional(),
        })).optional(),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        language: z.enum(["en", "ko", "ar"]),
        category: z.enum(["policy", "academic", "reflections"]),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        draft: z.boolean().default(true),
    }),
});

export const collections = {
    blog,
    'publications': publications,
    'bio': bio,
    'cv': cv,
    'teaching': teaching,
    'book': book,
};
