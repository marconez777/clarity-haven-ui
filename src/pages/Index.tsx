import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import EspecialidadesHomeSection from "@/components/EspecialidadesHomeSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import MentalHealthSection from "@/components/MentalHealthSection";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Dr. Gabriel Lopes - Psiquiatra Vila Olímpia | Saúde Mental Integrada</title>
        <meta
          name="description"
          content="Dr. Gabriel Lopes - Psiquiatra especializado em saúde mental infantil e adultos na Vila Olímpia, SP. Tratamento de ansiedade, depressão e TDAH com acompanhamento completo."
        />
        <meta
          name="keywords"
          content="psiquiatra, psiquiatria, saúde mental, ansiedade, depressão, TDAH, Vila Olímpia, São Paulo, Dr. Gabriel Lopes"
        />
        <meta name="author" content="Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriel.med.br" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriel.med.br" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:title"
          content="Dr. Gabriel Lopes - Psiquiatra Vila Olímpia | Saúde Mental Integrada"
        />
        <meta
          property="og:description"
          content="Psiquiatra especializado em saúde mental infantil e adultos. Tratamento de ansiedade, depressão e TDAH com acompanhamento completo."
        />
        <meta property="og:image" content="https://drgabriel.med.br/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Gabriel Lopes - Psiquiatra Vila Olímpia | Saúde Mental Integrada"
        />
        <meta
          name="twitter:description"
          content="Psiquiatra especializado em saúde mental infantil e adultos. Tratamento de ansiedade, depressão e TDAH."
        />
        <meta name="twitter:image" content="https://drgabriel.med.br/og-image.jpg" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Gabriel Lopes",
            image: "https://drgabriel.med.br/og-image.jpg",
            description:
              "Psiquiatra especializado em saúde mental infantil e de adultos",
            medicalSpecialty: "Psychiatry",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua do Rocio, 423. Cj. 402",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              postalCode: "04548-020",
              addressCountry: "BR",
            },
            telephone: "+55-11-94154-3929",
            url: "https://drgabriel.med.br",
            openingHours: "Mo-Fr 08:00-20:00, Sa 08:00-14:00",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <EspecialidadesHomeSection />
          <SpecialtiesSection />
          <AboutSection />
          <TeamSection />
          <MentalHealthSection />
          
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
