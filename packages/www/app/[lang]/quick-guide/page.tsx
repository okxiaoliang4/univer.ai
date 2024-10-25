import type { LOCALES_ENUM } from '@/i18n'
import type { Metadata } from 'next'
import Container from '@/components/container'
import PageHeader from '@/components/page-header'
import { FeaturesSingle, LayersSingle, ReportSingle } from '@univerjs/icons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Univer | Quick Guide',
}

interface IProps {
  params: Promise<{
    lang: keyof typeof LOCALES_ENUM
  }>
}

export default async function Page(props: IProps) {
  const { lang } = await props.params

  return (
    <main>
      <PageHeader
        title={(
          <>
            Quick Guide
            {' '}
            <span className="text-black">🧭</span>
          </>
        )}
      />

      <Container
        className={`
          mb-12 grid max-w-[1096px] gap-8 px-4

          xl:mb-24 xl:gap-12 xl:px-0
        `}
      >
        <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3.5 text-2xl/[1.25] font-semibold text-gray-800">Univer SDK</h2>
          <p className="mb-6 text-gray-800">
            Univer SDK is a JavaScript framework that enables you to integrate advanced spreadsheets, documents, and slides into your web applications. By incorporating it, you can render these powerful components directly in the browser.
          </p>
          <ol
            className={`
              grid list-inside list-decimal gap-6 text-gray-500

              [&_a]:font-semibold [&_a]:text-indigo-600 [&_a]:underline
            `}
          >
            <li>
              Follow our
              {' '}
              <Link href={`https://docs.univer.ai/${lang}/guides/sheets`}>installation and integration</Link>
              {' '}
              guide to add Univer to your project.
            </li>
            <li>
              Learn how to modify Univer using APIs to tailor spreadsheets, documents, and slides to meet your business requirements.
              {' '}
              <Link href={`https://docs.univer.ai/${lang}/api`}>Learn more</Link>
              .
            </li>
            <li>
              Univer SDK can run on Node.js, allowing you to generate server-side spreadsheets, documents, and slides that are consistent with the front end.
              {' '}
              <Link href="/">Learn more</Link>
              .
            </li>
          </ol>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3.5 text-2xl/[1.25] font-semibold text-gray-800">Universer</h2>
          <p className="mb-6 text-gray-800">
            Universer is a server-side application provided by Univer that supports private deployment. It enables features like collaborative editing of spreadsheets, documents, and slides; importing/exporting xlsx and docx files; printing documents; document version history; user notifications, and more.
          </p>
          <ol
            className={`
              grid list-inside list-decimal gap-6 text-gray-500

              [&_a]:font-semibold [&_a]:text-indigo-600 [&_a]:underline
            `}
          >
            <li>
              Install Universer with a single command.
              <pre className="my-2 whitespace-pre-line rounded-lg bg-gray-800 px-3 py-2 text-white">
                <code>
                  bash -c "$(curl -fsSL https://get.univer.ai)"
                </code>
              </pre>
              For more deployment details, please click
              {' '}
              <Link href="/">here</Link>
              .
            </li>
            <li>
              Integrate Universer with your backend services.
              {' '}
              <Link href="/">Learn more</Link>
              .
            </li>
            <li>
              Universer offers a suite of Open APIs that allow you to manipulate online collaborative documents according to your business needs.
              {' '}
              <Link href="/">Learn more</Link>
              .
            </li>
          </ol>
        </article>

        <section
          className={`
            grid gap-6

            xl:grid-cols-3
          `}
        >
          <div
            className={`
              flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 text-xl font-semibold
              text-gray-800
            `}
          >
            <span className="bg-[rgba(44,83,241,0.1)] p-3 texl-[28px] rounded-xl text-indigo-600">
              <LayersSingle />
            </span>
            Tech stack
          </div>
          <div
            className={`
              flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 text-xl font-semibold
              text-gray-800
            `}
          >
            <span className="bg-[rgba(44,83,241,0.1)] p-3 texl-[28px] rounded-xl text-indigo-600">
              <ReportSingle />
            </span>
            Performance Report
          </div>
          <div
            className={`
              flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 text-xl font-semibold
              text-gray-800
            `}
          >
            <span className="bg-[rgba(44,83,241,0.1)] p-3 texl-[28px] rounded-xl text-indigo-600">
              <FeaturesSingle />
            </span>
            All Features
          </div>
        </section>

        <section className="grid gap-4">
          <p className="text-xl font-semibold text-gray-800">
            If your project requires any of the following features:
          </p>
          <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <ul
              className="grid list-inside list-disc gap-4 font-medium text-gray-800"
            >
              <li>Collaborative Editing</li>
              <li>Import/Export</li>
              <li>Document Printing</li>
              <li>Version History</li>
              <li>User Notifications</li>
              <li>Pivot Tables</li>
              <li>Sparklines</li>
            </ul>
          </article>

          <p
            className={`
              text-gray-500

              [&>a]:font-medium [&>a]:text-indigo-600 [&>a]:underline
            `}
          >
            You will need to
            {' '}
            <Link href={`/${lang}/pricing`}>purchase a license</Link>
            {' '}
            to remove the usage restrictions on these features.
            <br />
            If your project does not require these features, you can try
            {' '}
            <Link href="https://github.com/dream-num/univer">Univer OSS</Link>
            .
          </p>
        </section>
      </Container>
    </main>
  )
}
