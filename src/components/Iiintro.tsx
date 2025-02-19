import React, { JSX, useRef } from 'react';
import Image from 'next/image';
import Background from '../../public/images/2.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Iiintro(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image src={Background} fill alt="Background image" style={{ objectFit: 'cover' }} />
      </motion.div>
    </div>
  );
}
