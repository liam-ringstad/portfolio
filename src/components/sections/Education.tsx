"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <GraduationCap className="size-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Education</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground">AAS in Finance</h3>
                <p className="text-primary text-sm font-medium mb-2">Whatcom Community College, Bellingham, WA</p>
                <p className="text-sm text-muted-foreground">In Progress, Expected 2026</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Award className="size-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Certifications</h2>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Microsoft Azure Fundamentals (AZ-900)</h3>
                    <p className="text-primary text-sm font-medium">Microsoft</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">February 2023</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Technical Support Fundamentals</h3>
                    <p className="text-primary text-sm font-medium">Google</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">June 2022</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
