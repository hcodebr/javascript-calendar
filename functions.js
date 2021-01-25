export function getCurrentMonth() {

    const urlParams = new URLSearchParams(window.location.search);
    const month = urlParams.get('month');

    if (month) {

        return new Date(month);

    } else {

        return new Date();

    }

}

export function prevMonth(date) {

    const dayOfMonth = date.getDate();
    const resultDate = new Date(date.getTime());
    resultDate.setMonth(resultDate.getMonth() + 1 - 1, 0);

    if (dayOfMonth >= resultDate.getDate()) {
        return resultDate;
    } else {
        resultDate.setFullYear(resultDate.getFullYear(), resultDate.getMonth(), dayOfMonth);
        return resultDate;
    }

}

export function nextMonth(date) {

    const dayOfMonth = date.getDate();
    const resultDate = new Date(date.getTime());
    resultDate.setMonth(resultDate.getMonth() + 1 + 1, 0);

    if (dayOfMonth >= resultDate.getDate()) {
        return resultDate;
    } else {
        resultDate.setFullYear(resultDate.getFullYear(), resultDate.getMonth(), dayOfMonth);
        return resultDate;
    }

}

export function formatDate(date) {

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

}

export function startOfMonth(date) {

    const resultDate = new Date(date.getTime());

    resultDate.setDate(1);
    resultDate.setHours(0, 0, 0, 0);

    return resultDate;

}

export function startOfWeek(date) {

    const resultDate = new Date(date.getTime());
    const day = date.getDay();
    const weekStartsOn = 0;
    const diff = day - weekStartsOn;
    
    resultDate.setDate(resultDate.getDate() - diff);
    resultDate.setHours(0, 0, 0, 0);

    return resultDate;

}

export function addDay(date) {

    const resultDate = new Date(date.getTime());

    resultDate.setDate(resultDate.getDate() + 1);

    return resultDate;

}