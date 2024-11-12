import Image from 'next/image'
import integrationImg from './1.png'
import performanceImg from './2.png'
import customizationImg from './3.png'
import FeatureTabs from './feature-tabs'

export default function Features() {
  return (
    <div className={`
      relative flex w-full flex-col items-start overflow-hidden rounded-[var(--rounded-2xl,16px)] border-[0.5px]
      border-solid border-[rgba(255,255,255,0.15)] backdrop-blur-[10px]

      [background:rgba(0,0,0,0.30)]
    `}
    >
      <div
        role="ambient"
        aria-hidden
        className={`
          absolute left-[-460px] top-[95px] z-[-1] h-[523px] w-[823px] rounded-[823px] opacity-80 blur-[150px]

          [background:linear-gradient(90deg,#0090FF_51.72%,#07F_136.33%)]
        `}
      >
      </div>
      <div className="flex w-full flex-row border-b-[0.5px] border-solid border-[rgba(255,255,255,0.15)]">
        <div className="flex-1 shrink-0 grow border-r-[0.5px] border-solid border-[rgba(255,255,255,0.15)] p-[36px]">
          <Image alt="integration" src={integrationImg} className="mb-10 h-[137px] w-[137px] select-none"></Image>
          <h3 className={`
            mb-4 self-stretch text-lg font-semibold leading-[normal] text-white

            [font-family:Inter]
          `}
          >
            Integration anywhere
          </h3>
          <p className={`
            self-stretch text-sm font-light leading-[150%] text-[rgba(255,255,255,0.50)]

            [font-family:Inter]
          `}
          >
            Embed Univer SDK into ERP/CRM, IM, Email, Notion like Editor, No/Low-code platform, BI and other systems. View and edit spreadsheets, documents, and slides online.
          </p>
        </div>
        <div className="flex-1 shrink-0 grow border-r-[0.5px] border-solid border-[rgba(255,255,255,0.15)] p-[36px]">
          <Image alt="integration" src={performanceImg} className="mb-10 h-[137px] w-[137px] select-none"></Image>
          <h3 className={`
            mb-4 self-stretch text-lg font-semibold leading-[normal] text-white

            [font-family:Inter]
          `}
          >
            Excellent Performance
          </h3>
          <p className={`
            self-stretch text-sm font-light leading-[150%] text-[rgba(255,255,255,0.50)]

            [font-family:Inter]
          `}
          >
            Univer sheet supports 10 million cells and a formula engine that can calculate more than 2 million formulas, perform server-side calculations, and reduce waiting time. Univer doc supports more than 1 million characters.
          </p>
        </div>
        <div className="flex-1 shrink-0 grow p-[36px]">
          <Image alt="integration" src={customizationImg} className="mb-10 h-[137px] w-[137px] select-none"></Image>
          <h3 className={`
            mb-4 self-stretch text-lg font-semibold leading-[normal] text-white

            [font-family:Inter]
          `}
          >
            Full customization
          </h3>
          <p className={`
            self-stretch text-sm font-light leading-[150%] text-[rgba(255,255,255,0.50)]

            [font-family:Inter]
          `}
          >
            Univer adopts the plug-in architecture, and each plug-in corresponds to one function. At present, Univer has more than 100 built-in plug-ins, and can extend these existing plug-ins according to business needs, or develop new custom plug-ins.
          </p>
        </div>
      </div>

      <div className="w-full p-[36px]">
        <div className="flex w-full flex-col items-center">
          <FeatureTabs />

        </div>
      </div>
    </div>
  )
}
