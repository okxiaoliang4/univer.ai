'use client'

import Button from '@/components/button'
import Container from '@/components/container'
import LabelButton from '@/components/label-button'
import Title from '@/components/title'
import links from '@/data/footer-links'
import socialMedia from '@/data/social-media'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import backgroundImg from './background.svg'
import logoImg from './logo.svg'

export default function Footer() {
  const params = useParams()
  const { lang } = params
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <footer
        className={`
          px-4 pb-16 text-sm text-gray-500

          xl:px-20
        `}
      >
        <section className="relative overflow-hidden rounded-se-3xl rounded-ss-3xl bg-[#F4F6FB]">
          <Image
            className="absolute left-1/2 max-w-none -translate-x-1/2"
            src={backgroundImg}
            width={backgroundImg.width}
            alt="footer background"
          />

          <section
            className={`
              relative bg-[linear-gradient(to_top,white,transparent)] px-4 pb-8 pt-10

              xl:px-[184px] xl:pb-12 xl:pt-[56px]
            `}
          >
            {/* Label */}
            <LabelButton
              className="relative left-1/2 mb-5 -translate-x-1/2"
              emoji="✨"
            >
              Get Started Now
            </LabelButton>

            {/* Title */}
            <Title
              level="h2"
              className={`
                mb-6 max-w-[320px]

                xl:max-w-[640px]
              `}
            >
              Productivity SDK of the
              {' '}
              <wbr />
              Next Generation
            </Title>

            {/* Actions */}
            <Button
              className="relative left-1/2 mb-14 -translate-x-1/2"
              type="primary"
              href={`/${lang}/quick-guide`}
            >
              Get started — for free
            </Button>

            {/* Navigation */}
            <ul className={`
              mb-12 grid grid-cols-2 gap-11

              xl:grid-cols-4
            `}
            >
              {links.map(link => (
                <li key={link.title}>
                  <label className="mb-4 block font-medium text-gray-800">{link.title}</label>
                  <ul className="grid gap-4">
                    {link.children.map(child => (
                      <li key={child.title}>
                        <Link
                          href={typeof child.href === 'function' ? child.href((lang ?? '').toString()) : child.href}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* Copyright */}
            <section className={`
              flex flex-col border-t border-dashed border-gray-300 pt-11

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
                <p className="text-xs">
                  Copyright © 2021-
                  {currentYear}
                  {' '}
                  DreamNum Co,Ltd.
                  <br />
                  All Rights Reserved.
                </p>
              </div>

              <div className="grid grid-flow-col gap-5 text-xl">
                {socialMedia.map(link => (
                  <Link key={link.title} href={link.href}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </section>
          </section>
        </section>
      </footer>
    </Container>
  )
}
