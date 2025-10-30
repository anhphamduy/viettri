export function StructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "VietTri — AI Engineer Bootcamp",
    "description": "Become an AI Engineer in 8 Weeks. Hands-on course: LLMs, RAG, agents, MLOps, and real projects guided by industry engineers.",
    "provider": {
      "@type": "Organization",
      "name": "VietTri",
      "sameAs": []
    },
    "courseCode": "VIETTRI-AI-001",
    "timeRequired": "P8W",
    "coursePrerequisites": "Basic programming knowledge recommended but not required",
    "teaches": [
      "Python for AI/ML",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents",
      "MLOps",
      "LLM Deployment"
    ],
    "inLanguage": ["en", "vi"],
    "offers": {
      "@type": "Offer",
      "price": "10999999",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  );
}

