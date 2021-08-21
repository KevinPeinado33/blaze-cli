import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { categorys } from '../../../utils/categorys';

export const FormProduct = ({ form, onChange }) => {  
    
    const { name, category, price, state } = form;

    return (
        <Form>
            <Row className="mb-3" >
                <Form.Group as={Col} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={({ target }) => onChange(target.value, 'name')} />
                </Form.Group>

                <Form.Group as={Col} controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        value={category}
                        onChange={({ target }) => onChange(target.value, 'category')}>
                            <option value="" disabled={true}>Chosee a category ...</option>
                        { categorys.map( category => (
                            <option key={category.value} value={category.value}> { category.name }</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        value={price}
                        onChange={({ target }) => onChange(target.value, 'price')} />
                </Form.Group>

                <Form.Group as={Col} controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                        value={state}
                        onChange={({ target }) => onChange(target.value, 'state')}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </Form.Select>
                </Form.Group>

            </Row>

        </Form>
    )
}
