import React from 'react';

import { Table } from 'react-bootstrap';
import { Product } from './Product';

export const ListProducts = ({ products }) => {
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
                    products.map( (product, index) => 
                        <Product key={product._id} product={product} index={index} />
                    )
                }
            </tbody>

        </Table>
    )
}
