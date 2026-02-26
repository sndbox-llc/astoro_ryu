// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

// 固定ページ用のコレクション（pageなど）を追加
const page = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // 固定ページは日付が不要な場合が多いので最小限に
  }),
});

export const collections = { blog, page };