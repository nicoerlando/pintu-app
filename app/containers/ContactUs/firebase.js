import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAI-zXhiAEK1ylqR1YsmPZtc6rBfU8y--Y',
  authDomain: 'pintuweb-e5a53.firebaseapp.com',
  projectId: 'pintuweb-e5a53',
  storageBucket: 'pintuweb-e5a53.appspot.com',
  messagingSenderId: '27456979970',
  appId: '1:27456979970:web:3724f537765a636b6fd31b',
  measurementId: 'G-GMNKLNDFJ9',
};

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export default firebase;
