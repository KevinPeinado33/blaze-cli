import React from 'react';

import { Button, Card } from 'react-bootstrap';

export const CardInfoOrder = ({ order }) => {

    const { subTotal, totalCityTax, totalCountyTax, totalStateTax, totalFederalTax, totalTaxes, totalAmount } = order;

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

                <Button variant="success">Complete Order</Button>
                <Button variant="danger" style={{ float: 'right' }}>Reject Order</Button>
            </Card.Body>
        </Card>
    )
}
