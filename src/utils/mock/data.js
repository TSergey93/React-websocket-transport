const transportTypes = ["car", "truck", "bus", "motorcycle"];

const color = {
    car: ["Чёрный", "Красный", "Белый", "Фиолетовый", "Розовый", "Серый", "Голубой"],
    truck: ["Чёрный", "Коралловый", "Красно-синий", "Светло-серый", "Пурпурный", "Белый", "Коричневый"],
    bus: ["Оранжевый", "Жёлтый", "Бордовый", "Коричневый", "Зелёный", "Бежевый", "Белый"],
    motorcycle: ["Непонятный", "Грязный", "Прозрачный", "Инопланетный", "Где-то видел", "Как с плаката", "Забыл"]
};

const speed = {
    car: [40, 45, 50, 55, 60, 65, 70, 75, 80, 86, 90, 95],
    truck: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 160],
    bus: [165, 170, 175, 180, 185, 190, 195, 200],
    motorcycle: [205, 210, 215, 220, 225, 230, 235, 240, 245, 250]
}

// Получение случайного значения из массива
const getRandomValue = mass => mass[Math.floor(Math.random() * mass.length)];

// Функция формирует объект со случайными значениями
export const getMock = () => {
    const vehicleTrafficEntry = {};

    const type = getRandomValue(transportTypes);

    vehicleTrafficEntry.deviceId = Math.round(Math.random() * 1000);
    vehicleTrafficEntry.class = type;
    vehicleTrafficEntry.color = getRandomValue(color[type]);
    vehicleTrafficEntry.speed = getRandomValue(speed[type]);

    return vehicleTrafficEntry;
};
