import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "All Articles",
  description: "Browse AI, software, and practical technology guides.",
};

export default function BlogPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">THE TECHNOVA LIBRARY</span>
      <h1>Explore our articles.</h1>
      <p className="page-lead">
        Practical explanations and step-by-step guides for your digital life.
      </p>
      <div className="listing">
        {posts.map((post) => (
          <article className="listing-item" key={post.slug}>
            <div className="listing-top">
              <span className="eyebrow">{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link className="read-link" href={`/blog/${post.slug}`}>
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}