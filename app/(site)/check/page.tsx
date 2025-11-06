import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, listPageSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await listPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { mdx, meta } = await getMdxBySlug(params.slug);
  return (
    <article className="prose prose-invert max-w-3xl">
      <h1>{meta.title ?? params.slug.at(-1)}</h1>
      <MDXRemote source={mdx.compiledSource} />
    </article>
  );
}