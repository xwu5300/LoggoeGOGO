import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import VideoPlayer from './student-video-view/VideoPlayer.jsx'
import TimestampList from './student-video-view/TimestampList.jsx'
import Paper from 'material-ui/Paper';

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
  saveTimeStamp(timestamp, comment) {
    const user = this.state.userId || 1
    const videoId = this.props.location.videoId || 'fju9ii8YsGs'
    //save to database
    axios.post('/timestamps', {
      params: {
        userId: user,
        videoId: this.props.location.videoId || videoId,
        timestamp: timestamp,
        comment: comment
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
    .then((data) => (data.data.map((TS) => {
      return TS})))
    .then((TS) => {
        this.setState({timestamps: TS})
    })
  }

  changeVideo(timestamp) {
    this.setState({startingTimestamp: timestamp})
  }

  render() {    
    const videoId = this.props.location.videoId || 'fju9ii8YsGs'

    const style = {
      height: '100%',
      width: '100%',
      margin: '30px',
      textAlign: 'center',
      display: 'inline-block',
      padding: '30px',
      background: '#D8E4EA',
    }

    return (
      <Paper style={style} zDepth={1}>
      <div>
        <div>
        <Paper style={{margin: '20px', padding: '20px', width: '60%', float: 'left'}}>
          <VideoPlayer 
            videoId={videoId} 
            startingTimestamp={this.state.startingTimestamp}
            saveTimeStamp={this.saveTimeStamp}/>
        </Paper>
        </div>
        <div>
        <Paper style={{margin: '20px', padding: '20px', width: '30%', float: 'left'}}>
          <TimestampList 
            timestamps={this.state.timestamps} 
            deleteTimestamp={this.deleteTimestamp}
            changeVideo={this.changeVideo}/>
        </Paper>
        </div>
      </div>
      </Paper>
    )
  }
}

export default StudentVideo;