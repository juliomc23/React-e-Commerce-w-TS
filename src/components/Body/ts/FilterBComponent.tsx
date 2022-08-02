import React from 'react'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


import '../css/FilterBComponent.css'

function FilterBComponent() {
    return (
        <nav className='filter__listbody'>
            <div className='div__sportfilter'>
                <span>Lifestyle</span>
                <span>Jordan</span>
                <span>Running</span>
                <span>Baloncesto</span>
                <span>Fútbol</span>
                <span>Gym y Training</span>
                <span>Skateboard</span>
                <span>Golf</span>
                <span>Tenis</span>
                <span>Atletismo</span>
                <span>Caminar</span>
                <span>Voleibol</span>
                <span>Pádel</span>
                <span>Menos de 100 €</span>
            </div>
            <div className='div__genderfilter'>
                <button className='button__gender'>Sexo<KeyboardArrowDownOutlinedIcon /></button>
                <div className='div__genderoptions'>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Man
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Woman
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Unisex
                    </label>
                </div>
            </div>
            <div className='div__pricefilter'>
                <button className='button__price'>Filtrar por precio<KeyboardArrowDownOutlinedIcon /></button>
                <div className='div__priceoptions'>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        0€ - 50€
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        50€ - 100€
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        100€ - 150€
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        +150€
                    </label>
                </div>

            </div>
            <div className='div__offersfilter'>
                <button className='button__offer'>Ofertas<KeyboardArrowDownOutlinedIcon /></button>
                <div className='div__offeroption'>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Ofertas
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default FilterBComponent