import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './Banner.css'

import banner1 from '../../assets/img/banner1.webp'
import banner2 from '../../assets/img/banner2.webp'

export default function Banners () {
  const images = [banner1, banner2]
  return (
    <div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop
        >
          {images
            ? images.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  {' '}
                  <img
                    className='bannerImg'
                    src={img}
                  />
                </SwiperSlide>
              )
            })
            : null}
        </Swiper>
      </div>
    </div>
  )
}
