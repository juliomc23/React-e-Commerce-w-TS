import React from 'react'

import '../css/CartWishHComponent.css'
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const CartWishHComponent = () => {
  return (
    <div className='div_wishcartHeader'>
        <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }}/>
        <WorkOutlineOutlinedIcon sx={{ fontSize: 30 }}/>
    </div>
  )
}

export default CartWishHComponent