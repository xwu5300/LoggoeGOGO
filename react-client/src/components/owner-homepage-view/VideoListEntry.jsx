import React from 'react';
import axios from 'axios';

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.renderOwnerVideoView = this.renderOwnerVideoView.bind(this);
  }

  renderOwnerVideoView(video) {
    axios.get('/OwnerVideoView', {params: {video: video}});
  }

  render() {
    return (
    <div id="owner-homepage-video-list-entry"
      onClick={() => {
        this.renderOwnerVideoView(this.props.video)
      }}
    >
      <div className="media-left media-middle">
        <img className="media-object" 
          src={this.props.video.image} 
          alt="" 
        />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">
          {this.props.video.title}
        </div>
        <div className="video-list-entry-detail">
          {this.props.video.description}
        </div>
      </div>
    </div>
  )}
}

export default VideoListEntry