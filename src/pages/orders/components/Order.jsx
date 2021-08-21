import React from 'react';

import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';

import { deleteOrderAction } from '../../../stateManagement/actions/ordersAction';
import { format } from '../../../utils/formatDate';

export const Order = ({ order, index }) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const deleteOrder = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                dispatch( deleteOrderAction(id) );

            }

        });
    }

    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ order.consumer }</td>
            <td>{ order.status }</td>
            <td>{ format (order.date) }</td>
            <td>{ order.totalAmount }</td>
            <td>
                <Button variant="link" onClick={() => history.push({pathname: `/orders/${order._id}`, state: {order}})}>
                    Edit
                </Button>
                &nbsp;
                <Button variant="link" onClick={() => deleteOrder(order._id)}>
                    Delete
                </Button>
            </td>
        </tr>
    )
}
