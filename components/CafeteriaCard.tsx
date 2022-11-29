import { Star } from '@components/icons'
import Image from 'next/image'

function CafeteriaCard() {
  return (
    <div className="flex flex-col border-2 border-gray3 rounded-lg drop-shadow-sm">
      <div className="w-full h-40">
        <Image
          src="http://source.unsplash.com/vdkyWisomns"
          alt="article image"
          width={350}
          height={100}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-3 py-3">
        <div className="flex gap-1 text-caption1 text-primary">
          <span>#구내식당</span>
          <span>#종로구</span>
        </div>
        <div className="flex gap-2">
          <h3 className="text-heading4 font-bold">종로구청 구내식당</h3>

          <div className="flexbox-center">
            <Star width={18} height={18} />
            <span>4.7</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CafeteriaCard
