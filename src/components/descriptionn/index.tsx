'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';

interface DescriptionnProps {
  mousePosition: { x: any; y: any };  // The type for mousePosition
  projects: { name: string; handle: string }[];  // Projects array
}

const Descriptionn: React.FC<DescriptionnProps> = ({ mousePosition, projects }) => {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;  // Destructure x and y from mousePosition

  return (
    <>
     
      
    </>
  );
};

export default Descriptionn;
