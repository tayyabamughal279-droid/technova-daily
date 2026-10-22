export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">OUR STORY</span>
      <h1>Technology, made easier to understand.</h1>
      <p className="page-lead">
        TechNova Daily is an informational blog about AI tools, software,
        and practical technology.
      </p>
      <div className="prose">
        <h2>What we aim to do</h2>
        <p>
          Our goal is to explain digital topics in clear language and
          provide practical steps readers can use to learn and solve problems.
        </p>
        <h2>Our content</h2>
        <p>
          We publish educational guides, software explainers, and general
          technology tips. Readers should verify important information
          against official documentation, especially when products or
          features change.
        </p>
        <h2>Our commitment</h2>
        <p>
          We aim to make our content clear, useful, and accurate. If you
          spot an error or have a suggestion, please contact us.
        </p>
      </div>
    </div>
  );
}