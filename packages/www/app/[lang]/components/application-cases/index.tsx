import Image from 'next/image'
import ApplicationCasesAccordion from './application-cases-accordion'
import graph from './graph.svg'

export default function ApplicationCases() {
  return (
    <div className="relative flex w-full justify-between">
      {/* ambient light */}
      <div className={`
        absolute left-[64.15px] top-[47.59px] z-[-1] h-[379.21px] w-[594.58px] origin-top-left rotate-[-15deg]
        rounded-full bg-gradient-to-tr from-[#006a56] to-[#2b19f1] blur-[300px]
      `}
      />
      <div className={`
        absolute left-[30px] top-[-27px] h-[187px] w-[187px] rounded-full bg-gradient-to-bl from-[#25c9d1] to-[#302ca7]
        blur-[300px]
      `}
      />

      <div className="mr-[68px] flex-shrink-0 flex-grow-0">
        <Image src={graph} alt="graph" className="w-[620px]" />
      </div>
      <div className="flex-1 text-white">
        <ApplicationCasesAccordion />
      </div>
    </div>
  )
}
