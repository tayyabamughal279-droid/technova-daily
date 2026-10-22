export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">YOUR PRIVACY</span>
      <h1>Privacy Policy</h1>
      <p className="page-lead">Last updated: October 22, 2026</p>
      <div className="prose">
        <h2>Information we collect</h2>
        <p>
          This website may process technical information through its
          hosting provider, such as server logs and basic request
          information. If you contact us, we may receive the information
          you choose to provide.
        </p>
        <h2>Cookies and advertising</h2>
        <p>
          If advertising services such as Google AdSense are enabled,
          Google and its partners may use cookies or similar technologies
          to serve, measure, and personalize ads as permitted by applicable
          settings and law. Advertising technologies are not active merely
          because this page exists. Update this policy before enabling
          any advertising or analytics service.
        </p>
        <h2>Third-party services</h2>
        <p>
          Hosting, analytics, and advertising providers may process data
          according to their own policies. Please review the relevant
          provider policies and configure consent mechanisms where required.
        </p>
        <h2>Your choices</h2>
        <p>
          You can manage cookies through your browser. Depending on your
          location, you may have additional rights over personal information.
          Add a valid contact method for privacy requests before launch.
        </p>
        <h2>Policy updates</h2>
        <p>
          This policy should be revised whenever the website's data
          collection, analytics, advertising, or contact practices change.
        </p>
      </div>
    </div>
  );
}