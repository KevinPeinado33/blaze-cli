import Swal from 'sweetalert2';

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

import { confApi } from '../../config/axiosConfig';

/**
 * Action for creation products
 * @param {*} product -> object complete
 */
export const createProductAction = product => {

    return async dispatch => {

        dispatch( createProduct() );

        try {

            const response = await confApi.post('/products/create', product);

            if ( response.status === 201 ){
                
                dispatch( createProductSuccess( response.data.product ) );

                Swal.fire(
                    'Created!',
                    response.data.mesage,
                    'success'
                );

            } else {

                dispatch( createProductError('Error when trying to insert a product.') );

            }

        } catch ( error ) {

            dispatch( createProductError( error ) );

        }

    }

}

const createProduct = () => ({
    type: CREATE_PRODUCT
});

const createProductSuccess = product => ({
    type: CREATE_PRODUCT_SUCCESS,
    payload: product
});

const createProductError = error => ({
    type: CREATE_PRODUCT_ERROR,
    payload: error
});

/**
 * Action for download all products from service rest
 */
export const downloadProductsAction = ( ) => {
    return async dispatch => {

        dispatch( downloadProducts() );

        try {

            const response = await confApi.get('/products/get-all');

            dispatch( downloadProductsSuccess( response.data ) );

        } catch ( error ) {

            dispatch( downloadProductsError( error ) );

        }
    
    }

}

const downloadProducts = () => ({
    type: DOWNLOAD_PRODUCTS
});

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = error => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: error
});

/**
 * Action for delete one product by id
 * @param {*} idProduct ¿
 */
export const deleteProductAction = idProduct => {

    return async dispatch => {

        dispatch( deleteProduct() );

        try {

            const response = await confApi.delete(`/products/delete/${idProduct}`);

            if ( response.status === 200 ) {

                dispatch( deleteProductSuccess( idProduct ) );

                Swal.fire(
                    'Deleted!',
                    response.data.mesage,
                    'success'
                );

            }            

        } catch ( error ) {

            dispatch( deleteProductError( error ) );

        }

    }

}

const deleteProduct = () => ({
    type: DELETE_PRODUCT
});

const deleteProductSuccess = idProduct => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: idProduct
});

const deleteProductError = error => ({
    type: DELETE_PRODUCT_ERROR,
    payload: error
});

/**
 * Action for edit one product
 * @param {*} product -> new product
 * @returns 
 */
export const editProductAction = product => {

    return async dispatch => {

        dispatch( editProduct() );

        try {

            const response = await confApi.put('/products/update', product);

            if ( response.status === 201 ){
                
                dispatch( editProductSuccess( response.data.product ) );

                Swal.fire(
                    'Edited!',
                    response.data.mesage,
                    'success'
                );

            } else {

                dispatch( editProductError('Error while trying to update the product.') );

            }

        } catch ( error ) {

            dispatch( editProductError( error ) );

        }

    }

}

const editProduct = () => ({
    type: EDIT_PRODUCT
});

const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
});

const editProductError = error => ({
    type: EDIT_PRODUCT_ERROR,
    payload: error
});

/**
 * Function for get all products when state is active
 * @param {*} state 
 * @returns 
 */
export const getProductByState = () => {
    
    return async () => {

        try {

            const response = await confApi.get(`/products/find-by-state/Active`);

            return response.data;

        } catch ( error ) {
 
            console.error(error);
        }

    }

}