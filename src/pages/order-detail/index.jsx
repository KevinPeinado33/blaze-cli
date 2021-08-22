import React from 'react';

import { Button } from 'react-bootstrap';

import { format } from '../../utils/formatDate';
import { ListProducts } from './components/ListProducts';

import { CardInfoOrder } from './components/CardInfoOrder';

const OrderDetailPage = ({ history }) => {

    /* const { id } = useParams(); */

    const { order } = history.location.state;

    const { numOrder, consumer, status, date } = order;

    return (
        <>
            <div className="d-flex justify-content-between">

                <h2>Order N°: {numOrder} </h2>

                <Button 
                    variant='dark' 
                    size='lg'
                    onClick={() => window.history.back()}>Back</Button>

            </div>

            <h5 className="mt-5 mb-4">Customer: {consumer}</h5>
            <h5 className="mb-4">Status: {status}</h5>
            <h5 className="mb-4">Date: {format(date)}</h5>

            <ListProducts orderDetails={order.orderDetails} />
            <CardInfoOrder order={order} />

        </>
    )
}

export default OrderDetailPage;