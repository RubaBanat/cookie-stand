"use strict"
//======================================

var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function Shops(location, min, max, avgCookieSale) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookieSale = avgCookieSale;
    this.dailySales = 0;
    this.hourlySales = [];
    this.randomCust();
    this.hourlyDailySales();
    // this.renderheaderrow(table);
    // this.rowDataRender();
}
//random number
Shops.prototype.randomCust = function () {
    var range = this.max - this.min;
    var randomCount = Math.random() * range + this.min;
    return Math.ceil(randomCount);

}

Shops.prototype.hourlyDailySales = function () {
    for (var i = 0; i < hours.length; i++) {
        var numOfCookies = Math.ceil(this.randomCust() * this.avgCookieSale);
        this.hourlySales.push(numOfCookies);
        this.dailySales += numOfCookies;
    }

}
//============================

var seattle = new Shops('Seattle', 23, 65, 6.3);
var tokyo = new Shops('Tokyo', 3, 24, 1.2);
var dobai = new Shops('Dubai', 11, 38, 3.7);
var paris = new Shops('Paris', 20, 38, 2.3);
var lima = new Shops('Lima', 2, 16, 4.6);
//shoplistArray
var shoplist = [seattle, tokyo, dobai, paris, lima];
// console.log(seattle);
// console.log(tokyo);
// console.log(dobai);
// console.log(paris);
// console.log(lima);

//randor shops
///table
var container = document.getElementById('salesTable');
var table = document.createElement('table');
container.appendChild(table);

//header row method

var headerRow = document.createElement('tr');
table.appendChild(headerRow);
var th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = 'cities';
for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hours[i];
}
var th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = 'Daily Location Total';

for (var shopindex = 0; shopindex < shoplist.length; shopindex++) {
    var currentShop = shoplist[shopindex];
    var shoprow = document.createElement('tr');
    table.appendChild(shoprow);
    var shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.location;


    ////row data 
    for (var cellIndex = 0; cellIndex < hours.length; cellIndex++) {
        var dataIn = document.createElement('td');
        shoprow.appendChild(dataIn);
        dataIn.textContent = currentShop.hourlySales[cellIndex];
        //dataIn.textContent = 'hi'
    }

    // totaly daily sales
    shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.dailySales;
}


//footer Row
var footerRow = document.createElement('tr');
table.appendChild(footerRow);
var th = document.createElement('th');
footerRow.appendChild(th);
th.textContent = 'Totals';
// tatal for every day
var megaTotalSalesCookies = 0;
for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    var td = document.createElement('td');
    footerRow.appendChild(td);
    var sum = 0;
    for (var shopIndexCell = 0; shopIndexCell < shoplist.length; shopIndexCell++) {
        var currentShop = shoplist[shopIndexCell];

        sum += currentShop.hourlySales[hourIndex];
    }
 // sum all totals
    td.textContent = sum;
    megaTotalSalesCookies += sum;
}
var td = document.createElement('td');
footerRow.appendChild(td);
td.textContent = megaTotalSalesCookies;