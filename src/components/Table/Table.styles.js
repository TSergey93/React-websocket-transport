import {createStyles, makeStyles} from "@material-ui/core";

import selectIcon from "../../img/select_row_icon.svg"

export const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            minWidth: 720,
            margin: "80px 25px 0"
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",

            "& tr": {
                borderBottom: "1px solid #111"
            },

            "& tbody tr:nth-of-type(even)": {
                backgroundColor: "#f5f6f7"
            },

            "& tfoot tr": {
                border: "none"
            },

            "& th, & td": {
                width: "33%",
                padding: 10,
                textAlign: "center"
            }
        },
        filterText: {
            width: "100%",
            boxSizing: "border-box",
            marginTop: 5,
            padding: 5,
            border: "2px solid rgba(99, 175, 105, 0.5)",
            borderRadius: 10,
            outline: "none",

            "&:focus": {
                borderColor: "#63af69"
            }
        },
        speedText: {
            display: "inline-block",
            width: "100%"
        },
        filterNumber: {
            width: 35,
            margin: "5px 10px 0",
            padding: 5,
            textAlign: "center",
            border: "2px solid rgba(99, 175, 105, 0.5)",
            outline: "none",
            borderRadius: 5,
            MozAppearance: "textfield",

            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0
            },

            "&:focus": {
                borderColor: "#63af69"
            }
        },
        selectWrapper: {
            position: "relative"
        },
        select: {
            width: "100%",
            boxSizing: "border-box",
            marginTop: 5,
            padding: "2px 0",
            fontWeight: 400,
            border: "2px solid rgba(99, 175, 105, 0.5)",
            borderRadius: "10px 10px 0 0",
            outline: "none",
            cursor: "pointer",

            "&.open": {
                borderColor: "#63af69"
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
        selectIcon: {
            width: 18,
            height: 11,
            position: "absolute",
            top: "50%",
            right: 18,
            background: `url(${selectIcon}) no-repeat center`,
            transform: "translateY(-50%)",
            pointerEvents: "none"
        },
        selectList: {
            display: "none",
            flexDirection: "column",
            boxSizing: "border-box",
            width: "100%",
            position: "absolute",
            top: 29,
            padding: "5px 0",
            backgroundColor: "#fff",
            border: "1px solid #63af69",
            borderRadius: "0 0 10px 10px",
            zIndex: 15
        },
        selectElement: {
            padding: "4px 0",
            fontWeight: 400,
            cursor: "pointer",

            "&.active": {
                color: "#63af69"
            }
        },
        selectOverlay: {
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