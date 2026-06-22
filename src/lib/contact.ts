/**
 * Central place for personal contact details and EmailJS configuration.
 *
 * To enable real in-page email sending, create a free account at
 * https://www.emailjs.com, add an email service + template, then create a
 * `.env.local` file in the project root with:
 *
 *   VITE_EMAILJS_SERVICE_ID=your_service_id
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * The EmailJS template should reference the variables {{from_email}} and
 * {{message}} (and optionally {{reply_to}}). Until these are set, the form
 * gracefully falls back to opening the visitor's email client (mailto:).
 */

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

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  // Notification sent to MY inbox (name / email / message of the visitor).
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  // Optional auto-reply (thank-you) sent back to the VISITOR.
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

/** True only when the required EmailJS values are present. */
export const isEmailConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey
);
