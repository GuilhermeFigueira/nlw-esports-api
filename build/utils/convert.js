"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinuteToHour = exports.convertHourToMinute = void 0;
function convertHourToMinute(hourString) {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
}
exports.convertHourToMinute = convertHourToMinute;
function convertMinuteToHour(minutesAmount) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
exports.convertMinuteToHour = convertMinuteToHour;
