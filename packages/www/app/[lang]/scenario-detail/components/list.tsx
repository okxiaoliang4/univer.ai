import type { IScenDataImageTextList } from '../data'
import Container from '@/components/container'
import Title from '@/components/title'
import { clsx } from '@/utils/clsx'
import Image from 'next/image'

interface IProps {
  imageTextList: IScenDataImageTextList
}

export default function List(props: IProps) {
  return (
    <section className={`
      relative mb-24

      xl:mb-48
    `}
    >
      {/* spotlight */}
      <div className={`
        absolute left-0 top-[50%] z-[-1] h-[970px] w-[660px] shrink-0 translate-y-[-50%] rounded-[970px] blur-[200px]

        [background:linear-gradient(90deg,rgba(0,94,181,0.52)_0%,rgba(114,0,166,0.52)_104.41%)]
      `}
      >
      </div>

      <Container>
        <Title level="h1" align="center" className="mb-20">
          Enable office automation
        </Title>

        <ul className="relative mx-auto grid max-w-[1000px] grid-cols-1 divide-y divide-white/15 text-sm text-white/50">
          {
            props.imageTextList.map((item, index) => (
              <li
                key={`image_text_${index}`}
                className={clsx(`flex items-center`, {
                  'pb-[120px]': index === 0,
                  'py-[120px]': index > 0 && index < props.imageTextList.length - 1,
                  'pt-[120px]': index === props.imageTextList.length - 1,
                })}
              >
                {
                  index % 2 === 0
                    ? (
                        <>
                          <Image
                            src={item.image}
                            width="400"
                            alt=""
                          />
                          <div className="ml-14 flex min-h-[230px] flex-col justify-center">
                            {
                              item.text.map((text, textIndex) => (
                                <p key={`text_${textIndex}`} className={textIndex > 0 ? 'mt-4' : ''}>{text}</p>
                              ))
                            }
                          </div>
                        </>
                      )
                    : (
                        <>
                          <div className="mr-14 flex min-h-[230px] flex-col justify-center">
                            {
                              item.text.map((text, textIndex) => (
                                <p key={`text_${textIndex}`} className={textIndex > 0 ? 'mt-4' : ''}>{text}</p>
                              ))
                            }
                          </div>
                          <Image
                            src={item.image}
                            width="400"
                            alt=""
                          />
                        </>
                      )
                }
              </li>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}
