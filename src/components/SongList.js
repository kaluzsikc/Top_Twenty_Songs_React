import React from 'react';
import SongDetail from './SongDetail';

const SongList = (props) => {
    const songList = props.songs.map((song) => {
        return <SongDetail
            key={song.id.attributes["im:id"]}
            song={song} 
        />
    })
    
    return (
        <div>
            {/* <p>Song List: </p> */}
            {songList} 
        </div>
    )
}

export default SongList;