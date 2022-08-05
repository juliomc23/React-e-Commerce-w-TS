import { createContext, useEffect, useState } from 'react'

import { fetchProducts } from ".././services/products"

import {products} from '../interfaces/products'

interface contextProps {
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    products: Array<products>
    setProducts: React.Dispatch<React.SetStateAction<products[]>>
}

export const globalContext = createContext<contextProps>({} as contextProps)

interface props {
    children: JSX.Element | JSX.Element[] //si alguna vez queremos pasar por props una funcion tenemos que decirle aqui lo que recibiriamos ya que solo estamos recibiendo jsx.element
}



function GlobalContext({ children }: props) {
    const [counter, setCounter] = useState(0)

    const [products, setProducts] = useState<products[]>([])

    const getData = async () => {
        const res = await fetchProducts()
        setProducts(res)
        return res
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <globalContext.Provider value={{ counter, setCounter, products, setProducts }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContext