// Import stylesheets
import './style.css';

// Write Javascript code!
// ====================    Fetch api get =====================
// fetch('https://reqres.in/api/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data.data.map((element) => element.first_name)))
//   .catch((error) => console.log('Error'));

// ====================    Fetch api post =====================
// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'abby',
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log('error'));

// ====================    promise   =====================
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 9;
//   if (a == 2) {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// });
// p.then((message) => {
//   console.log('this is in the then a ' + message);
// }).catch((message) => {
//   console.log('this is in the catch ' + message);
// });

// ====================    promise for callback  =====================
// let useLeft = false,
//   userWatchingCatMeme = false;
// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (useLeft) {
//       reject({
//         name: 'user left',
//         message: '; ()',
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'user watching cat meme',
//         message: '>cat<',
//       });
//     } else {
//       resolve('Thumbs up and this is resolved');
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log('success: ' + message);
//   })
//   .catch((error) => {
//     console.log(error.name + ' ' + error.message);
//   });

// ====================    promise all =====================
// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('video 1 Recorded');
// });
// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('video 2 Recorded');
// });
// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('video 3 Recorded');
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => console.log(message)
// );
//promise.race----> render sec one after first one

// ====================    Promise async await =====================
async function getUserId(name) {
  let response = await fetch('https://reqres.in/api/users');
  let data = await response.json();
  let [user] = data.data.filter((ele) => ele.first_name === name);
  console.log(user.id);
}
getUserId('Janet');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
