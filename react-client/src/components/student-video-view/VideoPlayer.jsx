import React from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      videoId: 'Cxy88GeEAxg',
      player: null,
      timestamps: [],
    };
    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    // this.onChangeVideo = this.onChangeVideo.bind(this);
    this.saveTimeStamp = this.saveTimeStamp.bind(this);
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

  
  // onChangeVideo() {
  //   this.setState({
  //     videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
  //   });
  // }

  // showTimestamps() {
  //   axois 
  // }

  saveTimeStamp() {
    const user = this.props.studentId || 1
    let timestamp = Math.floor(this.state.player.getCurrentTime());
    //save to database
    axios.post('/timestamps', {
      params: {
        studentId: user,
        videoId: this.state.videoId,
        timestamp: timestamp
      }
    })
    .then(()=>{})
    //run gettimestamp to update the state
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        // start: 25,
        // end: 35
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
      <button onClick={this.saveTimeStamp}>Confused</button>
      </div>
    );
  }

}

export default VideoPlayer;