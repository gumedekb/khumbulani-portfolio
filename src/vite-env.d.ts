/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EmailJS service ID (https://dashboard.emailjs.com/admin) */
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  /** Notification template ID — the email that arrives in MY inbox. */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  /** Optional auto-reply template ID — the thank-you sent to the visitor. */
  readonly VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID?: string;
  /** EmailJS public key (Account → API Keys) */
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
