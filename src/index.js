import React from "react";

import ReactDOM from "react-dom";

import App from "./App";
import {Provider} from "react-redux";
import {ThemeProvider} from '@material-ui/core/styles';
import store from "./store/rootReducer";
import "./index.css";
import theme from "./themes/theme";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);