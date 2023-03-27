import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import cpuIcon from '../../assets/icons/CPU-icon.png'
import boardIcon from '../../assets/icons/Motherboard-icon.png'
import gpuIcon from '../../assets/icons/Video-card-icon.png'
import ramIcon from '../../assets/icons/ram-icon.png'
import hddIcon from '../../assets/icons/SSD-icon.png'
import audioIcon from '../../assets/icons/Headphones-icon.png'
import caseIcon from '../../assets/icons/Case-icon.png'
import monitorIcon from '../../assets/icons/Monitor-icon.webp'
import keyboardIcon from '../../assets/icons/Keyboard-icon.webp'
import mouseIcon from '../../assets/icons/Mice-icon.webp'
import pcIcon from '../../assets/icons/pc-gamer-pre-armado-colombia.webp'
import laptopIcon from '../../assets/icons/Notebook-icon.webp'
import chairIcon from '../../assets/icons/gaming-chair-icon.webp'
import streamingIcon from '../../assets/icons/streaming-icon.png'
import fontIcon from '../../assets/icons/PSU-ICON-1.png'
import coolerIcon from '../../assets/icons/icono-cooling.png'

import './CategoryMenu.css'

function CategoryMenu () {
  const categories = [
    {
      name: 'CPU',
      icon: cpuIcon
    },
    {
      name: 'BOARD',
      icon: boardIcon
    },
    {
      name: 'GPU',
      icon: gpuIcon
    },
    {
      name: 'RAM',
      icon: ramIcon
    },
    {
      name: 'HDD',
      icon: hddIcon
    },
    {
      name: 'AUDIO',
      icon: audioIcon
    },
    {
      name: 'CHASIS',
      icon: caseIcon
    },
    {
      name: 'MONITORES',
      icon: monitorIcon
    },
    {
      name: 'TECLADO',
      icon: keyboardIcon
    },
    {
      name: 'MOUSE',
      icon: mouseIcon
    },
    {
      name: 'TORRES',
      icon: pcIcon
    },
    {
      name: 'PORTÁTILES',
      icon: laptopIcon
    },
    {
      name: 'SILLAS',
      icon: chairIcon
    },
    {
      name: 'STREAMING',
      icon: streamingIcon
    },
    {
      name: 'FUENTE',
      icon: fontIcon
    },
    {
      name: 'COOLING',
      icon: coolerIcon
    }
  ]
  return (
    <div className='categoryMenu'>
      <div>
        <Swiper
          className='categorySwipe'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={16}
        >
          {categories.map((category, index) => {
            return (
              <SwiperSlide className='categoryItem' key={index}>
                <Link
                  to={`/products/${category.name}`}
                  className='categoryLink'
                >
                  <img src={category.icon} width={67} />
                  <p className='categoryName'>{category.name}</p>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default CategoryMenu
