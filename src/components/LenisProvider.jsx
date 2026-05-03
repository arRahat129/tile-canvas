"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'lenis/dist/lenis.css';

export default function LenisProvider({ children }) {
    useEffect(() => {
        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            autoRaf: false, // We use GSAP ticker instead
        });

        gsap.registerPlugin(ScrollTrigger);

        // 2. The GSAP-Lenis Bridge
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // 3. GLOBAL ENTRANCE ANIMATION
        // This runs on the client but targets the server-rendered HTML
        gsap.from(".home-wrapper > *", {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            clearProps: "all" // Cleans up styles after animation finishes
        });

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return <>{children}</>;
}