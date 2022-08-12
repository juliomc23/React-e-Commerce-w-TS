import { Products } from "../../interfaces/products"

export type ActionType =
    | { type: 'ADD_ITEM', payload: { id: number | undefined, shoe: string | undefined, img: string | undefined, price: number | undefined, shoe_type: string | undefined } }
    | { type: 'REMOVE_ONE_ITEM', payload: { id: number | undefined, shoe: string | undefined, img: string | undefined, price: number | undefined, shoe_type: string | undefined } }
    | { type: 'REMOVE_ITEM', payload: { id: number | undefined, shoe: string | undefined, img: string | undefined, price: number | undefined, shoe_type: string | undefined } }
    | { type: 'CLEAR_CART', payload: { id: number | undefined, shoe: string | undefined, img: string | undefined, price: number | undefined, shoe_type: string | undefined } }


export const cartInitialState = {
    cart: <Products[]>[]
}

export const cartReducer = (state: typeof cartInitialState, action: ActionType) => {

    if (action.type === 'ADD_ITEM') {
        const exist = state.cart.find(product => product.id === action.payload.id)
        if (exist) {
            return {
                ...state,
                cart: state.cart.map(item => item.id === exist.id ? { ...item, qty: item.qty + 1 } : item)
            }
        } else {
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        }
    }

    if (action.type === 'REMOVE_ONE_ITEM') {
        const exist = state.cart.find(product => product.id === action.payload.id)

        if (exist) {
            if (exist.qty === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== exist.id)
                }

            } else {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === exist.id ? { ...item, qty: item.qty - 1 } : item)
                }
            }
        }
    }

    return state
}

