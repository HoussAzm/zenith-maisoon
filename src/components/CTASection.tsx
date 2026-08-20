import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import { whatsappLink } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      <div className="relative h-[380px] w-full">
        <ImageWithFallback
          src="/images/hero/cta-desert.jpg"
          alt="Coucher de soleil sur le désert d'Agafay"
          label="Coucher de soleil — désert d'Agafay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <h2 className="max-w-xl font-display text-3xl text-sand-50 sm:text-4xl">
            Prêt à vivre l&apos;expérience Marrakech ?
          </h2>
          <p className="mt-4 max-w-lg text-sm text-sand-100/80 sm:text-base">
            Notre équipe organise votre séjour sur mesure dans l&apos;un de nos palais,
            riads, villas ou appartements, en une seule demande.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Bonjour, je souhaite organiser mon séjour à Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-card transition hover:bg-gold-400"
            >
              Discuter sur WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-sand-100/40 px-7 py-3.5 text-sm font-semibold text-sand-50 transition hover:border-sand-100 hover:bg-white/10"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
