'use client';
import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Type definition for the refs
export default function Index() {
  const background = useRef<HTMLDivElement | null>(null);
  const introImage = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: background.current, // Attach trigger to `Intro`
        scrub: true,
        start: "top center", // Start animation when `Intro` reaches the center
        end: "+=500px",
      },
    });
  
    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0);
  
    ScrollTrigger.refresh(); // Ensure correct scroll calculations
  

  }, []);
  
  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          src={'/images/background.jpeg'}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div ref={introImage} data-scroll data-scroll-speed="0.4" className={styles.introImage}>
         {/*  <Image
            src={'/images/intro.png'}
            alt="intro image"
            fill={true}
            priority={true}
          />*/}
        </div>
        <h1 data-scroll data-scroll-speed="0.7" font-weight="bold" >My Path To DevOps</h1>
      </div>
    </div>
  );
}
