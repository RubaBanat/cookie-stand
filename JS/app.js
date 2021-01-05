'use strict'

var storeOne = {
    storeLocation: "Seattle",
    minCusts: 23,
    maxCusts: 65,
    averCookiesCust: 6.3,
    arrCustNumber: [],
    total: 0,
    hourlySales: [],
    numberOfCusts: function (min, max) {
        for (var i = 0; i < 14; i++) {
            storeOne.arrCustNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }   
    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustNumber.length; i++) {
            storeOne.hourlySales[i] = Math.floor(storeOne.arrCustNumber[i] * this.averCookiesCust);
        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + storeOne.hourlySales[i];
        }
    }
};
storeOne.numberOfCusts(storeOne.minCusts,storeOne.maxCusts);
storeOne.calculateSales();
storeOne.calculateTotal();
var storeTwo = {
    storeLocation: "Tokyo",
    minCusts: 3,
    maxCusts: 24,
    averCookiesCust: 1.2,
    arrCustNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCusts: function (min, max) {
        for (var i = 0; i < 14; i++) {
            storeTwo.arrCustNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustNumber.length; i++) {
            storeTwo.hourlySales[i] = Math.floor(storeTwo.arrCustNumber[i] * this.averCookiesCust);
        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + storeTwo.hourlySales[i];
        }
    }
};
storeTwo.numberOfCusts(storeTwo.minCusts,storeTwo.maxCusts);
storeTwo.calculateSales();
storeTwo.calculateTotal();
var storeThree = {
    storeLocation: "Dubai",
    minCusts: 11,
    maxCusts: 28,
    averCookiesCust: 3.7,
    arrCustNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCusts: function (min, max) {
        for (var i = 0; i < 14; i++) {
            storeThree.arrCustNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustNumber.length; i++) {
            storeThree.hourlySales[i] = Math.floor(storeThree.arrCustNumber[i] * this.averCookiesCust);
        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + storeThree.hourlySales[i];
        }
    }

};
storeThree.numberOfCusts(storeThree.minCusts,storeThree.maxCusts);
storeThree.calculateSales();
storeThree.calculateTotal();
var storeFour = {
    storeLocation: "Paris",
    minCusts: 20,
    maxCusts: 38,
    averCookiesCust: 2.3,
    arrCustNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCusts: function (min, max) {
        for (var i = 0; i < 14; i++) {
            storeFour.arrCustNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustNumber.length; i++) {
            storeFour.hourlySales[i] = Math.floor(storeFour.arrCustNumber[i] * this.averCookiesCust);
        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + storeFour.hourlySales[i];
        }
    }
};
storeFour.numberOfCusts(storeFour.minCusts,storeFour.maxCusts);
storeFour.calculateSales();
storeFour.calculateTotal();
var storeFive = {
    storeLocation: "Lima",
    minCusts: 2,
    maxCusts: 16,
    averCookiesCust: 4.6,
    arrCustNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCusts: function (min, max) {
        for (var i = 0; i < 14; i++) {
            storeFive.arrCustNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustNumber.length; i++) {
            storeFive.hourlySales[i] = Math.floor(storeFive.arrCustNumber[i] * this.averCookiesCust);
            console.log(this.hourlySales);

        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + storeFive.hourlySales[i];
        }
    }
};
storeFive.numberOfCusts(storeFive.minCusts,storeFive.maxCusts);
storeFive.calculateSales();
storeFive.calculateTotal();
var workingHours = ['6am:','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','Total:'];
var storeArray = [storeOne, storeTwo, storeThree, storeFour, storeFive];
var parentElement = document.getElementById("table");
var listArr = [];
var ItemArr = [];

for (var x = 0; x < 5; x++) {
    listArr[x] = document.createElement("ul");    
    parentElement.appendChild(listArr[x]);
    listArr[x].textContent = storeArray[x].storeLocation;
    var ItemArr = [];
    for (var index = 0; index < 15; index++) {
        ItemArr[index] = document.createElement('li');
        ItemArr[index].textContent = workingHours[index] + storeArray[x].hourlySales[index];
        listArr[x].appendChild(ItemArr[index]);
        if (index== 14){
            ItemArr[index].textContent= workingHours[index] + storeArray[x].total;
            listArr[x].appendChild(ItemArr[index]);
        }
    }
    
};