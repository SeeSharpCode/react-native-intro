import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INTIIAL_STATE = {};

export default (state = INTIIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default: 
            return state;
    }
};
