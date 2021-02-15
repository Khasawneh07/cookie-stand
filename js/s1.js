let customershourly =['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

let seattle ={

  LocFac:'Seattle',  
   min : 23,
   max : 65,
   avgcookies:6.3,
   cookiesperhour:[],

  cookies:function(){
    let mainEl=document.getElementById('main-container')
    let header2 = document.createElement('h2')
    mainEl.appendChild(header2)
    header2.textContent=this.LocFac;
    let ulEl=document.createElement('ul')
    mainEl.appendChild(ulEl)

    let total = 0;
    for(let i = 0; i< customershourly.length;i++)
    {
    this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${customershourly[i]}: ${this.cookiesperhour[i]} cookies`
    total=total+this.cookiesperhour[i]
    }
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total: ${total} cookies`
} }
    
    seattle.cookies();
    console.log(seattle.cookiesperhour);

























































































































// 'use strict';
// let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let container = document.getElementById('container');
// // let table = document.createElement('table');


// let seattle = {
//     location:'Seattle',
//     minCustomer:23,
//     maxCustomer:65,
//     avgPerSale:6.3,
//     randomCustomers:[],
//     numOfCookiesSoldPerHour: [],
//     total:0,
//     randomCustomerPerHour:function(){
//         for(let i = 0 ; i < hours.length ; i++){
//             this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
//         }
//     },
//     cookiesSoldPerHour:function(){
//         for(let i = 0 ; i < hours.length; i++){
//         this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
//         this.total = this.total + this.numOfCookiesSoldPerHour[i];
//         // undifined = undifined + 35 
//         }

//     },
//     render:function(){
//         let headerEl = document.createElement('h2');
//         container.appendChild(headerEl);
//         headerEl.textContent = this.location;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         let liEl;
//         for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
//             liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
//         };
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent =  'Total : ' + this.total + ' Cookies';

//     }
// }
// seattle.randomCustomerPerHour();
// seattle.cookiesSoldPerHour();
// seattle.render();



// let tokyo = {
//     location:'Tokyo',
//     minCustomer:3,
//     maxCustomer:24,
//     avgPerSale:1.2,
//     randomCustomers:[],
//     numOfCookiesSoldPerHour: [],
//     total:0,
//     randomCustomerPerHour:function(){
//         for(let i = 0 ; i < hours.length ; i++){
//             this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
//         }
//     },
//     cookiesSoldPerHour:function(){
//         for(let i = 0 ; i < hours.length; i++){
//         this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
//         this.total = this.total + this.numOfCookiesSoldPerHour[i];
//         // undifined = undifined + 35 
//         }

//     },
//     render:function(){
//         let headerEl = document.createElement('h2');
//         container.appendChild(headerEl);
//         headerEl.textContent = this.location;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         let liEl;
//         for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
//             liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
//         }
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent =  'Total : ' + this.total + ' Cookies';

//     }
// }
// tokyo.randomCustomerPerHour();
// tokyo.cookiesSoldPerHour();
// tokyo.render();


// function randomGenrator(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//   }
