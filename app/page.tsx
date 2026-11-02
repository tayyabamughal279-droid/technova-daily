import Link from "next/link";
import { posts } from "@/lib/posts";

const categories = Array.from(new Set(posts.map((post) => post.category)));

export default function Home() {
  const featured = posts.slice(0, 6);
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">YOUR GUIDE TO THE DIGITAL WORLD</span>
          <h1>Understand technology.<br /><span>Make it work for you.</span></h1>
          <p>Practical guides to AI tools, useful software, and everyday technology — explained clearly, one step at a time.</p>
          <Link className="button" href="/blog">Explore all guides <span>→</span></Link>
          <div className="hero-note"><span className="pulse" /> Straightforward guides. Practical ideas.</div>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orbit-center">T<span>N</span></div>
          <div className="float-card float-one">AI &amp; Tools ↗</div>
          <div className="float-card float-two">Learn something new.</div>
        </div>
      </section>

      <section className="container intro-strip">
        <div><span className="eyebrow">WELCOME TO TECHNOVA DAILY</span><h2>Technology should feel useful, not complicated.</h2></div>
        <p>Explore clear explanations, practical steps, examples, and reference resources to help you make informed digital decisions.</p>
      </section>

      <section className="container category-section" aria-labelledby="topics-heading">
        <div className="section-heading"><div><span className="eyebrow">EXPLORE BY TOPIC</span><h2 id="topics-heading">Browse topics</h2></div></div>
        <div className="category-chips">
          {categories.map((category) => (
            <Link href={`/blog?category=${encodeURIComponent(category)}`} key={category}>
              {category} <span>{posts.filter((post) => post.category === category).length}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container articles-section" id="latest">
        <div className="section-heading">
          <div><span className="eyebrow">THE TECHNOVA LIBRARY</span><h2>Featured guides</h2></div>
          <Link className="read-link" href="/blog">View all articles →</Link>
        </div>
        <div className="article-grid">
          {featured.map((post, index) => (
            <article className="article-card" key={post.slug}>
              <div className={`article-art art-${(index % 3) + 1}`}>
                <span className="art-number">0{index + 1}</span>
                <span className="art-symbol">{index === 0 ? "✳" : index === 1 ? "↗" : "⌘"}</span>
                <span className="art-label">{post.category}</span>
              </div>
              <div className="article-body">
                <div className="article-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link className="read-link" href={`/blog/${post.slug}`}>Read guide <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-note">
        <div className="container editorial-note-inner">
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Useful information, with context and limitations.</h2>
          <p>We aim to explain how things work, outline practical steps, and point readers toward relevant reference material. Check current provider documentation when software features or requirements may have changed.</p>
          <Link href="/about" className="read-link">Read our editorial approach →</Link>
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-inner">
          <div><span className="eyebrow">STAY CURIOUS</span><h2>Your next useful idea starts here.</h2><p>Explore our practical guides and keep learning at your own pace.</p></div>
          <Link className="button button-light" href="/blog">Browse all guides →</Link>
        </div>
      </section>
    </>
  );
}
