'use client';

import styles from './page.module.scss';
import { useSpring, MotionValue } from 'framer-motion';
import Gallery from '../gallery';
import Descriptionn from '../descriptionn';

// Define the project type
interface Project {
  name: string;
  handle: string;
}

// Define mouse position type
interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

// Define the projects array with proper types
const projects: Project[] = [
  { name: "Leidinger Matthias", handle: "leidinger_matthias" },
  { name: "Mark Rammers", handle: "mark_rammers" },
];

export default function Home() {
  // Define spring animation settings
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  };

  // Define mouse position with Framer Motion spring animations
  const mousePosition: MousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  // Handle mouse movement
  const mouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.30;

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  console.log(projects);  // Debugging line to check if the array is being loaded

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {projects.length > 0 ? (
        projects.map(({ handle }, i) => (
          <Gallery mousePosition={mousePosition} handle={handle} key={i} />
        ))
      ) : (
        <p>No projects to display.</p>  // Fallback text if there are no projects
      )}
      <Descriptionn mousePosition={mousePosition} projects={projects} />
    </main>
  );
}
