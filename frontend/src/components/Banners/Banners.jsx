import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './Banner.css'

import banner1 from '../../assets/img/banner1.webp'
import banner2 from '../../assets/img/banner2.webp'

export default function Banners(/*{ images }*/) {
  let images = [banner1, banner2]
  console.log('images', images)
  return (
    <div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images
            ? images.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    {' '}
                    <img
                      className='bannerImg'
                      src={img}
                     
                      
                      //sizes="(max-width: 640px) 700px , (min-width:1000px) 1920px"
                      // srcset="../../public/images/eficience.jpg x1 , ../../banner2.webp x2 , ../../banneBlog.webp x3"
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
