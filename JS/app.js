'use strict';

var hour = [
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM'
];

function branch(branchName, minCus, maxCus, avgCus) {
    this.name = branchName;
    this.min = minCus;
    this.max = maxCus;
    this.avg = avgCus;
    this.cusPerHour = randomNumCusPerHour(this.min, this.max);
    this.cookiesPerHour = numberOfCookiesPerHour(this.cusPerHour, this.avg);
    this.total = totalNumberOfCookies(this.cookiesPerHour);
}
var seattle = new branch('Seattle', 22, 65, 6.3);
var tokyo = new branch('Tokyo', 3, 24, 1.2);
var dubai = new branch('Dubai', 11, 38, 3.7);
var paris = new branch('Paris', 20, 38, 2.3);
var lima = new branch('Lima', 2, 16, 4.6);
var total = new branch('total', 0, 0, 0);

var newArray = [seattle.cookiesPerHour, tokyo.cookiesPerHour, dubai.cookiesPerHour, paris.
    cookiesPerHour, lima.cookiesPerHour];
total.cookiesPerHour = totalCookiesPerHour(newArray);

var head = ['city', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4PM', '5 PM', '6 PM', '7 PM', 'Daily Location Total'];
var parent = document.getElementById('sales');
var table = document.createElement('table');
parent.appendChild(table);
var tableRow = document.createElement('tr');
table.appendChild(tableRow);
for (let index = 0; index < head.length; index++) {
    var tablehead = document.createElement('th');
    tablehead.textContent = head[index];
    tableRow.appendChild(tablehead);
}

var cities = [seattle, tokyo, dubai, paris, lima, total];
branch.prototype.render = function () {
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    var tableData = document.createElement('td');
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);
    for (let index = 0; index < this.cookiesPerHour.length; index++) {
        var tableData = document.createElement('td');
        tableData.textContent = this.cookiesPerHour[index];
        tableRow.appendChild(tableData);
    }

    var tableData = document.createElement('td');
    tableData.textContent = this.total;
    tableRow.appendChild(tableData);

}

for (let index = 0; index < cities.length; index++) {
    cities[index].render();

}


function randomNumCusPerHour(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var cusArray = []
    for (let index = 0; index < hour.length; index++) {
        cusArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return cusArray;
}

function numberOfCookiesPerHour(cusPerHour, avg) {
    var cookieArray = [];
    for (let index = 0; index < cusPerHour.length; index++) {
        cookieArray.push(Math.floor(cusPerHour[index] * avg));
    }
    return cookieArray;
}

function totalNumberOfCookies(cookieArray) {
    var total = 0;
    for (let index = 0; index < cookieArray.length; index++) {
        total += cookieArray[index];
    }
    return total;
}

function totalCookiesPerHour(tableArray) {
    var totalCookies = [];
    var sum = 0;
    for (let column = 0; column < tableArray[0].length; column++) {
        sum = 0;
        for (let row = 0; row < tableArray.length; row++) {
            sum += tableArray[row][column];
        }
        totalCookies.push(sum);
    }
    sum = 0;
    for (let index = 0; index < totalCookies.length; index++) {
        sum += totalCookies[index]
    }
    totalCookies.push(sum);
    return totalCookies;
}
