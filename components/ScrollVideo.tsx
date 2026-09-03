'use client';

import { forwardRef } from 'react';
import styles from './Hero.module.css';

type ScrollVideoProps = {
  opacity: number;
};

/**
 * Fullscreen video element whose currentTime is driven entirely by
 * Hero's scroll-progress loop (see Hero.tsx). It never autoplays and
 * never responds to native playback — it is scrubbed, not played.
 */
const ScrollVideo = forwardRef<HTMLVideoElement, ScrollVideoProps>(
  function ScrollVideo({ opacity }, ref) {
    return (
      <video
        ref={ref}
        className={styles.video}
        style={{ opacity }}
        src="/video/byd-canyon.mp4"
        poster="/video/byd-canyon-poster.jpg"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
    );
  }
);

export default ScrollVideo;
