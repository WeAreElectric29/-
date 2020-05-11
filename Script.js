"use strict";

var money = prompt("Ваш бюджет на месяц",""),
 time = prompt("Введите дату в формате YYYY-MM-DD","");


var appData = {
    budget: money,
    TimeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    Savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется", "");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

let money1 = money/30;
alert("Ваш бюджет на 1 день " + Math.trunc (money1) + " Рублей");

console.log(appData);






