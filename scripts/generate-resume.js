const PDFDocument = require('pdfkit');
const fs = require('fs');

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('./public/resume.pdf'));

// Header
doc.fontSize(24).font('Helvetica-Bold').text('Liam Ringstad', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica').text('contact@liamringstad.com | github.com | linkedin.com', { align: 'center' });
doc.moveDown(1);

// Professional Summary
doc.fontSize(14).font('Helvetica-Bold').text('Professional Summary');
doc.moveTo(50, doc.y + 5).lineTo(560, doc.y + 5).stroke();
doc.moveDown(1);
doc.fontSize(11).font('Helvetica').text('Engineering builder with hands-on experience managing large-scale datasets in Azure, resolving complex system issues under tight deadlines, and shipping production-grade AI and ontology platforms. Heads-down building sovereign offline-first command systems and multi-agent physics simulation platforms.');
doc.moveDown(1.5);

// Cloud Support + Experience
doc.fontSize(14).font('Helvetica-Bold').text('Experience');
doc.moveTo(50, doc.y + 5).lineTo(560, doc.y + 5).stroke();
doc.moveDown(1);

// Role 1
doc.fontSize(12).font('Helvetica-Bold').text('Microsoft (BrickRed Systems)', { continued: true }).font('Helvetica').text(' — Cloud Support Engineer', { align: 'left' });
doc.fontSize(11).text('Redmond, WA | Dec 2021 – Jul 2022');
doc.moveDown(0.5);
doc.text('• Managed large datasets in Azure environments, applying analytical skills to data processing and system optimization.');
doc.text('• Resolved system inefficiencies and performance issues under tight deadlines, developing precision and advanced problem-solving abilities.');
doc.moveDown(1);

// Projects
doc.fontSize(14).font('Helvetica-Bold').text('Major Projects & Platforms');
doc.moveTo(50, doc.y + 5).lineTo(560, doc.y + 5).stroke();
doc.moveDown(1);

doc.fontSize(12).font('Helvetica-Bold').text('EPACE Sovereign');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica').text('• Sovereign, Offline-First AI Command Platform.');
doc.text('• Uses a Palantir AIP-compatible ontology fused with Grok multimodal reasoning, immutable lineage, and full ROE/HITL enforcement.');
doc.text('• Tech: Next.js, TypeScript, FastAPI, Custom Ontology Layer.');
doc.moveDown(1);

doc.fontSize(12).font('Helvetica-Bold').text('EnergyForge / MarsForge');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica').text('• Multi-Agent AI Simulation & Optimization Platform.');
doc.text('• Natural language prompting builds full-stack web app with physics-accurate simulation engine.');
doc.text('• Real-time optimization handled by multi-agent swarms with reinforcement learning/genetic algorithms.');
doc.text('• Tech: React/Next.js, Python/FastAPI, numpy/scipy, LangGraph-style agents, Vercel/AWS.');
doc.moveDown(1);

// Skills & Education
doc.fontSize(14).font('Helvetica-Bold').text('Skills & Certifications');
doc.moveTo(50, doc.y + 5).lineTo(560, doc.y + 5).stroke();
doc.moveDown(1);
doc.fontSize(11).font('Helvetica').text('• AI / Agentic Systems: Multi-agent workflows, Palantir AIP Ontologies, Grok reasoning');
doc.text('• Cloud & Data: Azure, Dataset Management, Physics simulation, Real-time pipelines');
doc.text('• Stack: Next.js, TypeScript, Tailwind, FastAPI, Python, React');
doc.text('• Certifications: Microsoft Azure Fundamentals (AZ-900), Google Technical Support Fundamentals');

doc.end();
console.log('Resume PDF generated successfully at ./public/resume.pdf');
