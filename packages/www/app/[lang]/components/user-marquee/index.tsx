import Marquee from '@/components/ui/marquee'
import comlan from './comlan.png'
import fanwei from './fanwei.png'
import farben from './farben.png'
import pinganbank from './pingan bank.png'
import shuzimali from './shuzimali.png'
import weijie from './weijie.png'
import yaochuxing from './yaochuxing.png'

const usersList = [
  {
    name: 'comlan',
    img: comlan,
  },
  {
    name: 'fanwei',
    img: fanwei,
  },
  {
    name: 'farben',
    img: farben,
  },
  {
    name: 'pinganbank',
    img: pinganbank,
  },
  {
    name: 'shuzimali',
    img: shuzimali,
  },
  {
    name: 'weijie',
    img: weijie,
  },
  {
    name: 'yaochuxing',
    img: yaochuxing,
  },
]

export default function UserMarquee() {
  return (
    <Marquee
      className={`
        text-white

        [--duration:20s]
      `}
    >
      {usersList.map(userInfo => (
        <img
          className="mx-12 h-[30px] contrast-0 grayscale"
          key={userInfo.name}
          src={userInfo.img.src}
        />
      ))}
    </Marquee>
  )
}
