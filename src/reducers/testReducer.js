import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function testReducer(state = initialState.test, action) {

    switch (action.type) {

        case types.ACTION_TEST:
            return action.test;

        default: return state;
    }


}