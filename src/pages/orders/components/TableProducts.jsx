import React from 'react';

import { Table } from 'react-bootstrap';
import { Product } from './Product';

export const TableProducts = ({ products, onClick, type }) => {
    return (
        <Table style={{ width: 350 }} striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    {
                        ( type === 'Delete' )
                            ? <th>Quantity</th>
                            : null
                    }
                    <th>Action</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                            onCick={onClick}
                            type={type}
                        />
                    )
                }
            </tbody>
        </Table>
    )
}
