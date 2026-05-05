export function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://ankushrathour.com/#person',
    name: 'Ankush Rathour',
    url: 'https://ankushrathour.com',
    image: 'https://ankushrathour.com/AnkushRathour.jpeg',
    jobTitle: 'Software Engineer',
    description:
      'Software Engineer specializing in architecting scalable full-stack solutions and seamless third-party integrations. Creator of AudioMaker, TalkGenie and ChatPDF, AI-powered tools, and Unified Multimodal AI Agents.',
    nationality: 'Indian',
    knowsAbout: [
      'Python Development',
      'Django Framework',
      'FastAPI backend systems',
      'AWS cloud architecture',
      'Google Cloud Platform',
      'Microsoft Azure',
      'Artificial Intelligence',
      'Machine Learning',
      'REST API Development',
      'Microservices Architecture',
      'Docker',
      'React',
      'Next.js',
      'LLM-based AI agents',
    ],
    sameAs: [
      'https://www.linkedin.com/in/ankush-rathour/',
      'https://github.com/AnkushRathour',
      'https://pypi.org/user/ANKUSHRATHOUR/',
      'https://medium.com/@ankush.rathour',
      'https://stackoverflow.com/users/18736053/ankush-rathour',
      'https://www.instagram.com/_ankush_rathour',
      'https://x.com/Ankush_Rathour',
      'https://www.youtube.com/@ankush_rathour',
      'https://www.facebook.com/profile.php?id=100065413872423',
      'https://www.pinterest.com/Ankush_Rathour',
      'https://linktr.ee/ankushrathour',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      skills: [
        'FastAPI backend development',
        'Django REST APIs',
        'AWS cloud systems',
        'GCP infrastructure',
        'Azure services',
        'LLM-based AI systems',
        'Microservices design',
      ],
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ankushrathour.com',
    },

    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ankushrathour.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ankush Rathour — Software Engineer Portfolio',
    url: 'https://ankushrathour.com',
    description:
      'Official portfolio of Ankush Rathour, Software Engineer specializing in Python, AI, and Cloud technologies.',
    author: {
      '@id': 'https://ankushrathour.com/#person',
    },
    inLanguage: 'en-US',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
