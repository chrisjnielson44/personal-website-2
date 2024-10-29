import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Resources',
  description:
    'A collection of resources I use to build software, stay productive, and learn new things.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software and Tools I Use"
      intro="A collection of resources I use to build software, stay productive, and learn new things."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="MacBook Pro 16-inch (2019)">
            My daily driver for development work. Running on an Intel i7
            processor, this laptop has been reliable for all my development
            needs.
          </Tool>
          <Tool title="Raspberry Pi 4 Model B">
            Running Debian, I use this versatile little computer for various
            projects and learning Linux administration.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development Tools">
          <Tool title="Zed" href="https://zed.dev">
            My current favorite IDE. Zed offers a modern, fast editing
            experience with excellent syntax highlighting and collaborative
            features.
          </Tool>
          <Tool title="Git" href="https://git-scm.com">
            Essential for version control. I use it through the command line and
            integrate it with other tools in my workflow.
          </Tool>
          <Tool
            title="GitHub Copilot"
            href="https://github.com/features/copilot"
          >
            AI pair programmer that helps with code completion and generation.
            Particularly useful for boilerplate code and common patterns.
          </Tool>
          <Tool title="Warp" href="https://www.warp.dev">
            A modern terminal that enhances productivity with features like AI
            command search, shared workflows, and built-in documentation.
          </Tool>
          <Tool title="Docker" href="https://www.docker.com">
            Container platform that ensures consistency across development
            environments and simplifies deployment processes.
          </Tool>

          <Tool title="TablePlus" href="https://tableplus.com">
            Clean and efficient database management tool. Supports multiple
            database types with a consistent interface.
          </Tool>
          <Tool title="pnpm" href="https://pnpm.io">
            Fast, disk space efficient package manager for Node.js. Great for
            monorepos and maintaining consistent dependencies.
          </Tool>
          <Tool title="Sourcetree" href="https://www.sourcetreeapp.com">
            Git GUI that makes complex version control operations visual and
            intuitive. Helpful for reviewing changes and managing branches.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity">
          <Tool title="Obsidian" href="https://obsidian.md">
            My second brain. I use Obsidian for personal knowledge management,
            note-taking, and connecting ideas through its powerful linking
            features.
          </Tool>
          <Tool title="Notion" href="https://notion.so">
            Perfect for collaboration and shared documentation. I use it for
            project planning and team coordination.
          </Tool>
          <Tool title="Things 3" href="https://culturedcode.com/things/">
            My trusted task manager. Things 3&apos;s clean design and powerful
            organization features help me stay on top of projects and daily
            tasks.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Tech Stack">
          <Tool title="Next.js" href="https://nextjs.org">
            My go-to React framework for building full-stack web applications.
            The built-in routing, server components, and deployment features
            make it incredibly powerful.
          </Tool>
          <Tool title="TypeScript" href="https://www.typescriptlang.org">
            I write all my JavaScript with TypeScript. The type safety and
            improved developer experience are invaluable for building robust
            applications.
          </Tool>
          <Tool title="Tailwind CSS" href="https://tailwindcss.com">
            My preferred styling solution. Tailwind&apos;s utility-first
            approach allows for rapid development while maintaining consistency
            across projects.
          </Tool>
          <Tool title="Prisma" href="https://www.prisma.io">
            Modern ORM that makes database work a joy. The type safety and
            integration with TypeScript create a seamless development
            experience.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Learning Resources">
          <Tool
            title="Big-O Cheat Sheet"
            href="https://www.bigocheatsheet.com/"
          >
            An excellent reference for time and space complexity of common
            algorithms and data structures. Great for interview prep and
            understanding algorithmic efficiency.
          </Tool>
          <Tool title="Neetcode" href="https://neetcode.io/">
            High-quality explanations of data structures, algorithms, and coding
            problems. The roadmap approach makes it easy to progress
            systematically through topics.
          </Tool>
          <Tool title="Visualgo" href="https://visualgo.net/">
            Interactive visualizations of data structures and algorithms. Seeing
            these concepts in action makes them much easier to understand.
          </Tool>
          <Tool
            title="Grokking Algorithms"
            href="https://www.manning.com/books/grokking-algorithms"
          >
            An illustrated guide that makes complex algorithms accessible
            through clear explanations and practical examples. Great for visual
            learners.
          </Tool>
          <Tool title="BaseCS" href="https://medium.com/basecs">
            A collection of articles that break down fundamental computer
            science concepts in an approachable way. Perfect for filling
            knowledge gaps.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
