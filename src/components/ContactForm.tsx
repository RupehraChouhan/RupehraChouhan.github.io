"use client";

import type { FormEvent } from "react";

const fieldClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-brand/20";

// There is no backend yet, so submitting opens the visitor's mail app with the message filled in.
export function ContactForm({ email }: { email: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${name}\n${data.get("email")}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      className="flex flex-col gap-5 rounded-lg border border-line bg-surface p-5 sm:p-6"
    >
      <p id="contact-form-title" className="text-[13px] text-muted">
        System Transmission Input
      </p>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-[11px] uppercase text-muted">
          Name
        </label>
        <input id="contact-name" name="name" required autoComplete="name" placeholder="Enter your name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-[11px] uppercase text-muted">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email address"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-[11px] uppercase text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Write message body..."
          className={`${fieldClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="self-start rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2"
      >
        Send Transmission
      </button>
    </form>
  );
}
