import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB-b-XAhXumHtAvEpLFPSgbs-Ysg9ggD-0",
  authDomain: "expensify-63d56.firebaseapp.com",
  databaseURL: "https://expensify-63d56.firebaseio.com",
  projectId: "expensify-63d56",
  storageBucket: "expensify-63d56.appspot.com",
  messagingSenderId: "804755885988"
};

firebase.initializeApp(config);
const database = firebase.database();



export { firebase, database as default };

// database.ref().set({
//   name: 'Alan',
//   age: 33,
//   married: true,
//   gamerLevel: 'extreme',
//   personalGame: {
//     title: 'Diablo 2',
//     year: 2000,
//     developer: 'Blizzard North'
//   }
// });
//
// database.ref('gamerLevel').set('sick');
// database.ref('personalGame/year').set(1999);

// database.ref('married').remove();
// database.ref('personalGame/year').set(null);

// database.ref().update({
//   gamerLevel: 'insane',
//   name: 'Alan',
//   gameType: 'RPG'
// });


// database.ref('personalGame/title')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e)=>{
//   console.log('Error: ', e);
// });


// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });
//
// database.ref().update({
//   gamerLevel: 'novice'
// });
//
// setTimeout( function(){
//   database.ref().update({
//     gamerLevel: 'sick'
//   });
// }, 3500 );
//
// database.ref().update({
//   gamerLevel: 'sick'
// });
//
// database.ref('gamerBeginning').set('11');
