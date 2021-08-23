import React from 'react';

import { Table } from 'react-bootstrap';
import { Product } from './Product';


import { useDispatch } from 'react-redux';

import { updateOrderAction } from '../../../stateManagement/actions/ordersAction';

export const ListProducts = ({ orderDetails, _id }) => {

    const dispatch =  useDispatch();

    const deleteDetail = idDetalle => {

        const positionDetalle = orderDetails.findIndex( detail => detail._id = idDetalle );
        
        orderDetails.splice(positionDetalle, 1);

        const products = [];

        // eslint-disable-next-line 
        orderDetails.map( detail => {
            products.push({_id: detail.product._id, quantity: detail.quantity});
        });

        const newDetail = { _id, products };

        dispatch( updateOrderAction(newDetail) );
        
    }

    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <td>N°</td>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Unit Price</td>
                    <td>Cost</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    orderDetails.map( (orderDetail, index) => 
                        <Product 
                            key={orderDetail.product._id} 
                            orderDetail={orderDetail} 
                            deleteDetail={deleteDetail}
                            index={index} />
                    )
                }
            </tbody>

        </Table>
    )
}
