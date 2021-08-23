import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';
import { FormProduct } from './FormProduct';

import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';

import { editProductAction } from '../../../stateManagement/actions/productsAction';

export const EditProduct = ({ show, handleClose, product }) => {

    const dispatch = useDispatch();

    const [ form, setForm ] = useState(product);

    const onChange = (value, field) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const saveProduct = () => {

        const { name, category, price } = form;

        // validate fields
        if ( name === '' || category === '' || price === 0 ) {
            Swal.fire('Please complete all fields...!');
            return;
        }

        // send create a product
        dispatch( editProductAction( form ) );

        // close modal
        handleClose();

    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
        >

            <Modal.Header closeButton>
                <Modal.Title>Edit product {form.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormProduct form={form} onChange={onChange}  />
            </Modal.Body>

            <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick={handleClose}>
                    Close
                </Button>
                <Button 
                    variant="primary"
                    onClick={saveProduct}>Save</Button>
            </Modal.Footer>

        </Modal >
    )
}
