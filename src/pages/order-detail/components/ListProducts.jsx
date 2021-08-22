import React from 'react';

import { Table } from 'react-bootstrap';
import { Product } from './Product';

export const ListProducts = ({ orderDetails }) => {

    // clean and build new array
    delete orderDetails._id;

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
                        <Product key={orderDetail.product._id} orderDetail={orderDetail} index={index} />
                    )
                }
            </tbody>

        </Table>
    )
}
