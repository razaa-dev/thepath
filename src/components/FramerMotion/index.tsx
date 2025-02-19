'use client';
import { useRef } from "react";
import styles from '../Parallax/page.module.scss';
import Picture1 from '../../../public/medias/4.jpg';
import Picture2 from '../../../public/medias/5.jpg';
import Picture3 from '../../../public/medias/6.jpg';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "API communication protocols";

export default function Index() {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    // Pre-generate random values for transformations
    // This way we're not calling hooks inside loops or callbacks
    const randomValues = word.split("").map(() => 
        Math.floor(Math.random() * -75) - 25
    );
    
    // Individual hooks for specific letters - no longer in a loop/callback
    const letter0Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[0]]);
    const letter1Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[1]]);
    const letter2Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[2]]);
    const letter3Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[3]]);
    const letter4Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[4]]);
    const letter5Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[5]]);
    const letter6Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[6]]);
    const letter7Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[7]]);
    const letter8Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[8]]);
    const letter9Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[9]]);
    const letter10Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[10]]);
    const letter11Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[11]]);
    const letter12Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[12]]);
    const letter13Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[13]]);
    const letter14Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[14]]);
    const letter15Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[15]]);
    const letter16Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[16]]);
    const letter17Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[17]]);
    const letter18Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[18]]);
    const letter19Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[19]]);
    const letter20Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[20]]);
    const letter21Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[21]]);
    const letter22Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[22]]);
    const letter23Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[23]]);
    const letter24Y = useTransform(scrollYProgress, [0, 1], [0, randomValues[24]]);

    // Put all transform values in an array for easy access
    const letterTransforms = [
        letter0Y, letter1Y, letter2Y, letter3Y, letter4Y, 
        letter5Y, letter6Y, letter7Y, letter8Y, letter9Y, 
        letter10Y, letter11Y, letter12Y, letter13Y, letter14Y, 
        letter15Y, letter16Y, letter17Y, letter18Y, letter19Y, 
        letter20Y, letter21Y, letter22Y, letter23Y, letter24Y
    ];

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{ y: sm }}>API</motion.h1>
                <h1>Architecture</h1>
                <div className={styles.word}>
                    <p>
                        {
                            word.split("").map((letter, i) => (
                                <motion.span 
                                    style={{ top: letterTransforms[i] }} 
                                    key={`l_${i}`}
                                >
                                    {letter}
                                </motion.span>
                            ))
                        }
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map(({ src, y }, i) => (
                        <motion.div 
                            style={{ y }} 
                            key={`i_${i}`} 
                            className={styles.imageContainer}
                        >
                            <Image
                                src={src}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}