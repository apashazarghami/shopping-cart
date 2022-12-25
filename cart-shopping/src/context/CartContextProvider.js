import React, { createContext, useReducer } from "react";

const initialState = {
    selectedItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    checkout: false
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM" :
            if(!state.selectedItems.find(product => product.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return ({
                ...state,
                selectedItems:[...state.selectedItems],
                checkout: false
            })
        case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter(product => product.id !== action.payload.id);
            return({
                ...state,
                selectedItems: [...newSelectedItems]
            })
        case "INCREASE" :
            const indexI = state.selectedItems.findIndex(product => product.id === action.payload.id);
            state.selectedItems[indexI].quantity ++;
            return({
                ...state,
            })
        case "DECREASE" :
            const indexD = state.selectedItems.findIndex(product => product.id === action.payload.id);
            state.selectedItems[indexD].quantity --;
            return({
                ...state,
            })
        case "CHECKOUT" : 
            return({
                selectedItems: [],
                totalQuantity: 0,
                totalPrice: 0,
                checkout: true
            })
        case "CLEAR" : 
            return({
                selectedItems: [],
                totalQuantity: 0,
                totalPrice: 0,
                checkout: false
            })
        default : 
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return(
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;