import { useContext } from "react"
import { cartContext } from "../../../context/GlobalContext"

import '../css/ProductsBComponent.css'

function ProductsBComponent(): JSX.Element {

    const {products} = useContext(cartContext)

    return (
        <div className="divbody__products">
            {products.map(product =>
                <div key={product.id} className="divbody__singleproduct">
                    <img src={product.img.aside} alt={product.title} className="img__productbody"/>
                    <div className="divinfo__singleproduct">
                        <span>{product.title}</span>
                        <span className="span__product">{product.type}</span>
                        <span className="span__product">{product.available_colors}{product.available_colors > 1 ? ' colores' : ' color'}</span>
                    </div>
                    <span>{product.price} €</span>
                </div>
            )}
        </div>
    )

}

export default ProductsBComponent