import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

import logoPaywind from '@/images/logos/smalllogo.png'
import logoGithub from '@/images/logos/github.png'
import {Button} from '@/components/ui/button'



const projects = [
  {
    name: 'ML Risk API',
    description:
        'Developing a modular machine learning backend for the bank’s risk department. The backend provides API\n' +
        'routes for multiple risk-related applications, allowing them to trigger ML analysis (e.g., Best Features, Time Series, Anomaly\n' +
        'Detection) via JSON config files. The system returns serialized JSON results and supports scalable, secure, and flexible\n' +
        'analysis for diverse risk metrics across different financial instruments.',
    link: { href: 'https://github.com/chrisjnielson44/MLRiskAPI', label: 'github.com/MLRiskAPI' },
    logo: logoGithub,
  },
  {
    name: 'Impact File Trade Analysis',
    description:
        'Developing a risk metrics analysis system for financial products like FX, interest rates, and futures, comparing QUIC and Acadia engines. The project incorporates machine learning and NLP to enhance risk data interpretation and improve financial risk assessment.',
    link: { href: 'https://github.com/chrisjnielson44/impact-trade-file-analysis', label: 'github.com/impact-trade-file-analysis' },
    logo: logoGithub,
  },
  {
    name: 'Paywind - RIA Tool',
    description:
      'A RIA tool that helps financial advisors manage their clients and their portfolios.',
    link: { href: 'https://paywind.io', label: 'paywind.io' },
    logo: logoPaywind,
  },
  {
    name: 'Paywind - Open Source Personal Finance Manager',
    description:
      'A personal finance manager that helps you track your spending and budget your money.',
    link: { href: 'https://budget.paywind.io', label: 'budget.paywind.io' },
    logo: logoPaywind,
  },


]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My personal projects and contributions.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="My Projects and Contributions"
      intro="Here are some of the projects I've worked on."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-4 w-auto"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-green-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
      <div className="pt-5">
        <Button asChild className="w-full bg-background" variant="outline" >
          <Link href="https://github.com/chrisjnielson44">
            My GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white ml-2 h-4 w-auto"
                 viewBox="0 0 24 24">
              <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </Link>
        </Button>
      </div>
    </SimpleLayout>
  )
}
