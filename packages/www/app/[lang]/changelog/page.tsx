import type { Metadata } from 'next'
import process from 'node:process'
import Container from '@/components/container'
import Title from '@/components/title'
import { ArrowCircleRightSingle } from '@univerjs/icons'
import dayjs from 'dayjs'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Octokit } from 'octokit'

export const metadata: Metadata = {
  title: 'Univer | Changelog',
}

export default async function Page() {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  })

  const resp = await octokit.request('GET /repos/dream-num/univer/releases', {
    owner: 'OWNER',
    repo: 'REPO',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  const releases = resp.data?.slice(0, 10)

  return (
    <main>
      <section className="relative mx-auto max-w-screen-xl pt-[80px]">
        {/* spotlight */}
        <div className={`
          absolute left-0 top-[-100px] z-[-1] h-[380px] w-[380px] shrink-0 rounded-[190px] blur-[150px]

          [background:linear-gradient(90deg,rgba(0,157,174,0.24)_0%,rgba(0,170,116,0.24)_104.41%)]
        `}
        >
        </div>
        <div className={`
          absolute right-0 top-0 z-[-1] h-[380px] w-[380px] shrink-0 rounded-[190px] blur-[150px]

          [background:linear-gradient(90deg,rgba(0,94,181,0.42)_0%,rgba(114,0,166,0.42)_104.41%)]
        `}
        >
        </div>

        <Title
          level="h1"
          align="center"
          description={(
            <p className="text-center text-sm text-white/50">
              We are constantly looking at feedback from our valued users and pushing out updates so you can get the most out of Univer.
            </p>
          )}
        >
          Changelog
        </Title>
      </section>

      <Container>
        <section
          className="relative mx-auto mb-24 grid max-w-[1053px] gap-9 pt-[80px]"
        >
          {/* spotlight */}
          <div className={`
            fixed left-[50%] top-[330px] z-[-1] h-[660px] w-[660px] shrink-0 translate-x-[-50%] rounded-[330px]
            blur-[200px]

            [background:linear-gradient(90deg,#005EB5_0%,#7200A6_104.41%)]
          `}
          >
          </div>

          {releases.map((release: any) => (
            <section
              key={release.id}
              className={`
                flex flex-col gap-6 px-4

                xl:flex-row xl:gap-16 xl:px-0
              `}
            >
              <div
                className={`
                  relative flex justify-center pt-4

                  xl:block xl:w-[140px] xl:[&::after]:absolute xl:[&::after]:left-1 xl:[&::after]:top-12
                  xl:[&::after]:h-[calc(100%-64px)] xl:[&::after]:w-[1px] xl:[&::after]:-translate-x-1/2
                  xl:[&::after]:bg-[linear-gradient(180deg,#CDD0D8_0%,#E3E5EA_80%,transparent_100%)]
                  xl:[&::after]:content-[''] xl:[&::before]:absolute xl:[&::before]:left-0 xl:[&::before]:top-6
                  xl:[&::before]:h-2 xl:[&::before]:w-2 xl:[&::before]:rounded-full xl:[&::before]:bg-green-400
                  xl:[&::before]:content-['']
                `}
              >
                <time
                  className={`
                    rounded-full border border-gray-300 px-3.5 py-1.5 text-sm text-white/60

                    xl:border-none xl:p-0 xl:pl-8 xl:text-gray-500
                  `}
                  dateTime={release.published_at}
                >
                  {dayjs(release.published_at).format('MMM D, YYYY')}
                </time>
              </div>

              <div className="flex-1 rounded-2xl border border-dashed border-gray-600 bg-black/65 p-6">
                <article
                  className={`
                    grid gap-6 text-white/50

                    [&_a]:text-primary-400 [&_a]:underline

                    [&_code]:rounded-lg [&_code]:bg-white/10 [&_code]:p-1 [&_code]:text-sm [&_code]:text-white/70

                    [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white

                    [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white/90

                    [&_h4]:font-semibold [&_h4]:text-white/90

                    [&_p_a_img]:hidden

                    [&_p]:text-base [&_p]:font-semibold [&_p]:text-white/50

                    [&_pre_code]:flex [&_pre_code]:bg-transparent

                    [&_pre]:whitespace-pre-wrap [&_pre]:break-all [&_pre]:rounded-2xl [&_pre]:bg-white/10 [&_pre]:p-4
                    [&_pre]:text-sm [&_pre]:text-white/70

                    [&_strong]:text-white/50

                    [&_ul]:list-inside [&_ul]:list-disc
                  `}
                >
                  <MDXRemote source={release.body} />
                </article>
              </div>
            </section>
          ))}
        </section>

        <footer className="mx-auto mb-24 flex max-w-[1053px] justify-end gap-9">
          <Link
            className="flex items-center gap-2 text-[#40FFD9] underline"
            href="https://github.com/dream-num/univer/releases"
          >
            Click here to view the full changelog
            {' '}
            <ArrowCircleRightSingle />
          </Link>
        </footer>
      </Container>
    </main>
  )
}
