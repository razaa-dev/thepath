'use client';

import styles from './page.module.css';
import { useState } from 'react';
import Project from '../projectMouseHover';
import Modal from '../modal';

// Define types for project objects
interface ProjectType {
  title: string;
  src: string;
  color: string;
  description: string;
}

// Define type for modal state
interface ModalState {
  active: boolean;
  index: number;
}

// Project data
const projects: ProjectType[] = [
  {
    title: "Spring Boot",
    src: "c2montreal.png",
    color: "#000000",
    description: "Java-based, microservices, dependency injection, embedded server."
  },
  {
    title: "Laravel",
    src: "laravel.png",
    color: "#8C8C8C",
    description: "PHP, MVC, Eloquent ORM, authentication, queues."
  },
  {
    title: "Flutter",
    src: "locomotive.png",
    color: "#EFE8D3",
    description: "Cross-platform, UI toolkit, reactive framework, Dart"
  },
  {
    title: "Express Js",
    src: "silencio.png",
    color: "#706D63",
    description: "Node.js, middleware, routing, RESTful API."
  },
  {
    title: "Django",
    src: "django.jpg",
    color: "#706D63",
    description: "Python, ORM, MVC, security, scalability."
  },
  {
    title: "Flask",
    src: "flask.jpg",
    color: "#706D63",
    description: "Python, WSGI, microservices, lightweight, extensible."
  },
  {
    title: "Jakarta EE",
    src: "jakarta_logo_large.png",
    color: "#706D63",
    description: "Java-based, enterprise applications, microservices, dependency injection."
  },
  {
    title: "Asp.NET Core",
    src: "asp.png",
    color: "#706D63",
    description: "Cross-platform, high-performance, MVC, web API"
  }
];

export default function Home() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {/*<h2 className={styles.backendTitle}>Backend Framework</h2>  {/* New title with custom class */}
        {projects.map((project, index) => (
          <Project index={index} title={project.title} setModal={setModal} key={index} description={project.description} />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
