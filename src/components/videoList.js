import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map((video) => {
        return <VideoListItem
            onVideoClick={onVideoSelect}
            key={video.etag}
            video={video}
        />
    })

    return (<ul className="col-md-3 list-group">
        {videoItems}
    </ul>)
}

export default VideoList;