'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases: string[] = [


  "To ensure efficient software development,",
  "deployment, and scalability,",
  "I incorporate DevOps principles into my workflow.",
  "The DevOps bridges development and operations, ",
  "automating processes,improving collaboration," ,
  "and enabling continuous integration and delivery (CI/CD)."
];

export default function Index() {
  return (
    <div className={styles.description}>
      {
        phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>
        })
      }
    </div>
  );
}

interface AnimatedTextProps {
  children: React.ReactNode;
}

function AnimatedText({ children }: AnimatedTextProps) {
  const text = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=600px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out"
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
