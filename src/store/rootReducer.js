import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";

import {transportReducer} from "./Transport/reducer";

const reducer = combineReducers({
    transport: transportReducer
});

const middleware = [...getDefaultMiddleware()];

export default configureStore({
    reducer,
    middleware
});
