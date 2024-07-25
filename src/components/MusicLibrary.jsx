import React, { useEffect } from 'react';
import '../Styles/MusicUpload.css';
import MusicUpload from './MusicUpload';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MusicList from './MusicList';

const MusicLibrary = () => {
    useEffect(() => {
        document.body.classList.add('lib-body');
        return () => {
            document.body.classList.remove('lib-body');
        };
    }, []);
    return (
        <div className="music-library">
            <Link to="/first">
                <button className="lib-back">
                    <FaArrowLeft />
                </button>
            </Link>
            <h1><center>Music Library</center></h1>
            <MusicUpload />
            <MusicList />
        </div>
    );
};

export default MusicLibrary;
