import {UPDATE, CLEAR} from "./types";

let initialState = {
    transport: []
};

export const transportReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE: {
            return {
                ...state,
                transport: [...state.transport, action.data.transport]
            }
        }
        case CLEAR: {
            return {
                transport: []
            }
        }
        default:
            return state;
    }
};
