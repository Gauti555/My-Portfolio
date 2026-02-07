// src/data/services.data.ts

export type ExperienceItem = {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  highlights: string[]
  details: string[]
  tech: string[]
  coverImage?: string
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Technische Hochschule Deggendorf",
    role: "AI Research Engineer",
    duration: "09.2023 to Present",
    location: "Deggendorf, Germany",
    coverImage: "/illustrations/strip/AI.png",
    highlights: [
      "Spearheaded AI-driven cybersecurity research focusing on secure data generation and anonymization for autonomous driving systems.",
      "Architected GenAI and multimodal ML workflows using Diffusion models, VLMs, and Agentic AI to automate privacy-compliant data processing.",
      "Developed LLM-powered RAG systems for automated threat analysis, integrating structured knowledge bases and explainable AI outputs.",
    ],
    details: [
      "Established production-grade pipelines for data anonymization and threat modeling using Python, Docker, and Vector databases.",
      "Contributed to technical concepts and methodologies for BMBF and EU Horizon project proposals.",
      "Authored scientific publications on secure AI architectures in alignment with GDPR and the EU AI Act.",
    ],
    tech: ["Python", "GenAI", "LLMs", "Docker", "Vector DBs", "PyTorch"],
  },
  {
    id: "exp-2",
    company: "Agreem Technologies",
    role: "Machine Learning Engineer",
    duration: "11.2018 to 03.2020",
    location: "Ahmedabad, Gujarat",
    coverImage: "/illustrations/strip/ML1.png",
    highlights: [
      "Conceptualized and implemented end-to-end ML pipelines including data preprocessing, feature engineering, and high-performance model training.",
      "Developed and optimized specialized Machine Learning models for supervised and unsupervised tasks tailored to specific project requirements.",
      "Leveraged Deep Learning, NLP, and Computer Vision techniques to deliver diverse cross-functional solutions for enterprise clients.",
    ],
    details: [
      "Supported the deployment of ML models on major cloud platforms (AWS, Azure) ensuring scalability and high availability.",
      "Integrated complex ML components into backend systems of web-based software applications.",
      "Documented technical architectures and model evaluation metrics for stakeholder alignment.",
    ],
    tech: ["Python", "TensorFlow", "Scikit-Learn", "AWS", "Azure", "Flask"],
  },
  {
    id: "exp-3",
    company: "Technische Hochschule Deggendorf",
    role: "Working Student Computer Vision",
    duration: "07.2021 to 07.2022",
    location: "Deggendorf, Germany",
    coverImage: "/illustrations/strip/CV.png",
    highlights: [
      "Developed an AI-driven traffic monitoring system using YOLOv5 and Keras for real-time vehicle detection, classification, and brand identification.",
      "Implemented DeepSORT object tracking and curated custom datasets to enable precise, real-time vehicle counting and behavioral analysis.",
      "Engineered an end-to-end software solution centered on computer vision for localized automation and intelligent reporting.",
    ],
    details: [
      "Optimized trained models for real-time inference, significantly reducing latency for edge deployment.",
      "Built custom data augmentation pipelines to improve model robustness across diverse lighting and weather conditions.",
      "Prepared comprehensive deployment-ready documentation and architectural overviews.",
    ],
    tech: ["Python", "OpenCV", "YOLOv5", "Keras", "DeepSORT", "C++"],
  },
  {
    id: "exp-4",
    company: "Tech Stack GmbH (ROKIN)",
    role: "NLP Intern",
    duration: "04.2020 to 07.2020",
    location: "Munich, Germany",
    coverImage: "/illustrations/strip/NLP.png",
    highlights: [
      "Developed large-scale NLP pipelines for document processing, including summarization, Named Entity Recognition (NER), and semantic search.",
      "Utilized state-of-the-art transformer architectures such as BERT and T5 to extract actionable insights from unstructured technical data.",
      "Integrated advanced text analytics and technology trend mapping components into backend API systems.",
    ],
    details: [
      "Supported the development of production-oriented search platforms and knowledge management systems.",
      "Optimized backend processing for large text corpora, improving retrieval speed and accuracy.",
      "Participated in agile development cycles and cross-functional technical synchronization.",
    ],
    tech: ["Python", "Transformers", "BERT", "T5", "Elasticsearch", "FastAPI"],
  },
]
