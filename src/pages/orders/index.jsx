import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';

import { ListOrders } from './components/ListOrders';
import { AlertMsg } from '../../components/AlertMsg';
import { CreateOrder } from './components/CreateOrder';

import { useDispatch, useSelector } from 'react-redux';

import { downloadOrdersAction }from '../../stateManagement/actions/ordersAction';

import { getProductByState } from '../../stateManagement/actions/productsAction';

const OrdersPage = () => {

    const dispatch = useDispatch();

    const [ show, setShow ] = useState( false );   
    const [ activeProducts, setActiveProducts ] = useState([]);

    useEffect(() => {

        dispatch( downloadOrdersAction() );        
        
        // eslint-disable-next-line 
    }, []);
    
    const { orders } = useSelector( state => state.orders );
    
    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);
    
    const openModalCreateOrder = async () => {
        
        const response = await dispatch(getProductByState());

        setActiveProducts(response);

        handleShow();
    }

    return (
        <>
            <h2>Orders</h2> 

            <Button 
                variant='primary' 
                className="mt-2" 
                style={{float: 'right'}}
                onClick={openModalCreateOrder}>
                Create Order
            </Button>

            { 
                (orders.length === 0)

                ? <AlertMsg variant='warning' msg='No data in data base' />
                : <ListOrders orders={orders} />
            }

            <CreateOrder show={show} handleClose={handleClose} activeProducts={activeProducts} />

        </>
    )
}

export default OrdersPage;