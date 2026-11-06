// Single source of truth for all portfolio content.
// Edit this file to update the site. Nothing here is confidential company data.

export const profile = {
  name: "Birundha I",
  title: "Agentic AI & Python Developer",
  email: "birundhabhuvana1312@gmail.com",
  phone: "+91 8667823597",
  phoneHref: "tel:+918667823597",
  linkedin: "https://linkedin.com/in/birundha-i",
  github: "https://github.com/Birundha2004",
  location: "Chennai, Tamil Nadu, India",
  siteUrl: "https://birundha2004.github.io/",
  // Placeholder file lives in public/resume.pdf (replace it with your latest PDF)
  resumeFile: "resume.pdf",
  resumeDownloadName: "Birundha_I_Resume.pdf",
  headline: "Building Intelligent AI Agents for Real-World Business Workflows.",
  intro:
    "I'm Birundha, an AI & Data Science graduate and Agentic AI & Python Developer with hands-on experience integrating LLM-powered agents, business systems, and workflow automation.",
  // Shown in the hero. Not a claim of arrival: travel is planned.
  availability:
    "Based in Dubai, UAE, open to Agentic AI and AI engineering roles.",
  targetRoles: [
    "Agentic AI Engineer",
    "AI Engineer",
    "Generative AI Engineer",
    "Python Developer",
    "AI Automation Engineer",
  ],
};

export const about = [
  "I'm an AI and Data Science graduate (B.Tech, S.A. Engineering College, Anna University (Autonomous)) and an Agentic AI & Python Developer with hands-on experience building LLM-powered agents that automate real business workflows.",
  "I work with Python, Hermes Agent, MCP and RAG, and connect agents to CRM, accounting, helpdesk and WhatsApp systems, with persistent state, validation and approval steps so they keep working reliably after the demo.",
  "Earlier, I built Python automation and IoT dashboard backends for industrial workflows, and computer vision and machine learning applications in Flask.",
];
export const skillGroups = [
  {
    title: "AI & Agents",
    items: [
      "Agentic AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Hermes Agent",
      "MCP",
      "Machine Learning",
      "Computer Vision",
    ],
  },
  {
    title: "Programming & Backend",
    items: ["Python", "SQL", "Flask", "REST APIs", "SQLite"],
  },
  {
    title: "Business Systems",
    items: [
      "Zoho CRM",
      "Zoho Books",
      "Chatwoot",
      "WhatsApp Business API",
      "n8n",
    ],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Linux", "Git", "OpenRouter", "Ollama"],
  },
  {
    title: "ML & Vision",
    items: ["TensorFlow", "OpenCV"],
  },
  {
    title: "Analytics",
    items: ["Power BI", "Tableau", "Microsoft Excel"],
  },
];

export const experience = [
  {
    role: "Agentic AI Trainee",
    company: "Sree Karuviyiyal",
    period: "June 2026 – October 2026",
    points: [
      "Work on specialist AI-agent workflows built with the Hermes Agent framework.",
      "Integrate Zoho CRM, Zoho Books, Chatwoot and WhatsApp Business API into agent workflows.",
      "Contribute to event-driven customer communication, AI-assisted contact extraction and synchronisation, and conversational quotation processing.",
      "Work with persistent workflow state, duplicate-job protection, webhook verification and recovery.",
      "Deploy AI services with Docker and Linux, and use regression-test tooling for the workflows.",
    ],
  },
  {
    role: "Software Intern",
    company: "Surya Induction Engineering",
    period: "October 2025 – May 2026",
    points: [
      "Developed Python automation tools for industrial workflows.",
      "Built backend modules for IoT monitoring dashboards.",
      "Implemented industrial data processing and alert mechanisms.",
    ],
  },
  {
    role: "AI Trainee",
    company: "Aristoverse Deep Tech",
    period: "June 2025 – August 2025",
    points: [
      "Integrated machine learning models into Flask web applications.",
      "Developed computer vision applications using TensorFlow and OpenCV.",
      "Tested and optimised AI models.",
    ],
  },
];

export const caseStudy = {
  title: "AI-Powered Sales & Business Automation Platform",
  badge: "Professional case study · Private company system",
  tech: [
    "Python",
    "Flask",
    "Hermes Agent",
    "MCP",
    "Zoho CRM",
    "Zoho Books",
    "Chatwoot",
    "WhatsApp Business API",
    "Docker",
    "SQLite",
    "LLM integrations",
  ],
  capabilities: [
    {
      id: "A",
      title: "Customer communication & lead automation",
      points: [
        "Event-driven workflows",
        "Independent email and WhatsApp tasks",
        "Duplicate-job protection",
        "CRM-linked customer context",
      ],
    },
    {
      id: "B",
      title: "AI-assisted contact extraction",
      points: [
        "Image-based contact extraction",
        "Identity validation",
        "Field preservation",
        "CRM and accounting synchronisation",
      ],
    },
    {
      id: "C",
      title: "Conversational quotation automation",
      points: [
        "Customer-scoped state",
        "Product and pricing validation",
        "Staff approval workflows",
        "Draft quotation updates",
      ],
    },
    {
      id: "D",
      title: "Agent orchestration & reliability",
      points: [
        "Specialist agent profiles",
        "Scoped tool access",
        "Persistent state",
        "Webhook verification",
        "Error recovery and Docker deployment",
      ],
    },
  ],
};

export type ProjectCategory = "Agentic AI" | "Computer Vision" | "Automation" | "Mobile";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  kind: "Case study" | "Personal / academic project";
  summary: string;
  bullets: string[];
  tech: string[];
}

// Deliberately no repo/demo URLs — none are claimed.
export const projects: Project[] = [
  {
    id: "sales-automation",
    title: "AI-Powered Sales & Business Automation Platform",
    category: "Agentic AI",
    kind: "Case study",
    summary:
      "Agent-driven customer communication, contact extraction and quotation workflows connected to CRM, accounting and messaging tools.",
    bullets: [
      "Event-driven email and WhatsApp workflows with duplicate-job protection",
      "Scoped tool access and persistent state for specialist agents",
      "Staff approval before customer-facing output",
    ],
    tech: ["Python", "Flask", "Hermes Agent", "MCP", "Zoho CRM", "Chatwoot", "Docker"],
  },
  {
    id: "news-automation",
    title: "AI-Powered News Content Automation",
    category: "Automation",
    kind: "Personal / academic project",
    summary:
      "Turns RSS feeds into publish-ready article drafts with LLMs, with human approval over Telegram.",
    bullets: [
      "RSS feed processing",
      "LLM-generated article drafts via n8n workflows",
      "Telegram approval step for content validation",
    ],
    tech: ["n8n", "LLMs", "RSS", "Telegram"],
  },
  {
    id: "sign-language",
    title: "Sign Language Recognition Web Application",
    category: "Computer Vision",
    kind: "Personal / academic project",
    summary:
      "Real-time sign language recognition web app with spoken output for accessibility.",
    bullets: [
      "Recognition using TensorFlow and OpenCV",
      "Flask backend exposing REST APIs",
      "Text-to-speech output",
    ],
    tech: ["TensorFlow", "OpenCV", "Flask", "REST APIs"],
  },
  {
    id: "geoattendance",
    title: "GeoAttendance Mobile Application",
    category: "Mobile",
    kind: "Personal / academic project",
    summary:
      "Attendance workflow concept built around GPS geofencing for check-in/check-out and Odoo ERP integration.",
    bullets: [
      "GPS geofencing for check-in and check-out",
      "Integration with Odoo ERP over REST APIs",
      "Attendance and leave views",
    ],
    tech: ["GPS geofencing", "Odoo ERP", "REST APIs", "Android"],
  },
];

export const architectureNodes = [
  {
    id: "enquiry",
    label: "Customer Enquiry",
    short: "Enquiry",
    detail:
      "A customer message or enquiry arrives through email or WhatsApp and becomes the trigger for a workflow.",
  },
  {
    id: "intake",
    label: "Event Intake",
    short: "Intake",
    detail:
      "Incoming events are received through verified webhooks. Each event is registered once so duplicate deliveries do not create duplicate jobs.",
  },
  {
    id: "context",
    label: "Lead Context",
    short: "Context",
    detail:
      "Customer-scoped state and CRM-linked history are gathered so the agent works with the right customer's context only.",
  },
  {
    id: "agent",
    label: "Specialist AI Agent",
    short: "Agent",
    detail:
      "A specialist agent profile handles the task (communication, contact extraction or quotation) with only the tools it is allowed to use.",
  },
  {
    id: "tools",
    label: "CRM / Knowledge / Accounting Tools",
    short: "Tools",
    detail:
      "Scoped tool access to CRM, a product knowledge base and accounting, connected through MCP and API integrations.",
  },
  {
    id: "validation",
    label: "Validation & Approval",
    short: "Approval",
    detail:
      "Identity, product and pricing checks run before output is used, with staff approval for customer-facing or quotation actions.",
  },
  {
    id: "output",
    label: "Email / WhatsApp / Quotation Output",
    short: "Output",
    detail:
      "Approved results leave as email, WhatsApp messages or draft quotation updates. Failures are logged and can be recovered.",
  },
];

export const certifications = [
  { title: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", date: "February 2025" },
  { title: "SQL and Relational Databases 101", issuer: "IBM Cognitive Class", date: "January 2025" },
  { title: "Data Analysis with Python", issuer: "IBM Cognitive Class", date: "July 2024" },
  { title: "Python Programming for Beginners", issuer: "Udemy", date: "July 2024" },
  { title: "ChatGPT for Excel", issuer: "Great Learning Academy", date: "June 2024" },
];

// Future certifications: add entries here with earned: false.
// They are only shown as "In progress" and never as earned until you set earned: true
// and move them to the list above.
export const plannedCertifications: { title: string; issuer: string; earned: false }[] = [];

export const education = {
  degree: "B.Tech, Artificial Intelligence and Data Science",
  school: "S.A. Engineering College, Anna University (Autonomous)",
  period: "2022 – 2026",
  cgpa: "8.27",
};
