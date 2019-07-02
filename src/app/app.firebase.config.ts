export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCS1cb7U0EyOMWciW8eT3Tp2gpTCXikarU",
  authDomain: "chateaula-b4740.firebaseapp.com",
  databaseURL: "https://chateaula-b4740.firebaseio.com",
  projectId: "chateaula-b4740",
  storageBucket: "chateaula-b4740.appspot.com",
  messagingSenderId: "240372709018"
  };
  
export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });

  return returnArray;
}