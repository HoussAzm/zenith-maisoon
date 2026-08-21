import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  const columns = [
    {
      title: t("accommodationsTitle"),
      links: [
        { href: "/hebergements", label: t("accommodationsLink") },
        { href: "/galerie", label: t("galleryLink") },
      ],
    },
    {
      title: t("aboutTitle"),
      links: [
        { href: "/a-propos", label: t("agencyLink") },
        { href: "/contact", label: t("contactLink") },
        { href: "/contact#faq", label: t("faqLink") },
      ],
    },
  ];

  return (
    <footer className="bg-ink-950 text-sand-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/60 text-gold-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 21V14C6.5 11 9 9.2 12 9.2C15 9.2 17.5 11 17.5 14V21" />
                <path d="M12 1L13.07 3.93L16 5L13.07 6.07L12 9L10.93 6.07L8 5L10.93 3.93Z" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="font-display text-lg text-sand-50">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/70">
            {t("tagline")}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-100/20 transition hover:border-gold-400 hover:text-gold-300"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.6.5.7.28 1.2.6 1.7 1.1.5.5.9 1.05 1.1 1.7.25.6.44 1.4.5 2.6.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.5 2.6a5 5 0 01-1.1 1.7c-.5.5-1.05.9-1.7 1.1-.6.25-1.4.44-2.6.5-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.6-.5a5 5 0 01-1.7-1.1 5 5 0 01-1.1-1.7c-.25-.6-.44-1.4-.5-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .5-2.6.22-.65.56-1.2 1.1-1.7.5-.5 1.05-.9 1.7-1.1.6-.25 1.4-.44 2.6-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.75.07-1 .05-1.55.22-1.9.36-.48.19-.82.4-1.18.76-.36.36-.57.7-.76 1.18-.14.35-.3.9-.36 1.9C3 9.5 3 9.85 3 13s0 3.5.07 4.75c.05 1 .22 1.55.36 1.9.19.48.4.82.76 1.18.36.36.7.57 1.18.76.35.14.9.3 1.9.36 1.25.07 1.6.07 4.75.07s3.5 0 4.75-.07c1-.05 1.55-.22 1.9-.36.48-.19.82-.4 1.18-.76.36-.36.57-.7.76-1.18.14-.35.3-.9.36-1.9.07-1.25.07-1.6.07-4.75s0-3.5-.07-4.75c-.05-1-.22-1.55-.36-1.9a3.2 3.2 0 00-.76-1.18 3.2 3.2 0 00-1.18-.76c-.35-.14-.9-.3-1.9-.36C15.5 4 15.15 4 12 4zm0 3.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 1.8a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm5.85-2a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-100/20 transition hover:border-gold-400 hover:text-gold-300"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.24C16.3 4.17 15.3 4.08 14.14 4.08c-2.4 0-4.04 1.46-4.04 4.15v2.27H7.5v3h2.6V21h3.4z" />
              </svg>
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm uppercase tracking-wider text-gold-300">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-100/70 transition hover:text-sand-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-gold-300">
            {t("contactTitle")}
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-100/70">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phoneDisplay}</li>
            <li>{siteConfig.email}</li>
            <li>{tCommon("hours")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-100/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-xs text-sand-100/50 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t("rightsReserved")}
          </p>
          <p>{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}
