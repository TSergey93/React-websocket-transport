import {useEffect, useState} from "react";

import {useStyles} from "./Table.styles";
import theme from "../../themes/theme";

const Table = ({basicMass}) => {
    const classes = useStyles(theme);

    const [transport, setTransport] = useState(basicMass); // массив транспорта
    const [typeList, setTypeList] = useState([]); // список типов транспорта для фильтрации
    const [visibilityRow, setVisibilityRow] = useState(false); // красивый переход строк
    // Поля для фильтрации
    const [filterColor, setFilterColor] = useState("");
    const [filterSpeed, setFilterSpeed] = useState({from: "", to: ""});
    const [filterType, setFilterType] = useState("all");
    const [showFilterOverlay, setFilterOverlay] = useState(false);

    useEffect(() => {
        filtering();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterColor, filterSpeed, filterType, basicMass]);

    // Создание списка типов транспорта для фильтрации
    useEffect(() => {
        setTimeout(createTypeFilter, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transport]);

    // Функция смены подсветки строк таблицы
    useEffect(() => {
        if (!isFilter()) setVisibilityRow(!visibilityRow);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transport]);

    // Функция проверяет, применён ли фильтр?
    const isFilter = () => (!(!filterColor && filterType === "all" && !filterSpeed.from && !filterSpeed.to));

    // Функция фильтрации по всем полям
    const filtering = () => {
        let tmp = [...basicMass];

        if (!filterColor && !filterSpeed.from && !filterSpeed.to && filterType === "all") return setTransport(tmp);

        if (filterColor) {
            tmp = tmp.filter(e => e.color.toLowerCase().includes(filterColor.toLowerCase()));
        }

        if (filterSpeed) {
            const from = filterSpeed.from || 0;
            const to = filterSpeed.to || 1000

            tmp = tmp.filter(e => e.speed >= from && e.speed <= to);
        }

        tmp = (filterType === "all") ? tmp : tmp.filter(e => e.class.toLowerCase() === filterType.toLowerCase());

        setTransport(tmp);
    };

    // Функция создания списка типов транспорта для фильтрации
    const createTypeFilter = () => {
        const mass = (typeList.length) ? typeList.slice(0) : ["all"];

        basicMass.forEach(e => {
            if (!mass.includes(e.class)) mass.push(e.class);
        });

        setTypeList(mass);
    };

    // Функция выбора типа транспорта из выпадающего списка
    const selectedType = (element, text) => {
        if (filterType === text) {
            setFilterOverlay(false);

            return;
        }

        setFilterType(text);
        setFilterOverlay(false);
    };

    // Функция переименования значения с английского на русский
    const renameFilterValue = text => (text === "car") ? "Автомобиль" : (text === "truck") ? "Грузовик" : (text === "bus") ?
        "Автобус" : (text === "motorcycle") ? "Мотоцикл" : "Все";

    return (
        <div className={classes.wrapper}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>Тип
                        <div className={classes.filterTypeWrapper}>
                            <div className={`${classes.filterType} ${(showFilterOverlay) ? "open" : ""}`}
                                 onClick={() => {setFilterOverlay(true)}}>{renameFilterValue(filterType)}</div>
                            <div className={`${classes.filterTypeIcon} status-icon`}/>
                            <div className={`${classes.filterTypeList} status-list`}>
                                {typeList.map(text => (
                                    <div value={text} className={`${classes.filterTypeElement} ${(filterType === text) ? "active" : ""}`}
                                         key={Math.random()} onClick={e => selectedType(e.target, text)}>{renameFilterValue(text)}
                                    </div>
                                    )
                                )}
                            </div>
                            <div className={`${classes.filterTypeOverlay} status-overlay`}
                                 onClick={() => {setFilterOverlay(false)}}/>
                        </div>
                    </th>
                    <th>Цвет
                        <input type="text" className={classes.filterColor} placeholder="Введите цвет"
                               onChange={e => setFilterColor(e.target.value.trim())}/>
                    </th>
                    <th>
                        <span className={classes.speedText}>Скорость</span>
                        <input type="number" className={classes.filterSpeed} placeholder="от"
                               onChange={e => setFilterSpeed({from: e.target.value.trim(), to: filterSpeed.to})}/>
                        <input type="number" className={classes.filterSpeed} placeholder="до"
                               onChange={e => setFilterSpeed({from: filterSpeed.from, to: e.target.value.trim()})}/>
                    </th>
                </tr>
                </thead>
                <tbody className={(transport.length && visibilityRow) ? classes.even : ""}>
                    {(!transport.length) ? (
                        <tr>
                            <td colSpan="3" className={classes.dataNotFound}>Данные отсутствуют</td>
                        </tr>
                    ) : transport.map(e => <TableRow data={e} renameFilterValue={renameFilterValue} key={e.deviceId}/>)}
                </tbody>
            </table>
        </div>
    );
};

// Компонент строки таблицы
const TableRow = ({data, renameFilterValue}) => {
    return (
        <tr>
            <td>{renameFilterValue(data.class)}</td>
            <td>{data.color}</td>
            <td>{data.speed}</td>
        </tr>
    );
};

export default Table;