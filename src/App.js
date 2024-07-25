import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import First from './components/Firstpage';
import Footer from './components/Footer';
import Body from './components/Body';
import Supportpage from "./components/Supportpage";
import Premium from "./components/Premium";
import Bot from "./components/Bot";
import MusicLibrary from "./components/MusicLibrary";
import MusicItem from "./components/MusicItem";
import MusicList from "./components/MusicList";
import MusicUpload from "./components/MusicUpload";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/body" element={<Body />} />
          <Route path="/support" element={<Supportpage />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/library" element={<MusicLibrary />} />
          <Route path="/upload" element={<MusicUpload />} />
          <Route path="/list" element={<MusicList />} />
          <Route path="/itemlist" element={<MusicItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
