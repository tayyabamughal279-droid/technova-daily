export const metadata = {
  title: "Disclaimer",
  description: "Important information about TechNova Daily's educational technology content.",
};

export default function DisclaimerPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">PLEASE NOTE</span>
      <h1>Disclaimer</h1>
      <div className="prose">
        <h2>General information</h2>
        <p>
          TechNova Daily publishes general educational information about
          technology, artificial intelligence, software, and digital skills.
          Articles are not a guarantee of a particular result and should not
          replace advice from a qualified professional where specialist
          advice is needed.
        </p>

        <h2>Accuracy and changing information</h2>
        <p>
          We aim to make information clear and useful, but software interfaces,
          product features, prices, availability, and security guidance may
          change. Check current official documentation before relying on
          instructions or details that may be outdated.
        </p>

        <h2>Third-party products and links</h2>
        <p>
          References to products, services, or external websites are provided
          for informational purposes. Their owners control their products,
          terms, pricing, and privacy practices. Readers should review those
          details independently.
        </p>

        <h2>Advertising and affiliate disclosures</h2>
        <p>
          This website may display advertisements. If a page contains paid
          sponsorship or affiliate links, the relationship should be disclosed
          on that page where applicable. An advertisement or product mention
          is not a guarantee or endorsement.
        </p>

        <h2>Corrections</h2>
        <p>
          If you identify an error or outdated instruction, please send the
          page title and relevant details through our
          <a href="/contact"> contact form</a>.
        </p>
      </div>
    </div>
  );
}
