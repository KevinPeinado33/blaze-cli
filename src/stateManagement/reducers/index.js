import { combineReducers } from 'redux';

import orders from './ordersReducer';
import products from './productsReducer';

export default combineReducers({ orders, products });