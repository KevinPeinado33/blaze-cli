import {
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    CREATE_PRODUCT,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS, 
    EDIT_PRODUCT_ERROR
} from '../types/productsType';

const initialState =  {
    products: [],
    loading: true,
    error: null
}

// eslint-disable-next-line
export default (state = initialState, action) => {

    switch (action.type) {
        
        case EDIT_PRODUCT:
        case CREATE_PRODUCT:
        case DELETE_PRODUCT:
        case DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: true
            }

        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter( product => product._id !== action.payload )
            }

        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map( product => product._id === action.payload._id ? product = action.payload : product )
            }

        case EDIT_PRODUCT_ERROR:
        case CREATE_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }

}