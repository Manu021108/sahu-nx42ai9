import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI-Enabled Full-Stack Development",
    icon: web,
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: backend,
  },
  {
    title: "Data Science & Predictive Analytics",
    icon: mobile,
  },
  {
    title: "API & Backend Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: typescript,
  },
  {
    name: "FastAPI",
    icon: reactjs,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "PyTorch",
    icon: threejs,
  },
  {
    name: "Scikit-learn",
    icon: nodejs,
  },
  {
    name: "Pandas",
    icon: redux,
  },
  {
    name: "NumPy",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI-Enabled Full-Stack Developer",
    company_name: "TFI – TechnoFutureIndia",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Present",
    points: [
      "Designing and developing AI-powered web applications integrating ML models with full-stack systems.",
      "Building scalable backend APIs using FastAPI and PostgreSQL.",
      "Deploying intelligent dashboards and automation pipelines for real-world business use-cases.",
      "Leading development of AI-based healthcare, finance, and education solutions.",
    ],
  },
  {
    title: "AIML Intern",
    company_name: "Swecha Telangana, Hyderabad",
    icon: tesla,
    iconBg: "#383E56",
    date: "Nov 2024 – Present",
    points: [
      "Worked on India's largest Telugu Large Language Model.",
      "Performed data preparation, model training, fine-tuning, and inference.",
      "Built ML pipelines using PyTorch, Hugging Face, and FastAPI.",
      "Developed NLP-based AI services for large-scale deployment.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company_name: "EVOASTRA Ventures Pvt Ltd",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Led a 25-member team for data collection and web scraping.",
      "Built credit risk prediction models for Bondora Bank.",
      "Used machine learning to classify defaulters and non-defaulters.",
      "Created dashboards and visual analytics for decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Credit Risk Analytics – Bondora Bank",
    description:
      "Developed a predictive analytics system to identify loan defaulters and minimize financial risk using machine learning algorithms and data visualization.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Revolutionizing Liver Care",
    description:
      "Built a machine learning model to detect Liver Cirrhosis at early stages with a web-based interface for medical professionals.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Mathematics Tutor using Deep Learning",
    description:
      "An AI-powered learning application that recognizes hand-drawn geometric shapes using Convolutional Neural Networks with interactive learning modules.",
    tags: [
      {
        name: "deep-learning",
        color: "blue-text-gradient",
      },
      {
        name: "cnn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Electronic Health Record System (EHRS)",
    description:
      "A full-stack healthcare system to digitize patient and medicine records for medical camps with FastAPI backend and PostgreSQL database.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
