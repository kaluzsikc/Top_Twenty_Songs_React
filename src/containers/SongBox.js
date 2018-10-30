import React from 'react';
import SongList from '../components/SongList';

class SongBox extends React.Component{

    render(){
        return (
            <div>
                <h1>Song box</h1>
                <SongList />
            </div>
        )
    }
}

export default SongBox;