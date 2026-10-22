export const metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">SITE INFORMATION</span>
      <h1>Terms and Conditions</h1>
      <div className="prose">
        <p>
          By using TechNova Daily, you agree to use this website lawfully
          and respectfully.
        </p>
        <h2>Informational content</h2>
        <p>
          Articles are provided for general educational purposes. They
          are not a guarantee of any particular result. Check official
          sources before acting on information that may have changed.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Do not reproduce or republish our original material without
          permission, except where permitted by applicable law.
        </p>
        <h2>External services</h2>
        <p>
          Links to third-party websites are provided for convenience.
          We do not control their content or policies.
        </p>
        <h2>Updates</h2>
        <p>
          These terms should be reviewed and updated to reflect the
          actual website operator, applicable law, and website practices.
        </p>
      </div>
    </div>
  );
}