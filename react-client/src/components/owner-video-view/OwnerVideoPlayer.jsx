import React from 'react';
import axios from 'axios';

import YouTube from 'react-youtube';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class OwnerVideoPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      videoId: this.props.videoId,
      player: null
    };

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.saveTimeStamp = this.saveTimeStamp.bind(this);
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }
  
  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }


  saveTimeStamp() {
    const timestamp = Math.floor(this.state.player.getCurrentTime());
    this.props.saveTimeStamp(timestamp);
  }

  render() {
    const opts = {
      height: '390',
      width: '400',
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
        <RaisedButton style={{margin: '5px'}} onClick={this.onPlayVideo}  label="Play"/>
        <RaisedButton style={{margin: '5px'}} onClick={this.onPauseVideo} label="Pause"/>
        {/* <button onClick={this.onChangeVideo}>Change Video</button> */}
        {/* <button onClick={this.saveTimeStamp}>Confused</button> */}
      </div>
    );
  }

}

export default OwnerVideoPlayer;