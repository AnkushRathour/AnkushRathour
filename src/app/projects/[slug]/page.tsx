import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/layout/BreadcrumbSchema'
import { PageShell } from '@/components/layout/PageShell'
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy'
import { createPageMetadata } from '@/lib/metadata'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return createPageMetadata({
    title: `${project.name} — Case Study`,
    description: project.description,
    path: `/projects/${project.slug}/`,
  })
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects/' },
          { name: project.name, path: `/projects/${project.slug}/` },
        ]}
      />
      <PageShell>
        <main>
          <ProjectCaseStudy project={project} />
        </main>
      </PageShell>
    </>
  )
}