import Link from "next/link";
import { posts } from "@/lib/posts";

export const instant = false;

export const metadata = {
  title: "All Articles",
  description: "Browse practical guides to AI, software, cybersecurity, and everyday technology.",
};

type BlogPageProps = { searchParams: Promise<{ category?: string }> };

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const visiblePosts = category ? posts.filter((post) => post.category === category) : posts;

  return (
    <div className="container standard-page">
      <span className="eyebrow">THE TECHNOVA LIBRARY</span>
      <h1>Explore our articles.</h1>
      <p className="page-lead">Practical explanations and step-by-step guides for your digital life. Choose a topic or browse the full library.</p>
      <nav className="category-chips listing-filters" aria-label="Filter articles by topic">
        <Link className={!category ? "active" : ""} href="/blog">All articles <span>{posts.length}</span></Link>
        {categories.map((item) => (
          <Link className={category === item ? "active" : ""} href={`/blog?category=${encodeURIComponent(item)}`} key={item}>
            {item} <span>{posts.filter((post) => post.category === item).length}</span>
          </Link>
        ))}
      </nav>
      <p className="results-count" aria-live="polite">Showing {visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}</p>
      <div className="listing">
        {visiblePosts.map((post) => (
          <article className="listing-item" key={post.slug}>
            <div className="listing-top"><span className="eyebrow">{post.category}</span><span>{post.readTime}</span></div>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
            <Link className="read-link" href={`/blog/${post.slug}`}>Read article →</Link>
          </article>
        ))}
      </div>
      {visiblePosts.length === 0 && <p>No articles found in this category.</p>}
    </div>
  );
}
