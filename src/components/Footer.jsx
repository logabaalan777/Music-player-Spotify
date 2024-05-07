import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from "react-icons/fa";
import "../Styles/Footer.css";
import BloodySweet from "../audios/BloodySweet.mp3";
import LeoDasEntry from "../audios/LeoDasEntry.mp3";
import Badass from "../audios/Badass.mp3";
import Naaready from "../audios/NaaReady.mp3";
import Loki from "../audios/Lokiverse.mp3";

const Footer = () => {
    const audioSources = [BloodySweet, LeoDasEntry, Badass, Naaready, Loki];
    const musicNames = ["Bloody-Sweet", "Leo Das Entry", "Badass", "Naa Ready", "Lokiverse 2.0"];

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const [currentMusic, setCurrentMusic] = useState(musicNames[currentMusicIndex]);
    const [audioLoaded, setAudioLoaded] = useState(false);
    const audioRef = useRef(new Audio(audioSources[currentMusicIndex]));

    useEffect(() => {
        audioRef.current.src = audioSources[currentMusicIndex];
        audioRef.current.load();
        audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(error => console.error('Error playing audio:', error));
        audioRef.current.addEventListener('timeupdate', updateTime);
        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);
            setAudioLoaded(true);
        });
        return () => {
            audioRef.current.removeEventListener('timeupdate', updateTime);
        };
    }, [currentMusicIndex]);

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handlePrevious = () => {
        const newIndex = (currentMusicIndex - 1 + audioSources.length) % audioSources.length;
        setCurrentMusicIndex(newIndex);
        setCurrentMusic(musicNames[newIndex]);
        setIsPlaying(false);
    };

    const handleNext = () => {
        const newIndex = (currentMusicIndex + 1) % audioSources.length;
        setCurrentMusicIndex(newIndex);
        setCurrentMusic(musicNames[newIndex]);
        setIsPlaying(false);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        audioRef.current.volume = newVolume / 100;
        setVolume(newVolume);
    };

    const handleSeek = (event) => {
        const seekTime = event.target.value;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="music-player">
            <div className="controls">
                <button className="nav-button" onClick={handlePrevious}>
                    <FaStepBackward />
                </button>
                <button className="play-button" onClick={togglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="nav-button" onClick={handleNext}>
                    <FaStepForward />
                </button>
            </div>
            <div className="progress-bar">
                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    disabled={!audioLoaded}
                />
                <div className="time-display">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </div>
            </div>
            <div className="current-music">
                {currentMusic}
            </div>
            <div className="volume-controls">
                <FaVolumeUp />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <div className="volume-percentage">{volume}%</div>
            </div>
            <audio ref={audioRef}>
                <source src={audioSources[currentMusicIndex]} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Footer;
