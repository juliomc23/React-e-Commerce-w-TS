import { useContext } from "react"
import { cartContext } from "../../../context/GlobalContext"

function ProductsBComponent(): JSX.Element {

    const {products} = useContext(cartContext)

    return (
        <>
            {products.map(product =>
                <div key={product.id}>
                    <img src={product.img.aside} alt={product.title} />
                    <div>
                        <span>{product.title}</span>
                        <span>{product.type}</span>
                        <span>{product.available_colors}{product.available_colors > 1 ? ' colores' : ' color'}</span>
                    </div>
                    <span>{product.price} €</span>
                </div>
            )}
        </>
    )

}

export default ProductsBComponent