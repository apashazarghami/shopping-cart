const initialState = {
    selectedItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    checkout: false
}

const sumQuantity = state => {
    const totalQuantity = state.selectedItems.reduce((total, acc) => total + acc.quantity, 0);
    const totalPrice = state.selectedItems.reduce((total, acc) => total + acc.quantity * acc.price, 0);
    return{totalQuantity, totalPrice: totalPrice.toFixed(2)}
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM" :
               action.payload.quantity = 1;
               state.selectedItems.push(action.payload);
        return {
            ...state,
            selectedItems: state.selectedItems,
            ...sumQuantity(state),
            checkout: false
        }
        case "INCREASE" :
            const indexIncrease = state.selectedItems.findIndex(product => product.id === action.payload.id);
            state.selectedItems[indexIncrease].quantity++;
            return {
                ...state,
                selectedItems: state.selectedItems,
                ...sumQuantity(state)
            }
        case "DECREASE" :
            const indexDecrease = state.selectedItems.findIndex(product => product.id === action.payload.id);
            state.selectedItems[indexDecrease].quantity--;
            return {
                ...state,
                selectedItems: state.selectedItems,
                ...sumQuantity(state)
            }
        case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter(product => product.id !== action.payload.id);
            const newState = {...state, selectedItems:[...newSelectedItems]}
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumQuantity(newState)
            }
        case "CLEAR" :
            return {
                selectedItems: [],
                totalQuantity: 0,
                totalPrice: 0,
                checkout: false
            }
        case "CHECKOUT" :
            return {
                selectedItems: [],
                totalQuantity: 0,
                totalPrice: 0,
                checkout: true
            }
        default: return state;
    }
}

export default cartReducer;