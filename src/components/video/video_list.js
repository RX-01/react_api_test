import React from 'react';
import { VideoListItem } from './video_list_item'
import {ListGroup } from 'react-bootstrap';

export const VideoList = (props) => {
    return (
        <ListGroup className = "col-md-6 col-lg-6 col-xs-12">
            { props.videos.map(video => <VideoListItem 
            key = {video.id.videoId} 
            video_data = {video}
            OnVideo = {props.OnSelectedVideo}
            />)}
            
        </ListGroup>

    );
}

