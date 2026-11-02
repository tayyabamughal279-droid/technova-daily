export const metadata = {
  title: "About TechNova Daily",
  description:
    "Learn about TechNova Daily's focus, editorial approach, and technology guides.",
};

export default function AboutPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">ABOUT TECHNOVA DAILY</span>
      <h1>Technology, explained with clarity and practical context.</h1>
      <p className="page-lead">
        TechNova Daily is an independent informational publication covering
        artificial intelligence, software, digital skills, and everyday
        technology.
      </p>

      <div className="prose">
        <h2>What readers can expect</h2>
        <p>
          Our aim is to help readers understand technology and make informed
          decisions. We focus on clear explanations, practical walkthroughs,
          useful examples, and the limitations readers should consider.
        </p>

        <h2>Our editorial approach</h2>
        <p>
          Articles should answer a specific reader question rather than repeat
          general advice. Where a guide describes a software feature or
          technical procedure, readers should be given enough context to
          understand the steps, expected result, and relevant limitations.
        </p>
        <p>
          Product features, prices, availability, and software interfaces can
          change. Readers should check the provider's current documentation
          before relying on details that may have changed.
        </p>

        <h2>Accuracy and corrections</h2>
        <p>
          We aim to keep published information clear and accurate. If you find
          an error, an outdated instruction, or something that needs
          clarification, please use our contact form and include the article
          title and the relevant detail. We can then review the report.
        </p>

        <h2>Advertising and independence</h2>
        <p>
          Advertising may appear on this website. Advertising does not change
          our aim to provide useful information. Any paid placement,
          sponsorship, or affiliate relationship will be identified where
          applicable.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, corrections, and suggestions can be sent through our
          <a href="/contact"> contact form</a>.
        </p>
      </div>
    </div>
  );
}
