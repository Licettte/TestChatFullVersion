import React, {useEffect, useState, memo} from 'react';
import {
    SevenColomnGrid,
    CurrentMonth,
    Year,
    DayOfWeek,
    OtherMonth,
    Button,
    PeriodText,
    DateText,
    CalendarContainer, Div, Header, Period,
} from "./datePickerStyle";
import {dayNames, monthNames, monthNames1} from "./calendar";

 const DatePicker = ({value, setChooseDate}) => {
    const [day] = useState(value.getDate());
    const [currentMonth] = useState(value.getMonth());
    const [month, setMonth] = useState(value.getMonth());
    const [year, setYear] = useState(value.getFullYear());
    const [calendarDays, setCalendarDays] = useState([]);

    const [selectedIdDay, setSelectedIdDay] = useState([]);
    const [selectedDay, setSelectedDay] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState([]);
    const [selectedYear, setSelectedYear] = useState([]);


    useEffect(() => {
        createDaysArray();
    }, [month]);


    const createDaysArray = () => {
        const data = getLowerMonday(month);
        const daysnextMonth = [];
        for (let i = 0; i < 42; i++) {
            data.setDate(data.getDate() + 1);
            daysnextMonth.push({
                id: data.getTime(),
                day: data.getDate(),
                month: data.getMonth(),
                year: data.getFullYear(),
                daysCurrentMonth: data.getMonth() == month ? true : false,
                selected: false,
                date: data,
                isNowDay: data.getDate() === day && data.getMonth() === currentMonth ? true : false,
            });
        }
        setCalendarDays([...daysnextMonth]);
    };

    const getLowerMonday = () => {
        const date = value;
        date.setMonth(month);
        date.setYear(year);
        date.setDate(0);
        date.setDate(date.getDate() - date.getDay());
        return date;
    };
    // console.log(chooseDate, "chooseDate")
    const onChooseDays = (event) => {
        if (selectedDay.length == 2) {
            setSelectedDay([]);
            setSelectedMonth([]);
            setSelectedYear([]);
            setChooseDate('')
        }

        setSelectedDay((prevArray) => [...prevArray, eventDay].slice(0, 2));
        setSelectedMonth((prevArray) => [...prevArray, eventMonth].slice(0, 2));
        setSelectedYear((prevArray) => [...prevArray, eventYear].slice(0, 2));


        const eventSplit = event.target.value.split(',');
        const eventDay = eventSplit[1];
        const eventMonth = eventSplit[2];
        const eventYear = eventSplit[3];

        let day;
        let month;
        eventDay.length == 1 ? day = `0${eventDay}` : day = `${eventDay}`
        eventMonth.length == 1 ? month = `0${eventMonth}` : month = `${eventMonth}`
        setChooseDate((prevArray) => [...prevArray, `${eventYear}-${(month)}-${day}`].slice(0, 2))

        if (selectedIdDay.length != 1) {
            setSelectedIdDay((prevArray) => [...prevArray, eventSplit[0]]);

            setCalendarDays(calendarDays.map((day) => day.id == eventSplit[0] ? {...day, selected: true} : {
                ...day,
                selected: false
            }));
        } else {
            setCalendarDays(calendarDays.map((day) => (day.id >= selectedIdDay[0] && day.id <= eventSplit[0]) || (day.id <= selectedIdDay[0] && day.id >= eventSplit[0]) ? {
                ...day,
                selected: true
            } : {...day, selected: false}));

            setSelectedIdDay([]);
        }
    };

    const prevMonth = () => {
        if (month > 0) {
            setMonth((prev) => prev - 1);
        } else {
            setMonth(11);
            setYear((prev) => prev - 1);
        }
    };

    const nextMonth = () => {
        if (month < 11) {
            setMonth((prev) => prev + 1);
        } else {
            setMonth(0);
            setYear((prev) => prev + 1);
        }
    };

    return (<Div>
        <Header>
            <OtherMonth onClick={prevMonth}>
                {month > 0 ? monthNames[month] : monthNames[12]}
            </OtherMonth>

            <div>
                <CurrentMonth onClick={month}>
                    {month < 12 ? monthNames[month + 1] : monthNames[1]}
                </CurrentMonth>
                <Year>{year}</Year>
            </div>

            <OtherMonth onClick={nextMonth}>
                {month < 11 ? monthNames[month + 2] : monthNames[1]}
            </OtherMonth>
        </Header>
        <CalendarContainer>
            <SevenColomnGrid>
                {dayNames.map((day) => (<DayOfWeek
                    sel={day === 'вс' || day === 'сб' ? 'sel' : ''}
                >
                    {day}
                </DayOfWeek>))}
            </SevenColomnGrid>
            <SevenColomnGrid>
                {calendarDays.map((day) => (<Button
                    key={day.id}
                    onClick={onChooseDays}
                    value={[day.id, day.day, day.month, day.year, day.date,]}
                    sel={day.selected ? 'sel' : ''}
                    day={day.isNowDay && day.isNowDay != day.selected ? 'day' : ''}
                    dayscurrent={day.daysCurrentMonth ? 'dayscurrent' : ''}
                >
                    {day.day}
                </Button>))}
            </SevenColomnGrid>


            <PeriodText>
                {selectedDay.length == 2 ? (
                    <Period>
                        вы выбрали период
                        <br/>c <DateText> {selectedDay[0]}</DateText>
                        {' ' + monthNames1[selectedMonth[0]]} по{' '}
                        <DateText>{selectedDay[1]}</DateText>
                        {' ' + monthNames1[selectedMonth[1]]}
                        <br/>
                    </Period>) : ('')}
            </PeriodText>
        </CalendarContainer>
    </Div>);
};
export default memo(DatePicker);
