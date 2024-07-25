import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/MusicUpload.css';

const MusicUpload = ({ onUpload }) => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('music', file);

        try {
            await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Music uploaded successfully!');
            onUpload();
        } catch (error) {
            console.error('Error uploading music:', error);
        }
    };

    return (
        <div className="music-upload">
            <h2>Upload Music</h2>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                placeholder="Music Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="file"
                onChange={e => setFile(e.target.files[0])}
            />
            <button onClick={handleUpload}>Upload</button>
            <ToastContainer />
        </div>
    );
};

export default MusicUpload;
