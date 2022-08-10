import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductID } from '../../../services/products'

import { Products } from '../../../interfaces/products'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import '../css/SingleProductBComponent.css'
import { globalContext } from '../../../context/GlobalContext';

function SingleProductBComponent() {

    const { dispatch } = useContext(globalContext)

    const { id } = useParams()
    const idProduct = Number(id) //this way is how Typescript convert strings to number
    const [product, setProduct] = useState<Products>()

    const getProduct = async () => {
        const res = await fetchProductID(idProduct)
        setProduct(res)
    }

    useEffect(() => {
        getProduct()
    }, [])

    const item = {
        id: product?.id,
        shoe: product?.title,
        img: product?.img.front,
        price: product?.price,
        shoe_type: product?.type
    }

    return (
        <div className='singleproduct__divbody'>
            <div className='wrapper__singleproduct'>
                <div className='singleproduct__images'>
                    <img src={product?.img.front} alt={product?.title} className='img__singleproduct' />
                    <img src={product?.img.down} alt={product?.title} className='img__singleproduct' />
                    <img src={product?.img.aside} alt={product?.title} className='img__singleproduct' />
                    <img src={product?.img.up} alt={product?.title} className='img__singleproduct' />
                </div>
                <div className='singleproduct__info'>
                    <section className='singleproduct__productinfo'>
                        <span>{product?.title}</span>
                        <span>{product?.type}</span>
                        <span>{product?.price} €</span>
                    </section>
                    <div className='sizesdiv__singleproduct'>
                        <div className='size__textdiv'>
                            <span>Selecciona tu talla</span>
                            <span>Guía de tallas</span>
                        </div>
                        <div className='sizeselector__div'>
                            {product?.sizes.map(
                                size => {
                                    return <div key={size} className='divsize__singleproduct'>EU {size}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='buttonsdiv__singleproduct'>
                        <button className='button__singleproduct addtocart' onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}>Añadir a la cesta</button>
                        <button className='button__singleproduct'>Favorito <FavoriteBorderOutlinedIcon sx={{ fontSize: 17, marginLeft: 1 }} /></button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SingleProductBComponent