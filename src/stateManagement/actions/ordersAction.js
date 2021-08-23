import {
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
    DOWNLOAD_ORDER,
    DOWNLOAD_ORDER_SUCCESS,
    DOWNLOAD_ORDER_ERROR,
    DELETE_ORDER,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_ERROR,
    UPDATE_ORDER,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_ERROR
} from '../types/ordersType';

import { confApi } from '../../config/axiosConfig';
import Swal from 'sweetalert2';
/**
 * Action for create one order with products
 * @param {*} order -> object complete
 */
export const createOrderActon = order => {

    return async dispatch => {

        dispatch( createOrder() );

        try {

            const response = await confApi.post('/orders/create', order);

            if ( response.status === 201 ) {
                
                dispatch( createOrderSuccess( response.data.order ) );
    
                Swal.fire(
                    'Created!',
                    response.data.mesage,
                    'success'
                );

            } else {

                dispatch( createOrderError('Error when trying to insert a order.') );

            }


        } catch ( error ) {

            dispatch( createOrderError( error ) );

        }

    }

}

const createOrder = () => ({
    type: CREATE_ORDER
});

const createOrderSuccess = order => ({
    type: CREATE_ORDER_SUCCESS,
    payload: order
});

const createOrderError = error => ({
    type: CREATE_ORDER_ERROR,
    payload: error
});


/**
 * Action for get all ordes
 * @returns 
 */
export const downloadOrdersAction = () => {

    return async dispatch => {
        
        dispatch( downloadOrders() );
        
        try {

            const response = await confApi.get('/orders/get-all');
            
            dispatch( downloadOrdersSuccess( response.data ) );          
            
        } catch ( error ) {
            
            dispatch( downloadOrdersError( error ) );

        }

    }

}

const downloadOrders = () => ({
    type: DOWNLOAD_ORDER
});

const downloadOrdersSuccess = orders => ({
    type: DOWNLOAD_ORDER_SUCCESS,
    payload: orders
});

const downloadOrdersError = error => ({
    type: DOWNLOAD_ORDER_ERROR,
    payload: error
});


/**
 * Action for delete one order by id
 * @param {*} idOrder 
 * @returns 
 */
export const deleteOrderAction = idOrder => {

    return async dispatch => {

        dispatch( deleteOrder() );

        try {

            const response = await confApi.delete(`/orders/delete/${idOrder}`);

            if ( response.status === 200 ) {

                dispatch( deleteOrderSuccess( idOrder ) );

                Swal.fire(
                    'Deleted!',
                    response.data.mesage,
                    'success'
                );

            }            

        } catch ( error ) {

            dispatch( deleteOrderError( error ) );

        }

    }

}

const deleteOrder = () => ({
    type: DELETE_ORDER
});

const deleteOrderSuccess = idOrder => ({
    type: DELETE_ORDER_SUCCESS,
    payload: idOrder
});

const deleteOrderError = error => ({
    type: DELETE_ORDER_ERROR,
    payload: error
});


/**
 * Action for update order status or detail
 * @param {*} order 
 * @returns 
 */
export const updateOrderAction = order => {

    return async dispatch => {

        dispatch( updateOrder() );
        
        try {

            const response = await confApi.put('/orders/update-order', order);

            if ( response.status === 201 ) {

                dispatch( updateOrderSuccess( response.data.order ) );
                
                Swal.fire(
                    'Modified!',
                    response.data.mesage,
                    'success'
                );

            } else {
                
                dispatch( updateOrderError('Error while trying to update the order.'));

            }

            
        } catch ( error ) {

            dispatch( updateOrderError( error ) );
            
        }

    }

}

const updateOrder = () => ({
    type: UPDATE_ORDER
});

const updateOrderSuccess = order => ({
    type: UPDATE_ORDER_SUCCESS,
    payload: order
});

const updateOrderError = error => ({
    type: UPDATE_ORDER_ERROR,
    payload: error
});