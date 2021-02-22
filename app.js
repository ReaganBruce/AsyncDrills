//Javascript reads its code from top to bottom; which is synchronous.
//Output below would be in this order: 'hello world', 'what is up?' 'it's been two seconds'.

//example of synchronous code:

// function evenOrOdd(num1){
//     if (num1 % 2 == 0){
//         return 'even';
//     } 
//     return 'odd';
// }
// console.log(evenOrOdd(10));
// console.log(evenOrOdd(13));

// function greet(name) {
//     alert('Hello ' + name);
// }

// function greetUser(greetName) {
//     let userName = prompt('Please enter your name.');
//     greetName(userName);
// }

// greetUser(greet);


// console.log('hello world');

// setTimeout(() =>{
//     prompt(`Hello, what is your name?`);
// }, 2000) //2 seconds

// console.log('what is up?');



// const info1 = document.getElementById('content1');
// const info2 = document.getElementById('content2');
// const info3 = document.getElementById('content3');
// const info4 = document.getElementById('content4');

// let options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// function getPosition(successCallback, geoOptions) {
//     navigator.geolocation.getCurrentPosition(successCallback, error, geoOptions);
//     console.log('Retrieving position');
// }

// function success(pos) {
//     let crd = pos.coords;

//     info1.textContent = 'Your current position is:';
//     info2.textContent = `Latitude : ${crd.latitude}`;
//     info3.textContent = `Longitude: ${crd.longitude}`;
//     info4.textContent = `More or less ${crd.accuracy} meters.`;
// }

// getPosition(success, options);
//let promise = new Promise(function (resolve, reject) {});


// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success!'); 
//     }, 1000);
// });

// myFirstPromise.then((successMessage) => {
//     console.log('Yay! ' + successMessage);
// }).catch((err) => {
//     console.log('Definitely Nay! ' + err);
// });

/*
getWordOfTheDay();/// hypothetical promise.
then((word) => { //beginning promise chain;
    console.log(`word of the day is ${word}`); //success if getWordOfTheDay() runs..
    return tellAFriend(response);//return the following promise; you MUST return.
}).then((response) => { //tellAFriend() response promise;
    console.log(`Friends Response: ${response}`);//success if tellAFriend() runs..
    console.log(err); //Error message is tellAFriend() doesn't run.
}).catch((err) => { //Error function
    console.log(err);//Error message if nothing runs!
})
*/


// function slowEcho(message, delayTime){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             let random = Math.floor(Math.random() * 10);
//             if(random % 2 === 0){
//                 resolve(message);
//             } else {
//                 let err = new Error('Something bad happened!');
//                 reject(err)
//             }
//         }, delayTime);
//     });
// }

// document.getElementById('btn');
// btn.addEventListener('click', async () => {
//     try{
//         let message = await slowEcho('Hello World!', 1000);
//         console.log(message);
//     } catch (err){
//         console.log(err);
//     }
// });



// let p = Promise.resolve('Hello!');
// let q = Promise.reject(new Error('Something bad happened!'));

// p.then((message) => {
//     console.log(message);
// }).catch((err) =>{
//     console.log(err);
// })

// q.then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// });




