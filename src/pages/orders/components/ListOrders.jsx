import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Pagination } from '../../../components/Pagination';
import { Order } from './Order';

export const ListOrders = ({ orders, setSearchItem }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(5);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const currentOrder = orders.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div style={{ marginTop: 80 }}>

            <Form.Control
                type="text"
                placeholder="Search by consumer..."
                style={{ width: '460px', float: 'right', marginBottom: 20 }}
                onChange={({ target }) => setSearchItem(target.value)} />

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
                        currentOrder.map((order, index) =>
                            <Order
                                key={order._id}
                                index={index}
                                order={order}
                            />
                        )
                    }
                </tbody>
            </Table>
            <Pagination
                productPerPage={productPerPage} 
                totalProducts={ orders.length } 
                paginate={paginate}
            />
        </div>
    )
}
