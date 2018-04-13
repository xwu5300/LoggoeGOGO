import React from 'react';

import VideoListEntry from './VideoListEntryView.jsx';

const VideoList = ({videos, redirect}) => (
  <div>
    {videos.map((video, i) => <VideoListEntry key={i} video={video} redirect={redirect}/>)}
  </div>
)

export default VideoList;