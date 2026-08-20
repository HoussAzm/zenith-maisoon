import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import ImageWithFallback from "@/components/ImageWithFallback";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'agence Zénith Maison, spécialiste de la location de palais, riads, villas et appartements à Marrakech.",
};

const values = [
  {
    title: "Authenticité",
    text: "Des hébergements sélectionnés pour leur caractère et leur emplacement, entre médina traditionnelle et Marrakech contemporaine.",
  },
  {
    title: "Exigence",
    text: "Chaque palais, riad, villa et appartement est vérifié personnellement par notre équipe avant d'intégrer notre catalogue.",
  },
  {
    title: "Disponibilité",
    text: "Une équipe locale joignable 7j/7 pour répondre à vos besoins avant et pendant votre séjour.",
  },
];

export default function AProposPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Notre agence"
        title="Une équipe locale au service de votre séjour"
        description="Depuis Marrakech, nous concevons des séjours sur mesure dans des hébergements d'exception, du palais royal à l'appartement contemporain."
        image="/images/hero/hero-about.jpg"
        imageLabel="Équipe Zénith Maison à Marrakech"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-500">
              Notre histoire
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
              Faire découvrir le vrai Marrakech, sans le stress logistique
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-600">
              {siteConfig.name} est né d&apos;un constat simple : trouver un hébergement de
              standing à Marrakech, avec un vrai suivi et un interlocuteur unique du début
              à la fin du séjour, relève souvent du parcours du combattant. Notre agence
              résout ce problème avec une exigence de qualité constante.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              Notre équipe, basée à Marrakech, sélectionne personnellement chaque palais,
              chaque riad, chaque villa et chaque appartement de notre catalogue.
            </p>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="/images/hero/about-team.jpg"
              alt="Équipe locale à Marrakech"
              label="Équipe locale à Marrakech"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StatsBar />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Nos valeurs" title="Ce qui guide notre travail" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-ink-100 bg-white p-7">
              <h3 className="font-display text-lg text-ink-900">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <CTASection />
      </section>
    </>
  );
}
