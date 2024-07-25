import React from 'react';
import '../Styles/MusicUpload.css';

const MusicItem = ({ music, onFavouriteToggle, onDelete }) => {
    return (
        <div className="music-item1">
            <span>{music.name}</span>
            <audio controls>
                <source src={`http://localhost:3001/${music.filePath}`} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={() => onFavouriteToggle(music._id)}>
                {music.favourite ? 'Unfavourite' : 'Favourite'}
            </button>
            <button onClick={() => onDelete(music._id)}>Delete</button>
        </div>
    );
};

export default MusicItem;
