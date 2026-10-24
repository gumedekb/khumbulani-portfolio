/**
 * Central place for personal details, navigation and EmailJS configuration.
 *
 * To enable real in-page email sending, create a free account at
 * https://www.emailjs.com, add an email service + template, then set these in
 * `.env.local` (they are exposed to the browser, hence the NEXT_PUBLIC_ prefix):
 *
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *   NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id (optional)
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * Until these are set, the contact form falls back to opening the visitor's
 * email client (mailto:).
 */

export const SITE = {
  name: "Khumbulani Gumede",
  shortName: "Khumbulani",
  role: "Full-Stack Developer & Security Practitioner",
  url: "https://khumbulani.vercel.app",
  description:
    "Computer Science & IT graduate building full-stack web applications — and then breaking them. Projects, security write-ups and notes by Khumbulani Gumede.",
  cvUrl: "/cv/CV_Khumbulani_Gumede.pdf",
  cvDownloadName: "Khumbulani_Gumede_CV.pdf",
} as const;

export const CONTACT = {
  email: "gumedekhumbulani54@gmail.com",
  phoneDisplay: "+27 72 752 4123",
  phoneHref: "+27727524123",
  linkedinDisplay: "linkedin.com/in/gumede-khumbulani",
  linkedinUrl: "https://www.linkedin.com/in/gumede-khumbulani",
  githubDisplay: "github.com/gumedekb",
  githubUrl: "https://github.com/gumedekb",
  location: "South Africa",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writeups", label: "Writeups" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  // Notification sent to MY inbox (name / email / message of the visitor).
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  // Optional auto-reply (thank-you) sent back to the VISITOR.
  autoReplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

/** True only when the required EmailJS values are present. */
export const isEmailConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey
);
