import { ActionType, cartInitialState } from "./CartReducer"

export const addItem = (state: typeof cartInitialState, action: ActionType) => {
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

export const removeOneItem = (state: typeof cartInitialState, action: ActionType) => {
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