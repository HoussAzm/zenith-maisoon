import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import AvailabilityWidget from "@/components/AvailabilityWidget";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import { properties, testimonials, faqs } from "@/lib/data";

export default function Home() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);
  const displayProperties =
    featuredProperties.length >= 3 ? featuredProperties : properties.slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Marrakech, Maroc"
        title="Votre séjour de prestige à Marrakech, sans compromis"
        description="Palais, riads et villas d'exception au cœur de Marrakech — une seule agence pour organiser l'intégralité de votre séjour."
        image="/images/hero/hero-home.jpg"
        imageLabel="Patio de riad traditionnel à Marrakech"
        video="/videos/hero-luxury.mp4"
        primaryCta={{ href: "/hebergements", label: "Découvrir nos hébergements" }}
        secondaryCta={{ href: "/contact", label: "Demander un devis" }}
      />

      <AvailabilityWidget />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32">
        <SectionHeading
          eyebrow="Nos catégories"
          title="Trouvez votre type d'hébergement idéal"
          description="Du palais royal à l'appartement moderne, une sélection pensée pour chaque style de séjour à Marrakech."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </section>

      <section className="border-y border-ink-100 bg-sand-100 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StatsBar />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Hébergements"
          title="Nos adresses coup de cœur"
          description="Une sélection de palais, riads, villas et appartements choisis pour leur emplacement, leur confort et leur service."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/hebergements"
            className="inline-block rounded-full border border-ink-900 px-7 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-sand-50"
          >
            Voir tous les hébergements
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Un seul interlocuteur, zéro complication"
          description="Comparez ce que Zénith Maison vous fait gagner par rapport à une réservation faite vous-même ou à un hôtel classique."
        />
        <div className="mt-14">
          <ComparisonTable />
        </div>
      </section>

      <section className="overflow-hidden bg-sand-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ce que disent nos clients"
            description="Des séjours organisés avec soin, du premier contact au dernier jour."
          />
        </div>
        <div className="relative mt-14">
          <div className="flex w-max animate-marquee gap-6 px-5 [animation-duration:55s] hover:[animation-play-state:paused] motion-reduce:animate-none sm:px-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.name}-${i}`} className="w-[320px] shrink-0 sm:w-[360px]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sand-100 to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sand-100 to-transparent sm:w-28" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce qu'il faut savoir" />
        <div className="mt-12">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <CTASection />
      </section>
    </>
  );
}
