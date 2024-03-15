import {monthNames1} from "./calendar";

export const getCurrentDate = () => {
    const currentDate = new Date();
    // const date = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
    const date = `${currentDate.getDate()} ${monthNames1[currentDate.getMonth()]}`;
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    return date
}

