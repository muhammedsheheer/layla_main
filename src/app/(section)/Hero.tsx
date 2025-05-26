"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [showText, setShowText] = useState(true);
  const text = "Layla";
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/layla/layla-thumbnail.png"
      >
        <source src="https://d8q1b3smcycac.cloudfront.net/layla/layla-web.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mt-16 flex h-full flex-col items-center justify-center gap-3 md:ml-16">
        <h1
          className="text-center font-times_new_roman text-9xl font-[400] md:text-[250px] md:tracking-[-3px]"
          // style={{
          //   background: "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
        >
          {inView &&
            [...text].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="text-white"
              >
                {letter}
              </motion.span>
            ))}
        </h1>
        <motion.div
          className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/table-booking"}>
            <Button
              variant={"imageoutline"}
              className="hero-button flex items-center justify-center gap-3 px-8 py-7 uppercase text-[#000]"
            >
              Book Your Table
            </Button>
          </Link>
          {/* <Link href={"/menu"}>
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#CDAE64] px-6 py-6 font-manrope text-sm font-[600] uppercase text-black hover:bg-[#c3a96c] md:px-5 md:py-6">
              Order Now
            </Button>
          </Link> */}
          <Link href="/menu">
            <Button
              className="hero-button flex items-center justify-center gap-3 px-11 py-10 uppercase text-[#000]"
              variant="imageoutline"
            >
              Order Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
