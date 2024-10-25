import Image from 'next/image'
import embeddableImg from './embeddable.svg'
import extensibleImg from './extensible.svg'
import performanceImg from './performance.svg'

export default function Features() {
  return (
    <section
      className={`
        mb-6 grid grid-cols-1 gap-6

        xl:grid-cols-3
      `}
    >
      <div
        className="rounded-2xl border border-gray-200 bg-white p-6 text-sm shadow-[0_2px_4px_0_rgba(14,17,30,0.06)]"
      >
        <h3 className="mb-2 font-semibold text-gray-800">Embedded in your applications</h3>
        <p className="mb-6 text-gray-500">Univer can be embedded into any applications or systems. Requires no pre-installed third-party components.</p>
        <Image className="mx-auto h-[296px] rounded-[10px]" src={embeddableImg} alt="Embedded in your applications" />
      </div>
      <div
        className="rounded-2xl border border-gray-200 bg-white p-6 text-sm shadow-[0_2px_4px_0_rgba(14,17,30,0.06)]"
      >
        <h3 className="mb-2 font-semibold text-gray-800">Highly Extensible</h3>
        <p className="mb-6 text-gray-500">Plugins bring unmatching customizability to Univer, including custom formulas, refined permission control, and many other features.</p>
        <Image className="mx-auto h-[296px] rounded-[10px]" src={extensibleImg} alt="Highly Extensible" />
      </div>
      <div
        className="rounded-2xl border border-gray-200 bg-white p-6 text-sm shadow-[0_2px_4px_0_rgba(14,17,30,0.06)]"
      >
        <h3 className="mb-2 font-semibold text-gray-800">Superior Performance</h3>
        <p className="mb-6 text-gray-500">Univer supports spreadsheets with over 10 billion cells and offers server-side computing capabilities.</p>
        <Image className="mx-auto h-[296px] rounded-[10px]" src={performanceImg} alt="Superior Performance" />
      </div>
    </section>
  )
}
