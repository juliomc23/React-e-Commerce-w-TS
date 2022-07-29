import React from 'react'

import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';

interface products {
    id: number
    img: {
        front: string
        up: string
        down: string
        aside: string
    }
    title: string
    price: number
    type: string
    available_colors: number
}

type Props = {
    products: Array<products>
}

function InfoSectionBComponent(props: Props) {

    const {products} = props

    return (
        <div>
            <h3>Zapatillas para hombre ({products.length})</h3>
            <div>
                <button>Ocultar filtros<ToggleOffOutlinedIcon /></button>
                <label htmlFor="select">Ordenar por</label>
                <select id="select" name="select">
                    <option value="destacados">Destacados</option>
                    <option value="recientes">Mas recientes</option>
                    <option value="alto-bajo">Precio: alto-bajo</option>
                    <option value="bajo-alto">Precio: bajo-alto</option>
                </select>
            </div>
        </div>
    )
}

export default InfoSectionBComponent

