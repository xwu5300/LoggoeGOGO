import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import VideoPlayer from './student-video-view/VideoPlayer.jsx'
import TimestampList from './student-video-view/TimestampList.jsx'

//props.videoId and props.studentId

class StudentVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timestamps: [],
      startingTimestamp: 0
    }
    this.getAllTimestamps = this.getAllTimestamps.bind(this);
    this.saveTimeStamp = this.saveTimeStamp.bind(this);
    this.deleteTimestamp = this.deleteTimestamp.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount(){
    const videoId = this.props.videoId || 'fju9ii8YsGs'
    this.getAllTimestamps(videoId);
  }

  saveTimeStamp(timestamp) {
    const user = this.props.studentId || 1
    const videoId = this.props.videoId || 'fju9ii8YsGs'
    //save to database
    axios.post('/timestamps', {
      params: {
        studentId: user,
        videoId: this.props.videoId || videoId,
        timestamp: timestamp
      }
    })
    .then(() => {this.getAllTimestamps()})
  }

  deleteTimestamp(timestamp) {
    const user = this.props.studentId || 1;
    const videoId = this.props.videoId || 'fju9ii8YsGs';
    axios.delete('/timestamps', {
      params: {
        studentId: user,
        videoId: this.props.videoId || videoId,
        timestamp: timestamp
      }
    })
    .then(() => {this.getAllTimestamps()})
    .then(this.setState({startingTimestamp: this.state.timestamps[0]})) 
  }

  //gets videoId as a prop
  getAllTimestamps() {
    const videoId = this.props.videoId || 'fju9ii8YsGs'
    axios.get('/timestamps', {
      params: {
        videoId: this.props.videoId || videoId
      }
    })
    .then((data) => (data.data.map((TS) => {return TS.timestamp})))
    .then((timestamps) => this.setState({timestamps: timestamps}))
  }

  changeVideo(timestamp) {
    this.setState({startingTimestamp: timestamp})
  }


  render() {    
    const videoId = this.props.videoId || 'fju9ii8YsGs'
    return (<div>
      <VideoPlayer 
      videoId={videoId} 
      startingTimestamp={this.state.startingTimestamp}
      saveTimeStamp={this.saveTimeStamp}
      />
      <TimestampList 
      timestamps={this.state.timestamps} 
      deleteTimestamp={this.deleteTimestamp}
      changeVideo={this.changeVideo}
      />
    </div>)
  }
}

export default StudentVideo;