import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";

export type PageMeta = { title?: string; description?: string; date?: string };

const PAGES_DIR = path.join(process.cwd(), "content/pages");

export async function getMdxBySlug(slug: string[]) {
  const file = path.join(PAGES_DIR, `${slug.join("/")}.mdx`);
  const raw = await fs.readFile(file, "utf8");
  const { content, data } = matter(raw);
  const mdx = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeAutolink] },
    parseFrontmatter: false,
  });
  return { mdx, meta: data as PageMeta };
}

export async function listPageSlugs(): Promise<string[][]> {
  async function walk(dir: string, prefix: string[] = []) {
    const out: string[][] = [];
    for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
      if (ent.isDirectory()) out.push(...(await walk(path.join(dir, ent.name), [...prefix, ent.name])));
      else if (ent.name.endsWith(".mdx")) out.push([...prefix, ent.name.replace(/\.mdx$/, "")]);
    }
    return out;
  }
  try { return await walk(PAGES_DIR); } catch { return []; }
}
