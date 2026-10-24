"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT, EMAILJS, isEmailConfigured } from "@/lib/site";
import { buttonPrimary } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

/**
 * Sends visitor messages to my inbox via EmailJS.
 * Falls back to a mailto: link when EmailJS keys are not configured.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Fallback: no EmailJS keys configured -> open the visitor's mail client.
    if (!isEmailConfigured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const time = new Date().toLocaleString();

      // 1) Notification to MY inbox — carries the visitor's name, email and
      //    message. This template's "To Email" must resolve to my address.
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          email: CONTACT.email,
          to_email: CONTACT.email,
          name,
          from_name: name,
          from_email: email,
          visitor_email: email,
          reply_to: email,
          title: `New portfolio message from ${name}`,
          time,
          message,
        },
        { publicKey: EMAILJS.publicKey }
      );

      // 2) Auto-reply (thank-you) to the VISITOR. Best-effort: a failure here
      //    shouldn't make the visitor think their message didn't go through.
      if (EMAILJS.autoReplyTemplateId) {
        try {
          await emailjs.send(
            EMAILJS.serviceId,
            EMAILJS.autoReplyTemplateId,
            {
              email,
              to_email: email,
              name,
              from_name: name,
              reply_to: CONTACT.email,
              title: "Thanks for reaching out!",
              time,
              message,
            },
            { publicKey: EMAILJS.publicKey }
          );
        } catch (autoErr) {
          console.warn("Auto-reply email failed (notification still sent):", autoErr);
        }
      }

      setStatus("success");
      setFeedback("Thanks! Your message has been sent. I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      // EmailJS rejects with { status, text } — surface it so the real cause
      // (rate limit, bad template, quota, etc.) is visible instead of generic.
      const detail =
        err && typeof err === "object" && "text" in err && (err as { text?: string }).text
          ? ` (${(err as { text: string }).text})`
          : "";
      setStatus("error");
      setFeedback(`Something went wrong${detail}. Please email me directly at ${CONTACT.email}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[15px] font-medium">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[15px] font-medium">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[15px] font-medium">Message</span>
        <textarea
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to talk about?"
          required
          className={`${inputClass} resize-y`}
        />
      </label>

      {(status === "success" || status === "error") && (
        <p
          role="status"
          className={`text-sm ${
            status === "success" ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}
        >
          {feedback}
        </p>
      )}

      <div>
        <button type="submit" disabled={status === "sending"} className={`${buttonPrimary} px-7 py-3`}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
