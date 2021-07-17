import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#63af69",
            mainOpacity: "rgba(99, 175, 105, 0.5)",
            black: "#000",
            white: "#fff"
        },
        secondary: {
            main: "#f5f6f7"
        }
    },
    breakpoints: {
        values: {
            phone: 450,
            phablet: 600,
            tablet: 800
        }
    }
});

export default theme;