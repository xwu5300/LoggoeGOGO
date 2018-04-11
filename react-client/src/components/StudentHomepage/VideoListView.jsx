import React from 'react';
import VideoListEntry from './VideoListEntryView.jsx';

const VideoList = ({videos}) => (
  <div> VideoList
    {videos.map((video, i) => {
      return (<VideoListEntry key={i} video={video}/>);
    })}
  </div>
)

export default VideoList;