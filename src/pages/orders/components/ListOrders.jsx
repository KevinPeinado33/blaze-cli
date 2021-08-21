import { Table } from 'react-bootstrap';
import { Order } from './Order';

export const ListOrders = ({ orders }) => {

    return (
        <div style={{marginTop: 75}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>N°</td>
                        <td>Consumer</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Total</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => 
                            <Order
                                key={order._id}
                                index={index}
                                order={order}
                            />    
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
