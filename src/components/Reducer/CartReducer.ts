import { Products } from "../../interfaces/products"
import { CartState } from "../../interfaces/state"

export type ActionType =
    | { type: 'ADD_ITEM', payload: { id: number | undefined, shoe: string | undefined, img: string | undefined, price: number | undefined, shoe_type: string | undefined } }
    | { type: 'REMOVE_ONE_ITEM', payload: {} }
    | { type: 'REMOVE_ITEM', payload: {} }
    | { type: 'CLEAR_CART', payload: {} }


export const cartInitialState: CartState = {
    cart: []
}

export const cartReducer = (state: typeof cartInitialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_ITEM": {
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

        case "REMOVE_ONE_ITEM":
            return {
                ...state,
                // cart: action.payload
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                // cart: action.payload
            }
        case "CLEAR_CART":
            return {
                ...state,
                // cart: action.payload
            }
        default:
            return state;
    }
}

