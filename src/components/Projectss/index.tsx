'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Type definition for a project
interface Project {
  title: string;
  description: string;
  src: string;
}

const projects: Project[] = [
  {
    title: "Devops Concept",
    description:"hahahahahaha",
    src: "devops.jpeg"
  },
  {
    title: "Docker", 
    description:"Containerization for scalable deployments  .",
    src: "xxsalar_de_atacama.jpg "
  },
  {
    title: "Git/GitHub",
    description:" Version control & collaboration tool",
    src: "xxvalle_de_la_muerte.jpeg"
  },
  {
    title: "Kubernates",
    description:"Orchestrates containerized applications",
    src: "xxmiscani_lake.jpeg"
  },
  {
    title: "CI/CD",
    description:"Automates builds, tests, deployments",
    src: "xxminiques_lagoon.jpg "
  },
];

export default function Index() {

  const [selectedProject, setSelectedProject] = useState<number>(0);
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    if (!imageContainer.current || !container.current) return;
  
    const lastProject = container.current.querySelector(`.${styles.projectEl}:last-child`);
  
    if (!lastProject) return;
  
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top top", // Start pinning when the image reaches the top
      endTrigger: lastProject, // Stop pinning relative to the last project title
      end: "top-=380px", // Stops 100px before the last project reaches the top
      scrub: true
    });
  }, []);
    
  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>In my DevOps practices, I utilize Git for version control and GitHub for collaboration, ensuring efficient code management and teamwork. By containerizing applications with Docker, I achieve consistent deployments across various environments.</p>
        </div>
        <div className={styles.column}>
          <p>Implementing CI/CD pipelines automates the build, test, and deployment processes, accelerating release cycles and reducing manual intervention. I employ Spring Cloud Gateway for managing and securing inter-service communications, Spring Cloud Config for centralized configuration management, and Eureka for service discovery, collectively enhancing system scalability, reliability, and maintainability.</p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
  <div key={index} onMouseOver={() => setSelectedProject(index)} className={styles.projectEl}>
  <h2>{project.title}</h2>
</div>

        ))}
      </div>
    </div>
  );
}
