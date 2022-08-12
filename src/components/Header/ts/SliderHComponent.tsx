import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../css/SliderHComponent.css'
import { useLocation } from 'react-router-dom';


const sliderArray = [
    {
        id: 0,
        title: 'Titulo del slider 0'
    },
    {
        id: 1,
        title: 'Titulo del slider 1'
    },
    {
        id: 2,
        title: 'Titulo del slider 2'
    },
    {
        id: 3,
        title: 'Titulo del slider 3'
    },
    {
        id: 4,
        title: 'Titulo del slider 4'
    },
    {
        id: 5,
        title: 'Titulo del slider 5'
    }
]

function SliderHComponent() {

    const location = useLocation();

    if (location.pathname === '/cart') {
        return null
    } else {
        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{
                    delay: 10000,
                }}
                slidesPerView={1}
                className='carousel__item'
            >
                {sliderArray.map(slide =>
                    <SwiperSlide key={slide.id}>
                        <p className='p__sliderHtitle'>{slide.title}</p>
                        <a className='a_sliderHinfo' href=''>More info</a>
                    </SwiperSlide>)}
            </Swiper>

        )
    }
}

export default SliderHComponent