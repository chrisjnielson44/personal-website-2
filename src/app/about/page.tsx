import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/Nielson_Christopher.jpg'
import portraitImage2 from '@/images/Nielson_Christopher2.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  target, // Add target to the props
  rel, // Add rel to the props
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  target?: string // Make target optional
  rel?: string // Make rel optional
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target} // Pass target to Link
        rel={rel} // Pass rel to Link
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-green-500 dark:text-zinc-200 dark:hover:text-green-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-gree-500" />
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
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage2}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Christopher
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/chrisjnielson"
              aria-label="Follow on Twitter"
              icon={XIcon}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-4'
            >
              Follow on Twitter
            </SocialLink>

            <SocialLink
              href="https://github.com/chrisjnielson44"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-4'
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/christopherjnielson/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-4'
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
