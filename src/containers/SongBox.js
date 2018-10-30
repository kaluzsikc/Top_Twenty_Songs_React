import React from 'react';
import SongList from '../components/SongList';

class SongBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            songs: []
                }
    };

    componentDidMount(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then((response) => {
                return response.json();
            })
            .then((musicJson) => {
                this.setState({ songs: musicJson.feed.entry })
            });
    }

    render(){
        return (
            <div>
                <h1>UK Top 20</h1>
                <SongList songs={this.state.songs} />
            </div>
        )
    }
}

export default SongBox;