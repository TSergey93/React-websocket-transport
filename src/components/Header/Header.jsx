import React, {useState} from "react";

import {useDispatch} from "react-redux";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {clearTransport} from "../../store/Transport/actions";
import {useStyles} from "./Header.styles";
import theme from "../../themes/theme";

const Header = ({count, setCount}) => {
    const classes = useStyles(theme);

    const dispatch = useDispatch();

    const phoneMatches = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.phone));

    const [menuShow, setMenuShow] = useState(false);

    // Обработка нажатия Enter на поле поиска
    const handlerEnter = e => {
        if (e.keyCode === 13) {
            changeCountRow();
            e.target.blur();
        }
    };

    // Функция смены максимального количества строк
    const changeCountRow = () => {
        const number = +document.querySelector(`.${classes.input}`).value;

        setCount(number);
    };

    // Функция проверки введённого значения
    const validateText = element => {
        const text = +element.value;

        if (text === 0) {
            element.value = 1;
        }

        if (text > 100) {
            element.value = 100;
        }
    };

    // Функция очистки таблицы
    const clearTable = () => {
        dispatch(clearTransport());
    };

    return (
        <div className={`${classes.wrapper} ${(menuShow) ? "open" : ""}`}>
            <label className={classes.label} htmlFor="max-rows-input">
                {(phoneMatches) ? "Максимум строк" : "Максимальное количество строк"}
            </label>
            <input className={classes.input} id="max-rows-input" type="number" defaultValue={count}
                   onKeyDown={e => handlerEnter(e)} onChange={e => validateText(e.target)}/>
            <div className={`${classes.btn} ${classes.btnApply}`} onClick={changeCountRow}>Применить</div>
            <div className={`${classes.btn} ${classes.btnReset}`} onClick={clearTable}>Очистить таблицу</div>
            <div className={classes.toggleMenu} onClick={() => setMenuShow(!menuShow)}/>
        </div>
    );
};

export default Header;