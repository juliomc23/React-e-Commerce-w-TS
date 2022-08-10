import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useContext } from 'react';

import { globalContext } from '../../../context/GlobalContext';
import { Products } from '../../../interfaces/products';

import '../css/CartWishHComponent.css'
const CartWishHComponent = () => {

  const { state } = useContext(globalContext)

  const qty = state.cart.reduce((prev: number, curr: Products) => (prev + curr.qty), 0);

  return (
    <div className='div_wishcartHeader'>
      <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
      <div className='carth__div'>
        <WorkOutlineOutlinedIcon sx={{ fontSize: 30 }} />
        <span className='cartspan__length'>{qty}</span>
      </div>

    </div>
  )
}

export default CartWishHComponent