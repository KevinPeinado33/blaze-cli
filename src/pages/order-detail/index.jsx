import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import { format } from '../../utils/formatDate';
import { ListProducts } from './components/ListProducts';

import { CardInfoOrder } from './components/CardInfoOrder';
import { Loading } from '../../components/Loading';
import { AddItem } from './components/AddItem';


import { useHistory, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getProductByState } from '../../stateManagement/actions/productsAction';


const OrderDetailPage = ( ) => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const history =  useHistory();

    const [ show, setShow ] = useState( false ); 
    const [ activeProducts, setActiveProducts ] = useState([]);
    const [ productsPurchased ] = useState([])

    const { orders } = useSelector( state => state.orders );
    const { loading } = useSelector( state => state.orders );

    const order = orders[ orders.findIndex(product => product._id === id) ];

    const { numOrder, consumer, status, date } = order;

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const addItemClick = async () => {

        const response = await dispatch(getProductByState());

        setActiveProducts(response);

        productsPurchased.length = 0;

        order.orderDetails.forEach( detail => {
            productsPurchased.push(
                {
                    _id: detail.product._id, 
                    name: detail.product.name, 
                    category: detail.product.category,
                    state: detail.product.state,
                    price: detail.product.price, 
                    quantity: detail.quantity
                }
            );
        });

        handleShow();

    }

    return (
        <>
            <div className="d-flex justify-content-between">

                <h2>Order N°: {numOrder} </h2>

                <Button 
                    variant='dark' 
                    size='lg'
                    onClick={() => history.push('/orders')}>Back</Button>

            </div>

            <h5 className="mt-5 mb-4">Customer: {consumer}</h5>
            <h5 className="mb-4">Status: {status}</h5>
            <h5 className="mb-4">Date: {format(date)}</h5>

            <ListProducts 
                orderDetails={order.orderDetails} 
                _id={id} />

            <Button 
                onClick={addItemClick}
                variant='primary'
                >Add item +
            </Button>

            <CardInfoOrder order={order} />

            <AddItem 
                show={show} 
                productsPurchased={productsPurchased}
                order={order}
                activeProducts={activeProducts}
                handleClose={handleClose} />

            <Loading isVisible={loading ? 'loading' : ''} />
        </>
    )
}

export default OrderDetailPage;