import type { Metadata } from 'next'
import process from 'node:process'
import Container from '@/components/container'
import PageHeader from '@/components/page-header'
import dayjs from 'dayjs'
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
  const releases = resp.data

  return (
    <main>
      <PageHeader
        title={(
          <>
            Changelog
            {' '}
            <span className="text-black">📜</span>
          </>
        )}
        description="We are constantly looking at feedback from our valued users and pushing out updates so you can get the most out of Univer."
      />

      <Container>
        <section
          className="mx-auto mb-24 grid max-w-[1053px] gap-9"
        >
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
                    rounded-full border border-gray-300 px-3.5 py-1.5 text-sm text-gray-600
                    shadow-[0_-3px_6px_0_rgba(244,245,250,0.6)_inset]

                    xl:border-none xl:p-0 xl:pl-8 xl:text-gray-500
                  `}
                  dateTime={release.published_at}
                >
                  {dayjs(release.published_at).format('MMM D, YYYY')}
                </time>
              </div>

              <div className="flex-1 rounded-2xl border border-dashed bg-white p-6 broder-gray-300">
                <article
                  className={`
                    grid gap-6 text-gray-500

                    [&_a]:text-indigo-700 [&_a]:underline

                    [&_code]:rounded-lg [&_code]:bg-gray-50 [&_code]:p-1 [&_code]:text-sm [&_code]:text-gray-800

                    [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-800

                    [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-800

                    [&_h4]:font-semibold [&_h4]:text-gray-800

                    [&_pre]:whitespace-pre-wrap [&_pre]:break-all [&_pre]:rounded-2xl [&_pre]:bg-gray-50 [&_pre]:p-4
                    [&_pre]:text-sm [&_pre]:text-gray-800

                    [&_strong]:text-gray-800

                    [&_ul]:list-inside [&_ul]:list-disc
                  `}
                >
                  <MDXRemote source={release.body} />
                </article>
              </div>
            </section>
          ))}
        </section>
      </Container>
    </main>
  )
}
