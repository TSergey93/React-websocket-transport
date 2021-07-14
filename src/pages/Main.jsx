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

    // Функция постоянного получения данных о транспорте
    useEffect(() => {
        setTimeout(setTransport, 1500);
    }, [transport, numberRecords]);

    // Функция выдачи одной записи
    const setTransport = () => {
        if (transport.length < numberRecords) {
            dispatch(UpdateTransport({transport: getMock()}));
        }
    };

    return (
        <>
            <Header count={numberRecords} setCount={setNumberRecords}/>
            <Table basicMass={transport}/>
        </>
    );
};

export default Main;