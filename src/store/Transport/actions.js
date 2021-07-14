import {UPDATE, CLEAR} from "./types";

// Функция обновления данных
export const UpdateTransport = data => ({
    type: UPDATE,
    data
});

// Функция очистки данных
export const clearTransport = data => ({
    type: CLEAR
});