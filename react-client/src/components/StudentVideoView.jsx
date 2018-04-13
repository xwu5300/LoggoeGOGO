import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import VideoPlayer from './student-video-view/VideoPlayer.jsx'
import TimestampList from './student-video-view/TimestampList.jsx'

class StudentVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timestamps: [],
      startingTimestamp: 0,
      userId: ''
    }
    this.getAllTimestamps = this.getAllTimestamps.bind(this);
    this.saveTimeStamp = this.saveTimeStamp.bind(this);
    this.deleteTimestamp = this.deleteTimestamp.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount(){
    const videoId = this.props.location.videoId || 'fju9ii8YsGs'
    this.getUserId(this.props.location.username);
    
  }
  getUserId(user) {
    axios.get('/user/id', {params: {user: user}})
         .then((data) => {
           this.setState({
             userId: data.data[0].id
           })
           this.getAllTimestamps();
         })
  }
  saveTimeStamp(timestamp) {
    const user = this.state.userId || 1
    const videoId = this.props.location.videoId || 'fju9ii8YsGs'
    //save to database
    axios.post('/timestamps', {
      params: {
        userId: user,
        videoId: this.props.location.videoId || videoId,
        timestamp: timestamp
      }
    })
    .then(() => {this.getAllTimestamps()})
  }

  deleteTimestamp(timestamp) {
    const user = this.state.userId || 1;
    const videoId = this.props.location.videoId || 'fju9ii8YsGs';
    axios.delete('/timestamps', {
      params: {
        userId: user,
        videoId: this.props.location.videoId || videoId,
        timestamp: timestamp
      }
    })
    .then(() => {this.getAllTimestamps()})
    .then(this.setState({startingTimestamp: this.state.timestamps[0]})) 
  }

  //gets videoId as a prop
  getAllTimestamps() {
    const videoId = this.props.location.videoId || 'fju9ii8YsGs'
    axios.get('/timestamps', {
      params: {
        videoId: this.props.location.videoId || videoId,
        userId: this.state.userId
      }
    })
    .then((data) => (data.data.map((TS) => {return TS.timestamp})))
    .then((timestamps) => this.setState({timestamps: timestamps}))
  }

  changeVideo(timestamp) {
    this.setState({startingTimestamp: timestamp})
  }

  render() {    
    const videoId = this.props.location.videoId || 'fju9ii8YsGs'
    return (<div>
      <VideoPlayer 
        videoId={videoId} 
        startingTimestamp={this.state.startingTimestamp}
        saveTimeStamp={this.saveTimeStamp}/>

      <TimestampList 
        timestamps={this.state.timestamps} 
        deleteTimestamp={this.deleteTimestamp}
        changeVideo={this.changeVideo}/>

    </div>)
  }
}

export default StudentVideo;