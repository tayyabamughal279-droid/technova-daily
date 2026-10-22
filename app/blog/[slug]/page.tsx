import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <div className="container article-page">
      <nav className="breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> /{" "}
        {post.category}
      </nav>

      <header className="article-header">
        <span className="eyebrow">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="article-lead">{post.excerpt}</p>
        <div className="article-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="article-layout">
        <article className="prose">
          <p className="article-intro">{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="article-end">
            <strong>Keep exploring.</strong>
            <p>Discover more practical guides from TechNova Daily.</p>
            <Link className="button" href="/blog">
              More articles →
            </Link>
          </div>
        </article>

        <aside className="article-sidebar">
          <span className="eyebrow">IN THIS GUIDE</span>
          {post.sections.map((section, index) => (
            <div className="sidebar-item" key={section.heading}>
              <span>0{index + 1}</span>
              {section.heading}
            </div>
          ))}
          <Link className="read-link" href="/contact">
            Contact us →
          </Link>
        </aside>
      </div>
    </div>
  );
}