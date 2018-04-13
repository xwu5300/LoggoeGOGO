import React from 'react';
import axios from 'axios';

import YouTube from 'react-youtube';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      videoId: this.props.videoId,
      player: null,
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.saveTimeStamp = this.saveTimeStamp.bind(this);
  }


  handleChange(event) {
    this.setState({comment: event.target.value});
  }


  onReady(event) {
    this.setState({
      player: event.target,
    });
  }
  
  onPlayVideo() {
    this.state.player.playVideo();
    console.log(this.state.player.getVideoData())
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }



  saveTimeStamp() {
    const timestamp = Math.floor(this.state.player.getCurrentTime());
    // console.log('new state of comment', this.state.comment);
    this.props.saveTimeStamp(timestamp, this.state.comment);
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: this.props.startingTimestamp,
      }
    };

    return (
      <div>
        <YouTube
          videoId={this.state.videoId}
          opts={opts}
          onReady={this.onReady}
        />
        <button onClick={this.onPlayVideo}>Play</button>
        <button onClick={this.onPauseVideo}>Pause</button>
        {/* <button onClick={this.onChangeVideo}>Change Video</button> */}
        <label>
          Comment:
          <input type="text" value={this.state.comment} onChange={this.handleChange} />
        </label>
        <button onClick={this.saveTimeStamp} >Confused</button>
      </div>
    );
  }

}

export default VideoPlayer;