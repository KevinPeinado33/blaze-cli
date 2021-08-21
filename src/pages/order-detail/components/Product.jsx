import React from 'react';

import { Button } from 'react-bootstrap';

export const Product = ({ product, index }) => {
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ product.name }</td>
            <td>4</td>
            <td>{ product.price }</td>
            <td>{30}</td>
            <td>
                <Button variant='link'>
                    Delete
                </Button>
            </td>
        </tr>
    )
}
