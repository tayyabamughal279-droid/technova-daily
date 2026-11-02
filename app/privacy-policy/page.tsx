export const metadata = {
  title: "Privacy Policy",
  description: "How TechNova Daily handles information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">YOUR PRIVACY</span>
      <h1>Privacy Policy</h1>
      <p className="page-lead">Last updated: November 3, 2026</p>

      <div className="prose">
        <p>
          This policy explains the types of information that may be processed
          when you visit TechNova Daily or contact us through the website.
          The services actually enabled on the website determine which of the
          practices below apply.
        </p>

        <h2>Information you submit</h2>
        <p>
          If you use our contact form, you may provide information such as your
          name, email address, subject, and message. We use that information to
          read and respond to your enquiry, investigate a reported issue, or
          handle a correction request. Please do not submit passwords,
          payment-card details, or other sensitive information through the
          form.
        </p>

        <h2>Contact form provider</h2>
        <p>
          Our contact form uses Web3Forms to transmit submissions. Information
          entered into the form is processed by that service to deliver the
          message. Its handling of submitted information is also subject to
          the provider's own privacy terms. Avoid submitting information that
          is not needed for your enquiry.
        </p>

        <h2>Hosting and technical information</h2>
        <p>
          The website is hosted using Vercel. When a website is requested,
          hosting and infrastructure providers may process technical
          information such as IP address, browser and device information,
          request details, and security logs for delivery, reliability, and
          protection against abuse. The exact information and retention
          periods are determined by the provider and the services in use.
        </p>

        <h2>Cookies, analytics, and advertising</h2>
        <p>
          The website may use cookies or similar technologies if features
          that require them are enabled. If Google AdSense or another
          advertising service is enabled, that provider and its partners may
          use cookies, device identifiers, or similar technologies to serve,
          measure, and personalize advertising, subject to the settings,
          choices, and laws that apply to a visitor.
        </p>
        <p>
          Advertising and analytics practices should be updated whenever
          services are added, removed, or reconfigured. Visitors can also
          manage cookies through their browser settings. Browser controls may
          not disable every form of technical processing.
        </p>

        <h2>How information is used</h2>
        <p>
          Information submitted through the contact form is used to respond
          to the enquiry and maintain website communications. Technical
          information may be used by service providers to operate, secure,
          and troubleshoot the website. We do not ask visitors to submit
          sensitive personal information.
        </p>

        <h2>Sharing and service providers</h2>
        <p>
          Information may be processed by service providers that support
          website hosting, contact-form delivery, analytics, or advertising,
          but only as relevant to services enabled on the website. Those
          providers may process information under their own terms and
          privacy policies.
        </p>

        <h2>Your choices and privacy requests</h2>
        <p>
          You can choose not to use the contact form and can manage many
          cookies through your browser. To ask a question about information
          submitted through the website, use the contact form and select a
          subject that identifies it as a privacy request. Include enough
          detail for us to understand the request, but do not include
          passwords or unnecessary sensitive information.
        </p>

        <h2>Children</h2>
        <p>
          This website is intended for a general audience and is not designed
          to request personal information from children. Please contact us
          through the form if you believe a child has submitted personal
          information unintentionally.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This policy may be updated when website features, service providers,
          advertising, or applicable requirements change. The latest update
          date will be shown at the top of this page.
        </p>
      </div>
    </div>
  );
}
