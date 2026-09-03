import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://byd.com.br'),
  title: {
    default: 'BYD — Built to Move You',
    template: '%s | BYD',
  },
  description:
    'BYD Dolphin. Um veículo elétrico com design inovador, tecnologia inteligente, autonomia para a rotina e um desempenho que eleva cada deslocamento.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BYD — Built to Move You',
    description:
      'Descubra a nova era da mobilidade com potência, tecnologia e liberdade para cada dia.',
    url: 'https://byd.com.br',
    siteName: 'BYD',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: '/video/byd-canyon-poster.jpg',
        width: 1200,
        height: 675,
        alt: 'BYD vehicle in a cinematic modern environment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BYD — Built to Move You',
    description:
      'Explore tecnologia, performance e design em um veículo elétrico pensado para a vida moderna.',
    images: ['/video/byd-canyon-poster.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
