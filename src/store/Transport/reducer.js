import {UPDATE, CLEAR} from "./types";

let initialState = {
    transport: []
};

export const transportReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE: {
            const tmp = [action.payload.transport, ...state.transport];

            if (tmp.length > action.payload.maxRecords) tmp.length = action.payload.maxRecords;

            return {
                ...state,
                transport: tmp
            }
        }
        case CLEAR: {
            return {
                ...state,
                transport: []
            }
        }
        default:
            return state;
    }
};
