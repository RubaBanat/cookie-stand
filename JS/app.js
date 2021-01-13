'use strict';
//===============================

var hourArray= ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
var dailyTotal=[];
var allTotal=0;
for (var i = 0; i < hourArray.length; i++) {
  dailyTotal[i]=0;
}
function Store(name,maxCust,minCust,aavgCust){
  this.name=name;
  this.maxCust=maxCust;
  this.minCust=minCust;
  this.aavgCust=aavgCust;
  this.cookiesPerHourArr=[];
  this.total=0;
}
//===================================
Store.prototype.genaretCustomer=function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};
Store.prototype.cookiesArray=function(){
  for(var i =0;i<hourArray.length; i++){
    var multi =Math.floor( this.aavgCust * this.genaretCustomer());
    this.cookiesPerHourArr[i]=multi;
    this.total = this.total + multi;
  }
};
Store.prototype.renderSales=function(){
  var perant = document.getElementById('container');
  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  perant.appendChild(h2);
  var unorder = document.createElement('ul');
  perant.appendChild(unorder);
  for(var c = 0 ;c < this.cookiesPerHourArr.length;c++){
    var listItem = document.createElement('li');
    listItem.textContent = this.cookiesPerHourArr[c];
    unorder.appendChild(listItem);
  }
  listItem = document.createElement('li');
  listItem.textContent = 'Total cookies : '+this.total;
  unorder.appendChild(listItem);
};

Store.prototype.renderSalesTable=function(){
  var perant = document.getElementById("container");
  var table = document.getElementById("tableSales");
  perant.appendChild(table);
  var tableFirstRow = document.createElement('tr');
  table.appendChild(tableFirstRow);
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableFirstRow.appendChild(tableData);
  for (var i = 0; i <this.cookiesPerHourArr.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHourArr[i];
    tableFirstRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.total;
  tableFirstRow.appendChild(tableData);
  for (var i = 0; i < hourArray.length; i++) {
    dailyTotal[i]=dailyTotal[i]+this.cookiesPerHourArr[i];
  }
  allTotal=allTotal+this.total;
};
//==========================================
function renderHeadSales(){
  var perant = document.getElementById("container");
  var table = document.createElement("table");
  table.setAttribute('id','tableSales');
  perant.appendChild(table);
  var tableFirstRow = document.createElement('tr');
  table.appendChild(tableFirstRow);
  var headerOne = document.createElement('th');
  headerOne.textContent = '';
  tableFirstRow.appendChild(headerOne);
  for (var i = 0; i < hourArray.length; i++) {
    headerOne = document.createElement('th');
    headerOne.textContent = hourArray[i];
    tableFirstRow.appendChild(headerOne);
  }
  headerOne = document.createElement('th');
  headerOne.textContent = 'Daily Location Total';
  tableFirstRow.appendChild(headerOne);
  
}
function  renderFootSales(){
  var perant = document.getElementById("container");
  var table = document.getElementById("tableSales");
  perant.appendChild(table);
  var tableFirstRow = document.createElement('tr');
  tableFirstRow.setAttribute('id','last');
  table.appendChild(tableFirstRow);
  var tableData = document.createElement('td');
  tableData.textContent = 'Total : ';
  tableFirstRow.appendChild(tableData);
  for (var i = 0; i < hourArray.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = dailyTotal[i];
    tableFirstRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = allTotal;
  tableFirstRow.appendChild(tableData);
}
//===================================
var hourlyCustomersSeattle = new Store('Seatle',65,23,6.3);
hourlyCustomersSeattle.cookiesArray();

var hourlyCustomersTokyo = new Store('Tokyo',3,24,1.2);
hourlyCustomersTokyo.cookiesArray();

var hourlyCustomersDubai = new Store('Dubai',11,38,3.7);
hourlyCustomersDubai.cookiesArray();

var hourlyCustomersParis = new Store('Paris',20,38,2.3);
hourlyCustomersParis.cookiesArray();

var hourlyCustomersLima = new Store('Lima',2,16,4.6);
hourlyCustomersLima.cookiesArray();

//======================================
renderHeadSales();
hourlyCustomersSeattle.renderSalesTable();
hourlyCustomersTokyo.renderSalesTable();
hourlyCustomersDubai.renderSalesTable();
hourlyCustomersParis.renderSalesTable();
hourlyCustomersLima.renderSalesTable();
renderFootSales();

//========================================
var salesForm = document.getElementById('salesForm');
salesForm.addEventListener('submit', function (event){
  
  var last=document.getElementById('last');
  last.remove();
  event.preventDefault();
  var location = event.target.location.value;
  var maxCust = event.target.maxCust.value;
  var minCust = event.target.minCust.value;
  var aavgCust = event.target.aavgCust.value;

  var newLocation = new Store(location,parseInt(maxCust),parseInt(minCust),aavgCust);
  newLocation.cookiesArray();
  newLocation.renderSalesTable();
  renderFootSales();

});
