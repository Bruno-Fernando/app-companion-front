import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHsO8al_UbCuKx5mXWKmbAcndGyBwiMP4',
  authDomain: 'app-companion-e8f32.firebaseapp.com',
  projectId: 'app-companion-e8f32',
  storageBucket: 'app-companion-e8f32.appspot.com',
  messagingSenderId: '939309576477',
  appId: '1:939309576477:web:03c5f158459452855df1f4',
  measurementId: 'G-F0X5Y1SDL0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
