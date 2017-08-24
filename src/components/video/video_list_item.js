import React from 'react';
import {ListGroupItem, Media} from 'react-bootstrap';

export const VideoListItem = (props) => {

    const video_data = props.video_data;
    const selected_video = props.OnVideo;

    const title = video_data.snippet.title;
    const description = video_data.snippet.description;
    const thumbnail_url = video_data.snippet.thumbnails.default.url;
    const thumbnail_width = video_data.snippet.thumbnails.default.width;
    const thumbnail_height = video_data.snippet.thumbnails.default.height;
 
    
 
    
    console.log(video_data);

    return (
        <ListGroupItem href="#" onClick = {selected => selected_video(video_data) }>
        <Media>
        <Media.Left>
           <img width={thumbnail_width} height={thumbnail_height} src={thumbnail_url} alt="Image"/>
         </Media.Left>
         <Media.Body>
           <Media.Heading>{title}</Media.Heading>
           
         </Media.Body>
       </Media> 
        </ListGroupItem>
    
       
    );
}