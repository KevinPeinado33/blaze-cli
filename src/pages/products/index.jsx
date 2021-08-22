import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';
import { AlertMsg } from '../../components/AlertMsg';
import { CreateProduct } from './components/CreateProduct';
import { ListProducts } from './components/ListProducts';

import { downloadProductsAction } from '../../stateManagement/actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../../components/Loading';

const ProductsPage = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    
    useEffect(() => {
        
        dispatch(downloadProductsAction());
        
        // eslint-disable-next-line 
    }, []);
    
    const { products } = useSelector(state => state.products);
    
    const [filterData, setFilterData] = useState(products);
    const [searchItem, setSearchItem] = useState('');

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    useEffect(() => {

        const results = products.filter( product => product.name.toLowerCase().includes(searchItem.toLowerCase()) );
    
        setFilterData(results);

    }, [products, searchItem]);

    const data = searchItem !== "" ? filterData : products;

    const { loading } = useSelector(state => state.products );

    return (
        <>
            <h3>Products</h3>

            <Button
                variant='primary'
                onClick={handleShow}
                className="mt-2"
                style={{ float: 'right' }}>
                Create Product
            </Button>

            {
                (products.length === 0)

                    ? <AlertMsg variant='warning' msg='No data in data base' />
                    : <ListProducts products={data} setSearchItem={setSearchItem} />
            }

            <CreateProduct show={show} handleClose={handleClose} />

            <Loading isVisible={loading ? 'loading' : ''} />

        </>
    )
}

export default ProductsPage;