import React from 'react'
import '../css/SearchbarHComponent.css'

const SearchbarHComponent = () => {
  return (
    <div className='div__searchbarheader'>
      <button className='button__searchheader'>
        <img src='../../.././img/icons/search.png' alt="search icon" className='img__searchheader' />
      </button>
      <input type="text" placeholder="Buscar" className='input__searchproduct'/>
    </div>
  )
}

export default SearchbarHComponent