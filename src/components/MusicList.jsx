import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicItem from './MusicItem';
import '../Styles/MusicUpload.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MusicList = () => {
    const [musicList, setMusicList] = useState([]);
    const [error, setError] = useState('');

    const fetchMusic = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/music');
            setMusicList(response.data);
        } catch (error) {
            console.error('Error fetching music:', error);
            setError('Error fetching music.');
            toast.error('Error fetching music.');
        }
    };

    useEffect(() => {
        fetchMusic();
    }, []);

    const handleFavouriteToggle = async (id) => {
        try {
            await axios.put(`http://localhost:3001/api/favourite/${id}`);
            fetchMusic();
        } catch (error) {
            console.error('Error toggling favourite:', error);
            toast.error('Error toggling favourite.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/delete/${id}`);
            fetchMusic();
            toast.success('Music deleted successfully!');
        } catch (error) {
            console.error('Error deleting music:', error);
            toast.error('Error deleting music.');
        }
    };

    return (
        <div className="music-list1">
            <h2>Music Library</h2>
            {error && <p className="error">{error}</p>}
            <div className="music-items">
                {musicList.length > 0 ? (
                    musicList.map(music => (
                        <MusicItem
                            key={music._id}
                            music={music}
                            onFavouriteToggle={handleFavouriteToggle}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p>No music available. Please upload some music.</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default MusicList;
