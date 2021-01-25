import { format, startOfWeek, startOfMonth, addDays, subMonths, addMonths } from "./node_modules/date-fns/esm/index.js";
import { getCurrentMonth } from "./functions.js";

const currentMonth = getCurrentMonth();

const headerElement = document.querySelector("header");
const tbodyElement = document.querySelector("tbody");

headerElement.innerHTML = `

    <a href="?month=${format(subMonths(currentMonth, 1), 'Y-M-d')}">Anterior</a>
    <h1>${currentMonth.toLocaleString('default', {month: 'long'})} ${currentMonth.getFullYear()}</h1>
    <a href="?month=${format(addMonths(currentMonth, 1), 'Y-M-d')}">Próximo</a>

`;

let startDate = startOfWeek(startOfMonth(currentMonth));

for (let row = 0; row < 6; row++) {

    const tr = document.createElement("tr");

    for (let column = 0; column < 7; column++) {

        const td = document.createElement("td");

        td.innerHTML = format(startDate, 'd');

        if (format(currentMonth, 'Y-M') !== format(startDate, 'Y-M')) {
            td.classList.add('other-month');
        }

        tr.append(td);

        startDate = addDays(startDate, 1);

    }

    tbodyElement.append(tr);

}
