import React from 'react';
import axios from 'axios';

import YouTube from 'react-youtube';
import RaisedButton from 'material-ui/RaisedButton';

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
    this.props.saveTimeStamp(timestamp, this.state.comment);
  }

  render() {
    const opts = {
      height: '390',
      width: '500',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: this.props.startingTimestamp,
      }
    };

    return (
      <div style={{display: 'block', margin: '20px'}}>
        <div>
          <YouTube
            videoId={this.state.videoId}
            opts={opts}
            onReady={this.onReady}
          />
        </div>
        <br/>
        <div>
          <div>
            <RaisedButton onClick={this.onPlayVideo} label="Play" style={{margin: '5px'}}/>
            <RaisedButton onClick={this.onPauseVideo} label="Pause" style={{margin: '5px'}}/>
            {/* <button onClick={this.onChangeVideo}>Change Video</button> */}
            <RaisedButton onClick={this.saveTimeStamp} label="Confused" style={{margin: '5px'}} />
          </div>
          <label>
            Comment:
            <input type="text" value={this.state.comment} onChange={this.handleChange} />
          </label>
        </div>
      </div>
    );
  }

}

export default VideoPlayer;