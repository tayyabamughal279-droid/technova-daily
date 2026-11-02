import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { articleEnhancements } from "@/lib/article-enhancements";

export const instant = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://technova-daily.vercel.app";

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
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "TechNova Daily",
      type: "article",
      publishedTime: "2026-10-22T00:00:00.000Z",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const enhancement = articleEnhancements[post.slug];
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-10-22",
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: "TechNova Daily" },
    publisher: { "@type": "Organization", name: "TechNova Daily" },
  };

  return (
    <div className="container article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/blog">Articles</Link> / {post.category}
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
        <article className="prose article-content">
          <p className="article-intro">{post.intro}</p>

          <section className="article-focus" aria-labelledby="key-idea">
            <h2 id="key-idea">The key idea</h2>
            <p>{enhancement.focus}</p>
          </section>

          <nav className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <ol>
              {post.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>{section.heading}</a>
                </li>
              ))}
              <li><a href="#practical-workflow">Practical workflow</a></li>
              <li><a href="#worked-example">Worked example</a></li>
              <li><a href="#final-checklist">Final checklist</a></li>
              <li><a href="#further-reading">Further reading</a></li>
            </ol>
          </nav>

          {post.sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`} className="article-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section id="practical-workflow" className="article-section">
            <h2>Practical workflow</h2>
            <p>Use this sequence as a starting point, then adapt it to your device, provider, and actual requirements.</p>
            <ol className="workflow-list">
              {enhancement.workflow.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>

          <section id="worked-example" className="article-section example-panel">
            <h2>Worked example</h2>
            <p>{enhancement.example}</p>
            <p className="example-note">This is an illustrative example to explain the method, not a claim that TechNova Daily conducted a product test or measured a result.</p>
          </section>

          <section id="final-checklist" className="article-section">
            <h2>Before you finish</h2>
            <ul className="checklist-list">
              {enhancement.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="article-section">
            <h2>Limitations to keep in mind</h2>
            <p>{enhancement.caveat}</p>
          </section>

          <section id="further-reading" className="article-section sources-panel">
            <h2>Further reading</h2>
            <p>These provider and reference resources can help you verify details and explore the topic further:</p>
            <ul>
              {enhancement.source.map(([label, url]) => (
                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a></li>
              ))}
            </ul>
          </section>

          <div className="article-end">
            <strong>Found something that needs correction?</strong>
            <p>Send us the article title and the specific detail that should be reviewed. For time-sensitive software instructions, check the linked provider documentation as well.</p>
            <Link className="button" href="/contact">Suggest a correction →</Link>
          </div>
          <p className="article-back"><Link href="/blog">← Browse all TechNova Daily articles</Link></p>
        </article>

        <aside className="article-sidebar">
          <span className="eyebrow">IN THIS GUIDE</span>
          {post.sections.map((section, index) => (
            <a className="sidebar-item" href={`#section-${index + 1}`} key={section.heading}>
              <span>{String(index + 1).padStart(2, "0")}</span>{section.heading}
            </a>
          ))}
          <a className="sidebar-item" href="#practical-workflow"><span>05</span>Practical workflow</a>
          <a className="sidebar-item" href="#final-checklist"><span>06</span>Final checklist</a>
          <Link className="read-link" href="/contact">Contact us →</Link>
        </aside>
      </div>
    </div>
  );
}
