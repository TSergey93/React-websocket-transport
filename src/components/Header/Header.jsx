import {useDispatch} from "react-redux";

import {useStyles} from "./Header.styles";
import {clearTransport} from "../../store/Transport/actions";

const Header = ({count, setCount}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

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
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor="max-rows-input">Максимальное количество строк</label>
            <input className={classes.input} id="max-rows-input" type="number" defaultValue={count}
                   onKeyDown={e => handlerEnter(e)} onChange={e => validateText(e.target)}/>
            <div className={`${classes.btn} ${classes.btnApply}`} onClick={changeCountRow}>Применить</div>
            <div className={`${classes.btn} ${classes.btnReset}`} onClick={clearTable}>Очистить таблицу</div>
        </div>
    );
};

export default Header;