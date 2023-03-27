import ProductCard from '../ProductCard/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './ProductSwipe.css'

function ProductSwipe ({ productsList }) {
  return (
    <div className='swiperContainer'>
      <div className='productsContainerSwiper'>
        <Swiper
          className='productSwiper'
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
        >
          {productsList
            ? productsList.map((product) => {
              return (
                <SwiperSlide className='productItem' key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              )
            })
            : null}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSwipe
