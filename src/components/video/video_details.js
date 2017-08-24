import React from 'react';
import { Col, ResponsiveEmbed,Panel,ProgressBar } from 'react-bootstrap';

export const VideoDetails = ({video_data}) => {

    while(!video_data){
        return (
            <ProgressBar active now={45} />

        )
    }

    // const video_data = video_data;
    const id = video_data.id.videoId;
    const URL = `https://www.youtube.com/embed/${id}`;
    const title = video_data.snippet.title;
    const description = video_data.snippet.description;


    return (
        <Col xs={12} md={6} lg={6}>
        <ResponsiveEmbed a16by9>
            <iframe src={URL}></iframe>
      </ResponsiveEmbed>

        <div>
        <Panel header= {title}>
             {description}
        </Panel>
        </div>
        </Col>
  
    );


}