type StructuredVehicleData = {
  name: string;
  description: string;
  model: string;
  brand: { '@type': string; name: string };
  offers: {
    '@type': string;
    priceCurrency: string;
    price: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
};

export default function StructuredData({ data }: { data: StructuredVehicleData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Vehicle',
        ...data,
      }) }}
    />
  );
}
