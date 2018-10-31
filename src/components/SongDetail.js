import React from 'react';


const SongDetail = (props ) => {
    const rank = props.song.category.attributes["im:id"];
    const artistName = props.song['im:artist'].label;
    const songTitle = props.song['im:name'].label;
    const img = props.song["im:image"][0].label;

    if (!props.song)
    return null;

    return (
         <div>
            <p>Position:{rank}</p>
            <p>{songTitle}</p> 
            <h4>{artistName}</h4>
            <img src={img}/>
         </div>   
    )
};

export default SongDetail;