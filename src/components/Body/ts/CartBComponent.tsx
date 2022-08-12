import React, { useContext } from 'react'
import { globalContext } from '../../../context/GlobalContext'
import { Item } from './SingleProductBComponent'

import '../css/CartBComponent.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const CartBComponent = () => {

    const { state, dispatch } = useContext(globalContext)

    if (state.cart.length !== 0) {
        return (
            <div className='cart__divproduct'>
                {state?.cart.map((product: Item) => {
                    return (
                        <div key={product.id} className="productCart__div" >
                            <img src={product.img} alt={product.shoe} className="productCart__img" />
                            <div className='info__productCart-div'>
                                <p className='infoProductCart__p'>{product.shoe}</p>
                                <p className='infoProductCart__p'>{product.price}</p>
                                <p className='infoProductCart__p'>{product.shoe_type}</p>
                                <p className='infoProductCart__p'>{product.qty}</p>
                                <div className='buttonsProducCart__div'>
                                    <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })} className='buttonProductCart add'><AddIcon /></button>
                                    <button onClick={() => dispatch({ type: 'REMOVE_ONE_ITEM', payload: product })} className='buttonProductCart remove'><RemoveIcon /></button>
                                    <button className='buttonProductCart clear'><DeleteOutlineOutlinedIcon /></button>
                                    <button className='buttonProductCart fav'><FavoriteBorderOutlinedIcon /></button>
                                </div>
                            </div>
                        </div>)
                })}
            </div>

        )
    } else {
        return (
            <div className='cart__divproduct'>
                Empty cart!
            </div>

        )
    }


}
