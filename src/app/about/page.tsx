import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage2 from '@/images/Chris-2.png'


function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  target,
  rel,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  target?: string
  rel?: string
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Christopher Nielson, a passionate Computer Science graduate with a focus on financial technology.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage2}
              alt="Christopher Nielson"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Christopher Nielson
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a recent graduate from Florida State University, holding a
              Bachelor of Science in Computer Science with minors in Business
              and Mathematics. My academic journey has equipped me with a strong
              foundation in advanced data structures, algorithms,
              object-oriented programming, and various programming languages
              including Python, Java, and C++.
            </p>
            <p>
              Throughout my career, I have developed and contributed to several
              impactful projects. Notably, I built a Risk Metrics Analysis
              Platform that leverages machine learning and natural language
              processing to enhance financial risk assessments. Additionally, my
              work on the ML Risk API and Paywind demonstrates my ability to
              create scalable, secure, and innovative solutions in the fintech
              space.
            </p>
            <p>
              My professional experience includes a Software Engineering
              Internship at the Bank of New York, where I developed machine
              learning-driven applications for risk engineering and improved
              frontend data presentation for risk sensitivity reporting tools.
              Prior to that, I interned at Isofy, where I honed my full-stack
              development skills and contributed to network security management
              solutions.
            </p>
            <p>
              I possess a diverse skill set that spans multiple programming
              languages, frameworks, and technologies, including Next.js,
              TypeScript, Tailwind CSS, Prisma, FastAPI, Docker, Kubernetes, and
              various database systems. My proficiency in both front-end and
              back-end development allows me to build comprehensive and
              efficient applications.
            </p>
            <p>
              Beyond technical skills, I am actively involved in extracurricular
              activities such as the Cryptocurrency Organization for Young
              Professionals, Financial Management Association, Securities
              Society, and the Association for Computing Machinery. These roles
              have enhanced my leadership, financial acumen, and collaborative
              abilities.
            </p>
            <p>
              Fluent in Spanish, I bring strong interpersonal communication and
              cross-cultural skills to the table. I am a Florida Bright Futures
              Academic Scholar, recognized for my academic excellence and
              commitment to professional growth.
            </p>
            <p>
              Driven by a passion for financial technology, my career objective
              is to secure an internship or full-time position where I can apply
              my technical expertise and contribute to innovative solutions in
              the fintech industry. I am dedicated, proactive, and constantly
              seeking opportunities to expand my knowledge and stay at the
              forefront of industry trends.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/chrisjnielson"
              aria-label="Follow on Twitter"
              icon={XIcon}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              Follow on Twitter
            </SocialLink>

            <SocialLink
              href="https://github.com/chrisjnielson44"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/christopherjnielson/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>

            <SocialLink
              href="mailto:cjnielson44@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              cjnielson44@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
