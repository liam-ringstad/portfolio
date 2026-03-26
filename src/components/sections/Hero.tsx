"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full poiner-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Liam Ringstad
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mt-4 tracking-wide">
              Software Engineer & Technical Product Owner | Ontology-Driven Platforms & Agentic Systems
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Currently shipping sovereign offline-first AI command systems and planetary-scale multi-agent simulation platforms. Passionate about problems that sit at the intersection of data, autonomy, and mission-critical operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="#projects"
              className={buttonVariants({ size: "lg", variant: "default" }) + " bg-primary text-primary-foreground hover:bg-primary/90 gap-2"}
            >
              View Projects <ArrowRight className="size-4" />
            </Link>
            <a
              href="/resume.pdf"
              download="Liam_Ringstad_Resume.pdf"
              className={buttonVariants({ size: "lg", variant: "outline" }) + " border-border hover:bg-accent gap-2"}
            >
              <Download className="size-4" /> Download Resume
            </a>
            <Link
              href="mailto:liam@tropix.ai"
              className={buttonVariants({ size: "lg", variant: "ghost" }) + " hover:bg-accent gap-2"}
            >
              <Mail className="size-4" /> Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative size-64 md:size-80 rounded-2xl overflow-hidden border border-border bg-card shadow-2xl group flex items-center justify-center">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-10"></div>
            <Image src="/headshot.jpg" alt="Liam Ringstad" fill sizes="(max-width: 768px) 256px, 320px" className="object-cover z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
