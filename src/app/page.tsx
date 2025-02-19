'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

import useMousePosition from '@/utils/useMousePosition';
import { Portfolio } from "@/utils/interface";

// Components
import About from "@/components/about";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Intro from "@/components/Intro";
import Projects from "@/components/projects";
import Projectss from "@/components/Projectss";
import Services from "@/components/Services";
import PicturesScroll from "@/components/PicturesScroll";
import Skills from "@/components/Skills";
import Testimonials from "@/components/testimonials";
import Timeline from "@/components/Timeline";
import Floating from '@/components/Floating/floating';
import Project from '@/components/project';
import Iiintro from '@/components/Iiintro';
import Dddescription from '@/components/Dddescription';
import Sssection from '@/components/Sssection';
import Parallax from '@/components/Parallax';
import MouseScale from '@/components/MouseScale';
import MouseHover from '@/components/MouseHover';
import { SlideIn } from '@/components/ui/Transitions';
import { SectionHeading } from '@/components/ui/Typography';

// Project data (moved outside component)
const projectData = [
  {
    title1: "Html ",
    title2: " css",
    src: "htmlcss.png"
  },
  {
    title1: "JavaScript ",
    title2: " TypeScript",
    src: "tsJs.png"
  },
  {
    title1: "ReactJs ",
    title2: " nextJs",
    src: "reactJsNextjs.png"
  },
  {
    title1: "ThreeJs ",
    title2: " VueJs",
    src: "thr.png"
  },
  {
    title1: "FramerMotion ",
    title2: " GSAP",
    src: "framer gsap.png"
  },
  {
    title1: "Angular ",
    title2: " Angular Material UI",
    src: "angular2.png"
  },
  {
    title1: "TailwindCSS ",
    title2: " Bootstrap",
    src: "boot.jpeg"
  }
];

export default function Home() {
  // State to hold portfolio data
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = (await import("@/dummy.json")).default as Portfolio;
        setPortfolio(data);
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading state if data isn't ready
  if (loading || !portfolio) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  // Destructure portfolio data
  const {
    about,
    testimonials,
    services,
    skills,
    projects,
    social_handles,
    timeline,
    email,
  } = portfolio;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Skills skills={skills} />
      <Services services={services} />
      <Projects projects={projects} />

      <div style={{ marginTop: "240px" }}>
        <Floating />      {/*programming languages */}
      </div>

      <div style={{ marginTop: "240px" }}>
        <SectionHeading className="md:pl-12">
          <SlideIn className="text-white/40">Backend</SlideIn>
          <br />
          <SlideIn>Frameworks</SlideIn>
        </SectionHeading>
      </div>

      <div style={{ marginTop: "500px" }}>
        <MouseHover /> {/* backend frameworks */}
      </div>

      <div style={{ marginTop: "600px" }}>
        <div className="mt-20 px-10">
          <SectionHeading className="md:pl-12">
            <SlideIn className="text-white/40">Frontend</SlideIn>
            <br />
            <SlideIn>Frameworks</SlideIn>
          </SectionHeading>
          
          <div className={styles.gallery}>
            {projectData.map((project, index) => ( 
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </div>

      <Timeline timeline={timeline} /> {/*database */}
      <Parallax/> {/*security*/}

      <div style={{ marginTop: "240px" }}>
        <SectionHeading className="md:pl-12">
          <SlideIn className="text-white/40">Monolithic & Microservice</SlideIn>
          <br />
          <SlideIn>Architecture</SlideIn>
        </SectionHeading>
        <MouseScale/> {/*monolithic micro service */}
      </div>

      {/* Featured Projects Gallery */}
      {/* Featured Projects Gallery */}
      {/* Featured Projects Gallery */}

      {/*<Testimonials testimonials={testimonials} /> */}

      <div style={{ marginTop: "240px" }}>
        <SectionHeading className="md:pl-12">
          <SlideIn className="text-white/40">Operating</SlideIn>
          <br />
          <SlideIn>system</SlideIn>
        </SectionHeading>
        <Iiintro /> {/* part 1 linux windws */}
        <Dddescription /> {/* part 2 linux windws */}
        <Sssection /> {/* part 3 linux windws */}
      </div>
      <Intro /> {/*part 1 devops */}
      <Description />{/*part 2 devops */}
      <Projectss />{/*part 3 devops */}

      <br />
      <br />

      <div style={{ marginTop: "200px" }}>
        <SectionHeading className="md:pl-12">
          <SlideIn className="text-white/40">My</SlideIn>
          <br />
          <SlideIn>Expertise</SlideIn>
        </SectionHeading>     
        <PicturesScroll /> {/*code lyoko */}
      </div>

      <div style={{ marginTop: "200px" }}>
        <Contact email={email} social_handle={social_handles} about={about} />
      </div>
      {/* Empty screen filler at the end */}
    </main>
  );
}