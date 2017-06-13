import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyCZ1gAtCF5e-OVGFnFWW3o5fwuhJ0DejAo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('oies');

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({ 
                videos, 
                selectedVideo: videos[0],
            });
        });
    }

    render () {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (<div>
            <SearchBar onSearchTermChange={term => videoSearch(term)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos}
            />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));