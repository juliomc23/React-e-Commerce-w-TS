import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import '../css/CartWishHComponent.css'
const CartWishHComponent = () => {
  return (
    <div className='div_wishcartHeader'>
      <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
      <div className='carth__div'>
        <WorkOutlineOutlinedIcon sx={{ fontSize: 30 }} />
        <span className='cartspan__length'>0</span>
      </div>

    </div>
  )
}

export default CartWishHComponent