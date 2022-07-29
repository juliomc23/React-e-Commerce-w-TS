import { createContext, useEffect, useState } from 'react'

import { fetchProducts } from ".././services/products"

interface products {
    id: number
    img: {
        front: string
        up: string
        down: string
        aside: string
    }
    title: string
    price: number
    type: string
    available_colors: number
}

interface contextProps {
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    products: Array<products>
    setProducts: React.Dispatch<React.SetStateAction<products[]>>
}

export const cartContext = createContext<contextProps>({} as contextProps)

interface props {
    children: JSX.Element | JSX.Element[] //si alguna vez queremos pasar por props una funcion tenemos que decirle aqui lo que recibiriamos ya que solo estamos recibiendo jsx.element
}



function CartContext({ children }: props) {

    const [counter, setCounter] = useState(0)

    const [products, setProducts] = useState<products[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetchProducts()
            setProducts(res)
            return res
        }

        getData()
    }, [])


    return (
        <cartContext.Provider value={{ counter, setCounter, products, setProducts }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext