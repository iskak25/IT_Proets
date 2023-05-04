import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRIBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRIBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRIBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRIBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRIBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRIBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
