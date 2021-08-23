import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';

import { ListOrders } from './components/ListOrders';
import { AlertMsg } from '../../components/AlertMsg';
import { CreateOrder } from './components/CreateOrder';

import { useDispatch, useSelector } from 'react-redux';

import { downloadOrdersAction }from '../../stateManagement/actions/ordersAction';

import { getProductByState } from '../../stateManagement/actions/productsAction';

import { Loading } from '../../components/Loading';

const OrdersPage = () => {

    const dispatch = useDispatch();

    const [ show, setShow ] = useState( false );   
    
    const { orders } = useSelector( state => state.orders );
    const { loading } = useSelector( state => state.orders );
    
    const [ activeProducts, setActiveProducts ] = useState([]);

    const [filterData, setFilterData] = useState(orders);
    const [searchItem, setSearchItem] = useState('');
    
    useEffect(() => {

        if ( orders.length === 0 ){

            dispatch( downloadOrdersAction() );        
        
        }

        const results = orders.filter( order => order.consumer.toLowerCase().includes(searchItem.toLowerCase()) );
        
        setFilterData(results);
        
        // eslint-disable-next-line 
    }, [orders, searchItem]);
    
    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);
    
    const openModalCreateOrder = async () => {
        
        const response = await dispatch(getProductByState());

        setActiveProducts(response);

        handleShow();
    }

    const data = searchItem !== "" ? filterData : orders;

    return (
        <>
            <h2>Orders</h2> 

            <Button 
                variant='primary' 
                className="mt-2" 
                style={{float: 'right'}}
                onClick={openModalCreateOrder}>
                Create Order
            </Button>

            { 
                (orders.length === 0)

                ? <AlertMsg variant='warning' msg='No data in data base' />
                : <ListOrders orders={data} setSearchItem={setSearchItem} />
            }

            <CreateOrder show={show} handleClose={handleClose} activeProducts={activeProducts} />


            <Loading isVisible={ loading ? 'loading' : ''} />

        </>
    )
}

export default OrdersPage;
