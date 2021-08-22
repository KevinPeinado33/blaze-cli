import React from 'react';

import { Button } from 'react-bootstrap';

export const Product = ({ orderDetail, index }) => {
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ orderDetail.product.name }</td>
            <td>{ orderDetail.quantity  }</td>
            <td>{ orderDetail.product.price }</td>
            <td>{ orderDetail.cost }</td>
            <td>
                <Button variant='link'>
                    Delete
                </Button>
            </td>
        </tr>
    )
}
