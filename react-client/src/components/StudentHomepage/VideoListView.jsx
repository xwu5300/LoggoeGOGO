import React from 'react';
import VideoListEntry from './VideoListEntryView.jsx';

const VideoList = ({videos}) => (
  <div>
    {videos.map((video, i) => <VideoListEntry key={i} video={video}/>)}
  </div>
)

export default VideoList;