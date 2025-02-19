'use client';

import { useLayoutEffect, useRef } from "react";
import styles from '../Parallax/page.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../../../public/medias/1.jpg';
import Picture2 from '../../../public/medias/2.jpg';
import Picture3 from '../../../public/medias/3.jpg';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const word = "For Authentication &  Authorization";

type ImageRefs = (HTMLDivElement | null)[];
type LetterRefs = (HTMLSpanElement | null)[];

export default function Index() {
    const container = useRef<HTMLDivElement | null>(null);
    const images = [Picture1, Picture2, Picture3];
    const lettersRef = useRef<LetterRefs>([]);
    const imagesRef = useRef<ImageRefs>([]);
    const title1 = useRef<HTMLHeadingElement | null>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
            .to(title1.current, { y: -50 }, 0)
            .to(imagesRef.current[1], { y: -150 }, 0)
            .to(imagesRef.current[2], { y: -255 }, 0);

            lettersRef.current.forEach((letter, i) => {
                if (letter) {
                    tl.to(letter, {
                        top: Math.floor(Math.random() * -75) - 25,
                    }, 0);
                }
            });
        });
        return () => context.revert();
    }, []);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <h1 ref={title1}>Security</h1>
                <h1>Technologies</h1>
                <div className={styles.word}>
                    <p>
                        {word.split(" ").map((letter, i) => (
                            <span key={`l_${i}`} ref={el => { lettersRef.current[i] = el; }}>{letter}</span>
                        ))}
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {images.map((image, i) => (
                    <div key={`i_${i}`} ref={el => { imagesRef.current[i] = el; }} className={styles.imageContainer}>
                        <Image src={image} placeholder="blur" alt="image" fill />
                    </div>
                ))}
            </div>
        </div>
    );
}
