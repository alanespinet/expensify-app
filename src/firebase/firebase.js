import * as firebase from 'firebase';

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY || "AIzaSyB-b-XAhXumHtAvEpLFPSgbs-Ysg9ggD-0",
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN || "expensify-63d56.firebaseapp.com",
//   databaseURL: process.env.FIREBASE_DATABASE_URL || "https://expensify-63d56.firebaseio.com",
//   projectId: process.env.FIREBASE_PROJECT_ID || "expensify-63d56",
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "expensify-63d56.appspot.com",
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "804755885988"
// };



const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

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
