import React from 'react';
import VideoListEntry from './VideoListEntry.jsx'

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="owner-homepage-video-list">
        Video List
        {this.props.videos.map((video) => (
            <VideoListEntry 
              video={video} 
              key={video.videoId}
            />
        ))}
      </div>    
    )
  }
}

export default VideoList