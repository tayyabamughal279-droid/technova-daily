import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">YOUR GUIDE TO THE DIGITAL WORLD</span>
          <h1>
            Understand technology.
            <br />
            <span>Make it work for you.</span>
          </h1>
          <p>
            Practical guides to AI tools, useful software, and everyday
            technology — explained clearly, one step at a time.
          </p>
          <a className="button" href="#latest">
            Explore the latest guides <span>→</span>
          </a>
          <div className="hero-note">
            <span className="pulse" /> Straightforward guides. Practical ideas.
          </div>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-center">T<span>N</span></div>
          <div className="float-card float-one">AI &amp; Tools ↗</div>
          <div className="float-card float-two">Learn something new.</div>
        </div>
      </section>

      <section className="container intro-strip">
        <div>
          <span className="eyebrow">WELCOME TO TECHNOVA DAILY</span>
          <h2>Technology should feel useful, not complicated.</h2>
        </div>
        <p>
          Explore clear explanations, practical steps, and ideas you can
          apply to your everyday digital life.
        </p>
      </section>

      <section className="container articles-section" id="latest">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE EDITOR&apos;S DESK</span>
            <h2>Latest articles</h2>
          </div>
          <span className="article-count">Explore our guides ↘</span>
        </div>

        <div className="article-grid">
          {posts.map((post, index) => (
            <article className="article-card" key={post.slug}>
              <div className={`article-art art-${index + 1}`}>
                <span className="art-number">0{index + 1}</span>
                <span className="art-symbol">
                  {index === 0 ? "✳" : index === 1 ? "↗" : "⌘"}
                </span>
                <span className="art-label">{post.category}</span>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link className="read-link" href={`/blog/${post.slug}`}>
                  Read article <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-inner">
          <div>
            <span className="eyebrow">STAY CURIOUS</span>
            <h2>Your next useful idea starts here.</h2>
            <p>Explore our practical guides and keep learning at your own pace.</p>
          </div>
          <a className="button button-light" href="/blog">
            Browse all guides →
          </a>
        </div>
      </section>
    </>
  );
}