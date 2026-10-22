export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">PLEASE NOTE</span>
      <h1>Disclaimer</h1>
      <div className="prose">
        <p>
          TechNova Daily publishes general educational information about
          technology, AI tools, and software. Features, prices, and
          availability may change; check the relevant provider's official
          documentation for current details.
        </p>
        <p>
          We aim for accuracy but cannot guarantee that every article is
          complete or current. Readers should independently verify
          important information.
        </p>
        <p>
          Any advertising, sponsorship, or affiliate relationship must be
          clearly disclosed when applicable. A mention of a product does
          not imply endorsement by its provider.
        </p>
      </div>
    </div>
  );
}