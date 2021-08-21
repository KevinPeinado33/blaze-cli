import React, { useState, useEffect } from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { TableProducts } from './TableProducts';

export const FormOrder = ({ form, onChange, activeProducts }) => {

    const { consumer } = form;

    const [products, setProducts] = useState(activeProducts);
    const [productsInCar, setProductsInCar] = useState([]);

    // eslint-disable-next-line 
    useEffect( async () => {

        onChange(productsInCar, 'products');

        // eslint-disable-next-line
    }, [productsInCar]);
    
    const addProducts = id => {

        setProducts(products.filter(product => product._id !== id));

        const newProducto = products.findIndex(product => product._id === id);

        setProductsInCar([...productsInCar, products[newProducto]]);
                
    }
    
    const deleteProducts = id => {
        
        setProductsInCar(productsInCar.filter(product => product._id !== id));
        
        const newProducto = productsInCar.findIndex(product => product._id === id);
        
        setProducts([...products, productsInCar[newProducto]]);

    }

    return (
        <Form>
            <Row className="mb-3" >
                <Form.Group as={Col} controlId="consumer" >
                    <Form.Label>Consumer</Form.Label>
                    <Form.Control
                        type="text"
                        style={{ width: 550 }}
                        value={consumer}
                        onChange={({ target }) => onChange(target.value, 'consumer')} />
                </Form.Group>
            </Row>

            <Row className="mb-3 mt-4" >

                <Col md={{ span: 4 }} style={{ marginLeft: 15 }}>

                    <h5 className="mb-4">List of products</h5>

                    <TableProducts
                        products={products}
                        onClick={addProducts}
                        type='Add' 
                    />

                </Col>

                <Col md={{ span: 4, offset: 3 }}>

                    <h5 className="mb-4">Products in the shopping car</h5>

                    <TableProducts
                        products={productsInCar}
                        onClick={deleteProducts}
                        type='Delete' 
                    />

                </Col>
            </Row>
        </Form>
    )
}
