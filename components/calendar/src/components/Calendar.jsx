import React from 'react';
import '../components/styles.css';

export default function Calendar({date}) {
  
  // делаем первую букву прописной
  function Capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }

  const day = date.getDate(),
        monthNumber = date.getMonth(),
        year = date.getFullYear(),
        weekday = Capitalize(date.toLocaleString('ru-RU', {weekday: 'long'})),
        monthStr = Capitalize(date.toLocaleString('ru-RU', {month: 'long'}));

  // месяц со склонением
  const  monthWithDeclination = (monthNumber !== 2 && monthNumber !== 7) ?
    (monthStr.slice(0, -1) + 'я') : (monthStr + 'а');

  const calendarRows = 5,
        daysIntoWeek = 7,
        millisecondsIntoDay = 24 * 60 * 60 * 1000,
        firstDayCurrentMonth = new Date(year, monthNumber, 1),
        startDay = new Date(firstDayCurrentMonth.valueOf() - firstDayCurrentMonth.getDay() * millisecondsIntoDay);
  
  // создаём "таблицу" месяца
  const rows = [...Array(calendarRows)].map((_, rowIndex) => {
    const cols = [...Array(daysIntoWeek)].map((_, colIndex) => {
      const dateToCol = new Date(startDay.valueOf() + (rowIndex * daysIntoWeek + colIndex + 1) * millisecondsIntoDay),
            dayToCol = dateToCol.getDate(),
            monthOfDateToCol = dateToCol.getMonth(),
            uiToday = (dayToCol === day && monthOfDateToCol === monthNumber) && 'ui-datepicker-today',
            uiOtherMonth = monthOfDateToCol !== monthNumber && 'ui-datepicker-other-month';

      return <td className={uiToday || uiOtherMonth}>{dayToCol}</td>
    });
    
    return <tr>{cols}</tr>
  });

  const weekdays = [...Array(daysIntoWeek)].map((_, i) => {
    const weekdayToCol = new Date(startDay.valueOf() + (i + 1) * millisecondsIntoDay),
          weekdayToColLong = Capitalize(weekdayToCol.toLocaleString('ru-RU', {weekday: 'long'})),
          weekdayToColShort = Capitalize(weekdayToCol.toLocaleString('ru-RU', {weekday: 'short'}));

    return <th scope="col" title={weekdayToColLong}>{weekdayToColShort}</th>
  });

  const colGroup = [...Array(daysIntoWeek)].map((_, i) => {
    const uiWeekEnd = (i === 5 || i === 6) && 'ui-datepicker-week-end';

    return <col className={uiWeekEnd}/>
  });

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{monthWithDeclination}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthStr}</span>
          &nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          {colGroup}
        </colgroup>
        <thead>
        <tr>
          {weekdays}
        </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}