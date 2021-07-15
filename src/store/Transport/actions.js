import {UPDATE, CLEAR} from "./types";

// Функция обновления данных
export const UpdateTransport = data => ({
    type: UPDATE,
    payload: data
});

// Функция очистки данных
export const clearTransport = () => ({
    type: CLEAR
});