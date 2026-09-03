import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import StickyCTA from '@/components/StickyCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import TestDriveForm from '@/components/TestDriveForm';

const vehicleStructuredData = {
  name: 'BYD Dolphin',
  description:
    'BYD Dolphin — um veículo elétrico moderno com design expressivo, tecnologia inteligente e autonomia para a rotina urbana e viagens de média distância.',
  model: 'Dolphin',
  brand: {
    '@type': 'Brand',
    name: 'BYD',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    price: '139900',
    availability: 'https://schema.org/InStock',
    url: 'https://example.com/contato',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '42',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={vehicleStructuredData} />
      <main>
        <Hero />
        <CTA />
        <Features />
        <Gallery />
        <SocialProof />
        <FAQ />
        <TestDriveForm />
        <Footer />
        <StickyCTA />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
