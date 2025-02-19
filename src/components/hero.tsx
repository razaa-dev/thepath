"use client";

import Link from "next/link";

import { About } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { TextReveal } from "./ui/Typography";
import { ArrowUpRight } from "./ui/Icons";
import LoaderWrapper from "./LoaderWrapper";

interface HeroProps {
  about: About;
}

const Hero = ({ about }: HeroProps) => {
  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/7181934-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/*<Transition>
        <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      </Transition>*/}
      <LoaderWrapper>
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              {/* Profile Image (if needed) */}
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                <SlideIn>Rachad Wadie</SlideIn>
              </h2>
              <h1 className="md:text-7xl text-3xl overflow-hidden">
                <SlideIn>SOFTWARE ENGINEER</SlideIn>
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                I develop dynamic user interfaces, robust backend systems, and efficient DevOps pipelines.
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
            <a
  href="/cv.pdf"
  download="cv.pdf"
  style={{
    backgroundColor: "rgba(255, 233, 233, 0.39)", // Green with 50% opacity
    color: "white", // White text
    padding: "12px 24px", // Padding
    borderRadius: "9999px", // Fully rounded corners
    display: "flex",
    alignItems: "center",
    border: "0.8px solid white", // White border
    gap: "8px",
    textDecoration: "none", // Remove underline
    transition: "background-color 0.3s ease", // Smooth transition
    
  }}
  className="group" // Keep any existing classes
>
  <TextReveal>My CV</TextReveal>
  <ArrowUpRight />
</a>
</Transition>
          </div>
        </div>
      </LoaderWrapper>
    </section>
  );
};

export default Hero;