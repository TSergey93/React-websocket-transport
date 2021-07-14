import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            width: "100%",
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            padding: "15px 20px",
            fontSize: 18,
            backgroundColor: "#fff",
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
        },
        label: {
            marginRight: 10
        },
        input: {
            width: 25,
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
        btn: {
            padding: "5px 20px 7px",
            borderRadius: 20,
            cursor: "pointer"
        },
        btnApply: {
            marginLeft: 15,
            border: "1px solid #999",

            "&:hover": {
                borderColor: "#000"
            }
        },
        btnReset: {
            marginLeft: "auto",
            color: "#fff",
            backgroundColor: "rgba(99, 175, 105, 0.5)",

            "&:hover": {
                backgroundColor: "#63af69"
            }
        }
    })
);