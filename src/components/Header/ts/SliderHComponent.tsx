import { useEffect, useState } from 'react';

import '../css/SliderHComponent.css'


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

    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter >= sliderArray.length - 1 ? 0 : counter + 1)
        }, 10000);
    }, []);

    return (
        <div className='carousel__item'>
            <p className='p__sliderHtitle'>{sliderArray[counter].title}</p>
            <a className='a_sliderHinfo' href=''>More info</a>
        </div>

    )
}

export default SliderHComponent