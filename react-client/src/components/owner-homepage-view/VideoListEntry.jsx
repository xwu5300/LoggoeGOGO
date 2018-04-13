import React from 'react';

const VideoListEntry = ({video, redirect}) => (
  <div>
    <div className="video-list-entry" onClick={()=>{redirect(video.videoId)}}>
      <div className="media-left media-middle">
        <img className="media-object" src={video.image} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{video.title}</div>
        <div className="video-list-entry-detail">{video.description}</div>
      </div>
    </div>
  </div>
)

export default VideoListEntry;
