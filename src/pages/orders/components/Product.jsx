import { Button } from 'react-bootstrap'
import React from 'react'

export const Product = ({ product, onCick, type}) => {
    return (
        <tr>
            <td> { product.name } </td>
            <td> { product.price } </td>
            
            { 
                ( type === 'Delete' )
                    ?  <td> { product.quantity }</td>
                    : null 
            }
            <td>
                <Button variant='link' onClick={() => onCick(product._id)}>
                    { type }
                </Button>
            </td>
        </tr>
    )
}
