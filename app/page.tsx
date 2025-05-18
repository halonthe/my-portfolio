"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Hello() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto "
      >
        <Highlight className="text-base font-normal">Hi, I am</Highlight>
        <p>Yudha Dwi Restika</p>
        <TextGenerateEffect words="a self-taugh web developer who loves to learn new things :)" />
      </motion.h1>
    </HeroHighlight>
  );
}
