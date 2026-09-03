import Image from 'next/image';
import styles from './Gallery.module.css';

const gallery = [
  {
    src: '/images/byd-front.svg',
    alt: 'Frontal view of the BYD vehicle from the front three-quarter angle on a dark studio backdrop.',
  },
  {
    src: '/images/byd-side.svg',
    alt: 'Side profile of the BYD vehicle showing the sleek automotive silhouette.',
  },
  {
    src: '/images/byd-cabin.svg',
    alt: 'Interior view of the BYD cabin with a modern digital dashboard and minimalist design.',
  },
  {
    src: '/images/byd-detail.svg',
    alt: 'Close detail photo of the BYD rear and wheel design against a moody background.',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Galeria</p>
        <h2 className={styles.title}>Detalhes pensados para a rotina e o prazer de dirigir.</h2>
      </div>

      <div className={styles.grid}>
        {gallery.map((image) => (
          <figure key={image.src} className={styles.card}>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className={styles.image}
              priority={image.src === '/images/byd-front.svg'}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
