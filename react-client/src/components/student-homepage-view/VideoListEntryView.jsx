import React from 'react';
import Paper from 'material-ui/Paper';

const VideoListEntry = ({video, redirect}) => {

  const style = {
    height: 'auto',
    width: 'auto',
    margin: '30px',
    textAlign: 'center',
    display: 'block',
    padding: '30px 5px'
  }

  return (
    <Paper style={style}>
    <div style={{display: 'inline-block'}}>
      <div className="video-list-entry" onClick={()=>{redirect(video.videoId)}}>
        <div className="media-left media-middle"
          style={{width: '30%', float: 'left'}}
        >
          <img className="media-object" src={video.image} alt="" />
        </div>
        <div className="media-body" style={{width: '50%', float: 'right'}}>
          <div className="video-list-entry-title">{video.title}</div>
          <br/>
          <div className="video-list-entry-detail">{video.description}</div>
        </div>
      </div>
    </div>
  </Paper>
  )}

export default VideoListEntry;
