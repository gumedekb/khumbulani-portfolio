import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT, EMAILJS, isEmailConfigured } from "../../lib/contact";

type Status = "idle" | "sending" | "success" | "error";

/**
 * ContactMe component - sends visitor messages to my inbox via EmailJS.
 * Falls back to a mailto: link when EmailJS keys are not configured.
 */
const ContactMe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setStatus("success");
      setFeedback("Thanks! Your message has been sent. I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
      setFeedback("Something went wrong. Please email me directly at " + CONTACT.email + ".");
    }
  };

  return (
    <section id="Contact" className="py-[40px] lg:py-[40px] px-[10px] bg-surface">
      <div className="w-full max-w-[1150px] mx-auto bg-bg-shade p-[10px] lg:p-[80px] rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 dark:border-white/10">

        {/* Heading */}
        <div className="text-center mb-[60px]">
          <p className="text-primary font-bold uppercase tracking-[2px] mb-[10px]">
            Get In Touch
          </p>

          <h2 className="text-heading text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">
            Let's Connect
          </h2>

          <p className="text-darkblue text-[16px] font-normal leading-[24px] mt-[10px] max-w-[600px] mx-auto">
            Feel free to reach out regarding opportunities, projects, cybersecurity, or web development inquiries.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-start max-w-[1100px] mx-auto">

          {/* Contact Info */}
          <div className="flex flex-col gap-[30px] bg-surface p-[30px] rounded-[20px] shadow-sm w-full">

            {/* Email */}
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-[20px] text-darkblue group">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>

              <span className="break-all group-hover:text-primary transition-colors">
                {CONTACT.email}
              </span>
            </a>

            {/* Phone */}
            <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-[20px] text-darkblue group">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <span className="group-hover:text-primary transition-colors">{CONTACT.phoneDisplay}</span>
            </a>

            {/* LinkedIn */}
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[20px] text-darkblue group">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>

              <span className="break-all group-hover:text-primary transition-colors">{CONTACT.linkedinDisplay}</span>
            </a>

            {/* GitHub */}
            <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[20px] text-darkblue group">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </div>

              <span className="break-all group-hover:text-primary transition-colors">{CONTACT.githubDisplay}</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-[20px] text-darkblue">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <span>{CONTACT.location}</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full bg-surface p-[30px] rounded-[20px] shadow-sm">
            <form className="flex flex-col gap-[25px]" onSubmit={handleSubmit}>

              {/* Name */}
              <label
                htmlFor="name"
                className="flex flex-col items-start gap-[10px] w-full"
              >
                <span className="text-[16px] font-semibold text-darkblue">
                  Name
                </span>

                <input
                  type="text"
                  className="w-full p-[16px] rounded-[12px] border border-gray-200 dark:border-white/15 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface text-[16px] text-darkblue transition-all"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>

              {/* Email */}
              <label
                htmlFor="email"
                className="flex flex-col items-start gap-[10px] w-full"
              >
                <span className="text-[16px] font-semibold text-darkblue">
                  Email
                </span>

                <input
                  type="email"
                  className="w-full p-[16px] rounded-[12px] border border-gray-200 dark:border-white/15 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface text-[16px] text-darkblue transition-all"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              {/* Message */}
              <label
                htmlFor="message"
                className="flex flex-col items-start gap-[10px] w-full"
              >
                <span className="text-[16px] font-semibold text-darkblue">
                  Message
                </span>

                <textarea
                  className="w-full p-[16px] rounded-[12px] border border-gray-200 dark:border-white/15 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface text-[16px] text-darkblue transition-all"
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  required
                />
              </label>

              {/* Feedback */}
              {status !== "idle" && status !== "sending" && (
                <p
                  className={`text-[15px] font-medium ${
                    status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  }`}
                  role="status"
                >
                  {feedback}
                </p>
              )}

              {/* Button */}
              <div className="mt-[10px]">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-[16px] text-base font-semibold cursor-pointer text-center no-underline rounded-[50px] transition-all duration-300 ease-in-out border border-primary text-white bg-primary hover:bg-surface hover:text-primary hover:scale-105 shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary disabled:hover:text-white"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
