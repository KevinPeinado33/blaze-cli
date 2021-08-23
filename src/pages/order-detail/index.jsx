import React from 'react';

import { Button } from 'react-bootstrap';

import { format } from '../../utils/formatDate';
import { ListProducts } from './components/ListProducts';

import { CardInfoOrder } from './components/CardInfoOrder';
import { Loading } from '../../components/Loading';

import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const OrderDetailPage = ( ) => {

    const { id } = useParams();

    const history =  useHistory();

    const { orders } = useSelector( state => state.orders );
    const { loading } = useSelector( state => state.orders );

    const order = orders[orders.findIndex(product => product._id === id)];

    const { numOrder, consumer, status, date } = order;


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

            <ListProducts orderDetails={order.orderDetails} _id={id} />
            <CardInfoOrder order={order} />

            <Loading isVisible={loading ? 'loading' : ''} />
        </>
    )
}

export default OrderDetailPage;