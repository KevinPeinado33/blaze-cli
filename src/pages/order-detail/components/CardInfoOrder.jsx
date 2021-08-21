import React from 'react';

import { Button, Card } from 'react-bootstrap';

export const CardInfoOrder = ({ order }) => {

    const {subTotal, totalCityTax, totalCountyTax, totalStateTax, totalFederalTax, totalTaxes, totalAmount} = order;
    return (
        <Card style={{width: 450, float: 'right'}}>
            <Card.Body>
                <Card.Text>
                    <strong className="mb-2">Subtotal: </strong> $ {subTotal} <br/>
                    <strong className="mt-2">Taxes </strong><br/>
                    {/* <ul>
                        <li>Total City Tax: ${totalCityTax}</li>
                        <li>Total County Tax: ${totalCountyTax} </li>
                        <li>Total State Tax: ${totalStateTax}</li>
                        <li>Total Federal Tax: ${totalFederalTax}</li>
                    </ul> */}
                    <strong className="mt-2">Total Taxes </strong> ${totalTaxes}<br/>
                    <strong className="mt-2">Total </strong>${totalAmount}

                </Card.Text>
                <Button variant="success">Complete Order</Button>
                <Button variant="danger" style={{float: 'right'}}>Reject Order</Button>
            </Card.Body>
        </Card>
    )
}
