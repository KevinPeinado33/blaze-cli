import { Button } from 'react-bootstrap'
import React from 'react'

export const Product = ({ product, onCick, type}) => {
    return (
        <tr>
            <td> { product.name } </td>
            <td> { product.price } </td>
            <td>
                <Button variant='link' onClick={() => onCick(product._id)}>
                    { type }
                </Button>
            </td>
        </tr>
    )
}
