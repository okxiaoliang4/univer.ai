'use client'

import Button from '@/components/button'
import Container from '@/components/container'
import Title from '@/components/title'
import links from '@/data/footer-links'
import socialMedia from '@/data/social-media'
import { ArrowCircleRightSingle } from '@univerjs/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import logoImg from './logo.svg'

export default function Footer() {
  const params = useParams()
  const { lang } = params
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <footer
        className="relative w-full"
      >
        {/* #region - ambient lights */}
        <div className={`
          absolute right-[233px] top-[-294px] z-[-1] h-[522px] w-[523px] shrink-0 rounded-[523px] px-4 opacity-60
          blur-[150px]

          [background:linear-gradient(90deg,rgba(83,222,237,0.46)_0%,rgba(64,255,195,0.46)_104.41%)]

          xl:px-20
        `}
        >
        </div>
        <div className={`
          absolute left-[-23px] top-[-181px] z-[-1] h-[916px] w-[916px] shrink-0 rounded-[916px] opacity-60 blur-[200px]

          [background:linear-gradient(90deg,#005EB5_0%,#7200A6_104.41%)]
        `}
        >
        </div>
        {/* #endregion */}

        {/* #region - links */}
        <section
          className={`
            relative overflow-hidden px-4 pb-8 pt-10

            xl:px-[184px] xl:pb-12 xl:pt-[56px]
          `}
        >
          <Title
            level="h2"
            className={`
              mb-6 max-w-[320px] text-center

              xl:max-w-[640px]
            `}
          >
            Productivity SDK of the
            <wbr />
            Next Generation
          </Title>

          {/* Actions */}
          <Button
            className="relative left-1/2 mb-14 h-[40px] -translate-x-1/2 text-white"
            type="primary"
            href={`/${lang}/quick-guide`}
          >
            Get Started for Free
            <ArrowCircleRightSingle />
          </Button>

          {/* Navigation */}
          <ul className={`
            mb-12 grid grid-cols-2 gap-11

            xl:grid-cols-4
          `}
          >
            {links.map(link => (
              <li key={link.title}>
                <label className="mb-4 inline-flex h-10 select-none items-center justify-center gap-2.5 px-1.5">
                  <div className="font-['Inter'] text-sm font-medium leading-[21px] text-white/70">{link.title}</div>
                </label>
                <ul className="grid gap-4">
                  {link.children.map(child => (
                    <li key={child.title}>
                      <Link
                        className="inline-flex h-8 items-center justify-center gap-2.5 px-1.5"
                        href={typeof child.href === 'function' ? child.href((lang ?? '').toString()) : child.href}
                      >
                        <div className={`
                          font-['Inter'] text-sm font-normal leading-[21px] text-white/50 transition-colors duration-200

                          hover:text-white
                        `}
                        >
                          {child.title}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

        </section>
        {/* #endregion */}

        {/* #region - copyright */}
        <section className={`
          flex h-[128px] flex-col bg-black/80 px-[70px] py-7 backdrop-blur-[200px]

          xl:flex-row xl:items-center xl:justify-between
        `}
        >
          <div>
            {/* Logo */}
            <Link className="mb-2 inline-block" href="/">
              <Image
                className="mr-[55px]"
                src={logoImg}
                width={logoImg.width}
                alt="logo"
              />
            </Link>
            <p className={`
              text-xs font-normal leading-[150%]

              text-[color:var(--gray-500,#5F6574)]
            `}
            >
              Copyright © 2021-
              {currentYear}
              {' '}
              DreamNum Co, Ltd.
              <br />
              All Rights Reserved.
            </p>
          </div>

          <div className={`
            grid grid-flow-col gap-5 text-xl

            text-[color:var(--gray-500,#5F6574)]
          `}
          >
            {socialMedia.map(link => (
              <Link
                key={link.title}
                href={link.href}
                className={`
                  transition-colors duration-200

                  hover:text-white
                `}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </section>
      </footer>
    </Container>
  )
}
