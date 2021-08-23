import React, { useState } from 'react'

import { Table, Form } from 'react-bootstrap'
import { Pagination } from './Pagination';
import { Product } from './Product'

export const ListProducts = ({ products, setSearchItem }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(5);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div style={{ marginTop: 80 }}>

            <Form.Control
                type="text"
                placeholder="Search by name..."
                style={{ width: '460px', float: 'right', marginBottom: 20 }}
                onChange={({ target }) => setSearchItem(target.value)} />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>N°</td>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentProduct.map((product, index) =>
                            <Product
                                key={product._id}
                                index={index}
                                product={product} />
                        )
                    }
                </tbody>
            </Table>
            <Pagination 
                productPerPage={productPerPage} 
                totalProducts={ products.length } 
                paginate={paginate}/>
        </div>
    )
}
