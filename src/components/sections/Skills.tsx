"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Code2, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI & Agentic Systems",
    icon: <Cpu className="size-5 text-primary" />,
    skills: ["Multi-agent workflows", "Ontologies (Palantir AIP)", "Grok multimodal reasoning", "ROE/HITL enforcement", "Reinforcement learning", "Genetic algorithms"]
  },
  {
    title: "Cloud & Data",
    icon: <Cloud className="size-5 text-primary" />,
    skills: ["Azure", "Large-scale dataset management", "Physics-accurate simulation", "numpy / scipy / astropy", "Real-time pipelines"]
  },
  {
    title: "Full-Stack Development",
    icon: <Code2 className="size-5 text-primary" />,
    skills: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "FastAPI", "React", "Vercel"]
  },
  {
    title: "Architecture & Operations",
    icon: <ShieldAlert className="size-5 text-primary" />,
    skills: ["Immutable lineage", "Offline-first architectures", "System optimization under pressure", "Mission-critical operations"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Cpu className="size-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-md border border-primary/20">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 opacity-70">▹</span>
                        <span className="leading-snug">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
