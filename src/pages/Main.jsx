import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import {getMock} from "../utils/mock/data";
import {UpdateTransport} from "../store/Transport/actions";

const Main = () => {
    const dispatch = useDispatch();

    const [numberRecords, setNumberRecords] = useState(20); // максимальное количество записей

    const transport = useSelector(
        state => state.transport.transport
    );

    // Функция создания таймера и пересоздание его при смене количество строк
    useEffect(() => {
        const timer = setInterval(() => setTransport(numberRecords), 1500);

        return () => {
            clearInterval(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberRecords]);

    // Функция выдачи одной записи
    const setTransport = maxRows => dispatch(UpdateTransport({transport: getMock(), maxRecords: maxRows}));

    return (
        <>
            <Header count={numberRecords} setCount={setNumberRecords}/>
            <Table basicMass={transport}/>
        </>
    );
};

export default Main;