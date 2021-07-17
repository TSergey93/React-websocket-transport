import {createStyles, makeStyles} from "@material-ui/core";

import doubleArrow from "../../img/double_arrow_down.jpg"

export const useStyles = makeStyles(theme =>
    createStyles({
        wrapper: {
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            padding: "15px 20px",
            fontSize: 18,
            backgroundColor: theme.palette.primary.white,
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            zIndex: 1,

            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                display: "grid",
                gridTemplateAreas: "'text input reset' 'apply apply reset'",
                gridTemplateColumns: "285px 40px 1fr",
                gridTemplateRows: "repeat(2, 1fr)",
                paddingLeft: 30,
                transform: "translateY(calc(-100% - 2px))",
                transition: "transform linear 0.2s",

                "&.open": {
                    transform: "translateY(0)",

                    "& > div:last-of-type": {
                        backgroundPosition: "50% 100%",
                        borderRadius: "10px 10px 0 0",
                        boxShadow: "0 -2px 3px rgba(0, 0, 0, 0.5)",
                        transform: "translateX(-50%) rotate(180deg)"
                    }
                }
            },

            [theme.breakpoints.down(theme.breakpoints.values.phablet)]: {
                gridTemplateAreas: "'text input empty' 'btns btns btns'"
            },

            [theme.breakpoints.down(theme.breakpoints.values.phone)]: {
                display: "flex",
                flexFlow: "row wrap"
            }
        },
        label: {
            marginRight: 10,

            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                gridArea: "text"
            }
        },
        input: {
            width: 25,
            padding: 5,
            textAlign: "center",
            border: `2px solid ${theme.palette.primary.mainOpacity}`,
            outline: "none",
            borderRadius: 5,
            MozAppearance: "textfield",

            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0
            },

            "&:focus": {
                borderColor: theme.palette.primary.main
            },

            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                gridArea: "input"
            }
        },
        btn: {
            padding: "5px 20px 7px",
            borderRadius: 20,
            cursor: "pointer"
        },
        btnApply: {
            marginLeft: 15,
            border: "1px solid #999",
            transition: "border-color linear 0.1s",

            "&:hover": {
                borderColor: theme.palette.primary.black
            },

            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                gridArea: "apply",
                minWidth: 150,
                margin: "5px 0 0",
                textAlign: "center"
            },

            [theme.breakpoints.down(theme.breakpoints.values.phablet)]: {
                gridArea: "btns",
                maxWidth: "45%"
            },

            [theme.breakpoints.down(500)]: {
                maxWidth: 0
            },

            [theme.breakpoints.down(theme.breakpoints.values.phone)]: {
                maxWidth: "90%",
                width: "90%",
                marginTop: 10
            }
        },
        btnReset: {
            width: 150,
            marginLeft: "auto",
            color: theme.palette.primary.white,
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: theme.palette.primary.mainOpacity,
            transition: "background-color linear 0.1s",

            "&:hover": {
                backgroundColor: theme.palette.primary.main
            },

            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                gridArea: "reset"
            },

            [theme.breakpoints.down(theme.breakpoints.values.phablet)]: {
                gridArea: "btns",
                marginTop: 5,
                padding: "6px 20px 8px"
            },

            [theme.breakpoints.down(theme.breakpoints.values.phone)]: {
                width: "90%",
                marginTop: 10
            }
        },
        toggleMenu: {
            display: "none",
            width: 100,
            height: 20,
            position: "absolute",
            bottom: -19,
            left: "50%",
            background: `${theme.palette.primary.white} url(${doubleArrow}) no-repeat`,
            backgroundPosition: "center",
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5)",
            transform: "translateX(-50%)",
            cursor: "pointer",



            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                display: "block"
            }
        }
    })
);