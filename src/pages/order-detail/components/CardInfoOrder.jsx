import React from 'react';

import { Button, Card } from 'react-bootstrap';

import { useDispatch } from 'react-redux';

import { updateOrderAction } from '../../../stateManagement/actions/ordersAction';

export const CardInfoOrder = ({ order }) => {


    const dispatch = useDispatch();

    const { _id, subTotal, totalCityTax, totalCountyTax, totalStateTax, totalFederalTax, totalTaxes, totalAmount } = order;

    const updateStatusOrder = ( _id, status ) => {

        const orderToUpdate = { _id, status };

        dispatch( updateOrderAction(orderToUpdate) );

    }

    return (
        <Card style={{ width: 450, float: 'right' }}>
            <Card.Body>
                <Card.Text>
                    <strong className="mb-2">
                        Subtotal:
                    </strong>
                    <span className="right-taxes">
                        ${subTotal}
                    </span>
                    <br />
                </Card.Text>
                <strong className="mt-2">Taxes </strong><br />
                <ul>
                    <li>
                        Total City Tax: <span className="right-taxes">${totalCityTax}</span>
                    </li>
                    <li>
                        Total County Tax: <span className="right-taxes">${totalCountyTax}</span>
                    </li>
                    <li>
                        Total State Tax: <span className="right-taxes">${totalStateTax}</span>
                    </li>
                    <li>
                        Total Federal Tax: <span className="right-taxes">${totalFederalTax}</span>
                    </li>
                </ul>

                <Card.Text>
                    <strong className="mt-2">Total Taxes </strong><span className="right-taxes">${totalTaxes}</span><br />
                    <strong className="mt-2">Total </strong><span className="right-taxes">${totalAmount}</span>
                </Card.Text>

                <Button 
                    onClick={() => updateStatusOrder(_id, 'Completed')}
                    variant="success">
                    Complete Order
                </Button>
                <Button 
                    onClick={() => updateStatusOrder(_id, 'Rejected')}
                    variant="danger" 
                    style={{ float: 'right' }}>
                    Reject Order
                </Button>
            </Card.Body>
        </Card>
    )
}
