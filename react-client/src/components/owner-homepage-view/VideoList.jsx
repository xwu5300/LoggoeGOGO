import React from 'react';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="owner-homepage-video-list">
        Video List
        {this.props.videos.map((video) => (
          <div id="owner-homepage-video-list-entry" key={video.id}
              onClick={() => {
                this.props.updateDisplayVideo(video)
                this.props.showTimestamps(video.videoId)
              }}
            >
              <div className="media-left media-middle">
                <img className="media-object" 
                  src={video.image} 
                  alt="" 
                />
              </div>
              <div className="media-body">
                <div className="video-list-entry-title">
                  {video.title}
                </div>
                <div className="video-list-entry-detail">
                  {video.description}
                </div>
              </div>
            </div>
        ))}
      </div>  
  
    )
  }
}

export default VideoList