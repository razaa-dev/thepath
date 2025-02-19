// Gallery.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';

interface GalleryProps {
  mousePosition: { x: any; y: any }; // The type for mousePosition
  handle: string;
}

const Gallery: React.FC<GalleryProps> = ({ mousePosition, handle }) => {
  const { x, y } = mousePosition;  // Destructure x and y from mousePosition

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image src={`/images/${handle}/backgroundabc.jpg`} alt="image" fill />
      </div>
      <motion.div
        className={styles.vignette}
        style={{ x, y }}  // Use x and y for styling
      >
        <Image src={`/images/${handle}/abc.jpg`} alt="image" fill />
      </motion.div>
    </div>
  );
};

export default Gallery;
