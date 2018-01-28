import { createStore, combineReducers } from 'redux';
import Reducer from '../reducer';

const store = createStore(combineReducers(Reducer));
export default store;
