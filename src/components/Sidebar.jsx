import React from "react";
import { MdHomeFilled, MdSearch, MdLogout } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoLibrary } from "react-icons/io5";
import '../Styles/Sidebar.css';

export default function Sidebar() {
  return (
    <div className="container">
      <div className="top__links">
        <div className="logosss">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <div className="lib">
              <Link to="/first">
                <MdHomeFilled />
                <span>Home</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="lib">
              <Link to="/first">
                <MdSearch />
                <span>Search</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="lib">
              <Link to="/library">
                <IoLibrary />
                <span>Your Library</span>
              </Link>
            </div>
          </li><br></br>
          <li>
            <div className="logout">
              <Link to="/bot">
                <SiChatbot />
                <span>MusicBuddy</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="muss">
        <Link to="/login">
          <MdLogout />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
