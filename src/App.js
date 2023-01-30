import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import {Songs} from "./Context";
import DataSongs from "./data/songs.json";
import Playing from './components/Playing';
import { useState } from 'react';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD06mQr53PZ4aSBXpbEMgOq14lrRJJ2UOE",
  authDomain: "demo1-12cea.firebaseapp.com",
  projectId: "demo1-12cea",
  storageBucket: "demo1-12cea.appspot.com",
  messagingSenderId: "570244565033",
  appId: "1:570244565033:web:ceb3b9f8f8b0fbdb437438",
  measurementId: "G-P4P617E761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong )
    if (!song) 
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span 1 */}
          <DetailSong/>
          {/* span 2 */}
          <ListSong/>
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
