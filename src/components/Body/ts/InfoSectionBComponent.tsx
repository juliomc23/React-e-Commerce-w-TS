import React from 'react'

import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import '../css/InfoSectionBComponent.css'

import {Products} from '../../../interfaces/products'

interface Props {
    products: Array<Products>
}

function InfoSectionBComponent(props: Props) {

    const { products } = props

    return (
        <div className='infoheader__sectionbody'>
            <span className='infoheader_spanheader'>Zapatillas para hombre ({products.length})</span>
            <div className='infobuttons__filters'>
                <button className='infobutton__hidefilter'>Ocultar filtros<ToggleOffOutlinedIcon /></button>
                <button className='infobutton__selectfilter'>Ordenar por<KeyboardArrowDownOutlinedIcon /></button>
            </div>
        </div>
    )
}

export default InfoSectionBComponent

