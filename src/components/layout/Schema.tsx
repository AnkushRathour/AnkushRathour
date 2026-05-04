export function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ankush Rathour',
    url: 'https://ankushrathour.com',
    image: 'https://ankushrathour.com/assets/img/AnkushRathour.jpeg',
    jobTitle: 'Software Engineer',
    description:
      'Software Engineer specializing in architecting scalable full-stack solutions and seamless third-party integrations. Creator of AudioMaker, TalkGenie and ChatPDF, AI-powered tools, and Unified Multimodal AI Agents.',
    email: 'ankush.14072000.rathour@gmail.com',
    nationality: 'Indian',
    knowsAbout: [
      'Python Development',
      'Django Framework',
      'FastAPI',
      'Cloud Computing',
      'AWS',
      'Google Cloud Platform',
      'Microsoft Azure',
      'Artificial Intelligence',
      'Machine Learning',
      'REST API Development',
      'Microservices Architecture',
      'Docker',
      'React',
      'Next.js',
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
      skills: 'Python, Django, FastAPI, AWS, GCP, Azure, Machine Learning, AI',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ankushrathour.com',
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
      '@type': 'Person',
      name: 'Ankush Rathour',
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
