export type ProjectLinks = {
  github?: string
  pypi?: string
  demo?: string
}

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  tags: string[]
  links: ProjectLinks
  emoji: string
  highlight: boolean
  stat: string
  role: string
  problem: string
  approach: string[]
  outcomes: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'audiomaker',
    name: 'AudioMaker',
    tagline: 'Text-to-Audio Python Library on PyPI',
    description:
      'A production-ready PyPI package that simplifies programmatic audio creation — supporting multiple TTS engines, batch processing, and audio manipulation pipelines. Built for developers who need reliable voice synthesis without the boilerplate.',
    tags: ['Python', 'PyPI', 'ElevenLabs', 'gTTS', 'Audio Processing', 'Open Source'],
    links: {
      pypi: 'https://pypi.org/user/ANKUSHRATHOUR/',
      github: 'https://github.com/AnkushRathour',
    },
    emoji: '🎙️',
    highlight: true,
    stat: '3+ packages published on PyPI',
    role: 'Creator & maintainer',
    problem:
      'Teams building voice features repeatedly wire up different TTS providers, file handling, and batch jobs from scratch — slowing shipping and introducing inconsistent error handling.',
    approach: [
      'Unified Python API across ElevenLabs, gTTS, and related engines with swappable backends.',
      'Batch and file-based workflows so pipelines can run in CI or ad-hoc scripts without custom glue code.',
      'Packaged for PyPI with clear versioning so downstream apps pin stable releases.',
    ],
    outcomes: [
      'Published and maintained multiple public PyPI packages under the AudioMaker ecosystem.',
      'Reduced integration surface for TTS: one import pattern instead of per-vendor SDK wiring.',
      'Used in automation and content pipelines where programmatic audio is required.',
    ],
  },
  {
    slug: 'googlemaps-scraper',
    name: 'GoogleMapsScraper',
    tagline: 'Async Data Extraction Engine',
    description:
      'High-performance Google Maps data extraction tool built with Python. Supports async scraping, proxy rotation, rate limiting, and exports structured business data (name, address, phone, ratings, reviews) to CSV/JSON/Excel.',
    tags: ['Python', 'Async', 'Playwright', 'Data Engineering', 'Selenium', 'Proxy Rotation'],
    links: { github: 'https://github.com/AnkushRathour' },
    emoji: '🗺️',
    highlight: false,
    stat: 'Designed for 10K+ records per run',
    role: 'Lead engineer',
    problem:
      'Lead and market-research workflows need structured business listings at scale, but manual collection and brittle scrapers break under rate limits and DOM changes.',
    approach: [
      'Async Python workers with Playwright/Selenium for resilient page interaction.',
      'Proxy rotation and rate limiting to stay within operational bounds on long runs.',
      'Normalized export schema (CSV/JSON/Excel) for downstream analytics and CRM imports.',
    ],
    outcomes: [
      'Reliable extraction of name, address, phone, ratings, and reviews in one pipeline.',
      'Architecture oriented toward high-volume runs without blocking the event loop.',
      'Reusable patterns for data-engineering style exports into spreadsheets and warehouses.',
    ],
  },
  {
    slug: 'chatpdf',
    name: 'ChatPDF',
    tagline: 'RAG-powered Document Chat Interface',
    description:
      'AI-powered PDF conversation tool using Retrieval-Augmented Generation. Users upload any PDF; the system chunks, embeds, and stores documents in a vector database — enabling context-aware Q&A over entire documents using OpenAI / Gemini LLMs.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'LangChain', 'ChromaDB', 'RAG', 'Embeddings'],
    links: { github: 'https://github.com/AnkushRathour' },
    emoji: '📄',
    highlight: false,
    stat: 'Semantic search over arbitrary PDFs',
    role: 'Full-stack / ML engineer',
    problem:
      'Generic chat models hallucinate on long documents; users need answers grounded in the actual PDF they uploaded.',
    approach: [
      'FastAPI backend for upload, chunking, embedding, and query orchestration.',
      'Vector store (ChromaDB) for retrieval; LangChain-style pipelines for prompt assembly.',
      'Pluggable LLM providers (OpenAI, Gemini) behind a single Q&A interface.',
    ],
    outcomes: [
      'End-to-end RAG flow from raw PDF to grounded answers with citation-friendly chunks.',
      'Demonstrates production-minded API design for document-heavy AI products.',
      'Foundation pattern reused in other LLM + knowledge-base integrations.',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug)
}