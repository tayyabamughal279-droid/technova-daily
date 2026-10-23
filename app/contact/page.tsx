
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("access_key", "87779cc9-1138-445b-a0cf-f27d7c7ce3bc");
    formData.set("subject", "New Contact Message - TechNova Daily");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
            We&apos;re Here to Help
          </p>

          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question, suggestion, or feedback? Get in touch
            with the TechNova Daily team. We would love to hear from you.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-5">
          <aside className="bg-slate-900 p-8 text-white sm:p-10 md:col-span-2">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-black">
              T
            </div>

            <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Whether it&apos;s about AI tools, technology guides,
              tutorials, or a collaboration, feel free to contact us.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Website
                </p>
                <p className="mt-1 font-medium">TechNova Daily</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Email
                </p>
                <p className="mt-1 break-words font-medium">
                  Use the contact form to reach our team.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Response Time
                </p>
                <p className="mt-1 text-slate-300">
                  Usually within 1–3 business days
                </p>
              </div>
            </div>
          </aside>

          <section className="p-6 sm:p-10 md:col-span-3">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Send a Message
            </h2>

            <p className="mb-8 text-slate-500">
              Fill in the details below and we&apos;ll get back to you.
            </p>

            {status === "success" && (
              <div
                role="status"
                className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                Sorry, your message could not be sent. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  name="message_subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <span aria-hidden="true">→</span>}
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Your information will be used to respond to your inquiry.
                Please do not include passwords or sensitive personal data.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
