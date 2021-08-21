import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { EditProduct } from './EditProduct';

import { deleteProductAction } from '../../../stateManagement/actions/productsAction';

export const Product = ({ product, index }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const deleteProduct = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                dispatch( deleteProductAction(id) );

            }

        });

    }

    return (
        <>
            <tr>
                <td>{ index + 1 }</td>
                <td>{ product.name }</td>
                <td>{ product.category }</td>
                <td>{ product.price }</td>
                <td>{ product.state }</td>
                <td>
                    <Button variant="link" onClick={handleShow}>
                        Edit
                    </Button>
                    &nbsp;
                    <Button variant="link" onClick={ () => deleteProduct(product._id) }>
                        Delete
                    </Button>
                </td>
            </tr>  

            <EditProduct 
                show={show} 
                handleClose={handleClose} 
                product={product} />   
      
        </>
    )
}
