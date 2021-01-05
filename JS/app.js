'use strict';

//create empty array to push each store info to
var dailyTotals = [];

//global var with Hour open
var HourOpen = ['cities', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// we need to access the table that is in the DOM
var cookieTable = document.getElementById('cookies');

// =====================================================

// create function to push hourOpen into th
function cookiePrtHour(){

  //use for loop to push Hour array to table header
  for (var i = 0; i < HourOpen.length; i++) {

    //create <th>
    var thElement = document.createElement('th');

    //create th content
    thElement.textContent = HourOpen[i];

    //append th to table in DOM
    cookieTable.appendChild(thElement);
  }
  // repeat code from above with new statement to create daily totals column
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  cookieTable.appendChild(thElement);
}
// call cookiePrtHour func
cookiePrtHour();

// ======================================================
//create constructor object
function CookiePrtSales(minCustPerHour, maxCustPerHour, avgCookiePerSale, location){

  // create all dynamic properties
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.location = location;
  //empty array to push sales figures into
  this.allCookiesPrtSales = [];
  //create day totals
  this.dailySalesTotals = 0;
  // push this info to empty array
  dailyTotals.push(this);
  console.log(dailyTotals);
}

// =================================================================

//creating function to generate random num and push to empty array
CookiePrtSales.prototype.salesFiguresGenerator = function (){

  for (var i = 0; i < HourOpen.length - 1; i++) {

    var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.allCookiesPrtSales.push(avgCookiePerHour);

    this.dailySalesTotals = avgCookiePerHour += this.dailySalesTotals;
    // console.log(this.dailySalesTotals);

  }
};
// ================================================================

CookiePrtSales.prototype.render = function (){

  this.salesFiguresGenerator();

  // //create tr
  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');
  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for (var i = 0; i < HourOpen.length - 1; i++) {

    // //create td
    tdElement = document.createElement('td');
    // create td content
    tdElement.textContent = this.allCookiesPrtSales[i];
    // append td to tr
    trElement.appendChild(tdElement);
  }

  // totals sales for each location for the day
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySalesTotals;
  trElement.appendChild(tdElement);
  // //append th to table in DOM
  cookieTable.appendChild(trElement);
};

// =======================================================================

// create function to push hourOpen into th
function cookiePrtHourTotals(){

// CookiePrtSales.prototype.render = function (){

//use for loop to push Hour array to table header
  for (var i = 0; i < HourOpen.length; i++) {

  //create <th>
    var trElement = document.createElement('tr');

    // var tdElement = document.createElement('td');
    var tfElement = document.createElement('tfoot');

    //create th content
    tfElement.textContent = 'totals' + '';
    trElement.appendChild(tfElement);

  //append th to table in DOM

  }

  cookieTable.appendChild(tfElement);
}
// call cookiePrtHour func
cookiePrtHourTotals();

// =======================================================================

//create var with new location instance for each store
var Seattle = new CookiePrtSales(23, 65, 6.3, 'Seattle');
var Tokyo = new CookiePrtSales(3, 24, 1.2, 'Tokyo');
var Dubai = new CookiePrtSales(11, 38, 3.7, 'Dubai');
var Paris = new CookiePrtSales(20, 38, 2.3, 'Paris');
var Lima = new CookiePrtSales(2, 16, 4.6, 'Lima');

// call the render method on each var
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
