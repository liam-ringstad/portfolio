"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Anheuser-Busch",
    role: "Retail Merchandising Assistant Manager",
    location: "Bellingham, WA",
    date: "Aug 2024 – Present",
    bullets: [
      "Led a team of merchandisers while implementing data tracking and inventory control systems that reduced stock discrepancies and improved operational efficiency.",
      "Developed performance metrics and team schedules that directly supported operational reporting accuracy.",
    ],
  },
  {
    company: "Independent",
    role: "Life Insurance Agent (Remote)",
    location: "Remote",
    date: "Oct 2023 – May 2025",
    bullets: [
      "Built lead-generation systems and client data management workflows, strengthening organizational and technical client-management skills.",
    ],
  },
  {
    company: "Microsoft (BrickRed Systems)",
    role: "Cloud Support Engineer",
    location: "Redmond, WA",
    date: "Dec 2021 – Jul 2022",
    bullets: [
      "Managed large datasets in Azure environments, applying analytical skills to data processing and system optimization.",
      "Resolved system inefficiencies and performance issues under tight deadlines, developing precision and advanced problem-solving abilities.",
    ],
  },
  {
    company: "General Contracting (Family Owned)",
    role: "Assistant Project Manager",
    location: "Bellingham, WA",
    date: "Summers 2018 – 2020",
    bullets: [
      "Tracked project expenses, materials, and labor in real time to maintain strict budget compliance and cost efficiency.",
      "Conducted quality assessments and delivered accurate project reporting.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Briefcase className="size-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Experience</h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors group-hover:border-primary">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              
              {/* Content Card */}
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-background/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.date}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
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
