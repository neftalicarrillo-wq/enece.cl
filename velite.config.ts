import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  collections: {
    posts: {
      name: "Post",
      pattern: "blog/**/*.mdx",
      schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999),
        date: s.isodate(),
        tags: s.array(s.string()).default([]),
        published: s.boolean().default(true),
        content: s.mdx(),
      }),
    },
    projects: {
      name: "Project",
      pattern: "projects/**/*.mdx",
      schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999),
        tags: s.array(s.string()).default([]),
        url: s.string().optional(),
        featured: s.boolean().default(false),
        content: s.mdx(),
      }),
    },
  },
});
