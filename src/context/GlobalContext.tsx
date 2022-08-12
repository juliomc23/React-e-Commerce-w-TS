import { createContext, useEffect, useReducer, useState } from 'react'

import { fetchProducts } from ".././services/products"
import { cartInitialState, cartReducer, ActionType } from '../components/Reducer/CartReducer'

import { Products } from '../interfaces/products'

interface contextProps {
    products: Array<Products>
    setProducts: React.Dispatch<React.SetStateAction<Products[]>>
    dispatch: React.Dispatch<ActionType>
    state: any
}

interface props {
    children: JSX.Element | JSX.Element[] //si alguna vez queremos pasar por props una funcion tenemos que decirle aqui lo que recibiriamos ya que solo estamos recibiendo jsx.element
}

export const globalContext = createContext({} as contextProps)


function GlobalContext({ children }: props) {

    const [products, setProducts] = useState<Products[]>([])


    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const getData = async () => {
        const res = await fetchProducts()
        setProducts(res)
        return res
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <globalContext.Provider value={{ products, setProducts, dispatch, state }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContext