import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaBell, FaUser, FaPlay, FaPause } from 'react-icons/fa';
import '../Styles/Body.css';
import allout from '../images/Allout.jpeg';
import best from '../images/bestofall.jpeg';
import happy from '../images/HappyVibes.jpeg';
import hothits from '../images/Hothits.jpeg';
import longdrive from '../images/longdrive.jpeg';
import lovehits90 from '../images/lovehits90.jpeg';
import nightmelodies from '../images/nightmelodies.jpeg';
import partytime from '../images/partytime.jpeg';
import top30 from '../images/top30dance.jpeg';
import top30love from '../images/top30love.jpeg';
import toplovehits from '../images/toplovehits.jpeg';
import valentine from '../images/valentine.jpeg';
import BloodySweet from "../audios/BloodySweet.mp3";
import LeoDasEntry from "../audios/LeoDasEntry.mp3";
import Badass from "../audios/Badass.mp3";
import Naaready from "../audios/NaaReady.mp3";
import Loki from "../audios/Lokiverse.mp3";

const Body = () => {
    const [isPlaying, setIsPlaying] = useState({
        "All outof 10's": false,
        "Best of All time": false,
        "Long Drive hits": false,
        "Hot Hits": false,
        "Tamil Vibes": false,
        "Valentine's Hits": false,
        "Top Love Hits": false,
        "Top 30 Love": false,
        "Top 30 Hits": false,
        "Party Time": false,
        "Night Melodies": false,
        "90's Love Hits": false,
    });
    const audioRef = useRef(new Audio());

    const togglePlay = (folder) => {
        if (isPlaying[folder]) {
            audioRef.current.pause();
        } else {
            const musicFiles = {
                "All outof 10's": [BloodySweet, LeoDasEntry, Badass, Naaready, Loki],
                "Best of All time": [BloodySweet, LeoDasEntry],
                "Long Drive hits": [BloodySweet, LeoDasEntry, Badass, Naaready, Loki],
                "Hot Hits": [LeoDasEntry, Naaready],
                "Tamil Vibes": [BloodySweet, Loki],
                "Valentine's Hits": [Loki],
                "Top Love Hits": [LeoDasEntry, Loki],
                "Top 30 Love": [LeoDasEntry, Naaready, Loki],
                "Top 30 Hits": [LeoDasEntry, Badass, Naaready],
                "Party Time": [BloodySweet, LeoDasEntry],
                "Night Melodies": [Badass, Naaready, Loki],
                "90's Love Hits": [Naaready, Loki],
            };

            const randomIndex = Math.floor(Math.random() * musicFiles[folder].length);
            const randomMusicFile = musicFiles[folder][randomIndex];

            audioRef.current.src = randomMusicFile;
            audioRef.current.play();
        }
        setIsPlaying(prevState => ({
            ...prevState,
            [folder]: !prevState[folder]
        }));
    };

    return (
        <div className="body">
            <nav className="navbar">
                <div className="search-container">
                    <input type="text" className="search-field" placeholder="Search..." />
                </div>
                <div className="nav-icons">
                    <i className="bell-icon"><FaBell /></i>
                    <i className="user-icon"><FaUser /></i>
                </div>
            </nav>
            <div className="music-heading">
                <h2>Daily Music</h2>
            </div>
            <div className="music-list">
                <div className="music-card">
                    <img src={allout} alt="Music" className="music-image" />
                    <h3 className="music-name">All outof 10's</h3>
                    <button className="music-play-button" onClick={() => togglePlay("All outof 10's")}>
                        {isPlaying["All outof 10's"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={best} alt="Music" className="music-image" />
                    <h3 className="music-name">Best of All time</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Best of All time")}>
                        {isPlaying["Best of All time"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={happy} alt="Music" className="music-image" />
                    <h3 className="music-name">Tamil Vibes</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Tamil Vibes")}>
                        {isPlaying["Tamil Vibes"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={hothits} alt="Music" className="music-image" />
                    <h3 className="music-name">Hot Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Hot Hits")}>
                        {isPlaying["Hot Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={longdrive} alt="Music" className="music-image" />
                    <h3 className="music-name">Long Drive hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Long Drive hits")}>
                        {isPlaying["Long Drive hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
            </div>
            <div className="music-heading">
                <h2>Fresh New Music</h2>
            </div>
            <div className="music-list">
                <div className="music-card">
                    <img src={lovehits90} alt="Music" className="music-image" />
                    <h3 className="music-name">90's Love Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("90's Love Hits")}>
                        {isPlaying["90's Love Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={nightmelodies} alt="Music" className="music-image" />
                    <h3 className="music-name">Night Melodies</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Night Melodies")}>
                        {isPlaying["Night Melodies"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={partytime} alt="Music" className="music-image" />
                    <h3 className="music-name">Party Time</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Party Time")}>
                        {isPlaying["Party Time"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={top30} alt="Music" className="music-image" />
                    <h3 className="music-name">Top 30 Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Top 30 Hits")}>
                        {isPlaying["Top 30 Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={top30love} alt="Music" className="music-image" />
                    <h3 className="music-name">Top 30 Love</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Top 30 Love")}>
                        {isPlaying["Top 30 Love"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
            </div>
            <div className="music-heading">
                <h2>Made for You</h2>
            </div>
            <div className="music-list">
                <div className="music-card">
                    <img src={toplovehits} alt="Music" className="music-image" />
                    <h3 className="music-name">Top Love Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Top Love Hits")}>
                        {isPlaying["Top Love Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={valentine} alt="Music" className="music-image" />
                    <h3 className="music-name">Valentine's Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Valentine's Hits")}>
                        {isPlaying["Valentine's Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={allout} alt="Music" className="music-image" />
                    <h3 className="music-name">All outof 10's</h3>
                    <button className="music-play-button" onClick={() => togglePlay("All outof 10's")}>
                        {isPlaying["All outof 10's"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={best} alt="Music" className="music-image" />
                    <h3 className="music-name">Best of All time</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Best of All time")}>
                        {isPlaying["Best of All time"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={happy} alt="Music" className="music-image" />
                    <h3 className="music-name">Tamil Vibes</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Tamil Vibes")}>
                        {isPlaying["Tamil Vibes"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
            </div>
            <div className="music-heading">
                <h2>Recently Played</h2>
            </div>
            <div className="music-list">
                <div className="music-card">
                    <img src={hothits} alt="Music" className="music-image" />
                    <h3 className="music-name">Hot Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Hot Hits")}>
                        {isPlaying["Hot Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={top30love} alt="Music" className="music-image" />
                    <h3 className="music-name">Top 30 Love</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Top 30 Love")}>
                        {isPlaying["Top 30 Love"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={nightmelodies} alt="Music" className="music-image" />
                    <h3 className="music-name">Night Melodies</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Night Melodies")}>
                        {isPlaying["Night Melodies"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={longdrive} alt="Music" className="music-image" />
                    <h3 className="music-name">Long Drive Hits</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Long Drive Hits")}>
                        {isPlaying["Long Drive Hits"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
                <div className="music-card">
                    <img src={partytime} alt="Music" className="music-image" />
                    <h3 className="music-name">Party Time</h3>
                    <button className="music-play-button" onClick={() => togglePlay("Party Time")}>
                        {isPlaying["Party Time"] ? <FaPause /> : <FaPlay />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Body;
