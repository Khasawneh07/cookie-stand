'use strict';
let hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let container = document.createElement('container');
function randomGenrator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
};
function cookiesShop(branchLocation, maxHourlycustomers, minHourlycustomers, avgCookie) {
  this.branch = branchLocation;
  this.maxH = maxHourlycustomers;
  this.minH = minHourlycustomers;
  this.cookiesAvg = avgCookie;
  this.randomCustomers = [];
  this.randomCookies= [];
  this.cookiesSumForBranch = 0;
  this.cookiesSumPerDay = 0;
  
}
cookiesShop.prototype.updateCookiesSumForBranch = function () {
  // this.cookiesSumForBranch = this.cookiesSumForBranch
  for (let x = 0; x < hours.length; x++);
  let cookiesPurchasedcount = Math.ceil(randomGenrator(this.minH , this.maxH) * this.cookiesAvg);
  this.cookiesPurchasedcount.push(cookiesPurchasedcount);
  // this.total = this.total + cookiesPurchasedcount;

};
console.log(cookiesShop);
console.log(updateCookiesSumForBranch);
// cookiesShop.prototype.updatecookiesSumPerDay = function () {

// };

// customersPerhour.prototype.randomNnumberOfcustomers = function () {
//   for (let i = 0; i < Hours.length; i++);
//   {
//     this.randomNnumberOfcustomers.push(Math.floor(Math.random() * (this.maxHourlycustomers - this.minHourlycustomers + 1) + this.minHourlycustomers));
//   }
// };


// // randomGenrator: function(min, max) {
// //   min = Math.ceil(min);
// //   max = Math.floor(max);
// //   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// // },

// cookiesPurchasedcount: function () {

//   for (let x = 0; x < Hours.length; x++);
//   let cookiesPurchasedcount = Math.ceil(this.randomNnumberOfcustomers[x] * this.avgCookie);
//   this.cookiesPurchasedcount.push(cookiesPurchasedcount);
//   this.total = this.total + cookiesPurchasedcount;

// };
// render: function() {
//   let MainDiv = document.getElementById('branchLocation');
//   let LocationSec = document.createElement('section');
//   MainDiv.appendChild(LocationSec);
//   let LocName = document.createElement('h2');
//   LocName.textContent = this.location;
//   LocationSec.appendChild(LocName);
//   let LocList = document.createElement('ul');
//   LocationSec.appendChild(LocList);

//   let AmountCookiesList;
//   for (let k = 0; k < this.AmountsOfCookies.length; k++) {
//     this.cookiesPurchased = document.createElement('li');
//     AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
//     LocList.appendChild(AmountCookiesList);

//   }
//   let AmountCookiesList = document.createElement('li');
//   AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
//   LocList.appendChild(AmountCookiesList);


// }
    


// // Seattle.customersPerhour();
// // Seattle.cookiesPurchasedcount();
// // Seattle.render();


// // Render: function ()
// // {
// //    let MainDiv = document.getElementById('branchLocation');
// //    let LocationSec = document.createElement('section');
// //    MainDiv.appendChild(LocationSec);
// //    let LocName = document.createElement('h2');
// //    LocName.textContent = this.location;
// //    LocationSec.appendChild(LocName);
// //    let LocList = document.createElement('ul');
// //    LocationSec.appendChild (LocList);

// //    let AmountCookiesList;
// //    for(let k = 0 ; k < this.AmountsOfCookies.length ; k++ )
// //    {
// //      this.cookiesPurchased = document.createElement('li');
// //      AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
// //      LocList.appendChild(AmountCookiesList);

// //    }
// //    let AmountCookiesList = document.createElement('li');
// //    AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
// //    LocList.appendChild(AmountCookiesList);


// // }
// // }