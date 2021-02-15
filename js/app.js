'use strict';
let hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let container = document.getElementById('container');
function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let seattleBranch = {
    branchLocation: 'Seattle',
    maxHourlycustomers: 65,
    minHourlycustomers: 23,
    avgCookie: 6.3,
    randomNnumberOfcustomers: [],
    numOfCookiesSold: [],
    total: 0,
    customersPerhour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers, this.maxHourlycustomers));
        }
    },
    cookiesPurchasedcount: function () {
        for (let i = 0; i < hours.length; i++) {
          let AmountOfCookies =  this.numOfCookiesSold.push(Math.ceil(this.randomNnumberOfcustomers[i] * this.avgCookie));
            this.total = this.total + AmountOfCookies;
            //console.log(total);
        }
    },
    render: function () {
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.branchLocation;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for (let i = 0; i < this.numOfCookiesSold.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}  ${this.numOfCookiesSold[i]} Cookies`;
        };
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.total + ' Cookies';
    }
}


let Tokyo = {
    branchLocation: 'Tokyo',
    maxHourlycustomers: 24,
    minHourlycustomers: 3,
    avgCookie: 1.2,
    randomNnumberOfcustomers: [],
    numOfCookiesSold: [],
    total: 0,
    customersPerhour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers, this.maxHourlycustomers));
        }
    },
    cookiesPurchasedcount: function () {
        for (let i = 0; i < hours.length; i++) {
          let AmountOfCookies =  this.numOfCookiesSold.push(Math.ceil(this.randomNnumberOfcustomers[i] * this.avgCookie));
            this.total = this.total + AmountOfCookies;
            //console.log(total);
        }
    },
    render: function () {
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.branchLocation;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for (let i = 0; i < this.numOfCookiesSold.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}  ${this.numOfCookiesSold[i]} Cookies`;
        };
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.total + ' Cookies';
    }
}


let Dubai = {
    branchLocation: 'Dubai',
    maxHourlycustomers: 38,
    minHourlycustomers: 11,
    avgCookie: 3.7,
    randomNnumberOfcustomers: [],
    numOfCookiesSold: [],
    total: 0,
    customersPerhour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers, this.maxHourlycustomers));
        }
    },
    cookiesPurchasedcount: function () {
        for (let i = 0; i < hours.length; i++) {
          let AmountOfCookies =  this.numOfCookiesSold.push(Math.ceil(this.randomNnumberOfcustomers[i] * this.avgCookie));
            this.total = this.total + AmountOfCookies;
            //console.log(total);
        }
    },
    render: function () {
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.branchLocation;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for (let i = 0; i < this.numOfCookiesSold.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}  ${this.numOfCookiesSold[i]} Cookies`;
        };
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.total + ' Cookies';
    }
}


let Paris = {
    branchLocation: 'Paris',
    maxHourlycustomers: 38,
    minHourlycustomers: 20,
    avgCookie: 2.3,
    randomNnumberOfcustomers: [],
    numOfCookiesSold: [],
    total: 0,
    customersPerhour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers, this.maxHourlycustomers));
        }
    },
    cookiesPurchasedcount: function () {
        for (let i = 0; i < hours.length; i++) {
          let AmountOfCookies =  this.numOfCookiesSold.push(Math.ceil(this.randomNnumberOfcustomers[i] * this.avgCookie));
            this.total = this.total + AmountOfCookies;
            //console.log(total);
        }
    },
    render: function () {
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.branchLocation;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for (let i = 0; i < this.numOfCookiesSold.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}  ${this.numOfCookiesSold[i]} Cookies`;
        };
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.total + ' Cookies';
    }
}



let Lima = {
    branchLocation: 'Lima',
    maxHourlycustomers: 16,
    minHourlycustomers: 2,
    avgCookie: 4.6,
    randomNnumberOfcustomers: [],
    numOfCookiesSold: [],
    total: 0,
    customersPerhour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomNnumberOfcustomers.push(randomGenrator(this.minHourlycustomers, this.maxHourlycustomers));
        }
    },
    cookiesPurchasedcount: function () {
        for (let i = 0; i < hours.length; i++) {
          let AmountOfCookies =  this.numOfCookiesSold.push(Math.ceil(this.randomNnumberOfcustomers[i] * this.avgCookie));
            this.total = this.total + AmountOfCookies;
            //console.log(total);
        }
    },
    render: function () {
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.branchLocation;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for (let i = 0; i < this.numOfCookiesSold.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}  ${this.numOfCookiesSold[i]} Cookies`;
        };
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.total + ' Cookies';
    }
}
seattleBranch.customersPerhour();
seattleBranch.cookiesPurchasedcount();
seattleBranch.render();


Tokyo.customersPerhour();
Tokyo.cookiesPurchasedcount();
Tokyo.render();



Dubai.customersPerhour();
Dubai.cookiesPurchasedcount();
Dubai.render();


Paris.customersPerhour();
Paris.cookiesPurchasedcount();
Paris.render();


Lima.customersPerhour();
Lima.cookiesPurchasedcount();
Lima.render();







































//     render: function(){
//         let MainDiv = document.getElementById('branchLocation');
//    let LocationSec = document.createElement('section');
//    MainDiv.appendChild(LocationSec);
//    let LocName = document.createElement('h2');
//    LocName.textContent = this.location;
//    LocationSec.appendChild(LocName);
//    let LocList = document.createElement('ul');
//    LocationSec.appendChild (LocList);

//    let AmountCookiesList;
//    for(let k = 0 ; k < this.AmountsOfCookies.length ; k++ )
//    {
//      this.cookiesPurchased = document.createElement('li');
//      AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
//      LocList.appendChild(AmountCookiesList);

//    }
//    let AmountCookiesList = document.createElement('li');
//    AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
//    LocList.appendChild(AmountCookiesList);


// }

// }

// Seattle.customersPerhour();
// Seattle.cookiesPurchasedcount();
// Seattle.render();


// Render: function ()
// {
//    let MainDiv = document.getElementById('branchLocation');
//    let LocationSec = document.createElement('section');
//    MainDiv.appendChild(LocationSec);
//    let LocName = document.createElement('h2');
//    LocName.textContent = this.location;
//    LocationSec.appendChild(LocName);
//    let LocList = document.createElement('ul');
//    LocationSec.appendChild (LocList);

//    let AmountCookiesList;
//    for(let k = 0 ; k < this.AmountsOfCookies.length ; k++ )
//    {
//      this.cookiesPurchased = document.createElement('li');
//      AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
//      LocList.appendChild(AmountCookiesList);

//    }
//    let AmountCookiesList = document.createElement('li');
//    AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
//    LocList.appendChild(AmountCookiesList);


// }
// }