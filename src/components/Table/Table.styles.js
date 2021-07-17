import {createStyles, makeStyles} from "@material-ui/core";

import selectIcon from "../../img/select_row_icon.svg"

export const useStyles = makeStyles(theme =>
    createStyles({
        wrapper: {
            minWidth: 720,
            boxSizing: "border-box",
            padding: "80px 25px 0",

            [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
                minWidth: "auto",
                padding: "13px 0 0"
            }
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",

            "& tr": {
                backgroundColor: theme.palette.primary.white,
                borderBottom: "1px solid #111"
            },

            "& tbody tr:nth-of-type(even)": {
                backgroundColor: theme.palette.secondary.main
            },

            "& tfoot tr": {
                border: "none"
            },

            "& th, & td": {
                width: "33%",
                padding: 10,
                textAlign: "center",

                [theme.breakpoints.down(theme.breakpoints.values.phablet)]: {
                    padding: "10px 5px"
                }
            }
        },
        even: {
            "& tr": {
                backgroundColor: `${theme.palette.secondary.main} !important`
            },

            "& tr:nth-of-type(even)": {
                backgroundColor: `${theme.palette.primary.white} !important`
            },
        },
        filterColor: {
            width: "100%",
            boxSizing: "border-box",
            marginTop: 5,
            padding: 5,
            border: `2px solid ${theme.palette.primary.mainOpacity}`,
            borderRadius: 10,
            outline: "none",

            "&:focus": {
                borderColor: theme.palette.primary.main
            }
        },
        speedText: {
            display: "inline-block",
            width: "100%"
        },
        filterSpeed: {
            width: 35,
            margin: "5px 10px 0",
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

            [theme.breakpoints.down(theme.breakpoints.values.phone)]: {
                margin: "5px 5px 0",
                padding: "5px 2px",

                "&:first-of-Type": {
                    marginRight: 2
                },

                "&:last-of-Type": {
                    marginLeft: 2
                }
            }
        },
        filterTypeWrapper: {
            position: "relative"
        },
        filterType: {
            width: "100%",
            boxSizing: "border-box",
            marginTop: 5,
            padding: "2px 0",
            fontWeight: 400,
            border: `2px solid ${theme.palette.primary.mainOpacity}`,
            borderRadius: "10px 10px 0 0",
            outline: "none",
            cursor: "pointer",

            "&.open": {
                borderColor: theme.palette.primary.main
            },

            "&.open ~ .status-icon": {
                transform: "translateY(-50%) rotate(180deg)"
            },

            "&.open ~ .status-list": {
                display: "flex"
            },

            "&.open ~ .status-overlay": {
                display: "block"
            }
        },
        filterTypeIcon: {
            width: 18,
            height: 11,
            position: "absolute",
            top: "50%",
            right: 18,
            background: `url(${selectIcon}) no-repeat center`,
            transform: "translateY(-50%)",
            pointerEvents: "none"
        },
        filterTypeList: {
            display: "none",
            flexDirection: "column",
            boxSizing: "border-box",
            width: "100%",
            position: "absolute",
            top: 29,
            padding: "5px 0",
            backgroundColor: theme.palette.primary.white,
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "0 0 10px 10px",
            zIndex: 15
        },
        filterTypeElement: {
            padding: "4px 0",
            fontWeight: 400,
            cursor: "pointer",

            "&.active": {
                color: theme.palette.primary.main
            }
        },
        filterTypeOverlay: {
            display: "none",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 10
        },
        dataNotFound: {
            textAlign: "center"
        }
    })
);