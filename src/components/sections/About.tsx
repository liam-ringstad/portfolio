"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Terminal className="size-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-4xl"
        >
          <p className="text-muted-foreground leading-relaxed">
            Engineering builder with hands-on experience managing large-scale datasets in Azure, resolving complex system issues under tight deadlines, and shipping production-grade AI and ontology platforms. 
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Currently heads-down building sovereign offline-first command systems and multi-agent physics simulation platforms that deliver massive leverage for protective security and planetary-scale infrastructure. Driven by a deep curiosity for solving problems that require extreme reliability and advanced autonomous capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
