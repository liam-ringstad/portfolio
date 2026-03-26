"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Video } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "EPACE Sovereign",
    subtitle: "Sovereign, Offline-First AI Command Platform",
    description: "Turns raw protective security operations plans into a live \"Eye of God\" command system. Uses a Palantir AIP-compatible ontology fused with Grok multimodal reasoning, immutable lineage, and full ROE/HITL enforcement. Designed for high-profile principals in high-risk zones and built to scale into defense contracts.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Custom Ontology Layer"],
    links: { tropix: "https://tropix.ai" },
    gradient: "from-blue-900/40 to-cyan-900/40"
  },
  {
    title: "Digital Optimus",
    subtitle: "Personal Macrohard & Autonomous Operations",
    description: "A one-person SaaS platform that empowers any solo founder or team to deploy persistent, autonomous \"Digital Human\" agents. These agents take over arbitrary software—web apps, desktop software, or physical robots—and run entire business operations 24/7 with near-zero human intervention. Each AI \"employee\" watches the screen, moves the mouse, types, clicks, navigates dynamic UIs, reads data, makes decisions, and executes real work exactly like a skilled human would.",
    tech: ["React/Next.js", "Python/FastAPI", "Agentic Workflows", "Computer Vision", "Vercel/AWS"],
    links: null,
    gradient: "from-indigo-900/40 to-blue-900/40"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <FolderGit2 className="size-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <Card className="h-full bg-background/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Image Placeholder */}
                <div className="h-48 w-full border-b border-border/50 bg-card overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                  <div className="relative z-20 text-muted-foreground/30 font-mono text-4xl font-bold uppercase tracking-widest text-center px-4">
                    {project.title}
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col h-[calc(100%-12rem)] relative z-20">
                  <div className="mb-4">
                    <h3 className="font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-primary/80 font-medium text-sm">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50 items-center">
                      {project.links?.tropix && (
                        <Link
                          href={project.links.tropix}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({ size: "sm", variant: "default" }) + " bg-primary text-primary-foreground gap-2 hover:bg-primary/90"}
                        >
                          <ExternalLink className="size-3.5" /> Learn more at tropix.ai
                        </Link>
                      )}
                      <span className="text-sm font-medium text-primary/80 italic flex items-center gap-2">
                        Demo & GitHub coming soon...
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
