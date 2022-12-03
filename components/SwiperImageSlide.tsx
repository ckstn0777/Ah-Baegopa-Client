import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './SwiperImageSlide.module.scss'

function SwiperImageSlide() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib"
            alt="article image"
            width={350}
            height={200}
            className="object-cover w-full h-64"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="article image"
            width={350}
            height={200}
            className="object-cover w-full h-64"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib"
            alt="article image"
            width={350}
            height={200}
            className="object-cover w-full h-64"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperImageSlide
