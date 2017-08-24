import React from 'react';
import { VideoListItem } from './video_list_item'

export const VideoList = (props) => {
    return (
        <div>
        <ul>
            { props.videos.map(video => <VideoListItem key = {video.id.videoId} item = {video.snippet.title}/>)}
        </ul>
    </div>
    );
}

