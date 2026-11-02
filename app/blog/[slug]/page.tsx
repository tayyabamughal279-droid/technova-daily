import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <div className="container article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {post.category}
      </nav>

      <header className="article-header">
        <span className="eyebrow">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="article-lead">{post.excerpt}</p>
        <div className="article-meta">
          <span>Published: {post.date}</span>
          <span>{post.readTime}</span>
          <span>Publisher: TechNova Daily</span>
        </div>
      </header>

      <div className="article-layout">
        <article className="prose">
          <p className="article-intro">{post.intro}</p>

          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="article-end">
            <strong>Important note</strong>
            <p>
              Software features and technical instructions can change. Check
              the relevant provider's current documentation before relying on
              details that may have changed. If you notice an error in this
              guide, please send the article title and details through our
              contact form.
            </p>
            <Link className="button" href="/contact">Suggest a correction →</Link>
          </div>
          <p className="text-sm">
            <Link href="/blog">Browse more TechNova Daily articles →</Link>
          </p>
        </article>

        <aside className="article-sidebar">
          <span className="eyebrow">IN THIS GUIDE</span>
          {post.sections.map((section, index) => (
            <div className="sidebar-item" key={section.heading}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.heading}
            </div>
          ))}
          <Link className="read-link" href="/contact">Contact us →</Link>
        </aside>
      </div>
    </div>
  );
}
