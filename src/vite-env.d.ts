/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EmailJS service ID (https://dashboard.emailjs.com/admin) */
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  /** EmailJS email template ID */
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  /** EmailJS public key (Account → API Keys) */
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
