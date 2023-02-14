import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdK4GIHPyqqfXo1gRR6YKAuI6krCxL17o",
  authDomain: "jobboy-v2.firebaseapp.com",
  projectId: "jobboy-v2",
  storageBucket: "jobboy-v2.appspot.com",
  messagingSenderId: "330982779822",
  appId: "1:330982779822:web:3a08f7ad3bf67eb869363f",
};

const app = initializeApp(firebaseConfig);

export default app;
