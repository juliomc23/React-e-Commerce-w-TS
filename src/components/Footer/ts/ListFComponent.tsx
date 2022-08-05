import React from 'react'

import '../css/ListFComponent.css'

function ListFComponent() {
  return (
    <div className='divlist__footerul'>
        <ul className='ul__footer'>
            <li>TARJETAS DE REGALO</li>
            <li>BUSCAR UNA TIENDA</li>
            <li>NIKE JOURNAL</li>
            <li>HAZTE MEMBER</li>
            <li>DESCUENTO PARA ESTUDIANTES</li>
            <li>COMENTARIOS</li>
            <li>CODIGOS PROMOCIONALES</li>
        </ul>
        <ul className='ul__footer'>
            <li className='li__footeroption'>AYUDA</li>
            <li>Estado del pedido</li>
            <li>Envíos y entregas</li>
            <li>Devoluciones</li>
            <li>Opciones de pago</li>
            <li>Contacto</li>
            <li>Ayuda con los códigos promocionales de Nike</li>
        </ul>
        <ul className='ul__footer'>
            <li className='li__footeroption'>ACERCA DE NIKE</li>
            <li>Novedades</li>
            <li>Trabaja con nosotros</li>
            <li>Inversores</li>
            <li>Sostenibilidad</li>
        </ul>
        <ul className='ul__footer'>
            <li className='li__footeroption'>APLICACIONES DE NIKE</li>
            <li>Nike App</li>
            <li>Nike Run Club App</li>
            <li>Nike Training Club App</li>
            <li>SNKRS</li>
        </ul>
    </div>
  )
}

export default ListFComponent