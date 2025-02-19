'use client';

import React from 'react';
import styles from './page.module.scss';
import GSAP from '../GSAP';
import FramerMotion from '../FramerMotion';

export default function Home() {
    return (
        <main className={styles.main}>
            <GSAP />
            <FramerMotion />
        </main>
    );
}
