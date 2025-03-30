// FAQSchema.js - FAQ Structured Data for APCodeSphere as a Person 
function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is APCodeSphere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "APCodeSphere is a full-stack developer, cybersecurity expert, and AI enthusiast who specializes in web development, cybersecurity training, and programming mentorship."
        }
      },
      {
        "@type": "Question",
        "name": "What services does APCodeSphere provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "APCodeSphere offers services in full-stack development, cybersecurity consulting, AI-powered solutions, and programming education."
        }
      },
      {
        "@type": "Question",
        "name": "How can I learn from APCodeSphere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can learn from APCodeSphere through online courses, mentorship programs, and detailed tech articles available on the website."
        }
      },
      {
        "@type": "Question",
        "name": "Does APCodeSphere offer mentorship programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, APCodeSphere provides mentorship programs for aspiring developers and cybersecurity professionals."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact APCodeSphere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact APCodeSphere through social media platforms such as Twitter (@apcodesphere), LinkedIn, and GitHub."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export default FAQSchema;
