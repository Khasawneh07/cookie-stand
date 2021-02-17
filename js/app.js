'use strict';
let hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let container = document.getElementById('container');

function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function cookiesStand (branchlocation,maxHourlycustomers,minHourlycustomers,avgCookie){
    this.branchlocation = branchlocation;
    this.maxHourlycustomers = maxHourlycustomers;
    this.minHourlycustomers = minHourlycustomers;
    this.avgCookie = avgCookie;
    this.Total = 0;
    this.randomNnumberOfcustomers = [];
    this.numOfCookiesSold = [];
}
function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
location.prototype.customerPerHour = function(){
    for(i=0 ; i<hours.length ; i++){
        this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers,this.maxHourlycustomers))
    }
}
location.prototype.CookiesSold = function(){
    for(let i = 0 ; i < hours.length; i++){
        this.numOfCookiesSold.push(Math.ceil(this.randomNnumberOfcustomers[i]*this.avgCookie));
        this.total += this.numOfCookiesSold[i];
    }
}

location.prototype.render = function(){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let locationInfo = document.createElement('td');
    tr.appendChild(locationInfo);
    locationInfo.textContent = this.branchlocation;

    let td;
    for(let  i = 0; i < this.numOfCookiesSold.length; i++){
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.numOfCookiesSold[i];
    }
    let hoursTotal = document.createElement('td');
    tr.appendChild(dailyTotal);
    hoursTotal.textContent = this.total
}

let seattle = new branchlocation('Seattle', 65, 23, 6.3);
let tokyo = new branchlocation('Tokyo', 24, 3, 1.2);
let dubai = new branchlocation('Dubai', 38, 11, 3.7);
let paris = new branchlocation('Paris', 48, 20, 2.3);
let lima = new branchlocation('Lima', 16, 2, 4.6);


function HeaderRow()
 {
  
  var TableRow = document.createElement('tr');
  SalmonCookieTable.appendChild(TableRow);
  var EmptyCell = document.createElement('th');
  TableRow.append(EmptyCell);
 
  for (var i = 0; i < Hours.length; i++) {
    var SCTableHeadItem = document.createElement('th');
    SCTableHeadItem.textContent = Hours[i];
    TableRow.appendChild(SCTableHeadItem);
    
  }

  var totalRec = document.createElement('th');
  totalRec.textContent = 'Daily Total';
  TableRow.appendChild(totalRec);
  SalmonCookieTable.appendChild(TableRow);
  
 }



function FooterRow()
{
  var TotalRow = document.createElement('tr');
  SalmonCookieTable.appendChild(TotalRow);

  var TotalCell = document.createElement('th');
  TotalCell.textContent = "Total " + " ";
  TotalRow.appendChild(TotalCell);

  var ColTotalCell;
  for (var i = 0; i < Hours.length; i++) {
    ColTotalCell = document.createElement('th');
    TotalRow.appendChild(ColTotalCell);
    ColTotalCell.textContent = TotalOfSingleHour[i];
  }
 
  var AllTotal = document.createElement('th');
  AllTotal.textContent = grandTotal;
  TotalRow.appendChild(AllTotal);
  
  
}


seattle.customerPerHour();
seattle.CookiesSold();
seattle.render();
tokyo.customerPerHour();
tokyo.CookiesSold();
tokyo.render();
dubai.customerPerHour();
dubai.CookiesSold();
dubai.render();
paris.customerPerHour();
paris.CookiesSold();
paris.render();
lima.customerPerHour();
lima.CookiesSold();
lima.render();
HeaderRow()
FooterRow();