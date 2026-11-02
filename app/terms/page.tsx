export const metadata = {
  title: "Terms and Conditions",
  description: "Terms for using the TechNova Daily website and its informational content.",
};

export default function TermsPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">SITE INFORMATION</span>
      <h1>Terms and Conditions</h1>
      <p className="page-lead">Last updated: November 3, 2026</p>

      <div className="prose">
        <h2>Using this website</h2>
        <p>
          By accessing TechNova Daily, you agree to use the website lawfully
          and respectfully. Do not attempt to disrupt the website, interfere
          with its security, or use it to distribute harmful or unlawful
          material.
        </p>

        <h2>Informational content</h2>
        <p>
          Articles are provided for general educational and informational
          purposes. Technology, software features, prices, availability, and
          security practices can change. Check the relevant provider's current
          documentation before taking action based on information that may
          have changed.
        </p>
        <p>
          Content on this website is not a substitute for professional advice
          where a decision requires specialist technical, legal, financial, or
          other expertise.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Unless otherwise stated, the original text and design published on
          this website are presented by TechNova Daily. You may link to our
          pages and quote brief portions where permitted by applicable law,
          provided the source is acknowledged. Do not republish substantial
          portions of our material without permission.
        </p>

        <h2>Third-party websites and services</h2>
        <p>
          Articles may link to third-party websites, tools, or documentation.
          Those services are operated independently and have their own terms,
          privacy practices, and availability. A link does not by itself
          represent an endorsement or guarantee.
        </p>

        <h2>Advertising and commercial relationships</h2>
        <p>
          The website may display advertising or contain clearly identified
          sponsored or affiliate material where applicable. Advertising does
          not guarantee or imply an endorsement of an advertised product or
          service.
        </p>

        <h2>Changes and availability</h2>
        <p>
          We may update website content, features, or these terms. We do not
          guarantee uninterrupted availability or that every article will
          remain current at all times.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be submitted through our
          <a href="/contact"> contact form</a>.
        </p>
      </div>
    </div>
  );
}
