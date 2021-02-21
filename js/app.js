'use strict';
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
function randomGenrator(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function CookiesStand(branchoLcation, maxHourlycustomers, minHourlycustomers, avgCookie) {
    this.location = branchoLcation;
    this.maxHourlycustomers = maxHourlycustomers;
    this.minHourlycustomers = minHourlycustomers;
    this.avgCookie = avgCookie;
    this.Total = 0;
    this.randomNnumberOfcustomers = [];
    this.numOfCookiesSold = [];
}
CookiesStand.prototype.customerPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers, this.maxHourlycustomers))
    }
}
CookiesStand.prototype.cookiesSold = function () {
    for (let i = 0; i < hours.length; i++) {
        let CookiesAmountperhour = Math.ceil(this.randomNnumberOfcustomers[i] * this.avgCookie);
        this.numOfCookiesSold.push(CookiesAmountperhour);
        this.Total = this.Total + CookiesAmountperhour;
        TotalOfSingleHour[i] += this.numOfCookiesSold[i];
        grandTotal += this.numOfCookiesSold[i];
    
    }
}
let MainDiv = document.getElementById('maindiv');
let table = document.createElement('table');


CookiesStand.prototype.render = function () {

    let tr = document.createElement('tr');
    table.appendChild(tr);
    let branchoLcationInfo = document.createElement('td');
    branchoLcationInfo.textContent = this.location;
    tr.appendChild(branchoLcationInfo);

    let td;
    for (let i = 0; i < this.numOfCookiesSold.length; i++) {
        td = document.createElement('td');
        td.textContent = this.numOfCookiesSold[i];
        tr.appendChild(td);
    }
    let hoursTotal = document.createElement('td');
    hoursTotal.textContent = this.Total;
    tr.appendChild(hoursTotal);
    table.appendChild(tr);
    MainDiv.appendChild(table);

}


var grandTotal = 0;
var TotalOfSingleHour;
TotalOfSingleHour = [];
for (var i = 0; i < hours.length; i++) {
  TotalOfSingleHour.push(0);

}


let seattle = new CookiesStand('Seattle', 65, 23, 6.3);
let tokyo = new CookiesStand('Tokyo', 24, 3, 1.2);
let dubai = new CookiesStand('Dubai', 38, 11, 3.7);
let paris = new CookiesStand('Paris', 48, 20, 2.3);
let lima = new CookiesStand('Lima', 16, 2, 4.6);


function HeaderRow() {

    let TableRow = document.createElement('tr');
    table.appendChild(TableRow);
    let EmptyCell = document.createElement('th');
    TableRow.appendChild(EmptyCell);
    table.appendChild(TableRow)

    for (let i = 0; i < hours.length; i++) {
        let hoursCont = document.createElement('th');
        hoursCont.textContent = hours[i];
        TableRow.appendChild(hoursCont);

    }
    let totalOfDay = document.createElement('th');
    totalOfDay.textContent = 'Daily Total';
    TableRow.appendChild(totalOfDay);
    table.appendChild(TableRow);
    MainDiv.appendChild(table);
}


let TotalRow;
let TotalCell;

function FooterRow() {
     TotalRow = document.createElement('tr');
    table.appendChild(TotalRow);

    TotalCell = document.createElement('th');
    TotalCell.textContent = "Total " + " ";
    TotalRow.appendChild(TotalCell);

    let ColTotalCell;
    for (let i = 0; i < hours.length; i++) {
        ColTotalCell = document.createElement('th');
        TotalRow.appendChild(ColTotalCell);
        ColTotalCell.textContent = TotalOfSingleHour[i];
    }

    let AllTotal = document.createElement('th');
    AllTotal.textContent = grandTotal;
    TotalRow.appendChild(AllTotal);



}

HeaderRow()
seattle.customerPerHour();
seattle.cookiesSold();
seattle.render();
tokyo.customerPerHour();
tokyo.cookiesSold();
tokyo.render();
dubai.customerPerHour();
dubai.cookiesSold();
dubai.render();
paris.customerPerHour();
paris.cookiesSold();
paris.render();
lima.customerPerHour();
lima.cookiesSold();
lima.render();

FooterRow();





var LocationForm = document.getElementById('LocationInfoForm');
LocationForm.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();
    console.log(event);
  
    var brnachLocation = event.target.brnachLocation.value;
    console.log('brnachLocation', brnachLocation);
  
    var maxSales = event.target.maxSales.value;
    console.log('maxSales', maxSales);
  
    var minSales = event.target.minSales.value;
    console.log('minSales', minSales);
  
    var AvgCookies = event.target.AvgCookies.value;
    console.log('AvgCookies', AvgCookies);
  
    var AddLocation = new CookiesStand(brnachLocation, maxSales, minSales, AvgCookies);
  
    table.removeChild(TotalRow);
    AddLocation.customerPerHour();
    AddLocation.cookiesSold();
    AddLocation.render();
  
  
    
   
    
    
   
   for (var i = 0; i < TotalRow.childNodes.length -1; i++) {

      TotalRow.childNodes[i].textContent = TotalOfSingleHour[i -1];
      
    }
  
    table.appendChild(TotalRow);
    MainDiv.appendChild(table);
}  

