export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="container standard-page">
      <span className="eyebrow">GET IN TOUCH</span>
      <h1>We would like to hear from you.</h1>
      <p className="page-lead">
        Have a question, suggestion, or correction? Contact the website team.
      </p>
      <div className="prose">
        <h2>Email</h2>
        <p>
          Add the website owner's working email address here before
          publishing this page.
        </p>
        <h2>Content feedback</h2>
        <p>
          Please include the article title and explain the issue or
          suggestion clearly so it can be reviewed.
        </p>
      </div>
    </div>
  );
}