'use client';

import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, MouseEvent } from 'react';

// Update the interface for the Project to match the actual data type
interface Project {
  src: string;
  name: string;
  description: string;
  year: number;  // Change year to number, as your data has it as a number
}

interface IndexProps {
  projects: Project[];
  reversed: boolean;
}

export default function Index({ projects, reversed }: IndexProps) {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: number | null = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    // Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    // Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    console.log(secondImagePercent);
    if (firstImage.current) firstImage.current.style.width = `${firstImagePercent}%`;
    if (secondImage.current) secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div onMouseMove={(e) => manageMouseMove(e)} className={styles.double}>
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/images/${projects[0].src}`} fill={true} alt="image" />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p> {/* year should be a number */}
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/images/${projects[1].src}`} fill={true} alt="image" />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p> {/* year should be a number */}
        </div>
      </div>
    </div>
  );
}
