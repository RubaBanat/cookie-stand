"use strict";
var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var shop = [{
    location: 'Seattle', minCust: 23, maxCust: 65, average: 6.3, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        var minCustCust = Math.ceil(this.minCust);
        var maxCustCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCustCust - minCustCust + 1) + minCustCust);
    }, totalCookies: function () {
       var ul = document.createElement('ul');
       var h3 = document.createElement('h3');
        h3.textContent = this.location;
        var total = 0;
        for (var i = 0; i < Hours.length; i++) {
            var value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, Hours[i])
        }
        var totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        var main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Tokyo', minCust: 3, maxCust: 24, average: 1.2, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        var minCust = Math.ceil(this.minCust);
        var maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        var ul = document.createElement('ul');
        var h3 = document.createElement('h3');
        var info = document.write("")
        h3.textContent = this.location;
        var total = 0;
        for (var i = 0; i < Hours.length; i++) {
            var value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, Hours[i])
        }
        var totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        var main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Dubai', minCust: 11, maxCust: 38, average: 3.7, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        var minCust = Math.ceil(this.minCust);
       var maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        var ul = document.createElement('ul');
        var h3 = document.createElement('h3');
        h3.textContent = this.location;
        var total = 0;
        for (var i = 0; i < Hours.length; i++) {
            var value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, Hours[i])
        }
        var totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        var main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Paris', minCust: 20, maxCust: 38, average: 2.3, cookiesAtHour: [],
    random: function () {
        var minCust = Math.ceil(this.minCust);
        var maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        var ul = document.createElement('ul');
        var h3 = document.createElement('h3');
        h3.textContent = this.location;
        let total = 0;
        for (var i = 0; i < Hours.length; i++) {
            var value = this.random() * this.average;
            total = total + value;
            this.cookiesAtHour.push(value);
            renderTheList(ul, value, Hours[i])
        }
        var totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        var main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Lima', minCust: 2, maxCust: 16, average: 4.6, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        var minCust = Math.ceil(this.minCust);
        var maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        var ul = document.createElement('ul');
        var h3 = document.createElement('h3');
        h3.textContent = this.location;
        let total = 0;
        for (var i = 0; i < Hours.length; i++) {
            var value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, Hours[i])
        }
        var totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        var main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}]

function renderTheList(ul, value, time) {
    var li = document.createElement('li');
    li.innerText = `${time}: ${Math.round(value)} cookies`;
    ul.appendChild(li);
}
function echo() {
    var table = document.getElementById('table');
    var infoTabel = document.createElement('table')
    var thLocation = document.createElement('th');
    thLocation.innerHTML = 'city';
    infoTabel.appendChild(thLocation);
    var thminCust = document.createElement('th');
    thminCust.innerHTML = 'min';
    infoTabel.appendChild(thminCust);
    var thmaxCust = document.createElement('th');
    thmaxCust.innerHTML = 'max';
    infoTabel.appendChild(thmaxCust);
    var thAvg = document.createElement('th');
    thAvg.innerText = 'Avg';
    infoTabel.appendChild(thAvg);

    for (var i = 0; i < shop.length; i++) {
        shop[i].totalCookies();
        var row = document.createElement('tr')
        var location = document.createElement('td')
        location.innerHTML = shop[i].location;
        row.appendChild(location);
        var minCust = document.createElement('td');
        minCust.innerHTML = shop[i].minCust;
        row.appendChild(minCust);
       var maxCust = document.createElement('td');
        maxCust.innerHTML = shop[i].maxCust;
        row.appendChild(maxCust);
        var avg = document.createElement('td');
        avg.innerText = shop[i].average;
        row.appendChild(avg);
        infoTabel.appendChild(row);
    };
    table.appendChild(infoTabel)
}
echo();