import React, { useState } from 'react'

import { Button, Modal } from 'react-bootstrap';
import { FormOrder } from './FormOrder';

import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';

import { updateOrderAction } from '../../../stateManagement/actions/ordersAction';

export const AddItem = ({ show, handleClose, activeProducts, order, productsPurchased }) => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({ _id: order._id, consumer: order.consumer, products: [ ] });

    const onChange = ( value, field ) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const saveOrder = () => {

        const { consumer, products } = form;

        // validate attributes
        if ( consumer === '' || products.length === 0 ) {
            Swal.fire('Please complete all fields...!');
            return;
        }
        
        // send data for save
        dispatch( updateOrderAction( form ) );

        // restart state initial
        setForm({ _id: '', consumer: '', products: [ ]});

        // close modal
        handleClose(); 

    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            fullscreen={true}
        >

            <Modal.Header closeButton>
                <Modal.Title>New order { form.consumer !== '' ? `for ${form.consumer}` : ''}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormOrder form={form} onChange={onChange} activeProducts={activeProducts} productsPurchased={productsPurchased}/>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={ handleClose }>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={saveOrder}>
                    Save
                </Button>
            </Modal.Footer>

        </Modal >
    )
}
