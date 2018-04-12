import React from 'react';
import ReactDOM from 'react-dom';

class OwnerVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="owner-video-player">
        <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.videoId} allowFullScreen></iframe>
        <div className="video-player-details">
          <h3>{this.props.video.title}</h3>
          <div>{this.props.video.description}</div>
        </div>
      </div>
    )
  }
}

export default OwnerVideoPlayer;