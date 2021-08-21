import {
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
    DOWNLOAD_ORDER,
    DOWNLOAD_ORDER_SUCCESS,
    DOWNLOAD_ORDER_ERROR,
    DELETE_ORDER,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_ERROR    
} from '../types/ordersType';

const initialState = {
    orders: [],
    loading: false,
    error: null
}

// eslint-disable-next-line
export default (state = initialState, action) => {

    switch (action.type) {

        case DELETE_ORDER:
        case CREATE_ORDER:
        case DOWNLOAD_ORDER:
            return {
                ...state,
                loading: true
            }

        case DOWNLOAD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [ ...state.orders, action.payload ]
            }

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.filter( order => order._id !== action.payload )
            }
        
        case DELETE_ORDER_ERROR:
        case CREATE_ORDER_ERROR:
        case DOWNLOAD_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }

}